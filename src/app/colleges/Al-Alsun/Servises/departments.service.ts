import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Department } from '../model/department.model'; // Adjust path as needed

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  private mockDepartments: Department[] = [
    {
      id: '1',
      name: 'English Language Department',
      shortName: 'English Dept',
      overview: 'The English Language Department offers comprehensive programs in literature, linguistics, and translation.',
      type: 'undergraduate',
      image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg',
      icon: 'pi pi-book',
      established: '1995',
      programs: [
        {
          id: 'p1',
          name: 'BA in English Literature',
          description: 'Study classic and modern English literature with a focus on critical analysis.',
          duration: '4 years',
          degree: 'Bachelor'
        },
        {
          id: 'p2',
          name: 'BA in Translation',
          description: 'Develop skills in English-Arabic translation and interpretation.',
          duration: '4 years',
          degree: 'Bachelor'
        }
      ],
      faculty: [
        {
          id: 'f1',
          name: 'Dr. Ahmed Mostafa',
          title: 'Professor',
          specialization: 'English Literature',
          email: 'ahmed.mostafa@luxor.edu',
          photo: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg'
        },
        {
          id: 'f2',
          name: 'Dr. Sarah Ali',
          title: 'Associate Professor',
          specialization: 'Linguistics',
          email: 'sarah.ali@luxor.edu'
        }
      ],
      activities: [
        {
          id: 'a1',
          title: 'Annual Literature Symposium',
          description: 'A conference for students to present research on English literature.',
          date: '2025-03-15',
          image: 'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg'
        }
      ],
      contact: {
        email: 'english.dept@luxor.edu',
        phone: '+20 123 456 7890',
        office: 'Building A, Room 101',
        headOfDepartment: 'Dr. Ahmed Mostafa'
      },
      route: '/alalsun-faculty/departments/english'
    },
    {
      id: '2',
      name: 'Arabic Language Department',
      shortName: 'Arabic Dept',
      overview: 'Specialized in Arabic linguistics, literature, and cultural studies for postgraduate students.',
      type: 'postgraduate',
      image: 'https://images.pexels.com/photos/3014019/pexels-photo-3014019.jpeg',
      icon: 'pi pi-book',
      established: '2000',
      programs: [
        {
          id: 'p3',
          name: 'MA in Arabic Linguistics',
          description: 'Advanced study of Arabic language structures and phonetics.',
          duration: '2 years',
          degree: 'Master'
        }
      ],
      faculty: [
        {
          id: 'f3',
          name: 'Dr. Fatima Hassan',
          title: 'Professor',
          specialization: 'Arabic Literature',
          email: 'fatima.hassan@luxor.edu',
          photo: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg'
        }
      ],
      activities: [
        {
          id: 'a2',
          title: 'Arabic Poetry Workshop',
          description: 'A workshop for students to explore classical and modern Arabic poetry.',
          date: '2025-04-10'
        }
      ],
      contact: {
        email: 'arabic.dept@luxor.edu',
        phone: '+20 987 654 3210',
        office: 'Building B, Room 202',
        headOfDepartment: 'Dr. Fatima Hassan'
      },
      route: '/alalsun-faculty/departments/arabic'
    },
    {
      id: '3',
      name: 'French Language Department',
      shortName: 'French Dept',
      overview: 'Focuses on French language, literature, and cultural studies for undergraduates.',
      type: 'undergraduate',
      image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg',
      icon: 'pi pi-book',
      established: '1985',
      programs: [
        {
          id: 'p4',
          name: 'BA in French Language',
          description: 'Comprehensive study of French language and culture.',
          duration: '4 years',
          degree: 'Bachelor'
        }
      ],
      faculty: [
        {
          id: 'f4',
          name: 'Dr. Jean Dupont',
          title: 'Associate Professor',
          specialization: 'French Literature',
          email: 'jean.dupont@luxor.edu'
        }
      ],
      activities: [
        {
          id: 'a3',
          title: 'French Film Festival',
          description: 'Showcasing French cinema with student discussions.',
          date: '2025-05-20',
          image: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg'
        }
      ],
      contact: {
        email: 'french.dept@luxor.edu',
        office: 'Building C, Room 303',
        headOfDepartment: 'Dr. Jean Dupont'
      },
      route: '/alalsun-faculty/departments/french'
    }
  ];

  getAllDepartments(): Observable<Department[]> {
    return of(this.mockDepartments);
  }
}