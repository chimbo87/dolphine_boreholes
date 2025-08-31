import React from "react";
import ServicesHero from "./components/serviceshero/ServicesHero";
import ServiceCategoriesGrid from "./components/servicecategoriesgrid/ServiceCategoriesGrid";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import PricingInformation from "./components/pricingplans/PricingInformation";

function Services() {
  return (
    <div>
    <ServicesHero/>
    <ServiceCategoriesGrid/>
    <ServiceDetails/>
    <PricingInformation/>
    </div>
  );
}

export default Services;
