export interface SiteSettings {
  // Logo Settings
  logoUrl: string;
  logoAlt: string;
  
  // Faculty Information
  facultyName: string;
  facultySubtitle: string;
  universityName: string;
  established: string;
  
  // Contact Information
  contactInfo: ContactSettings;
  
  // Social Media
  socialMedia: SocialMediaSettings;
  
  // Site Configuration
  siteConfig: SiteConfiguration;
}

export interface ContactSettings {
  address: {
    english: string;
    arabic?: string;
  };
  phone: string;
  email: string;
  website: string;
  location: {
    lat: number;
    lng: number;
  };
}

export interface SocialMediaSettings {
  facebook: string;
  youtube?: string;
  linkedin?: string;
  twitter?: string;
}

export interface SiteConfiguration {
  defaultLanguage: 'en' | 'ar';
  timezone: string;
  maintenanceMode: boolean;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
}

export interface IconOption {
  value: string;
  label: string;
  icon: string;
}

export interface SettingsUpdateResult {
  success: boolean;
  message: string;
}