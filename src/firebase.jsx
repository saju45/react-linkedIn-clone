import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyAvhzDHYLEabJAYq0rqZ_HUlwDfLNhWVCs",
  authDomain: "react-linkedin-clone-554e6.firebaseapp.com",
  projectId: "react-linkedin-clone-554e6",
  storageBucket: "react-linkedin-clone-554e6.appspot.com",
  messagingSenderId: "881551770282",
  appId: "1:881551770282:web:5d452a7e474190762206d3",
  measurementId: "G-51LB5KTQ1Z"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const firestore=getFirestore(app)
export const storage=getStorage(app)
