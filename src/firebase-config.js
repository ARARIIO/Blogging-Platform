import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA3IENNn06duAO4AOlFavKyqz2ryW0jDn4",
  authDomain: "project-ba65d.firebaseapp.com",
  projectId: "project-ba65d",
  storageBucket: "project-ba65d.appspot.com",
  messagingSenderId: "670170614223",
  appId: "1:670170614223:web:1ce720b2f6fd5710066aba"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
export { auth, storage, db, googleProvider };
