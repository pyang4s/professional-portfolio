import { Projects, UserProfile } from "./types";
import portfolioImg from "../assets/images/portfolio.png";

export const myProfile: UserProfile = {
  name: "Pa Nhia Yang",
  title: "Full-Stack Developer",
  address: "",
  city: "",
  state: "",
  zip: "",
  phone: "",
  email: "mailto:pyang4@gmail.com",
  summary:
    "Welcome to my portfolio! I'm a full stack developer with 2 years of professional experience in mobile development and automated testing. With over 5 years of education and training, I've expanded my skillsets and knowledge of both front and back end development.",
};

export const project1: Projects = {
  name: "Portfolio",
  description:
    "This portfolio uses the React framework with Firebase hosting, allowing me to demonstrate both my front end and back skills.",
  imageUrl: portfolioImg,
  gitHubLink: "",
  language: "Typescript",
  framework: "React",
  path: "/",
};

export const project2: Projects = {
  name: "",
  description: "",
  imageUrl: "",
  gitHubLink: "",
  language: "",
  framework: "",
  path: "/",
};

export const socialLinks = {
  linkedinUrl: "https://www.linkedin.com/in/yang-panhia/",
  gitHubUrl: "https://github.com/pyang4s?tab=repositories",
  email: myProfile.email,
};
