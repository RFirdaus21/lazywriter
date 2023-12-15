import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-810ca.firebaseapp.com",
  projectId: "blog-810ca",
  storageBucket: "blog-810ca.appspot.com",
  messagingSenderId: "231845752740",
  appId: "1:231845752740:web:5fd3fe145ebb1bd3aa1b31"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);