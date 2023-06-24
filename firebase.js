import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4YqxWGiR0bSwlam9MVwY7tastY_pGvFY",
  authDomain: "listed-dashboard-50860.firebaseapp.com",
  projectId: "listed-dashboard-50860",
  storageBucket: "listed-dashboard-50860.appspot.com",
  messagingSenderId: "1033592794162",
  appId: "1:1033592794162:web:48077135b5d11da0d5602b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
