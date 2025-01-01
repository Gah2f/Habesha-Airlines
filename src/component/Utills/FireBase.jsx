// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCB5hCBJvgnLNvCqiatr6X_I-Q3J7kprO8",
  authDomain: "fir-clone-c1a44.firebaseapp.com",
  projectId: "fir-clone-c1a44",
  storageBucket: "fir-clone-c1a44.appspot.com",
  messagingSenderId: "216002410150",
  appId: "1:216002410150:web:cc21d3f63e4b4fd69c6667",
  measurementId: "G-XQFKHHCS70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export {auth};