import { Projects, UserProfile } from "./types";
import portfolioImg from "../assets/images/portfolio.png";
import { myInfo } from "./server";

export let myProfile: UserProfile = myInfo;

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
