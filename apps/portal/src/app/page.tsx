import { Contact } from "lucide-react";
import {
  AboutUs,
  ContactSection,
  ExpertsSection,
  FreeConsultation,
  Hero,
  ServiceNew,
  Story,
  Testimonials,
  WhyChooseUs,
} from "./components";

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <ServiceNew />
      <FreeConsultation />
      <ExpertsSection />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
    </>
  );
}
