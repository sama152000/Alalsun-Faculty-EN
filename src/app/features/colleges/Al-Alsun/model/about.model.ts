export interface DeanInfo {
  id: string;
  name: string;
  position: string;
  photo: string;
  greeting: string;
  message: string[];
  highlight: string;
  callToAction: string;
  closing: string[];
}

export interface ViceDean {
  id: string;
  name: string;
  position: string;
  image: string;
  message: string[];
  sector: string;
  email: string;
  office: string;
}

export interface HistoryEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: string;
}

export interface VisionMission {
  id: string;
  type: 'vision' | 'mission';
  title: string;
  content: string[];
  icon: string;
}

export interface FooterLink {
  title: string;
  url: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}