// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKMEKnsC_maOTSKahEdh2xZIpmblvue9c",
  authDomain: "zerins-parlour.firebaseapp.com",
  projectId: "zerins-parlour",
  storageBucket: "zerins-parlour.appspot.com",
  messagingSenderId: "872140856168",
  appId: "1:872140856168:web:de18670b65d0e18094d4dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;