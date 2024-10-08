import {
  IconAd,
  IconAlertTriangle,
  IconBellRinging,
  IconBrandFacebook,
  IconBuildingHospital,
  IconCalendar,
  IconChartBar,
  IconComponents,
  IconDashboard,
  IconMail,
  IconMoneybag,
  IconReportMedical,
  IconSettings,
  IconStethoscope,
  IconUsers,
} from "@tabler/icons-react";

// Enhanced Menu Items
const menuItems = [
  { icon: IconDashboard, label: "Dashboard", link: "/" },
  {
    icon: IconCalendar,
    label: "Appointments",
    subItems: [
      { label: "Schedule", link: "/appointments/schedule" },
      { label: "Calendar", link: "/appointments/calendar" },
      { label: "Reminders", link: "/appointments/reminders" },
    ],
  },
  {
    icon: IconUsers,
    label: "Patients",
    subItems: [
      { label: "Patient List", link: "/patients/list" },
      { label: "Patient Records", link: "/patients/records" },
      { label: "Treatment Plans", link: "/patients/treatment-plans" },
    ],
  },
  {
    icon: IconStethoscope,
    label: "Staff",
    subItems: [
      { label: "Dentists", link: "/staff/dentists" },
      { label: "Hygienists", link: "/staff/hygienists" },
      { label: "Assistants", link: "/staff/assistants" },
      { label: "Receptionists", link: "/staff/receptionists" },
    ],
  },
  {
    icon: IconReportMedical,
    label: "Services",
    subItems: [
      { label: "Treatments", link: "/services/treatments" },
      { label: "Procedures", link: "/services/procedures" },
      { label: "Specialties", link: "/services/specialties" },
    ],
  },
  {
    icon: IconBuildingHospital,
    label: "Inventory",
    subItems: [
      { label: "Equipment", link: "/inventory/equipment" },
      { label: "Supplies", link: "/inventory/supplies" },
      { label: "Orders", link: "/inventory/orders" },
    ],
  },
  {
    icon: IconMoneybag,
    label: "Billing",
    subItems: [
      { label: "Invoices", link: "/billing/invoices" },
      { label: "Payments", link: "/billing/payments" },
      { label: "Insurance Claims", link: "/billing/insurance-claims" },
    ],
  },
  {
    icon: IconChartBar,
    label: "Reports",
    subItems: [
      { label: "Financial Reports", link: "/reports/financial" },
      { label: "Patient Statistics", link: "/reports/patient-stats" },
      { label: "Performance Metrics", link: "/reports/performance" },
    ],
  },
  {
    icon: IconComponents,
    label: "Website",
    subItems: [
      { label: "Hero", link: "/website/hero" },
      { label: "Pages", link: "/website/pages" },
      { label: "Menu", link: "/website/menu" },
      { label: "Sections", link: "/website/sections" },
      { label: "Media", link: "/website/media" },
      { label: "SEO", link: "/website/seo" },
    ],
  },
  { icon: IconMail, label: "Communication", link: "/communication" },
  { icon: IconBrandFacebook, label: "Social Media", link: "/social" },
  { icon: IconAd, label: "Marketing", link: "/marketing" },
  {
    icon: IconSettings,
    label: "Settings",
    subItems: [
      { label: "General", link: "/settings/general" },
      { label: "Security", link: "/settings/security" },
      { label: "Integrations", link: "/settings/integrations" },
    ],
  },
  { icon: IconAlertTriangle, label: "Compliance", link: "/compliance" },
  { icon: IconBellRinging, label: "Notifications", link: "/notifications" },
];

export default menuItems;
