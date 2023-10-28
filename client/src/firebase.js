// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b77fc.firebaseapp.com",
  projectId: "mern-estate-b77fc",
  storageBucket: "mern-estate-b77fc.appspot.com",
  messagingSenderId: "533820648592",
  appId: "1:533820648592:web:0dffe43288553f26177c15",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
