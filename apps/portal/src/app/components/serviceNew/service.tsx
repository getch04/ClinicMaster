import {
  Box,
  Button,
  Container,
  Image,
  Overlay,
  Text,
  Title,
} from "@mantine/core";
import Link from "next/link";
import React from "react";

interface Service {
  title: string;
  description: string;
  imgUrl: string;
  feature: string;
}

const services: Service[] = [
  {
    title: "Orthodontics",
    description:
      "Align your teeth and correct bite issues with our advanced orthodontic treatments, including traditional braces and clear aligners.",
    imgUrl: "services/orthodontics.png",
    feature: "Teeth Alignment",
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Enhance your smile with veneers, bonding, and other cosmetic dental treatments to create the smile you've always dreamed of.",
    imgUrl: "services/cosmeticdentistry.png",
    feature: "Smile Makeover",
  },
  {
    title: "Dental Implants",
    description:
      "Replace missing teeth with durable and natural-looking dental implants for a confident smile and improved functionality.",
    imgUrl: "services/dentalimplant.png",
    feature: "Tooth Replacement",
  },
  {
    title: "Dental Cleanings",
    description:
      "Keep your teeth healthy and plaque-free with regular dental cleanings, designed to remove tartar and prevent gum disease.",
    imgUrl: "services/dentalcleaning.png",
    feature: "Plaque Removal",
  },
  {
    title: "Emergency Dental Care",
    description:
      "Get fast relief for dental emergencies, such as toothaches, broken teeth, or other urgent dental issues.",
    imgUrl: "services/emergencycare.png",
    feature: "Urgent Care",
  },
  {
    title: "Root Canal Therapy",
    description:
      "Save your natural tooth and relieve pain from infection with our gentle root canal treatments.",
    imgUrl: "services/rootcanal.png",
    feature: "Pain Relief",
  },
];

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Link href={"/services"}>
      <Container
        px={0}
        py={0}
        className="group cursor-pointer relative p-4 m-4 hover:scale-105 transition-all duration-300 hover:bg-primary-900 rounded-md"
      >
        <Box className="relative">
          <Image src={service.imgUrl} alt={service.title} radius="md" />
          <Box className="absolute bottom-2 right-2 bg-primary-900 bg-opacity-80 text-white text-xs p-1 rounded">
            {service.feature}
          </Box>
          <Overlay
            opacity={0}
            color="#000"
            zIndex={1}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity"
          >
            <Button
              variant="filled"
              className="bg-white text-primary-900 hover:bg-primary-100"
            >
              VIEW MORE
            </Button>
          </Overlay>
        </Box>

        <Title
          order={3}
          mt="sm"
          className="font-bold text-xl text-primary-900 group-hover:text-white group-hover:text-center"
        >
          {service.title}
        </Title>

        <Text
          size="sm"
          className="text-slate-500 group-hover:text-white group-hover:pb-1 group-hover:text-center group-hover:px-1"
        >
          {service.description}
        </Text>
      </Container>
    </Link>
  );
};

export const ServiceNew: React.FC = () => {
  return (
    <Box className="my-14 py-5">
      <Box className="container mx-auto px-4">
        <Text className="text-primary-500 text-sm text-center mb-2">
          OUR SERVICES
        </Text>
        <Text className="text-primary-900 text-4xl text-center font-bold mb-10">
          Comprehensive Dental Services <br /> For a Healthy Smile
        </Text>
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </Box>
        <Box className="flex justify-center items-center mt-10">
          <Link href="/services" passHref>
            <Button
              variant="filled"
              size="lg"
              className="bg-primary-900 text-white font-bold hover:bg-primary-800"
            >
              View All Services
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
