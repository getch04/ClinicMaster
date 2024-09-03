"use client";

import {
  Group,
  Divider,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  AppShell,
  Text,
  Box,
  Menu,
  Button,
  UnstyledButton,
  TextInput,
} from "@mantine/core";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import {
  IconHome,
  IconChevronDown,
  IconQuestionMark,
  IconUserCircle,
  IconPhone,
  IconShoppingCart,
} from "@tabler/icons-react";
import { iconDefaultProps } from "../../../_shared";
import Image from "next/image";

const Header: React.FC = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <AppShell.Header
      withBorder={true}
      style={{
        position: "sticky",
        top: 0,
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
            <UnstyledButton>
              <Image
                src="/logo1.png"
                alt="Logo"
                width={130} // Adjust the width as needed
                height={40} // Adjust the height as needed
              />
            </UnstyledButton>
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
            <Link href="/about" passHref>
              <UnstyledButton>About</UnstyledButton>
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
            <Link href="/blogs" passHref>
              <UnstyledButton>Blogs</UnstyledButton>
            </Link>
          </Group>

          {/* Right End */}
          <Group gap="md" justify="end" align="center">
            <Button
              variant="outline"
              leftSection={<IconShoppingCart {...iconDefaultProps} />}
            >
              Cart
            </Button>
            <Button
              variant="outline"
              leftSection={<IconPhone {...iconDefaultProps} />}
            >
              Call Us
            </Button>
            <Button variant="Filled">Book Appointment</Button>
          </Group>
        </Group>
      </Box>
    </AppShell.Header>
  );
};

export default Header;
