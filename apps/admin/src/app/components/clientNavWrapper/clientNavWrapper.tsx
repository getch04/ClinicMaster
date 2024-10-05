'use client';

import {
    Collapse,
    Group,
    Text,
    UnstyledButton,
} from "@mantine/core";
import {
    IconChevronDown,
    IconChevronRight,
} from "@tabler/icons-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const MainLink = ({
  icon: Icon,
  label,
  link = "",
  subItems = [],
  isActive,
  isSubMenuActive,
  isOpen,
  setOpenMenus,
  setActiveSubMenu,
}) => {
  const hasSubItems = subItems && subItems.length > 0;
  const pathname = usePathname();

  const isAnySubmenuActive = subItems.some(
    (subItem) => subItem.link === pathname
  );

  const handleClick = () => {
    if (hasSubItems) {
      setOpenMenus((prev) => ({ ...prev, [label]: !isOpen }));
    }
  };

  return (
    <>
      <UnstyledButton
        onClick={handleClick}
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
              <Link href={subItem.link} key={subItem.link} passHref>
                <UnstyledButton
                  onClick={() => setActiveSubMenu(subItem.link)}
                  className={`w-full p-2 rounded-sm transition-colors duration-200 ${
                    isSubMenuActive === subItem.link
                      ? "bg-primary-500 text-white"
                      : "hover:bg-secondary-700 text-secondary-200"
                  }`}
                >
                  <Text size="sm">{subItem.label}</Text>
                </UnstyledButton>
              </Link>
            ))}
          </div>
        </Collapse>
      )}
    </>
  );
};

const ClientNavWrapper = ({ menuItems }) => {
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [openMenus, setOpenMenus] = useState({});
  const pathname = usePathname();

  useEffect(() => {
    setActiveSubMenu(null);
  }, [pathname]);

  return (
    <>
      {menuItems.map((item) => (
        <MainLink
          key={item.label}
          {...item}
          isActive={pathname === item.link}
          isSubMenuActive={activeSubMenu}
          isOpen={openMenus[item.label]}
          setOpenMenus={setOpenMenus}
          setActiveSubMenu={setActiveSubMenu}
        />
      ))}
    </>
  );
};

export default ClientNavWrapper;