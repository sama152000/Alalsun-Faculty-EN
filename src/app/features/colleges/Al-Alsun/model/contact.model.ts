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