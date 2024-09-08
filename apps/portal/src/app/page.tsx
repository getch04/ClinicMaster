import {
  AboutUs,
  ExpertsSection,
  FreeConsultation,
  Hero,
  ServiceNew,
  Story,
  Testimonials,
  WhyChooseUs,
} from "./components";
import { AnimatedCounters } from "./components/status-counter";

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <ServiceNew />
      <FreeConsultation />
      <WhyChooseUs />
      {/* <ServiceSection /> */}

      <AboutUs />
      <ExpertsSection />
      <Testimonials />
      <AnimatedCounters />
    </>
  );
}
