"use client";

import {
  Group,
  rem,
  AppShell,
  Text,
  Box,
  Menu,
  Button,
  UnstyledButton,
  useMantineColorScheme,
  ActionIcon,
  Tooltip,
} from "@mantine/core";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import {
  IconChevronDown,
  IconMoon,
  IconPhone,
  IconShoppingCart,
  IconSun,
} from "@tabler/icons-react";
import Image from "next/image";
import { iconDefaultProps, LanguagePicker } from "../../../../shared";

const Header: React.FC = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <AppShell.Header
      withBorder={true}
      className="sticky top-0 z-50 h-16 bg-card shadow-md"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        height: 70,
        backgroundColor: "var(--card)",
      }}
    >
      <Box
        style={{
          padding: `${rem(8)} ${rem(24)}`,
        }}
      >
        <Group justify="space-between" align="center">
          {/* Left End - Logo */}
          <Link href="/" passHref>
            <Box className="flex items-center transform scale-75">
              <Image
                src="/logo1.png"
                alt="Logo"
                width={130}
                height={40}
                className="mr-3"
              />
            </Box>
          </Link>
          {/* Center Menu */}
          <Group gap="lg">
            <Link href="/" passHref>
              <UnstyledButton>
                <Group>
                  <Text>Home</Text>
                </Group>
              </UnstyledButton>
            </Link>

            <Link href="/services" passHref>
              <Menu>
                <Menu.Target>
                  <UnstyledButton display={"flex"}>
                    Services {<IconChevronDown {...iconDefaultProps} />}
                  </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item>
                    <Link href="/profile" passHref>
                      <Text>Profile</Text>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link href="/orders" passHref>
                      <Text>Orders</Text>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link href="/logout" passHref>
                      <Text>Logout</Text>
                    </Link>
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Link>
            <Link href="/contacts" passHref>
              <UnstyledButton>Contacts</UnstyledButton>
            </Link>
            <Link href="/about" passHref>
              <UnstyledButton>About</UnstyledButton>
            </Link>
            <Link href="/about" passHref>
              <UnstyledButton>Testimonials</UnstyledButton>
            </Link>
            <Link href="/blogs" passHref>
              <UnstyledButton>News</UnstyledButton>
            </Link>
          </Group>

          {/* Right End */}
          <Group gap="md" justify="end" align="center">
            <Tooltip label="Toggle color scheme" withArrow>
              <ActionIcon
                onClick={() => toggleColorScheme()}
                variant="default"
                size="lg"
                aria-label="Toggle color scheme"
              >
                {colorScheme === "light" ? (
                  <IconMoon {...iconDefaultProps} stroke={1.5} />
                ) : (
                  <IconSun {...iconDefaultProps} stroke={1.5} />
                )}
              </ActionIcon>
            </Tooltip>
            <LanguagePicker />
            <Button
              color="var(--mantine-color-primary-7)"
              size="md"
              className="rounded-md"
              variant="Filled"
            >
              Book Appointment
            </Button>
          </Group>
        </Group>
      </Box>
    </AppShell.Header>
  );
};

export default Header;
