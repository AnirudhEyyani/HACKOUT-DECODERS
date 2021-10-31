import { getAuth} from '@firebase/auth'
import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB1N7avydXos6C0oVvcB2uQkrfuHt-Pb88",
    authDomain: "hackout-dotcoin.firebaseapp.com",
    projectId: "hackout-dotcoin",
    storageBucket: "hackout-dotcoin.appspot.com",
    messagingSenderId: "31867652361",
    appId: "1:31867652361:web:08620453bf2cb299706bd8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export default app