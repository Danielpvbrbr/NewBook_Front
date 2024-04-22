import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD3uBOlR2adGNHREJb4PYaOdFQlzserTaw",
  authDomain: "newbook-9b61f.firebaseapp.com",
  projectId: "newbook-9b61f",
  storageBucket: "newbook-9b61f.appspot.com",
  messagingSenderId: "1067405805529",
  appId: "1:1067405805529:web:e801e84c2e8965bb06bbc8"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);