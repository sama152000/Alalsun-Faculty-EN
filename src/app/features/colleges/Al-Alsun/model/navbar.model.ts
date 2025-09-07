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

export interface LayoutData {
  facultyInfo: FacultyInfo;
  navbarItems: NavbarItem[];
  submenu: Submenu | null; // تغيير من footer إلى submenu
}