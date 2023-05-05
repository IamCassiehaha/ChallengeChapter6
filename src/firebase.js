import { getAuth} from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAf07927wAoYr4H_TqGsy3lHsjhsv1jWlw",
  authDomain: "challenge5-1fe01.firebaseapp.com",
  projectId: "challenge5-1fe01",
  storageBucket: "challenge5-1fe01.appspot.com",
  messagingSenderId: "930405987137",
  appId: "1:930405987137:web:b63a3ae9f4618f9e6da7c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;