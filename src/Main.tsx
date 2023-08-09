import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import NoPage from "./pages/NoPage";
import "../App.css";
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAt2A_kAwYGGfAFFi-riSecwWNrz_Dw9D8",
//   authDomain: "pa-yang-portfolio.firebaseapp.com",
//   projectId: "pa-yang-portfolio",
//   storageBucket: "pa-yang-portfolio.appspot.com",
//   messagingSenderId: "977772876925",
//   appId: "1:977772876925:web:a3edca8c1256da2a290d14",
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const Main = () => (
  <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/projects" element={<ProjectsPage />}></Route>
    <Route path="/*" element={<NoPage />}></Route>
  </Routes>
);
