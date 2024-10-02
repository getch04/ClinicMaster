"use client";


import { Provider } from "react-redux";
import {
  ContactSection,
  ExpertsSection,
  FreeConsultation,
  Hero,
  ServiceNew,
  Story,
  Testimonials,
  WhyChooseUs
} from "./components";
import { store } from "./store";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Hero />
        <Story />
        <ServiceNew />
        <FreeConsultation />
        <ExpertsSection />
        <WhyChooseUs />
        <Testimonials />
        <ContactSection />
      </Provider>
    </>
  );
}
