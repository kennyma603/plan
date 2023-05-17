import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbz78kA9xLf7Vn2yql5ATcTUKowmlGemU",
  authDomain: "referralapp-ed7f8.firebaseapp.com",
  projectId: "referralapp-ed7f8",
  storageBucket: "referralapp-ed7f8.appspot.com",
  messagingSenderId: "442283712752",
  appId: "1:442283712752:web:7e2ab83ac828a60d0aa235",
  measurementId: "G-V618PRDP3E"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = getFirestore(app);
export default firebase;

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider).catch((e) => {
    console.log(e);
  });
};
export const signOut = () => auth.signOut();
