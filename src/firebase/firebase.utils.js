import firebase from "firebase/app";
// we now have access to the firebase utility library because of the import above
// then we can use the library below

import "firebase/firestore";  // for the database
import "firebase/auth"; // for the authentication

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

// function below is async because its an API request
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // the userAuth here is basically the google user auth object that we get when we use the google sign in
  // and when we get a valid gmail account, we get this google user auth object
  // we store it in userAuth
  if (!userAuth) {
    // if user object is null - false
    return; // we just return it
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // this stores the data taken from the firestore document database targetting the collection users
  // and using the id taken from the google user auth object
  const snapShot = await userRef.get();
  // if it is exists, we then use the request .get to fetch those data under the said id
  // and store it in our snapShot variable

  if (!snapShot.exists) {
    // here we now check if the snapShot.exists is === to false
    // if it is, then we create a user

    const { displayName, email } = userAuth; // we grab the displayName and email from the userAuth object
    const createdAt = new Date(); // also set a date - a reference to when the user was created

    try {
      // then in here we use the .set() method to store the displayName, email, and createdAt data
      // and any possible additionalData to our firestore database
      // userRef here targets - firestore.doc(`users/${userAuth.uid}`);
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef; // then we return this userRef variable that contains all the dispayName, email, and createdAt
  // we return it for the purpose of using it in our App.js file
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
