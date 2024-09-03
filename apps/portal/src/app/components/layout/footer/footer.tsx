import { AppShell } from "@mantine/core";
import FooterSection from "./footer-section";

const Footer = () => {
  return (
    <AppShell.Footer
      style={{
        backgroundColor: "var(--mantine-color-primary-0)",
        color: "var(--mantine-text-color)",
        position: "relative",
        marginTop: "1rem",
      }}
    >
      <FooterSection />
    </AppShell.Footer>
  );
};

export default Footer;
