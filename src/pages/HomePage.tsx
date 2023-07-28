import { NavLink } from "react-router-dom";
import { UserProfile } from "../utils/types";
import { myProfile } from "../utils/constants";

export default function HomePage() {
  return (
    <div className="App">
      <Summary {...myProfile} />
      <Portfolio />
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
  return (
    <div className="center">
      <div>
        <NavLink end to="/projects">
          <div className="projects-button"> My Projects</div>
        </NavLink>
      </div>
    </div>
  );
}
