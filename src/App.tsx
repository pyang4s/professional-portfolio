import React from "react";
import linkedInLogo from "./assets/logo/linkedInLogo.png";
import gitHubLogo from "./assets/logo/gitHubLogo.png";
import "./App.css";
import { Projects, UserProfile } from "./utils/types";

export default function App() {
  const myProfile: UserProfile = {
    name: "Pa Nhia Yang",
    title: "Full-Stack Developer",
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
      <Portfolio />
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
        <img className="icon" src={linkedInLogo} alt="LinkedIn" />
      </a>

      <a href="https://github.com/pyang4s?tab=repositories">
        <img className="icon" src={gitHubLogo} alt="GitHub Repo" />
      </a>
    </div>
  );
}

export function Summary({ summary }: UserProfile) {
  return (
    <>
      <div className="App-summary">{summary}</div>
    </>
  );
}

export function Portfolio() {
  const project1: Projects = {
    name: "Portfolio",
    description: "This project is this portfolio itself",
    imageUrl: "",
    gitHubLink: "",
    language: "Typescript",
    framework: "React",
  };

  return (
    <div className="inline">
      <Project {...project1} />
      <Project {...project1} />
    </div>
  );
}

export function Project({ name, description, imageUrl, gitHubLink }: Projects) {
  return (
    <div className="App-portfolio">
      <h2>{name}</h2>
      <p>{description}</p>
      <img className="project-image" src={imageUrl} alt="Project1" />
    </div>
  );
}
