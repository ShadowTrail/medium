// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbF4t4ot4qHxRaklS4__54T9-jOEuVXJg",
  authDomain: "medium-clone-bc3d6.firebaseapp.com",
  projectId: "medium-clone-bc3d6",
  storageBucket: "medium-clone-bc3d6.appspot.com",
  messagingSenderId: "619962568411",
  appId: "1:619962568411:web:1f88d08ac38fb1f70bc6fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider, db} 