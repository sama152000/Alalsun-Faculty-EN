export interface FacultyService {
  id: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  icon: string;
  establishedDate?: string;
  category: ServiceCategory;
  contact: ServiceContact;
  details: ServiceDetails;
  route: string;
}

export enum ServiceCategory {
  LANGUAGE_CENTER = 'language-center',
  CULTURAL_CENTER = 'cultural-center',
  ACADEMIC_JOURNAL = 'academic-journal',
  RESEARCH_CENTER = 'research-center'
}

export interface ServiceContact {
  phone?: string;
  email?: string;
  website?: string;
  facebook?: string;
  contactPerson?: string;
  office?: string;
}

export interface ServiceDetails {
  vision?: string;
  mission?: string;
  objectives?: string[];
  activities?: ServiceActivity[];
  staff?: ServiceStaff[];
  programs?: ServiceProgram[];
  achievements?: ServiceAchievement[];
  editorialBoard?: EditorialBoardMember[];
  specifications?: ServiceSpecification[];
}

export interface ServiceActivity {
  id: string;
  name: string;
  description: string;
  coordinator?: string;
}

export interface ServiceStaff {
  id: string;
  name: string;
  position: string;
  role: string;
  email?: string;
  photo?: string;
}

export interface ServiceProgram {
  id: string;
  name: string;
  description: string;
  duration?: string;
  requirements?: string[];
}

export interface ServiceAchievement {
  id: string;
  title: string;
  description: string;
  date: Date;
  image?: string;
}

export interface EditorialBoardMember {
  id: string;
  name: string;
  position: string;
  role: string;
  affiliation?: string;
  email?: string;
}

export interface ServiceSpecification {
  label: string;
  value: string;
  icon?: string;
}