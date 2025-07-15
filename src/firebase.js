import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZXz-123exampleKey456-MKexampleY",
  authDomain: "nda-fit-cockpit.firebaseapp.com",
  projectId: "nda-fit-cockpit",
  storageBucket: "nda-fit-cockpit.appspot.com",
  messagingSenderId: "567890123456",
  appId: "1:567890123456:web:abc123xyz456example",
  measurementId: "G-EXAMPLE123"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
