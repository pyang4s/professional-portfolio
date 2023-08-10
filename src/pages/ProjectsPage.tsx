import { project1 } from "../utils/constants";
import { Projects } from "../utils/types";
import { NavLink } from "react-router-dom";

function ProjectsPage() {
  return <Portfolio />;
}
export default ProjectsPage;

export function Portfolio() {
  return (
    <div>
      <div className="portfolio">
        <div className="column">
          <Project {...project1} />
          <Project {...project1} />
        </div>
        <div className="column">
          <Project {...project1} />
          <Project {...project1} />
        </div>
      </div>
    </div>
  );
}

export function Project({
  name,
  description,
  imageUrl,
  language,
  gitHubLink,
  framework,
  path,
}: Projects) {
  return (
    <div className="project">
      <h2>{name}</h2>
      <p>{description}</p>
      <NavLink end to={path}>
        <img
          className="project-image"
          style={{ width: 300, height: 350 }}
          src={imageUrl}
          alt="Portfolio"
        />
      </NavLink>
      <div> Laguage: {language}</div>
      <div> Framework: {framework}</div>
    </div>
  );
}
