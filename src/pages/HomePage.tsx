import { NavLink } from "react-router-dom";
import { UserProfile } from "../utils/types";
import { myProfile } from "../utils/constants";
import { useEffect, useState } from "react";
import { MapGeneralInfo, myInfo } from "../utils/server";

export default function HomePage() {
  const [profile, setProfile] = useState(myProfile);

  useEffect(() => {
    MapGeneralInfo();
    setProfile(myInfo);
  });
  return (
    <div className="App">
      <Summary {...profile} />
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
