import React, { useEffect, useState } from "react";
import { ImHome } from "react-icons/im";
import "../App.css";
import { useLocation, NavLink } from "react-router-dom";
import { UserProfile } from "./types";
import linkedInLogo from "../assets/logo/linkedInLogo.png";
import gitHubLogo from "../assets/logo/gitHubLogo.jpeg";
import emailLogo from "../assets/logo/emailLogo.png";
import { MapGeneralInfo, myInfo } from "./server";
import { myProfile } from "./constants";

export const Navigation = () => (
  <>
    <Header />
  </>
);

const Header = () => {
  MapGeneralInfo();
  const location = useLocation();
  const [profile, setProfile] = useState(myProfile);

  useEffect(() => {
    setProfile(myInfo);
  });

  return (
    <div className="App-header">
      <Social {...profile} />
      {location.pathname === "/" ? (
        <HeaderGreeting {...profile} />
      ) : (
        <ProjectGreeting />
      )}
    </div>
  );
};

export function Social({ linkedin_url, github_url, email }: UserProfile) {
  return (
    <div className="top">
      <a href={linkedin_url}>
        <img className="icon" src={linkedInLogo} alt="LinkedIn" />
      </a>

      <a href={github_url}>
        <img className="icon" src={gitHubLogo} alt="GitHubRepo" />
      </a>

      <a href={"mailto:" + email}>
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
