import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "API KEY",
    authDomain: "joshenem-75746.firebaseapp.com",
    projectId: "joshenem-75746",
    storageBucket: "joshenem-75746.appspot.com",
    messagingSenderId: "1054602828415",
    appId: "1:1054602828415:web:41fb1a2721a00a8fb0fd4a",
    measurementId: "G-0DDNF7JHZB"
  };

  const app = initializeApp(firebaseConfig);
  
  export const db = getFirestore(app);