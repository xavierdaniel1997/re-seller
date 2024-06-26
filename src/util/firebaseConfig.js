
import { getApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCLEXr3G4YW85tT8ppm845OWu8tHesUwug",
  authDomain: "re-seller-1ed5e.firebaseapp.com",
  projectId: "re-seller-1ed5e",
  storageBucket: "re-seller-1ed5e.appspot.com",
  messagingSenderId: "406876321481",
  appId: "1:406876321481:web:0d3d8cbfe3470118c37f18",
  measurementId: "G-G9CHT823DR"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth =getAuth();
export const storage = getStorage(app);
// const firebaseApp = getApp();
// export const storage = getStorage(firebaseApp, "gs://my-custom-bucket");









// npm install -g firebase-tools
// firebase login