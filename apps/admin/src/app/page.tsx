"use client";
import {
  AppShell,
  Box,
  Collapse,
  Group,
  rem,
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
  IconStethoscope,
  IconUpload,
} from "@tabler/icons-react";
import { useState } from "react";

const menuItems = [
  { icon: IconDashboard, label: "Dashboard", link: "/" },
  {
    icon: IconSettings,
    label: "Settings",
    subItems: [
      { label: "General", link: "/settings/general" },
      { label: "Security", link: "/settings/security" },
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

const MainLink = ({
  icon: Icon,
  label,
  link,
  subItems,
  onClick,
  isActive,
  isOpen,
}) => {
  const hasSubItems = subItems && subItems.length > 0;

  return (
    <>
      <UnstyledButton
        onClick={() => onClick(link)}
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
                onClick={() => onClick(subItem.link)}
                className={`w-full p-2 rounded-sm transition-colors duration-200 ${
                  isActive === subItem.link
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

const Home = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [activeLink, setActiveLink] = useState("/");
  const [openMenus, setOpenMenus] = useState({});

  const handleLinkClick = (link) => {
    setActiveLink(link);
    // Here you would typically use a router to navigate
    console.log(`Navigating to: ${link}`);
  };

  const handleMenuClick = (item) => {
    if (item.subItems) {
      setOpenMenus((prev) => ({ ...prev, [item.label]: !prev[item.label] }));
    } else {
      handleLinkClick(item.link);
    }
  };

  const renderContent = () => {
    return (
      <Box p="md">
        <Text size="xl" fw={700} mb="lg" className="text-secondary-900">
          {activeLink === "/"
            ? "Dashboard"
            : activeLink.split("/").pop().charAt(0).toUpperCase() +
              activeLink.split("/").pop().slice(1)}
        </Text>
        {activeLink === "/" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: IconDashboard, label: "Total Users", value: "3" },
              { icon: IconPhoto, label: "Total Photos", value: "9" },
              { icon: IconStethoscope, label: "Appointments", value: "15" },
            ].map((stat, index) => (
              <Box key={index} className="bg-white p-4 rounded-lg shadow-md">
                <Group>
                  <Box className="bg-primary-100 p-3 rounded-full">
                    <stat.icon
                      size={rem(24)}
                      stroke={1.5}
                      className="text-primary-600"
                    />
                  </Box>
                  <div>
                    <Text c="dimmed" size="xs" tt="uppercase" fw={700}>
                      {stat.label}
                    </Text>
                    <Text fw={700} size="xl" className="text-secondary-800">
                      {stat.value}
                    </Text>
                  </div>
                </Group>
              </Box>
            ))}
          </div>
        )}
        {activeLink !== "/" && (
          <Text className="text-secondary-700">
            Content for {activeLink} goes here.
          </Text>
        )}
      </Box>
    );
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
              isOpen={openMenus[item.label]}
              onClick={(link) => {
                if (item.subItems) {
                  setOpenMenus((prev) => ({
                    ...prev,
                    [item.label]: !prev[item.label],
                  }));
                } else {
                  handleLinkClick(link);
                }
                if (link) handleLinkClick(link);
              }}
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
        {renderContent()}
      </AppShell.Main>
    </AppShell>
  );
};

export default Home;
