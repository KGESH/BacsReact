//const request = require("request-promise");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const serviceAccount = require("./service_acount.json");
const fetch = require("node-fetch");
//const axios = require("axios");

// const cors = require("cors")({
//   origin: true,
// });

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://massive-woods-302507-default-rtdb.firebaseio.com/",
});

const kakaoRequestMeUrl = "https://kapi.kakao.com/v2/user/me";

// const requestMe = (kakaoAccessToken) => {
//   axios.get("https://kapi.kakao.com/v2/user/me", {
//     method: "GET",
//     headers: {Authorization: "Bearer" + kakaoAccessToken},
//   })
//   .then(res => {
//     return res;
//   })
//   .catch((error) => {
//     return error;
//   });
// };


const requestMe = (kakaoAccessToken) => {
  return fetch("https://kapi.kakao.com/v2/user/me", {
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
    //return error;
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
    .then(res => res.json())
    .then((response) => {
      console.log("kakao user response : ");
      console.log(response);
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


// const createFirebaseToken = (kakaoAccessToken) => {
//   return requestMe(kakaoAccessToken)
//     .then((response) => {
//       console.log("kakao user response : ");
//       console.log(response);
//       const body = JSON.parse(response);
//       console.log(body);
//       const userId = `kakao:${body.id}`;
//       if (!userId) {
//         return response
//           .status(404)
//           .send({message: "there was no user with the given access token."});
//       }
//       let nickname = null;
//       let profileImage = null;
//       if (body.properties) {
//         nickname = body.properties.nickname;
//         profileImage = body.properties.profile_image;
//       }
//       return updateOrCreateUser(
//         userId,
//         body.kaccount_email,
//         nickname,
//         profileImage
//       );
//     })
//     .then((userRecord) => {
//       const userId = userRecord.uid;
//       console.log(`creating a custom firebase token based on uid ${userId}`);
//       return admin.auth().createCustomToken(userId, { provider: "KAKAO" });
//     });
// };


// exports.KakaoAuth = functions.https.onRequest((req, res) => {
//   try {
//       if(req.method === 'POST') {
//           let kakaoToken = req.body.data.access_token;
//           let firebaseToken = null;
          
          
//           createFirebaseToken(kakaoToken)          
//           .then((fireToken) => {
//               firebaseToken = fireToken;

//               return cors(req, res, () => {
//                   return res.status(200).json({
//                       data : {
//                           kakao_token: kakaoToken,
//                           firebase_token: fireToken
//                       }
//                   });
//               });
//           }).catch((error) => {
//               console.log(error);
//               return cors(req, res, () => {
//                   if(error.error) {
//                       const body = JSON.parse(error.error);
//                       res.status(error.statusCode).json({
//                           error : {
//                               status: error.statusCode,
//                               message: body.error,
//                               details: body.error_description
//                           }
//                       });
//                   } else {
//                       res.status(500).json({error: 'Error'});
//                   }
//               });
//           });

//       } else {
//           return cors(req, res, () => {
//               res.json({});
//           });
//       }
//   } catch(error) {
//       console.log(error);
//   }
// });


// exports.kakaoCustomAuth = functions.https.onRequest((req, res) => {

//   const kakaoToken = req.body.access_token;

//   if (!kakaoToken) {
//     return cors(req, res, () => {
//       res.status(400).send({ error: "there is no token." });
//     });
//   }

  

//   return cors(req, res, () => {
//     res.status(200).send(requestMe(kakaoToken));
//   });

// });


exports.kakaoCustomAuth = functions.https.onCall((data) => {

 
  
  const token = data.access_token;
  console.log(`custom auth in token : ${token}`);
    if (!token) {
      return { error: "there is not token." };
    }


  return createFirebaseToken(token);
});
  

