import { firestore } from "./FireBase";


export const writeUserData = (userData) => {
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