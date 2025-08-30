import React from "react";
import AboutHero from "./components/abouthero/AboutHero";
import CompanyStory from "./components/companystory/CompanyStory";
import MissionVision from "./components/teamshowcase/MissionVision";
import TeamSection from "./components/teamsection/TeamSection";
import EquipmentShowcase from "./components/equipmentshowcase/EquipmentShowcase";

function About() {
  return (
    <div>
      <AboutHero/>
      <CompanyStory/>
      <MissionVision/>
      <TeamSection/>
      <EquipmentShowcase/>
    </div>
  );
}

export default About;
