import React from "react";
import linkedInLogo from "./assets/logo/linkedInLogo.png";
import gitHubLogo from "./assets/logo/gitHubLogo.png";
import "./App.css";
import { Projects, UserProfile } from "./utils/types";

export default function App() {
  const myProfile: UserProfile = {
    name: "Pa Nhia Yang",
    title: "Full Stack Developer",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    summary: "This is my summary",
  };

  return (
    <div className="App">
      <Header {...myProfile} />
      <Summary {...myProfile} />
    </div>
  );
}

export function Header({ name, title }: UserProfile) {
  const profileName = <div style={{ float: "left" }}> {name}</div>;
  const profileTitle = (
    <div style={{ color: "#ffb703", float: "right" }}>{title}</div>
  );
  return (
    <>
      <div className="App-header">
        <Social />
        <div className="bottom">
          {profileName}|{profileTitle}
        </div>
      </div>
    </>
  );
}

export function Social() {
  return (
    <div className="top">
      <a href="https://www.linkedin.com/in/yang-panhia/">
        <img className="icon" src={linkedInLogo} />
      </a>

      <a href="https://github.com/pyang4s?tab=repositories">
        <img className="icon" src={gitHubLogo} />
      </a>
    </div>
  );
}
