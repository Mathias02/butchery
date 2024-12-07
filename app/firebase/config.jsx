
import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'



const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_AUTH_API_KEY,
  authDomain: "meatauth.firebaseapp.com",
  projectId: "meatauth",
  storageBucket: "meatauth.firebasestorage.app",
  messagingSenderId:"43388532217",
  appId:"1:43388532217:web:e4f5144c276dedc2593928"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)



  


  


  


  


  
