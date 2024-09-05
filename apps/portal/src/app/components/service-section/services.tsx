"use client";

import {
  ThemeIcon,
  Text,
  Title,
  Container,
  Box,
  Grid,
  Image,
  rem,
  Group,
  Card,
} from "@mantine/core";
import { IconDental, IconHeart, IconStethoscope } from "@tabler/icons-react";
import classes from "./services.module.css";

// Define service list
export const DENTAL_SERVICES = [
  {
    icon: "/service-icon-1.png",
    title: "Root Canal",
    description:
      "Specialized care to relieve pain and protect your tooth from further damage with our root canal treatments.",
  },
  {
    icon: "/service-icon-2.png",
    title: "Cosmetic Teeth",
    description:
      "Get a perfect smile with our cosmetic teeth whitening, veneers, and other cosmetic dentistry solutions.",
  },
  {
    icon: "/service-icon-3.png",
    title: "Free Consultation",
    description:
      "Receive expert advice through virtual consultations, offering care and guidance from the comfort of your home.",
  },
  {
    icon: "/service-icon-4.png",
    title: "Alignment Teeth",
    description:
      "Straighten your teeth with advanced orthodontic treatments for improved aesthetics and function.",
  },
  {
    icon: "/service-icon-5.png",
    title: "Oral Hygiene",
    description:
      "Comprehensive oral hygiene services to ensure your mouth stays healthy, clean, and fresh.",
  },
  {
    icon: "/service-icon-6.png",
    title: "Cavity Inspection",
    description:
      "Thorough cavity inspections to detect and treat decay early, preserving your natural teeth.",
  },
];

interface FeatureProps {
  icon: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

// Individual service item
export function ServiceItem({ icon: Icon, title, description }: FeatureProps) {
  return (
    <Card
      className="transition-all my-4
       duration-300 ease-in-out transform hover:cursor-pointer hover:-translate-y-2 
       hover:shadow-xl hover:bg-gray-100"
      shadow="sm"
      radius="lg"
      padding="lg"
      style={{
        backgroundColor: "var(--mantine-color-primary-0)",
      }}
    >
      <Box style={{ textAlign: "center" }}>
        {/* Icon and Title */}
        <Group gap={4} className="flex-row items-center justify-center">
          <ThemeIcon variant="light" size={40} radius={40}>
            <Image src={`${Icon}`} />
          </ThemeIcon>
          <Text mt="sm" mb={7} fw={500} size="lg">
            {title}
          </Text>
        </Group>

        {/* Description */}
        <Text size="sm" color="dimmed" lh={1.6} className="mt-4">
          {description}
        </Text>
      </Box>
    </Card>
  );
}

// Services section with image in center
export function ServiceSection() {
  const leftServices = DENTAL_SERVICES.slice(0, 3).map((feature, index) => (
    <ServiceItem {...feature} key={index} />
  ));
  const rightServices = DENTAL_SERVICES.slice(3, 6).map((feature, index) => (
    <ServiceItem {...feature} key={index} />
  ));

  return (
    <Box className={"p-4 bg-gray-50"}>
      <Container>
        {/* Section Heading */}
        <Box style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
          <Title className={classes.title}>Our Services</Title>
          <Title className={"text-sm"}>Complete Dental Services</Title>
        </Box>

        {/* Grid layout with services and center image */}
        <Grid mt={30} gutter={50} align="center">
          {/* Left Column Services */}
          <Grid.Col span={4}>{leftServices}</Grid.Col>

          {/* Center Image */}
          <Grid.Col span={4}>
            <Image
              src="/service-banner.png"
              alt="Dental services"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                maxWidth: rem(300),
                margin: "0 auto",
              }}
            />
          </Grid.Col>

          {/* Right Column Services */}
          <Grid.Col span={4}>{rightServices}</Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}

export default ServiceSection;
