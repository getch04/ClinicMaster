"use client";
import {
  AppShell,
  Box,
  Collapse,
  Group,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconAd,
  IconBrandFacebook,
  IconChevronDown,
  IconChevronRight,
  IconComponents,
  IconDashboard,
  IconFileText,
  IconMail,
  IconMenu2,
  IconPhoto,
  IconSettings,
  IconUpload,
} from "@tabler/icons-react";
import { useState } from "react";
import { Dashboard } from "./components";

// Menu Items
const menuItems = [
  { icon: IconDashboard, label: "Dashboard", link: "/" },
  {
    icon: IconSettings,
    label: "Settings",
    subItems: [
      { label: "General", link: "/settings/general" },
      { label: "Security", link: "/settings/security" },
      { label: "Website Configurations", link: "/settings/website-configurations" },
    ],
  },
  { icon: IconMail, label: "Email Configuration", link: "/email" },
  { icon: IconFileText, label: "Page", link: "/page" },
  { icon: IconMenu2, label: "Menu", link: "/menu" },
  {
    icon: IconComponents,
    label: "Sections",
    subItems: [
      { label: "Captcha", link: "/sections/captcha" },
      { label: "News", link: "/sections/news" },
      { label: "Doctor", link: "/sections/doctor" },
      { label: "Elements", link: "/sections/elements" },
      { label: "Pricing", link: "/sections/pricing" },
      { label: "FAQ", link: "/sections/faq" },
    ],
  },
  { icon: IconPhoto, label: "Photo and Video", link: "/media" },
  { icon: IconAd, label: "Advertisement", link: "/ads" },
  { icon: IconUpload, label: "File Upload (Media)", link: "/upload" },
  { icon: IconBrandFacebook, label: "Social Media", link: "/social" },
];

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

  return (
    <>
      <UnstyledButton
        onClick={() => {
          if (hasSubItems) {
            setOpenMenus((prev) => ({ ...prev, [label]: !isOpen }));
          } else {
            onClick(link);
          }
        }}
        className={`w-full p-3 rounded-sm transition-colors duration-200 ${
          isActive
            ? "bg-primary-600 text-white"
            : "hover:bg-secondary-800 text-secondary-100"
        }`}
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
  const [openMenus, setOpenMenus] = useState({});

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setActiveSubMenu(null); // Reset active submenu when parent is clicked
    console.log(`Navigating to: ${link}`);
  };

  return (
    <AppShell
      padding="md"
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      header={{ height: 60 }}
    >
      <AppShell.Header className="bg-secondary-800 flex justify-between items-center px-4">
        <Text c="primary" size="xl" fw={700}>
          Dental Clinic
        </Text>
        <Group>
          <Text c="secondary-100" size="lg" className="text-white">
            Admin Panel
          </Text>
          <UnstyledButton onClick={toggle} className="md:hidden">
            <IconMenu2 color="white" />
          </UnstyledButton>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="xs" className="bg-secondary-900 flex flex-col">
        <div className="flex-grow">
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
              onClick={(link) => handleLinkClick(link)}
              setOpenMenus={setOpenMenus}
              setActiveSubMenu={setActiveSubMenu}
            />
          ))}
        </div>
        <Box className="border-t border-white pt-4 mt-4">
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
              : activeLink.split("/").pop().charAt(0).toUpperCase() +
                activeLink.split("/").pop().slice(1)}
          </Text>
          {activeLink === "/" && <Dashboard />}
          {activeLink !== "/" && (
            <Text className="text-secondary-700">
              Content for {activeLink} goes here.
            </Text>
          )}
        </Box>
      </AppShell.Main>
    </AppShell>
  );
};

export default Home;
