// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "cortexai-5e1d6.firebaseapp.com",
  projectId: "cortexai-5e1d6",
  storageBucket: "cortexai-5e1d6.firebasestorage.app",
  messagingSenderId: "193556514399",
  appId: "1:193556514399:web:70e181824d42e77bd9fdea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
export const googleProvider =
  new GoogleAuthProvider();

export const githubProvider =
  new GithubAuthProvider();