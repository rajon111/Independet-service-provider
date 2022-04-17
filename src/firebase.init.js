import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCTPO1whc7_aBeQuHVVG3UrS_BN9b0MVTI",
  authDomain: "hire-best-creative-director.firebaseapp.com",
  projectId: "hire-best-creative-director",
  storageBucket: "hire-best-creative-director.appspot.com",
  messagingSenderId: "579298699518",
  appId: "1:579298699518:web:96876d62c761e22fc6ddaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;