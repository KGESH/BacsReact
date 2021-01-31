//const requestPromise = require("request-promise");
const functions = require("firebase-functions");
const admin = require("firebase-admin");

const serviceAccount = require("./service_acount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://massive-woods-302507-default-rtdb.firebaseio.com/",
});

const kakaoRequestMeUrl = "https://kapi.kakao.com/v2/user/me";

const requestMe = (kakaoAccessToken) => {
  console.log("requesting user profile from kakao api server.");
  return requestPromise({
    method: "GET",
    headers: {Authorization: "Bearer" + kakaoAccessToken},
    url: kakaoRequestMeUrl,
  });
};

const updateOrCreateUser = (userId, email, displayName, photoURL) => {
  console.log("updating or creating a firebase user");

  const updateParams = {
    provider: "KAKAO",
    displayName: displayName,
  };

  if (displayName) {
    updateParams["displayName"] = displayName;
  } else {
    updateParams["displayName"] = email;
  }

  if (photoURL) {
    updateParams["photoURL"] = photoURL;
  }
  console.log(updateParams);

  return admin
    .auth()
    .updateUser(userId, updateParams)
    .catch((error) => {
      if (error.code === "auth/user-not-found") {
        updateParams["uid"] = userId;

        if (email) {
          updateParams["email"] = email;
        }

        return admin.auth().createUser(updateParams);
      }
      throw error;
    });
};

const createFirebaseToken = (kakaoAccessToken) => {
  return requestMe(kakaoAccessToken)
    .then((response) => {
      const body = JSON.parse(response);
      console.log(body);
      const userId = `kakao:${body.id}`;
      if (!userId) {
        return response
          .status(404)
          .send({message: "there was no user with the given access token."});
      }
      let nickname = null;
      let profileImage = null;
      if (body.properties) {
        nickname = body.properties.nickname;
        profileImage = body.properties.profile_image;
      }
      return updateOrCreateUser(
        userId,
        body.kaccount_email,
        nickname,
        profileImage
      );
    })
    .then((userRecord) => {
      const userId = userRecord.uid;
      console.log(`creating a custom firebase token based on uid ${userId}`);
      return admin.auth().createCustomToken(userId, { provider: "KAKAO" });
    });
};

exports.kakaoCustomAuth = functions.region("us-central1").https.onRequest((req, res) => {
  console.log("Kakao request :");
  console.log(req);
  const token = req.body.access_token;
  if (!token) {
    return res.status(400).send({ error: "there is no token." });
  }

  console.log(`Verifying Kakao token : ${token}`);
  createFirebaseToken(token).then((firebaseToken) => {
    console.log(`Returning firebase token to user : ${firebaseToken}`);
    res.send({ firebase_token: firebaseToken });
  });

  return;
});

exports.Func = functions.region("us-central1").https.onCall((req, res) => {

});
