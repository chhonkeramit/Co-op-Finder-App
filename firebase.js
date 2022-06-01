// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEXH5KWoQvFy7Sw31outJoD5-1m2DkOqs",
  authDomain: "co-op-finder-app.firebaseapp.com",
  projectId: "co-op-finder-app",
  storageBucket: "co-op-finder-app.appspot.com",
  messagingSenderId: "173565920195",
  appId: "1:173565920195:web:5b28d469529f6f60773376"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}

const auth = firebase.auth()
const fireDB = app.firestore();

export { auth, fireDB };