import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ✅ Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEheGk__wbkLvd4krznQgrLq-YaMg_RTk",
  authDomain: "nda-89611.firebaseapp.com",
  projectId: "nda-89611",
  storageBucket: "nda-89611.firebasestorage.app",
  messagingSenderId: "20515744973",
  appId: "1:20515744973:web:e8f748b5053d81f84b8d84"
};

// ✅ Initialize Firebase app
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firebase Auth
const auth = getAuth(app);

// 🔁 Export auth to use in Login, Signup, etc.
export { auth };
