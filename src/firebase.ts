import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4l6t6uD_BM9BzZEmKJdvPLJeMFCu_LKU",
  authDomain: "education-junction-ff658.firebaseapp.com",
  projectId: "education-junction-ff658",
  storageBucket: "education-junction-ff658.firebasestorage.app",
  messagingSenderId: "806780229",
  appId: "1:806780229:web:ecd1bf57829de35186922c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
