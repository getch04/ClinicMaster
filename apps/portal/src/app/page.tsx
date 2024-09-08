import {
  AboutUs,
  ExpertsSection,
  Hero,
  ServiceNew,
  Story,
  Testimonials,
} from "./components";
import { AnimatedCounters } from "./components/status-counter";

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <ServiceNew />
      {/* <ServiceSection /> */}
      <AboutUs />
      <ExpertsSection />
      <Testimonials />
      <AnimatedCounters />
    </>
  );
}
