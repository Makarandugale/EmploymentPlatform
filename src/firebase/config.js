import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyB3oKYqsAZjXHZvD8UBUvZXPtUe3zMZh5Y",
  authDomain: "pocketmoney2-e005d.firebaseapp.com",
  projectId: "pocketmoney2-e005d",
  storageBucket: "pocketmoney2-e005d.appspot.com",
  messagingSenderId: "1006185657806",
  appId: "1:1006185657806:web:5b5342fb794c99f269e79f",
  measurementId: "G-FM4W0GQKKS"
};

//init firebase
const app = initializeApp(firebaseConfig);

//init services
const auth = getAuth();
const projectFirestore = getFirestore(app)

export { auth, projectFirestore }