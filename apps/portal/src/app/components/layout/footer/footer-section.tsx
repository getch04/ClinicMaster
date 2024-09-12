"use client";
import {
  ActionIcon,
  Box,
  Container,
  Divider,
  Group,
  Input,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
  IconSend,
} from "@tabler/icons-react";
import Image from "next/image";
import { iconDefaultProps } from "../../../../shared";
import { footerData } from "./footer-menu";
import Link from "next/link";

export function FooterSection() {
  const groups = footerData.map((group) => (
    <Box key={group.title} className="mb-4 space-y-2">
      <Text className="text-md font-bold mb-2 text-white">{group.title}</Text>
      {group.links.map((link) => (
        <Text<"a">
          key={link.link}
          className="block relative py-1 group"
          component="a"
          href={link.link}
          style={{ textDecoration: "none" }}
        >
          {link.label}
          <Container className="absolute left-0 bottom-0 h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left w-20"></Container>
        </Text>
      ))}
    </Box>
  ));

  return (
    <footer className="px-4 md:px-12 py-16">
      <SimpleGrid cols={6} spacing="sm">
        <Box className="flex flex-col justify-center items-center px-1">
          <Link href={"/"}>
            <Box className="flex flex-row justify-start  items-center pb-2 cursor-pointer">
              <Image
                src="/logo.png"
                alt="Dr Helina Dental Clinic"
                width={100}
                height={100}
                className="rounded-3xl"
              />
              <Title className="p-2 text-white text-sm font-bold">
                Dr. Helina <br /> Dental Clinic
              </Title>
            </Box>
          </Link>

          <Box className="flex flex-row justify-end  items-center">
            <Input
              placeholder="Send us an email"
              className="bg-white rounded-l-md"
              rightSection={
                <IconSend
                  {...iconDefaultProps}
                  className=" text-primary-900 font-bold text-xl"
                />
              }
            />
          </Box>
        </Box>
        {...groups}
      </SimpleGrid>

      <Divider className="my-8" />
      <Box className="flex flex-col md:flex-row justify-between items-center text-center mt-4 space-y-4 md:space-y-0">
        <Text size="sm" className="w-full md:w-auto mb-4 md:mb-0">
          © 2024 Dr Helina Dental Clinic. All rights reserved.
        </Text>
        <Group className="justify-center mb-4 md:mb-0">
          <Text>Pay With</Text>
          <Image alt="telebirr" height={40} width={60} src="/telebirr.png" />
          <Image alt="chapa" height={30} width={60} src="/chapa.png" />
        </Group>
        <Group gap={0} className="justify-center md:justify-start">
          <Text size="sm" className="mr-2">
            Keep In Touch{" "}
          </Text>
          <ActionIcon
            color="var(--mantine-text-color)"
            size="lg"
            variant="subtle"
          >
            <IconBrandTwitter {...iconDefaultProps} />
          </ActionIcon>
          <ActionIcon
            color="var(--mantine-text-color)"
            size="lg"
            variant="subtle"
          >
            <IconBrandYoutube {...iconDefaultProps} />
          </ActionIcon>
          <ActionIcon
            color="var(--mantine-text-color)"
            size="lg"
            variant="subtle"
          >
            <IconBrandInstagram {...iconDefaultProps} />
          </ActionIcon>
          <ActionIcon
            color="var(--mantine-text-color)"
            size="lg"
            variant="subtle"
          >
            <IconBrandFacebook {...iconDefaultProps} />
          </ActionIcon>
        </Group>
      </Box>
    </footer>
  );
}

export default FooterSection;
