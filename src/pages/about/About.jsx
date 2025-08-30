import React from "react";
import CompanyStory from "./components/companystory/CompanyStory";
import MissionVision from "./components/teamshowcase/MissionVision";
import TeamSection from "./components/teamsection/TeamSection";
import LocationMap from "./components/locationmap/LocationMap";

function About() {
  return (
    <div>

      <CompanyStory/>
      <MissionVision/>
      <TeamSection/>
      <LocationMap/>
    </div>
  );
}

export default About;
