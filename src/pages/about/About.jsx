import React from "react";
import AboutHero from "./components/abouthero/AboutHero";
import CompanyStory from "./components/companystory/CompanyStory";
import TeamShowcase from "./components/teamshowcase/TeamShowcase";
import OurValues from "./components/ourvalues/OurValues";
import LocationMap from "./components/locationmap/LocationMap";

function About() {
  return (
    <div>
      <AboutHero/>
      <CompanyStory/>
      <TeamShowcase/>
      <OurValues/>
      <LocationMap/>
    </div>
  );
}

export default About;
