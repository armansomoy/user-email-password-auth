// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWTBbWAN_gzO_dAk-z7HHB1XqfYbXgNhQ",
  authDomain: "user-email-password-auth-95565.firebaseapp.com",
  projectId: "user-email-password-auth-95565",
  storageBucket: "user-email-password-auth-95565.appspot.com",
  messagingSenderId: "573700739757",
  appId: "1:573700739757:web:6da32b987579308fabac24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app;
const auth = getAuth(app);
export default auth;