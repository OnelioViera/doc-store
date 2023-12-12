import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCWiTeHOXWISzgqaDYBjY-DtSQNkwxV_Ys",
  authDomain: "docstore-e1bcc.firebaseapp.com",
  projectId: "docstore-e1bcc",
  storageBucket: "docstore-e1bcc.appspot.com",
  messagingSenderId: "986248396811",
  appId: "1:986248396811:web:07bd83ea2a61863f79470e"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };