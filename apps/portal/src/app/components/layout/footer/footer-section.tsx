"use client";
import React from "react";
import {
  Text,
  ActionIcon,
  Group,
  Divider,
  Box,
  SimpleGrid,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandFacebook,
} from "@tabler/icons-react";
import Image from "next/image";
import { footerData } from "./footer-menu";
import { iconDefaultProps } from "../../../../shared";

export function FooterSection() {
  const groups = footerData.map((group) => (
    <div key={group.title} className="mb-4 space-y-2">
      <Text className="text-md font-semibold mb-2">{group.title}</Text>
      {group.links.map((link) => (
        <Text<"a">
          key={link.link}
          className="block  hover:underline py-1"
          component="a"
          href={link.link}
          onClick={(event) => event.preventDefault()}
        >
          {link.label}
        </Text>
      ))}
    </div>
  ));

  return (
    <footer className="px-4 md:px-12 py-8">
      <SimpleGrid
        cols={{ base: 2, sm: 3, md: 4 }}
        spacing="sm"
        className="w-full text-center "
      >
        {groups}
      </SimpleGrid>

      <Divider className="my-8" />
      <Box className="flex flex-col md:flex-row justify-between items-center text-center mt-4 space-y-4 md:space-y-0">
        <Text size="sm" className="w-full md:w-auto mb-4 md:mb-0">
          © 2024 Ethio Mart. All rights reserved.
        </Text>
        <Group className="justify-center mb-4 md:mb-0">
          <Text> Pay With</Text>
          <Image alt="telebirr" height={40} width={60} src="/telebirr.png" />
          <Image alt="chapa" height={30} width={60} src="/chapa.png" />
        </Group>
        <Group gap={0} className="justify-center md:justify-start">
          <Text size="sm" className="mr-2">
            Contact Us With{" "}
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
