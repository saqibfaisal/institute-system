// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA5dYgYwEZOS9D9vRqmNA0p8RMV2ieIa0",
  authDomain: "take-my-code.firebaseapp.com",
  projectId: "take-my-code",
  storageBucket: "take-my-code.appspot.com",
  messagingSenderId: "711594634882",
  appId: "1:711594634882:web:2b12c7ebe0da046dc5ce9b",
  measurementId: "G-RQT2KW9H9D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app