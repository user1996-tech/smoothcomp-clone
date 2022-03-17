// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwIqjK-8-1XpZTfeI_gtutDeMKWJ6tYAw",
  authDomain: "smoothcomp-clone.firebaseapp.com",
  projectId: "smoothcomp-clone",
  storageBucket: "smoothcomp-clone.appspot.com",
  messagingSenderId: "551888105620",
  appId: "1:551888105620:web:d28bbc58860c7f54110481",
  measurementId: "G-C4YZJ3WCB4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore();
const storage = getStorage(app);

export { db, storage };
