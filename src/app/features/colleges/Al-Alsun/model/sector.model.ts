export interface SectorData {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  viceDean: ViceDeanInfo;
  departments: SectorDepartment[];
  services: SectorService[];
  news: NewsItem[];
  media: MediaItem[];
  statistics: SectorStatistic[];
  activities: ActivityItem[];
  achievements: Achievement[];
}

export interface ViceDeanInfo {
  name: string;
  title: string;
  photo: string;
  email: string;
  office: string;
}

export interface SectorDepartment {
  id: string;
  name: string;
  overview: string;
  responsibilities: string[];
  contact: {
    email: string;
    office: string;
    phone?: string;
  };
}

export interface SectorService {
  id: string;
  name: string;
  description: string;
  steps: string[];
  requiredDocuments: string[];
  downloadableForms?: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  image: string;
  category: string;
}

export interface MediaItem {
  id: string;
  title: string;
  type: 'photo' | 'video' | 'document';
  url: string;
  thumbnail?: string;
  description?: string;
  date: string;
}

export interface SectorStatistic {
  label: string;
  value: string;
  icon: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  date: string;
  image?: string;
  type: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  image?: string;
}