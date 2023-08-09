import React from "react";
import { ImHome } from "react-icons/im";
import "../App.css";
import { useLocation, NavLink } from "react-router-dom";
import { UserProfile } from "./types";
import { myProfile, socialLinks } from "./constants";
import linkedInLogo from "../assets/logo/linkedInLogo.png";
import gitHubLogo from "../assets/logo/gitHubLogo.jpeg";
import emailLogo from "../assets/logo/emailLogo.png";

export const Navigation = () => (
  <>
    <Header />
  </>
);

export function Header() {
  const location = useLocation();

  return (
    <div className="App-header">
      <Social />
      {location.pathname === "/" ? (
        <HeaderGreeting {...myProfile} />
      ) : (
        <ProjectGreeting />
      )}
    </div>
  );
}

export function Social() {
  return (
    <div className="top">
      <a href={socialLinks.linkedinUrl}>
        <img className="icon" src={linkedInLogo} alt="LinkedIn" />
      </a>

      <a href={socialLinks.gitHubUrl}>
        <img className="icon" src={gitHubLogo} alt="GitHubRepo" />
      </a>

      <a href={socialLinks.email}>
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
