const admin = require("firebase-admin");
const serviceAccount = require("./service_acount.json");
const kakaoLogin = require("./KakaoLogin");
const functions = require("firebase-functions");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://massive-woods-302507-default-rtdb.firebaseio.com/",
});



exports.kakaoCustomAuth = functions.https.onCall((data) => {
  const token = data.access_token;
  console.log(`custom auth in token : ${token}`);
    if (!token) {
      return { error: "there is not token." };
    }

  return kakaoLogin.createFirebaseToken(token);
});
