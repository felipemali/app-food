import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyB92Ez7FxpnpdPXx-1VGIMH980JpT3KM8E",
  authDomain: "foodapp-5b4dc.firebaseapp.com",
  projectId: "foodapp-5b4dc",
});
export const db = getFirestore(firebaseApp);
export const orderCollectionRef = collection(db, "orders");
