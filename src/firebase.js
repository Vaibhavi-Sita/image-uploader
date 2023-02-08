import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs4AHRICeJl1fn0Xw8ZduOql_Iv40qghw",
  authDomain: "react-image-uploader-f6da7.firebaseapp.com",
  projectId: "react-image-uploader-f6da7",
  storageBucket: "react-image-uploader-f6da7.appspot.com",
  messagingSenderId: "652006571482",
  appId: "1:652006571482:web:d3145a64f4ef604b1294e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)