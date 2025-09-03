export interface Department {
  id: string;
  name: string;
  shortName: string;
  overview: string;
  type: 'undergraduate' | 'postgraduate';
  image: string;
  icon: string;
  established: string;
  programs: Program[];
  faculty: Faculty[];
  activities: Activity[];
  contact: Contact;
  route: string;
}

export interface Program {
  id: string;
  name: string;
  description: string;
  duration: string;
  degree: string;
}

export interface Faculty {
  id: string;
  name: string;
  title: string;
  specialization: string;
  email: string;
  photo?: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  date: string;
  image?: string;
}

export interface Contact {
  email: string;
  phone?: string;
  office: string;
  headOfDepartment: string;
}



interface FacultyMember {
  id: string;
  name: string;
  title: string;
  email: string;
  specialization: string;
  imageUrl: string;
}