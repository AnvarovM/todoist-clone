import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDGbbIXQCuahFJY-_DPOtTOTY8fggtOIf4",
  authDomain: "todoist-clone-9a0f8.firebaseapp.com",
  databaseURL: "https://todoist-clone-9a0f8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todoist-clone-9a0f8",
  storageBucket: "todoist-clone-9a0f8.appspot.com",
  messagingSenderId: "8033033666",
  appId: "1:8033033666:web:87fdbcaa3adba56bc8ca5b",
  measurementId: "G-99ZP386ELS"
});

export { firebaseConfig as firebase };