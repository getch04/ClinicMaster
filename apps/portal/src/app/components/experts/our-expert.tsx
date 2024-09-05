"use client";
import {
  Box,
  Card,
  Image,
  Text,
  Title,
  Group,
  Container,
  SimpleGrid,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";

export function ExpertsSection() {
  const doctors = [
    {
      name: "Dr. Hilina",
      job: "Orthodontist",
      image: "/hero.png", // Replace with actual image paths
      social: {
        facebook: "https://facebook.com/drjohndoe",
        twitter: "https://twitter.com/drjohndoe",
        linkedin: "https://linkedin.com/in/drjohndoe",
        instagram: "https://instagram.com/drjohndoe",
      },
    },
    {
      name: "Dr. Jane Smith",
      job: "Endodontist",
      image: "/hero1.jpg", // Replace with actual image paths
      social: {
        facebook: "https://facebook.com/drjanesmith",
        twitter: "https://twitter.com/drjanesmith",
        linkedin: "https://linkedin.com/in/drjanesmith",
        instagram: "https://instagram.com/drjanesmith",
      },
    },
    {
      name: "Dr. Emily Johnson",
      job: "Pediatric Dentist",
      image: "/hero1.jpg", // Replace with actual image paths
      social: {
        facebook: "https://facebook.com/dremilyjohnson",
        twitter: "https://twitter.com/dremilyjohnson",
        linkedin: "https://linkedin.com/in/dremilyjohnson",
        instagram: "https://instagram.com/dremilyjohnson",
      },
    },
  ];

  return (
    <Box className="my-12 px-4 md:px-12  bg-gray-50">
      <Container>
        {/* Section Heading */}
        <Box style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Title className="text-3xl font-extrabold text-gray-800">
            Our Doctors
          </Title>
          <Text size="xl" className="text-primary-700 mt-2 font-semibold">
            Best Expert Dentists
          </Text>
        </Box>

        {/* Doctors Grid */}
        <SimpleGrid cols={3} spacing="lg" className="my-2">
          {doctors.map((doctor, index) => (
            <Card
              key={index}
              shadow="sm"
              padding="lg"
              radius="md"
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <Card.Section className="relative">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  radius={"xl"}
                  height={240}
                  fit="cover"
                  className="rounded-full border-4 border-primary-600 object-cover
                   hover:bg-primary-500 hover:opacity-90 transition-transform duration-300
                    ease-in-out transform hover:scale-105"
                />
              </Card.Section>

              <Box mt="md" style={{ textAlign: "center" }}>
                <Text fw={500} size="lg">
                  {doctor.name}
                </Text>
                <Text size="sm" color="dimmed">
                  {doctor.job}
                </Text>

                {/* Social Media Icons */}
                <Group justify="center" gap="xs" mt="md">
                  {doctor.social.facebook && (
                    <a
                      href={doctor.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconBrandFacebook
                        size={24}
                        className="text-primary-600 hover:text-primary-800 transition-colors duration-300"
                      />
                    </a>
                  )}
                  {doctor.social.twitter && (
                    <a
                      href={doctor.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconBrandTwitter
                        size={24}
                        className="text-primary-400 hover:text-primary-600 transition-colors duration-300"
                      />
                    </a>
                  )}
                  {doctor.social.linkedin && (
                    <a
                      href={doctor.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconBrandLinkedin
                        size={24}
                        className="text-primary-700 hover:text-primary-900 transition-colors duration-300"
                      />
                    </a>
                  )}
                  {doctor.social.instagram && (
                    <a
                      href={doctor.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconBrandInstagram
                        size={24}
                        className="text-pink-500 hover:text-pink-700 transition-colors duration-300"
                      />
                    </a>
                  )}
                </Group>
              </Box>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
