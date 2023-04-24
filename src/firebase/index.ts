import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// import "firebase/compat/database";
// import "firebase/database";

// const db = firebaseApp.firestore();

// export const orderCollectionRef = collection(db, "orders");

var firebaseConfig = {
  apiKey: "AIzaSyB92Ez7FxpnpdPXx-1VGIMH980JpT3KM8E",
  authDomain: "foodapp-5b4dc.firebaseapp.com",
  projectId: "foodapp-5b4dc",
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();