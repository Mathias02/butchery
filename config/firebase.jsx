

import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyD3w3bYIo70nhqVZEIcTB5RxNkX77S8LuA",
  authDomain: "meatstore-86fd3.firebaseapp.com",
  projectId: "meatstore-86fd3",
  storageBucket: "meatstore-86fd3.firebasestorage.app",
  messagingSenderId: "449608538719",
  appId: "1:449608538719:web:52e0b7767c7957322d59ea"
};



const app = initializeApp(firebaseConfig);
const textdb = getFirestore(app);
const imgdb = getStorage(app);