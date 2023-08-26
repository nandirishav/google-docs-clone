import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "docs-clone-c5eec.firebaseapp.com",
  projectId: "docs-clone-c5eec",
  storageBucket: "docs-clone-c5eec.appspot.com",
  messagingSenderId: "645649344387",
  appId: process.env.APP_ID,
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
