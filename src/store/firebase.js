// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider, getRedirectResult } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYu5sETcxlAmxAYhBVroOOEuJhkjUvNlI",
  authDomain: "zorya-invoice-ilab.firebaseapp.com",
  projectId: "zorya-invoice-ilab",
  storageBucket: "zorya-invoice-ilab.appspot.com",
  messagingSenderId: "279700886518",
  appId: "1:279700886518:web:e7e3f48b5d066bb90f2dd7",
  measurementId: "G-TWD7JR0M6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();

// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({
  prompt: "select_account "
});

getRedirectResult(auth)
  .then((result) => {

    if (result != null) {
      // // This gives you a Google Access Token. You can use it to access Google APIs.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;

      // // The signed-in user info.
      // const user = result.user;
      // // IdP data available using getAdditionalUserInfo(result)
      // // ...
      // TODO getRoles and update state
    }
  }).catch((error) => {
    // // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // // The email of the user's account used.
    // const email = error.customData.email;
    // // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

const signInWithGooglePopup = () => signInWithPopup(auth, provider);
const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export { analytics, auth, db, signInWithGooglePopup, signInWithGoogleRedirect }