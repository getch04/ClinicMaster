import React from "react";
import {
  AboutUs,
  ExpertsSection,
  Hero,
  ServiceSection,
  Testimonials,
} from "./components";
import { AnimatedCounters } from "./components/status-counter";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceSection />
      <AboutUs />
      <ExpertsSection />
      <Testimonials />
      <AnimatedCounters />
    </>
  );
}
