// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuiyi3bt_9_2pa9e97MBDbYqvpag64-kA",
  authDomain: "logininedi.firebaseapp.com",
  projectId: "logininedi",
  storageBucket: "logininedi.firebasestorage.app",
  messagingSenderId: "843386946566",
  appId: "1:843386946566:web:71ecd6ff7a8dc22f762f87"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase