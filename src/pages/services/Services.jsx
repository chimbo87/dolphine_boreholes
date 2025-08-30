import React from "react";
import ServicesHero from "./components/serviceshero/ServicesHero";
import ServiceCategoriesGrid from "./components/servicecategoriesgrid/ServiceCategoriesGrid";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import PricingInformation from "./components/pricingplans/PricingInformation";
import BookingProcess from "./components/bookingprocess/BookingProcess";
import ServiceBenefits from "./components/servicebenefits/ServiceBenefits";
import FrequentlyAskedQuestions from "./components/frequentlyaskedquestions/FrequentlyAskedQuestions";

function Services() {
  return (
    <div>
    <ServicesHero/>
    <ServiceCategoriesGrid/>
    <ServiceDetails/>
    <PricingInformation/>
    {/* <BookingProcess/>
    <ServiceBenefits/>
    <FrequentlyAskedQuestions/> */}
    </div>
  );
}

export default Services;
