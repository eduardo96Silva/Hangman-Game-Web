import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDMxjBMFr8ZKD-L4O8eUJYWGIAvUauQMKo",
  authDomain: "hangman-game-c04e7.firebaseapp.com",
  projectId: "hangman-game-c04e7",
  storageBucket: "hangman-game-c04e7.appspot.com",
  messagingSenderId: "102671112888",
  appId: "1:102671112888:web:2309848b4a05637b2c724d"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);