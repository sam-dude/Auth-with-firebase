import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3C6KrlHjj81zyAsAvJ6TepZiP9e-XzAM",
  authDomain: "practice-db661.firebaseapp.com",
  projectId: "practice-db661",
  storageBucket: "practice-db661.appspot.com",
  messagingSenderId: "504415797658",
  appId: "1:504415797658:web:694c012c29f7d9626fba23"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;