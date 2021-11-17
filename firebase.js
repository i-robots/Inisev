// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBXN-umcq4heRC768COS8mrALVF8VfOcVo",
  authDomain: "inisev-761a1.firebaseapp.com",
//   databaseURL: "https://directory-63ccb-default-rtdb.firebaseio.com/",
  projectId: "inisev-761a1",
  storageBucket: "inisev-761a1.appspot.com",
  messagingSenderId: "599924510907",
  appId: "1:599924510907:web:a8ccd0b3ec733c3203999e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getUsers(){
    const usersCol = collection(db, 'users');
    const userSnapshot = await getDocs(usersCol);
    const users = userSnapshot.docs.map(doc => doc.data());
    return users;
}