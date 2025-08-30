import React from "react";
import Hero from "../../components/hero/Hero";
import WhyChooseUs from "./components/whychooseus/WhyChooseUs.jsx";
import ServicesOverview from "./components/Servicesoverview/ServicesOverview";
import StatisticsCounter from "./components/statisticscounter/StatisticsCounter.jsx";
import FeaturedProjects from "./components/staff/FeaturedProjects.jsx";
import Testimonials from "./components/testimonials/Testimonials";
import QuickContactForm from "./components/quickcontactform/QuickContactForm.jsx";
import ServiceAreaMap from "./components/serviceareamap/ServiceAreaMap.jsx";

function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs/>
      <StatisticsCounter/>
      <FeaturedProjects/>
      <Testimonials/>
      <ServiceAreaMap/>
      <QuickContactForm/>
     
    </>
  );
}

export default Home;
