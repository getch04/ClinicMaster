"use client";

import {
  ThemeIcon,
  Text,
  Title,
  Container,
  SimpleGrid,
  rem,
} from "@mantine/core";
import { IconHeart, IconDental, IconStethoscope } from "@tabler/icons-react";
import classes from "./services.module.css";

export const DENTAL_SERVICES = [
  {
    icon: IconDental,
    title: "Comprehensive Dental Exams",
    description:
      "Regular dental exams are essential for maintaining healthy teeth and gums. Our comprehensive exams include a thorough check-up and personalized care plan.",
  },
  {
    icon: IconHeart,
    title: "Cosmetic Dentistry",
    description:
      "Enhance the appearance of your smile with our cosmetic dentistry services, including teeth whitening, veneers, and bonding for a more confident you.",
  },
  {
    icon: IconStethoscope,
    title: "Pediatric Dentistry",
    description:
      "Our specialized pediatric dentistry ensures your child’s dental care is comfortable and anxiety-free. We focus on education and prevention for lifelong oral health.",
  },
  {
    icon: IconDental,
    title: "Restorative Dentistry",
    description:
      "From fillings and crowns to bridges and dentures, our restorative services aim to repair and restore your teeth to full function and natural beauty.",
  },
  {
    icon: IconStethoscope,
    title: "Emergency Dental Care",
    description:
      "Dental emergencies can happen anytime. We provide prompt and effective emergency dental care to address pain, infections, and other urgent dental issues.",
  },
];

interface FeatureProps {
  icon: React.FC<any>;
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      </ThemeIcon>
      <Text mt="sm" mb={7}>
        {title}
      </Text>
      <Text size="sm" c="dimmed" lh={1.6}>
        {description}
      </Text>
    </div>
  );
}

export function ServiceSection() {
  const features = DENTAL_SERVICES.map((feature, index) => (
    <Feature {...feature} key={index} />
  ));

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Our Dental Services</Title>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          At Dr. Hilina's Dental Clinic, we offer a comprehensive range of
          services to meet all your dental care needs. Our experienced team is
          committed to providing high-quality, personalized care.
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: "xl", md: 50 }}
        verticalSpacing={{ base: "xl", md: 50 }}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}

export default ServiceSection;
