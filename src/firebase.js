import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB43EZjnSbco0Z4rDwmVnik2g3pZ6JHIHA",
  authDomain: "chat-fb896.firebaseapp.com",
  projectId: "chat-fb896",
  storageBucket: "chat-fb896.appspot.com",
  messagingSenderId: "155596706129",
  appId: "1:155596706129:web:91ecaed4aa3aa9d386c370",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
