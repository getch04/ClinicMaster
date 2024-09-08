import {
  AboutUs,
  ExpertsSection,
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
      <WhyChooseUs />
      {/* <ServiceSection /> */}

      <AboutUs />
      <ExpertsSection />
      <Testimonials />
      <AnimatedCounters />
    </>
  );
}
