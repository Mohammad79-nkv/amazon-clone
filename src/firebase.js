import firebase from "firebase";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {a} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBkIOnCrZKwMQckLCKHPEbskygkWsRLOD8",
  authDomain: "project-ab776.firebaseapp.com",
  databaseURL: "https://project-ab776-default-rtdb.firebaseio.com",
  projectId: "project-ab776",
  storageBucket: "project-ab776.appspot.com",
  messagingSenderId: "421666997578",
  appId: "1:421666997578:web:528aa4ac633aac42586db3",
  measurementId: "G-5YBYS2LPVG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebaseApp.auth()
const db = firebaseApp.firestore()

export {auth, db}