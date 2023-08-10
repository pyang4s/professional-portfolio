import "../App.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { UserProfile } from "./types";
import { useEffect, useState } from "react";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

let db: any = false;
export let myInfo: UserProfile;

const getDb = () => {
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

export async function MapGeneralInfo(): Promise<UserProfile> {
  const collection_name = "myinfo";
  const document_name = "general_info";
  const docSnap = await getDoc(doc(getDb(), collection_name, document_name));
  const data = docSnap.data();
  let myInfo: UserProfile;

  if (data) {
    myInfo = {
      name: data.first_name + " " + data.last_name,
      title: data.title,
      address: data.address,
      city: data.city,
      state: data.state,
      zip: data.zip,
      phone: data.phone,
      email: data.email,
      summary: data.summary,
      linkedin_url: data.linkedin_url,
      github_url: data.github_url,
    };
  } else {
    myInfo = {
      name: "null",
      title: "null",
      address: "null",
      city: "null",
      state: "null",
      zip: "null",
      phone: "null",
      email: "null",
      summary: "null",
      linkedin_url: "null",
      github_url: "null",
    };
    console.log("No profile information retreived");
  }
  return myInfo;
}
