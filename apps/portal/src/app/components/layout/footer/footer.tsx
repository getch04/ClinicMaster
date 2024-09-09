import { AppShell } from "@mantine/core";
import FooterSection from "./footer-section";

const Footer = () => {
  return (
    <AppShell.Footer className="bg-gradient-to-r from-primary-900 to-primary-600 text-white relative mt-4">
      <FooterSection />
    </AppShell.Footer>
  );
};

export default Footer;
