// src/app/models/footer.model.ts
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
