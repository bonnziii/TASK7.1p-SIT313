import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFVpwBWZAKwZUMWGhsxiWAdFe0pnndMys",
  authDomain: "sit313-2e38e.firebaseapp.com",
  projectId: "sit313-2e38e",
  storageBucket: "sit313-2e38e.appspot.com",
  messagingSenderId: "470188013723",
  appId: "1:470188013723:web:20c57140e97d950448ee3e",
  measurementId: "G-XYNF5EH1HW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// Google sign-in function
const signInWithGoogle = () => signInWithPopup(auth, provider);

export { auth, db, signInWithGoogle };

