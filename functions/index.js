const admin = require("firebase-admin");
const serviceAccount = require("./service_acount.json");
const kakaoLogin = require("./KakaoLogin");
const functions = require("firebase-functions");
const fetch = require("node-fetch");



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


exports.kakaoPayRequest = functions.https.onCall((data) => {

  console.log("Pay client from Reuqest:");
  console.log(data);
  // const orderData = {
  //   cid: "TC0ONETIME",
  //   partner_order_id: "partner_order_id",
  //   partner_user_id: data.uid,
  //   item_name: data.coffeeType,
  //   quantity: data.beansQuantity,
  //   total_amount: data.beansPrice,
  //   tax_free_amount: 0,
  //   approval_url: "https://massive-woods-302507.web.app/Story",
  //   cancel_url: "https://massive-woods-302507.web.app/Business",
  //   fail_url: "https://massive-woods-302507.web.app/FAQ"
  // };


  return fetch("https://kapi.kakao.com/v1/payment/ready", {
    method: "POST",
    headers: {
      'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Authorization': "KakaoAk " + "4ced7ea586975a9f11310b35f5b406fa",

      },
    body: {
      cid: "TC0ONETIME",
      partner_order_id: data.orderId,
      partner_user_id: data.uid,
      item_name: data.coffeeType,
      quantity: data.beansQuantity,
      total_amount: data.beansPrice,
      tax_free_amount: 0,
      approval_url: "https://massive-woods-302507.web.app/Story",
      cancel_url: "https://massive-woods-302507.web.app/Business",
      fail_url: "https://massive-woods-302507.web.app/FAQ"
    }

  })
  .then((res) => {
    console.log(res);
    return res;
  })
  .catch((error) => {
    console.log("Kakao Pay Error#@!" + error);
    return error;
  });



})