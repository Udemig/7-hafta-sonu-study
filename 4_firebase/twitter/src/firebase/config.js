// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCJuzZGd0fiN3ikHPysMmsTqGqt4gSDFr0',
  authDomain: 'hs-twitter-321da.firebaseapp.com',
  projectId: 'hs-twitter-321da',
  storageBucket: 'hs-twitter-321da.appspot.com',
  messagingSenderId: '1058125069628',
  appId: '1:1058125069628:web:e1b0db7ae2a1cfaab4f239',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth refernası al
export const auth = getAuth(app);

// provider referansı al
export const provider = new GoogleAuthProvider();

// firestore referansı al
export const db = getFirestore(app);

// storage referansı al
export const storage = getStorage(app);
