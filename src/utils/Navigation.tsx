import React from "react";
import { ImHome } from "react-icons/im";
import "../App.css";
import {
  useLocation,
  NavLink,
  BrowserRouter as Router,
} from "react-router-dom";
import { UserProfile } from "./types";
// import { myProfile } from "./constants";
import linkedInLogo from "../assets/logo/linkedInLogo.png";
import gitHubLogo from "../assets/logo/gitHubLogo.jpeg";
import emailLogo from "../assets/logo/emailLogo.png";
import { MapGeneralInfo, myInfo } from "./server";

export const Navigation = () => (
  <>
    <Header />
  </>
);

export function Header() {
  const location = useLocation();
  const myProfile: UserProfile = myInfo;

  return (
    <div className="App-header">
      <Social {...myProfile} />
      {location.pathname === "/" ? (
        <HeaderGreeting {...myProfile} />
      ) : (
        <ProjectGreeting />
      )}
    </div>
  );
}

export function Social({ linkedin_url, github_url, email }: UserProfile) {
  return (
    <div className="top">
      <a href={linkedin_url}>
        <img className="icon" src={linkedInLogo} alt="LinkedIn" />
      </a>

      <a href={github_url}>
        <img className="icon" src={gitHubLogo} alt="GitHubRepo" />
      </a>

      <a href={email}>
        <img className="icon" src={emailLogo} alt="Email" />
      </a>
    </div>
  );
}

export function HeaderGreeting({ name, title }: UserProfile) {
  const profileName = <div style={{ float: "left" }}> {name}</div>;
  const profileTitle = (
    <div style={{ color: "#ffb703", float: "right" }}>{title}</div>
  );
  return (
    <div className="header-bottom">
      {profileName} | {profileTitle}
    </div>
  );
}

export function ProjectGreeting() {
  return (
    <>
      <div className="header-bottom">My Projects</div>
      <NavLink end to="/">
        <ImHome className="home-icon" size="45px" />
      </NavLink>
    </>
  );
}
