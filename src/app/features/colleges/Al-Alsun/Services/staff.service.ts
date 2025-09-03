import { Injectable } from '@angular/core';
import { StaffMember, Department } from '../model/staff.model';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private staffMembers: StaffMember[] = [
    {
      id: 1,
      name: 'Prof. Mahmoud El-Nouby Ahmed Suleiman',
      position: 'Dean of the Faculty',
      department: 'Administration',
      email: 'dean@alsun.luxor.edu.eg',
      image: 'assets/Picture1.jpg',
      bio: 'Distinguished academic leader with extensive experience in language education and administration.',
      specialization: 'Academic Leadership, Language Education',
      education: ['Ph.D. in Applied Linguistics', 'M.A. in English Literature'],
      experience: ['Dean of Faculty of Al-Alsun (2020-Present)', 'Professor of English (2015-2020)'],
      researchInterests: ['Language Policy', 'Educational Leadership', 'Cross-cultural Communication']
    },
    {
      id: 2,
      name: 'Assoc. Prof. Mohamed Ahmed Sayed Hamza',
      position: 'Vice Dean for Education & Student Affairs',
      department: 'Administration',
      email: 'vice.education@alsun.luxor.edu.eg',
      image: 'assets/Picture2.jpg',
      bio: 'Dedicated educator focused on student development and academic excellence.',
      specialization: 'Student Affairs, Educational Development',
      education: ['Ph.D. in Education', 'M.A. in Applied Linguistics'],
      experience: ['Vice Dean (2019-Present)', 'Associate Professor (2016-2019)'],
      researchInterests: ['Student Development', 'Educational Psychology', 'Language Acquisition']
    },
    {
      id: 3,
      name: 'Prof. Youssef Abbas Ali',
      position: 'Vice Dean for Postgraduate Studies & Research',
      department: 'Administration',
      email: 'vice.research@alsun.luxor.edu.eg',
      image: 'assets/Picture3.jpg',
      bio: 'Leading researcher in language studies with numerous publications and research projects.',
      specialization: 'Research Methodology, Postgraduate Studies',
      education: ['Ph.D. in Linguistics', 'M.A. in Translation Studies'],
      experience: ['Vice Dean for Research (2018-Present)', 'Professor (2014-2018)'],
      researchInterests: ['Translation Studies', 'Corpus Linguistics', 'Research Methodology']
    },
    {
      id: 4,
      name: 'Assoc. Prof. Mahmoud Hamza Mohamed',
      position: 'Vice Dean for Community Service & Environmental Development',
      department: 'Administration',
      email: 'vice.community@alsun.luxor.edu.eg',
      image: 'assets/Picture5.jpg',
      bio: 'Community engagement specialist working on sustainable development projects.',
      specialization: 'Community Development, Environmental Studies',
      education: ['Ph.D. in Environmental Studies', 'M.A. in Social Development'],
      experience: ['Vice Dean for Community Service (2019-Present)', 'Associate Professor (2016-2019)'],
      researchInterests: ['Sustainable Development', 'Community Engagement', 'Environmental Policy']
    },
    {
      id: 5,
      name: 'Dr. Ahmed Mostafa',
      position: 'Professor',
      department: 'English',
      email: 'ahmed.mostafa@luxor.edu.eg',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=500',
      bio: 'Expert in English Literature with focus on contemporary and classical works.',
      specialization: 'English Literature, Literary Criticism',
      education: ['Ph.D. in English Literature', 'M.A. in Comparative Literature'],
      experience: ['Professor (2018-Present)', 'Associate Professor (2014-2018)'],
      researchInterests: ['Victorian Literature', 'Postcolonial Studies', 'Literary Theory']
    },
    {
      id: 6,
      name: 'Dr. Sarah Ali',
      position: 'Associate Professor',
      department: 'English',
      email: 'sarah.ali@luxor.edu.eg',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=500',
      bio: 'Linguistics specialist with expertise in phonetics and language acquisition.',
      specialization: 'Linguistics, Phonetics',
      education: ['Ph.D. in Applied Linguistics', 'M.A. in Phonetics'],
      experience: ['Associate Professor (2017-Present)', 'Assistant Professor (2013-2017)'],
      researchInterests: ['Phonetic Analysis', 'Second Language Acquisition', 'Sociolinguistics']
    },
    {
      id: 7,
      name: 'Dr. Fatima Hassan',
      position: 'Professor',
      department: 'Arabic',
      email: 'fatima.hassan@luxor.edu.eg',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=500',
      bio: 'Renowned scholar in Arabic Literature with extensive research in classical and modern texts.',
      specialization: 'Arabic Literature, Classical Studies',
      education: ['Ph.D. in Arabic Literature', 'M.A. in Classical Arabic'],
      experience: ['Professor (2016-Present)', 'Associate Professor (2012-2016)'],
      researchInterests: ['Classical Arabic Poetry', 'Modern Arabic Literature', 'Literary Criticism']
    },
    {
      id: 8,
      name: 'Dr. Jean Dupont',
      position: 'Associate Professor',
      department: 'French',
      email: 'jean.dupont@luxor.edu.eg',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=500',
      bio: 'French literature expert with specialization in 19th and 20th century works.',
      specialization: 'French Literature, Cultural Studies',
      education: ['Ph.D. in French Literature', 'M.A. in Romance Languages'],
      experience: ['Associate Professor (2018-Present)', 'Assistant Professor (2014-2018)'],
      researchInterests: ['French Romanticism', 'Contemporary French Literature', 'Franco-Arab Cultural Exchange']
    }
  ];

  private departments: Department[] = [
    { id: 'administration', name: 'Administration' },
    { id: 'arabic', name: 'Arabic Language' },
    { id: 'english', name: 'English Language' },
    { id: 'french', name: 'French Language' },
    { id: 'german', name: 'German Language' },
    { id: 'chinese', name: 'Chinese Language' },
    { id: 'italian', name: 'Italian Language' },
    { id: 'spanish', name: 'Spanish Language' },
    { id: 'russian', name: 'Russian Language' }
  ];

  getAllStaff(): StaffMember[] {
    return this.staffMembers;
  }

  getStaffById(id: number): StaffMember | undefined {
    return this.staffMembers.find(member => member.id === id);
  }

  getStaffByDepartment(department: string): StaffMember[] {
    return this.staffMembers.filter(member => 
      member.department.toLowerCase() === department.toLowerCase()
    );
  }

  getDepartments(): Department[] {
    return this.departments;
  }

  searchStaff(query: string): StaffMember[] {
    const searchTerm = query.toLowerCase();
    return this.staffMembers.filter(member =>
      member.name.toLowerCase().includes(searchTerm) ||
      member.department.toLowerCase().includes(searchTerm) ||
      member.position.toLowerCase().includes(searchTerm)
    );
  }

  addStaff(staff: StaffMember): void {
    this.staffMembers.push({
      ...staff,
      education: staff.education || [],
      experience: staff.experience || [],
      researchInterests: staff.researchInterests || [],
      publications: staff.publications || []
    });
  }

  updateStaff(id: number, updatedStaff: StaffMember): void {
    const index = this.staffMembers.findIndex(member => member.id === id);
    if (index !== -1) {
      this.staffMembers[index] = {
        ...updatedStaff,
        education: updatedStaff.education || [],
        experience: updatedStaff.experience || [],
        researchInterests: updatedStaff.researchInterests || [],
        publications: updatedStaff.publications || []
      };
    }
  }

  deleteStaff(id: number): void {
    this.staffMembers = this.staffMembers.filter(member => member.id !== id);
  }
}