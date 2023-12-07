// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgRiihah4YG8wyjqXx56TrmVV9UM7dd0E",
  authDomain: "pharmfirst-ee01f.firebaseapp.com",
  projectId: "pharmfirst-ee01f",
  storageBucket: "pharmfirst-ee01f.appspot.com",
  messagingSenderId: "505804301884",
  appId: "1:505804301884:web:a93fd375f2340315db8539"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;
