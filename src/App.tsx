import React from "react";
import "./App.css";
import { Navigation } from "./utils/Navigation";
import { Main } from "./utils/Main";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
    </div>
  );
}
