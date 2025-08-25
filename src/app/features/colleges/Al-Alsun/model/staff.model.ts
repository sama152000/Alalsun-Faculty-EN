export interface StaffMember {
  id: number;
  name: string;
  position: string;
  department: string;
  email?: string;
  phone?: string;
  image: string;
  bio?: string;
  specialization?: string;
  education?: string[];
  experience?: string[];
  publications?: string[];
  researchInterests?: string[];
}

export interface Department {
  id: string;
  name: string;
  arabicName?: string;
}