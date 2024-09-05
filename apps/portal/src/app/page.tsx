import React from "react";
import {
  AboutUs,
  ExpertsSection,
  Hero,
  ServiceSection,
  Testimonials,
} from "./components";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceSection />
      <AboutUs />
      <ExpertsSection />
      <Testimonials />
    </>
  );
}
