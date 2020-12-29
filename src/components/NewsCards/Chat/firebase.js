import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDj18_MRys5MTG6pKdSsoy1tGwNG38xJwc",
  authDomain: "chateznews.firebaseapp.com",
  databaseURL: "https://chateznews.firebaseio.com",
  projectId: "chateznews",
  storageBucket: "chateznews.appspot.com",
  messagingSenderId: "617332029022",
  appId: "1:617332029022:web:af6c64de843951678166cf",
  measurementId: "G-SHGY0D67KS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
