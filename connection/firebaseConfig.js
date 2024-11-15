import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-yZe75KA290beRcvFtcthcwnvoziU0Bk",
  authDomain: "myfrstbog.firebaseapp.com",
  projectId: "myfrstbog",
  storageBucket: "myfrstbog.firebasestorage.app",
  messagingSenderId: "240933977050",
  appId: "1:240933977050:web:f74e0f17167b07fb325ee3",
  measurementId: "G-DSH9X0KHLC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
