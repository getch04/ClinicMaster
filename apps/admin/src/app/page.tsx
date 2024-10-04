"use client";
import {
  AppShell,
  Box,
  Collapse,
  Group,
  ScrollArea,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconChevronDown,
  IconChevronRight,
  IconMenu2,
} from "@tabler/icons-react";
import { useState } from "react";
import { Dashboard } from "./components";
import menuItems from "./components/dashboard/menu_items";
import Hero from "./website/hero/page";

// MainLink Component (updated)
const MainLink = ({
  icon: Icon,
  label,
  link = "",
  subItems = [],
  onClick,
  isActive,
  isSubMenuActive,
  isOpen,
  setOpenMenus,
  setActiveSubMenu,
}: {
  icon: any;
  label: any;
  link?: any;
  subItems?: any[];
  onClick: any;
  isActive: any;
  isSubMenuActive: any;
  isOpen: any;
  setOpenMenus: any;
  setActiveSubMenu: any;
}) => {
  const hasSubItems = subItems && subItems.length > 0;

  // Check if any submenu is active
  const isAnySubmenuActive = subItems.some(
    (subItem) => subItem.link === isSubMenuActive
  );

  return (
    <>
      <UnstyledButton
        onClick={() => {
          if (hasSubItems) {
            setOpenMenus((prev: any) => ({ ...prev, [label]: !isOpen }));
          } else {
            onClick(link);
          }
        }}
        className={`w-full p-3 rounded-sm transition-colors duration-200 ${
          isActive || isAnySubmenuActive
            ? "bg-primary-600 text-white"
            : "hover:bg-secondary-800 text-secondary-100"
        } ${isAnySubmenuActive ? "bg-secondary-800" : ""}`}
      >
        <Group justify="space-between" align="center">
          <Group>
            <Icon size="1.1rem" stroke={1.5} />
            <Text size="sm" fw={500}>
              {label}
            </Text>
          </Group>
          {hasSubItems &&
            (isOpen ? (
              <IconChevronDown size="1rem" />
            ) : (
              <IconChevronRight size="1rem" />
            ))}
        </Group>
      </UnstyledButton>

      {hasSubItems && (
        <Collapse in={isOpen}>
          <div className="ml-4">
            {subItems.map((subItem) => (
              <UnstyledButton
                key={subItem.link}
                onClick={() => {
                  onClick(subItem.link);
                  setActiveSubMenu(subItem.link);
                }}
                className={`w-full p-2 rounded-sm transition-colors duration-200 ${
                  isSubMenuActive === subItem.link
                    ? "bg-primary-500 text-white"
                    : "hover:bg-secondary-700 text-secondary-200"
                }`}
              >
                <Text size="sm">{subItem.label}</Text>
              </UnstyledButton>
            ))}
          </div>
        </Collapse>
      )}
    </>
  );
};

// Home Component (updated)
const Home = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [activeLink, setActiveLink] = useState("/");
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setActiveSubMenu(null);
    console.log(`Navigating to: ${link}`);
  };

  return (
    <AppShell
      padding="md"
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      header={{ height: 60 }}
    >
      <AppShell.Header className="bg-secondary-800 flex justify-between items-center px-4">
        <Text c="primary" size="xl" fw={700}>
          Dental Clinic
        </Text>
        <UnstyledButton onClick={toggle} className="md:hidden">
          <IconMenu2 color="white" />
        </UnstyledButton>
      </AppShell.Header>

      <AppShell.Navbar p="xs" className="bg-secondary-900 flex flex-col">
        <ScrollArea className="flex-grow">
          {menuItems.map((item) => (
            <MainLink
              key={item.label}
              {...item}
              isActive={
                activeLink === item.link ||
                (item.subItems &&
                  item.subItems.some((sub) => sub.link === activeLink))
              }
              isSubMenuActive={activeSubMenu}
              isOpen={openMenus[item.label]}
              onClick={handleLinkClick}
              setOpenMenus={setOpenMenus}
              setActiveSubMenu={setActiveSubMenu}
            />
          ))}
        </ScrollArea>
        <Box className="border-t border-white pt-4 mt-4 sticky bottom-0 bg-secondary-900">
          <Text size="xs" c="secondary-300" className="text-center text-white">
            © 2024 Dental Clinic Admin
          </Text>
        </Box>
      </AppShell.Navbar>

      <AppShell.Main className="bg-secondary-50">
        <Box p="md">
          <Text size="xl" fw={700} mb="lg" className="text-secondary-900">
            {activeLink === "/"
              ? "Dashboard"
              : (activeLink.split("/").pop()?.charAt(0).toUpperCase() || "") +
                  activeLink.split("/").pop()?.slice(1) || ""}
          </Text>
          {activeLink === "/" && <Dashboard />}
          {activeLink !== "/" && (
            <Hero />
          )}
        </Box>
      </AppShell.Main>
    </AppShell>
  );
};

export default Home;
