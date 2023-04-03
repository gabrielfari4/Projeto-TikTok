import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'


const firebaseConfig = {
  apiKey: "AIzaSyCyZVHMDDc-guves42biRZIazdfCjvA27g",
  authDomain: "tiktok---jornada-45f13.firebaseapp.com",
  projectId: "tiktok---jornada-45f13",
  storageBucket: "tiktok---jornada-45f13.appspot.com",
  messagingSenderId: "320468912430",
  appId: "1:320468912430:web:f29d4aa7112c5bcc6bd2bf"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;