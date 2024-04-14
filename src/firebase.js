import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAsAiYmSGz1cmNqEsU0mx2HMvsr31nE-EY",
  authDomain: "challenge-f01ad.firebaseapp.com",
  projectId: "challenge-f01ad",
  storageBucket: "challenge-f01ad.appspot.com",
  messagingSenderId: "112202292628",
  appId: "1:112202292628:web:0a35216549ab5b7a9f0381",
  measurementId: "G-EWNRPHEJ44"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };