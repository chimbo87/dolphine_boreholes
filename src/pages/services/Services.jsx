import React from "react";
import ServicesHero from "./components/serviceshero/ServicesHero";
import ServiceCategories from "./components/servicecategories/ServiceCategories";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import PricingPlans from "./components/pricingplans/PricingPlans";
import BookingProcess from "./components/bookingprocess/BookingProcess";
import ServiceBenefits from "./components/servicebenefits/ServiceBenefits";
import FrequentlyAskedQuestions from "./components/frequentlyaskedquestions/FrequentlyAskedQuestions";

function Services() {
  return (
    <div>
    <ServicesHero/>
    <ServiceCategories/>
    <ServiceDetails/>
    <PricingPlans/>
    <BookingProcess/>
    <ServiceBenefits/>
    <FrequentlyAskedQuestions/>
    </div>
  );
}

export default Services;
