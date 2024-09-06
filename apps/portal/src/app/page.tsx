import {
  AboutUs,
  ExpertsSection,
  Hero, ServiceSection, Story,
  Testimonials,
} from "./components";
import { AnimatedCounters } from "./components/status-counter";

export default function Home() {
  return (
    <>
      <Hero />;
      <Story />;
      <ServiceSection />
      <AboutUs />
      <ExpertsSection />
      <Testimonials />
      <AnimatedCounters />
    </>
  );
}
