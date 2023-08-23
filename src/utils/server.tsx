import "../App.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { UserProfile } from "./types";
import { useState } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

let db: any = false;

export const getDb = () => {
  if (!db) {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyAt2A_kAwYGGfAFFi-riSecwWNrz_Dw9D8",
      authDomain: "pa-yang-portfolio.firebaseapp.com",
      projectId: "pa-yang-portfolio",
      storageBucket: "pa-yang-portfolio.appspot.com",
      messagingSenderId: "977772876925",
      appId: "1:977772876925:web:a3edca8c1256da2a290d14",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
  }

  return db;
};

function GetProfile(){

}

