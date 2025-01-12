// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword ,signInWithEmailAndPassword , signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLqQhAtNuO632Xd3-e5Fe3oYDKLJGT8K0",
  authDomain: "gay-ass-nigga.firebaseapp.com",
  databaseURL: "https://gay-ass-nigga-default-rtdb.firebaseio.com",
  projectId: "gay-ass-nigga",
  storageBucket: "gay-ass-nigga.firebasestorage.app",
  messagingSenderId: "740449529935",
  appId: "1:740449529935:web:ab2538ff3bdad3fbc8fa3a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{
   app,
   auth,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
}
