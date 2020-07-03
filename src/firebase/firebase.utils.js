import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD0DcAPQNQ_ompjojes2DxQDc4BebN9JLo",
  authDomain: "nomads-db.firebaseapp.com",
  databaseURL: "https://nomads-db.firebaseio.com",
  projectId: "nomads-db",
  storageBucket: "nomads-db.appspot.com",
  messagingSenderId: "425142037946",
  appId: "1:425142037946:web:e6609f695dd2dc19b20183",
  measurementId: "G-CHSF594659",
};

firebase.initializeApp(config); // we initialize our firebase to use this config

// all these code will be in the documentation

export const auth = firebase.auth(); // we export this out so we could import it to the files that need it
export const firestore = firebase.firestore(); // same here

// This will be the google authentication utility
const provider = new firebase.auth.GoogleAuthProvider(); // we just store the google auth in provider
provider.setCustomParameters({ prompt: "select_account" }); // we set a prompt popup to the provider
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// then we export a const signInWithGoogle that takes in a function that triggers auth.signInWithPopup
// we then set that to signInWithPopup(provider) because we need the google auth
// there are a lot of other auths like twitter, and facebook, etc

export default firebase; // we export this just in case we need the whole firebase library
