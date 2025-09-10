export interface ContactInfo {
  address: {
    english: string;
  };
  phone: string;
  email: string;
  website: string;
  facebook: string;
  location: {
    lat: number;
    lng: number;
  };
}

export interface ContactForm {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export interface DirectContact {
  department: string;
  email: string;
  description: string;
  icon: string;
}

export interface ContactSubmissionResult {
  success: boolean;
  message: string;
}

export interface ContactMethod {
  icon: string;
  title: string;
  primary: string;
  secondary: string;
  color: string;
}

export interface CampusInfo {
  name: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
  phone: string;
  email: string;
}

export interface CampusFeature {
  icon: string;
  title: string;
  description: string;
}
