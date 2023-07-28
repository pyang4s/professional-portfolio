import { NavLink, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProjectsPage from "../pages/ProjectsPage";
import NoPage from "../pages/NoPage";
import "../App.css";

export const Main = () => (
  <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/projects" element={<ProjectsPage />}></Route>
    <Route path="/*" element={<NoPage />}></Route>
  </Routes>
);
