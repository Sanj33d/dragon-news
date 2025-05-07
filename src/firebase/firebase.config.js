// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1IgkUNkHEknx9pRYNv5cIHi_MZ_8JsX0",
  authDomain: "dragon-news-10348.firebaseapp.com",
  projectId: "dragon-news-10348",
  storageBucket: "dragon-news-10348.firebasestorage.app",
  messagingSenderId: "1089335322935",
  appId: "1:1089335322935:web:de71f87e7ac0b2ac8dd2b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app