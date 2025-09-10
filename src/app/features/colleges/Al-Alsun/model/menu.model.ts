export interface MenuItem {
  id: number;
  name: string;
  type: MenuType;
  headerType?: HeaderType;
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

export interface FacultyInfo {
  name: string;
  subtitle: string;
  universityName: string;
  established: string;
}

export interface NavbarItem {
  label: string;
  route?: string;
  target?: string;
  parentId?: number | null;
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
  facultyInfo?: FacultyInfo;
  navbarItems?: NavbarItem[];
  submenu?: Submenu;
}

export interface FooterLink {
  title: string;
  url: string;
  target?: string;
}

export interface FooterSocialLink {
  platform: string;
  url: string;
  icon: string;
  target?: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterData {
  title: string;
  subtitle: string;
  tagline: string;
  socialLinks: FooterSocialLink[];
  quickLinks: FooterSection;
  academicLinks: FooterSection;
  resourceLinks: FooterSection;
  copyright: string;
  contactMethods: ContactInfo;
}

export interface SocialMediaIcon {
  label: string;
  value: string;
  color: string;
}