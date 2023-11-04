// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCqTiSSp7UPlzNzFuiyiagOdlRkaH8kkc8',
  authDomain: 'hs-chat-c9d6a.firebaseapp.com',
  projectId: 'hs-chat-c9d6a',
  storageBucket: 'hs-chat-c9d6a.appspot.com',
  messagingSenderId: '1060256964571',
  appId: '1:1060256964571:web:2dc29c92ad93adb55851fe',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth referansını alma
export const auth = getAuth(app);

// sağlayıcnıın kurulumunu yapma
export const provider = new GoogleAuthProvider();

// veritabanın referansını alma
export const db = getFirestore(app);
