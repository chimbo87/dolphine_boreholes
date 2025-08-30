import React from "react";
import ContactHero from "./components/contacthero/ContactHero";
import ContactForm from "./components/contactform/ContactForm";
import ContactInfo from "./components/contactinfo/ContactInfo";
import OfficeLocations from "./components/officelocations/OfficeLocations";
import BusinessHours from "./components/businesshours/BusinessHours";
import SocialMedia from "./components/socialmedia/SocialMedia";

function Contact() {
  return (
    <div id="contactBox">
      <div id="contactBoxWrap">
        <ContactHero />
        <ContactForm />
        <ContactInfo />
        <OfficeLocations/>
        <BusinessHours/>
        <SocialMedia/>
      </div>
    </div>
  );
}

export default Contact;
