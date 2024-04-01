// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ1jJzBjeq23SIkSyuft207FHFZVGSKes",
  authDomain: "form-private-project.firebaseapp.com",
  projectId: "form-private-project",
  storageBucket: "form-private-project.appspot.com",
  messagingSenderId: "365148636310",
  appId: "1:365148636310:web:2393ddeab746550003aeb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;