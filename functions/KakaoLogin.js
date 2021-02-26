const admin = require("firebase-admin");
const fetch = require("node-fetch");

const kakaoRequestMeUrl = "https://kapi.kakao.com/v2/user/me";

const writeUserData = (userData) => {

  const firestore = admin.firestore();
  
  firestore.collection("users").doc(userData.email).set({
      uid: userData.userId,
      name: userData.name,
      email: userData.email,
      //phoneNumber: userData.phoneNumber,
      //address: userData.address,
  })
  .then(() => {
      console.log("user data successfully written!")
  })
  .catch((error) => {
      console.log("error writing user data: ", error);
  });

}

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

  writeUserData({
    userId: userId,
    name: displayName,
    email: email
  });

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

exports.createFirebaseToken = (kakaoAccessToken) => {
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


  
