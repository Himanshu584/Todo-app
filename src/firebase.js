import firebase from 'firebase';
// const firebaseConfig = {
//     apiKey: "AIzaSyABISieKMzDmKGO-IFJOXJOBWtG3xlko9M",
//     authDomain: "galvic-todo.firebaseapp.com",
//     projectId: "galvic-todo",
//     storageBucket: "galvic-todo.appspot.com",
//     messagingSenderId: "648737838975",
//     appId: "1:648737838975:web:1ccd97c073c890f4a4ec4a",
//     measurementId: "G-F3NZF9XWZ0"
//   };

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyABISieKMzDmKGO-IFJOXJOBWtG3xlko9M",
  authDomain: "galvic-todo.firebaseapp.com",
  projectId: "galvic-todo",
  storageBucket: "galvic-todo.appspot.com",
  messagingSenderId: "648737838975",
  appId: "1:648737838975:web:1ccd97c073c890f4a4ec4a",
  measurementId: "G-F3NZF9XWZ0"
})

const db = firebase.firestore();

export default db;