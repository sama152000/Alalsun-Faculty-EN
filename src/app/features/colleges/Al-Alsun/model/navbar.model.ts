// src/app/models/layout.model.ts
export interface FacultyInfo {
  logoUrl: string; // e.g., "assets/logo.jpg"
  name: string; // e.g., "Faculty of Al-Alsun"
  subtitle: string; // e.g., "Luxor University"
  universityName: string; // e.g., "Luxor University"
  established: string; // e.g., "EST. 2019"
}

export interface NavbarItem {
  label: string;
  icon?: string;
  route?: string;
  children?: NavbarItem[];
}

export interface FooterLink {
  title: string;
  url: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  universityWebsite: string;
  languages: { value: string; label: string }[];
}

export interface Footer {
  logoIcon: string;
  title: string;
  subtitle: string;
  tagline: string;
  socialLinks: { platform: string; url: string; icon: string }[];
  quickLinks: FooterSection;
  academicLinks: FooterSection;
  resourceLinks: FooterSection;
  copyright: string;
  contactMethods: ContactInfo;
}

export interface LayoutData {
  facultyInfo: FacultyInfo;
  navbarItems: NavbarItem[];
  footer: Footer;
}