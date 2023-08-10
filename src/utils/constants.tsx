import { Projects, UserProfile } from "./types";
import portfolioImg from "../assets/images/portfolio.png";

export let myProfile: UserProfile = {
  name: "test",
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
