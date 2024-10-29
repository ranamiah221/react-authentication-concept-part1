// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAymPrSlLctgsrRvG7SIvRclRyd2BmPqlU",
  authDomain: "react-authentication-concept-1.firebaseapp.com",
  projectId: "react-authentication-concept-1",
  storageBucket: "react-authentication-concept-1.appspot.com",
  messagingSenderId: "774954135198",
  appId: "1:774954135198:web:0e46223e64f871e435d58f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;