import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCk2cTR_udb1J9fcK7JosY_YSkhpg8pC70",
    authDomain: "tourist-68a80.firebaseapp.com",
    projectId: "tourist-68a80",
    storageBucket: "tourist-68a80.appspot.com",
    messagingSenderId: "807742390961",
    appId: "1:807742390961:web:6dfd8e5b687c2a299b5890",
    measurementId: "G-EXR8L6CG8G"
  };
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;