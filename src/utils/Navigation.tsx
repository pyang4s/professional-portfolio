import React, { useEffect, useState } from "react";
import { ImHome } from "react-icons/im";
import "../App.css";
import { useLocation, NavLink } from "react-router-dom";
import { UserProfile } from "./types";
import linkedInLogo from "../assets/logo/linkedInLogo.png";
import gitHubLogo from "../assets/logo/gitHubLogo.jpeg";
import emailLogo from "../assets/logo/emailLogo.png";
import { getDb } from "./server";
import { doc, getDoc } from "firebase/firestore";

export const Navigation = () => (
  <>
    <Header />
  </>
);
export let myProfile: UserProfile = {
  name: "",
  title: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  phone: "",
  email: "",
  summary: "",
  linkedin_url: "",
  github_url: "",
};

const Header = () => {
  const db = getDb(); 
  const location = useLocation();
  const [profile, setProfile] = useState<UserProfile>(myProfile);
  const collection_name = "myinfo";
  const document_name = "general_info";

  const fetchPost = async () => {
    const data = await getDoc(doc(db, collection_name, document_name))
    const profile = data.data(); 
    if(profile){
      myProfile = {
        name: profile.first_name + " " + profile.last_name,
        title: profile.title,
        address: profile.address,
        city: profile.city,
        state: profile.state,
        zip: profile.zip,
        phone: profile.phone,
        email: profile.email,
        summary: profile.summary,
        linkedin_url: profile.linkedin_url,
        github_url: profile.github_url,
      };
      setProfile(myProfile); 
    }
  }
  
  useEffect(() => {
    fetchPost(); 
  }, []);

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
