export interface MenuItem {
  id: number;
  name: string; // e.g., "Main Header 2025", "Default Footer"
  type: MenuType;
  headerType?: HeaderType; // Only for headers
  isActive: boolean;
  data: HeaderData | FooterData;
}

export enum MenuType {
  HEADER = 'header',
  FOOTER = 'footer'
}

export enum HeaderType {
  TOP_NAV = 'top_nav',
  SUBMENU = 'submenu',
  MAIN_NAV = 'main_nav'
}

import { FacultyInfo } from './faculty-info.model';

export interface NavbarItem {
  label: string;
  icon?: string;
  route?: string;
  children?: NavbarItem[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  universityWebsite: string;
  languages: { value: string; label: string }[];
}

export interface Submenu {
  copyright: string;
  contactMethods: ContactInfo;
}

export interface HeaderData {
  navbarItems?: NavbarItem[]; // For MainNav
  submenu?: Submenu; // For Submenu
}

export interface FooterLink {
  title: string;
  url: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterData {
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