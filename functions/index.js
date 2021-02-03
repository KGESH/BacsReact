const functions = require("firebase-functions");
const admin = require("firebase-admin");
const serviceAccount = require("./service_acount.json");
const fetch = require("node-fetch");
const kakaoRequestMeUrl = "https://kapi.kakao.com/v2/user/me";


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://massive-woods-302507-default-rtdb.firebaseio.com/",
});


const requestMe = (kakaoAccessToken) => {
  return fetch(kakaoRequestMeUrl, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + kakaoAccessToken,
    }
  })
  .then(res => res.json())
  .then((result) => {
    console.log("request me result : ");
    console.log(result);
    return result;
  })
  .catch((error) => {
    console.log("request me error : ");
    console.log(error);
    return error;
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
      console.log("kakao user response : ");
      console.log(response);
      const userId = `kakao:${response.id}`;
      if (!userId) {
        return response
          .status(404)
          .send({message: "there was no user with the given access token."});
      }
      let nickname = null;
      let profileImage = null;
      if (response.properties) {
        nickname = response.properties.nickname;
        profileImage = response.properties.profile_image;
      }
      return updateOrCreateUser(
        userId,
        response.kakao_account.email,
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


exports.kakaoCustomAuth = functions.https.onCall((data) => {
  const token = data.access_token;
  console.log(`custom auth in token : ${token}`);
    if (!token) {
      return { error: "there is not token." };
    }

  return createFirebaseToken(token);
});

