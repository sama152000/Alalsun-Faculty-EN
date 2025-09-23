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
      overview: 'The English Language Department offers comprehensive programs in literature, linguistics, and translation. It was established in 2016 and aims to prepare graduates for the job market with strong language and research skills.',
      type: 'undergraduate',
      image: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg',
      icon: 'pi pi-book',
      established: '2016',
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
      overview: 'Specialized in Arabic linguistics, literature, and cultural studies. The department also serves non-native speakers of Arabic.',
      type: 'undergraduate',
      image: 'https://images.pexels.com/photos/3014019/pexels-photo-3014019.jpeg',
      icon: 'pi pi-book',
      established: '2016',
      programs: [
        {
          id: 'p3',
          name: 'BA in Arabic Literature',
          description: 'Study Arabic literature, criticism, and linguistics.',
          duration: '4 years',
          degree: 'Bachelor'
        },
        {
          id: 'p4',
          name: 'Diploma in Arabic Linguistics',
          description: 'Postgraduate study of Arabic language structures and phonetics.',
          duration: '2 years',
          degree: 'Diploma'
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
      established: '2016',
      programs: [
        {
          id: 'p5',
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
    },
    {
      id: '4',
      name: 'German Language Department',
      shortName: 'German Dept',
      overview: 'The German Language Department provides students with language, literature, and translation skills, with a focus on German culture.',
      type: 'undergraduate',
      image: 'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg',
      icon: 'pi pi-book',
      established: '2016',
      programs: [
        {
          id: 'p6',
          name: 'BA in German Studies',
          description: 'Covers German language, literature, and translation studies.',
          duration: '4 years',
          degree: 'Bachelor'
        }
      ],
      faculty: [
        {
          id: 'f5',
          name: 'Dr. Hans Muller',
          title: 'Lecturer',
          specialization: 'German Linguistics',
          email: 'hans.muller@luxor.edu'
        }
      ],
      activities: [
        {
          id: 'a4',
          title: 'German Cultural Day',
          description: 'Annual celebration of German culture with workshops and performances.',
          date: '2025-06-01'
        }
      ],
      contact: {
        email: 'german.dept@luxor.edu',
        office: 'Building D, Room 201',
        headOfDepartment: 'Dr. Hans Muller'
      },
      route: '/alalsun-faculty/departments/german'
    },
    {
      id: '5',
      name: 'Chinese Language Department',
      shortName: 'Chinese Dept',
      overview: 'Dedicated to teaching Chinese language and culture, with exchange opportunities via Confucius Classroom.',
      type: 'undergraduate',
      image: 'https://images.pexels.com/photos/3204950/pexels-photo-3204950.jpeg',
      icon: 'pi pi-book',
      established: '2019',
      programs: [
        {
          id: 'p7',
          name: 'BA in Chinese Language',
          description: 'Comprehensive study of Chinese language, culture, and translation.',
          duration: '4 years',
          degree: 'Bachelor'
        }
      ],
      faculty: [
        {
          id: 'f6',
          name: 'Dr. Li Wei',
          title: 'Lecturer',
          specialization: 'Chinese Literature',
          email: 'li.wei@luxor.edu'
        }
      ],
      activities: [
        {
          id: 'a5',
          title: 'Chinese Cultural Festival',
          description: 'Showcasing Chinese arts, language activities, and calligraphy workshops.',
          date: '2025-07-10'
        }
      ],
      contact: {
        email: 'chinese.dept@luxor.edu',
        office: 'Building E, Room 305',
        headOfDepartment: 'Dr. Li Wei'
      },
      route: '/alalsun-faculty/departments/chinese'
    },
    {
      id: '6',
      name: 'Italian Language Department',
      shortName: 'Italian Dept',
      overview: 'Focuses on Italian language and literature, equipping students with translation and cultural knowledge.',
      type: 'undergraduate',
      image: 'https://images.pexels.com/photos/532826/pexels-photo-532826.jpeg',
      icon: 'pi pi-book',
      established: '2016',
      programs: [
        {
          id: 'p8',
          name: 'BA in Italian Studies',
          description: 'Covers Italian language, literature, and translation studies.',
          duration: '4 years',
          degree: 'Bachelor'
        }
      ],
      faculty: [
        {
          id: 'f7',
          name: 'Dr. Maria Rossi',
          title: 'Assistant Professor',
          specialization: 'Italian Literature',
          email: 'maria.rossi@luxor.edu'
        }
      ],
      activities: [
        {
          id: 'a6',
          title: 'Italian Art & Culture Seminar',
          description: 'An event to explore Italian art, culture, and language practice.',
          date: '2025-08-15'
        }
      ],
      contact: {
        email: 'italian.dept@luxor.edu',
        office: 'Building F, Room 104',
        headOfDepartment: 'Dr. Maria Rossi'
      },
      route: '/alalsun-faculty/departments/italian'
    },
    {
      id: '7',
      name: 'Spanish Language Department',
      shortName: 'Spanish Dept',
      overview: 'Provides courses in Spanish language, literature, and Latin American culture.',
      type: 'undergraduate',
      image: 'https://images.pexels.com/photos/597909/pexels-photo-597909.jpeg',
      icon: 'pi pi-book',
      established: '2016',
      programs: [
        {
          id: 'p9',
          name: 'BA in Spanish Studies',
          description: 'Comprehensive program covering Spanish and Latin American literature and culture.',
          duration: '4 years',
          degree: 'Bachelor'
        }
      ],
      faculty: [
        {
          id: 'f8',
          name: 'Dr. Carlos Gomez',
          title: 'Associate Professor',
          specialization: 'Spanish Literature',
          email: 'carlos.gomez@luxor.edu'
        }
      ],
      activities: [
        {
          id: 'a7',
          title: 'Hispanic Culture Week',
          description: 'Events focusing on Spanish and Latin American cultures.',
          date: '2025-09-20'
        }
      ],
      contact: {
        email: 'spanish.dept@luxor.edu',
        office: 'Building G, Room 207',
        headOfDepartment: 'Dr. Carlos Gomez'
      },
      route: '/alalsun-faculty/departments/spanish'
    },
    {
      id: '8',
      name: 'Russian Language Department',
      shortName: 'Russian Dept',
      overview: 'Offers Russian language, literature, and cultural studies, with opportunities for translation practice.',
      type: 'undergraduate',
      image: 'https://images.pexels.com/photos/8848995/pexels-photo-8848995.jpeg',
      icon: 'pi pi-book',
      established: '2016',
      programs: [
        {
          id: 'p10',
          name: 'BA in Russian Studies',
          description: 'Covers Russian language, literature, and translation skills.',
          duration: '4 years',
          degree: 'Bachelor'
        }
      ],
      faculty: [
        {
          id: 'f9',
          name: 'Dr. Ivan Petrov',
          title: 'Professor',
          specialization: 'Russian Linguistics',
          email: 'ivan.petrov@luxor.edu'
        }
      ],
      activities: [
        {
          id: 'a8',
          title: 'Russian Literature Conference',
          description: 'Conference on Russian literature and translation studies.',
          date: '2025-10-05'
        }
      ],
      contact: {
        email: 'russian.dept@luxor.edu',
        office: 'Building H, Room 108',
        headOfDepartment: 'Dr. Ivan Petrov'
      },
      route: '/alalsun-faculty/departments/russian'
    }
  ];

  getAllDepartments(): Observable<Department[]> {
    return of(this.mockDepartments);
  }

  getDepartmentById(id: string): Observable<Department | undefined> {
    const department = this.mockDepartments.find(d => d.id === id);
    return of(department);
  }

  addDepartment(department: Department): Observable<any> {
    // Generate a new ID for the department
    const newDepartment = {
      ...department,
      id: (this.mockDepartments.length + 1).toString()
    };
    this.mockDepartments.push(newDepartment);
    return of({ success: true, id: newDepartment.id });
  }

  updateDepartment(id: string, updatedDepartment: Department): Observable<any> {
    const index = this.mockDepartments.findIndex(d => d.id === id);
    if (index !== -1) {
      this.mockDepartments[index] = { ...updatedDepartment, id };
      return of({ success: true });
    }
    return of({ success: false, error: 'Department not found' });
  }

  deleteDepartment(id: string): Observable<any> {
    const index = this.mockDepartments.findIndex(d => d.id === id);
    if (index !== -1) {
      this.mockDepartments.splice(index, 1);
      return of({ success: true });
    }
    return of({ success: false, error: 'Department not found' });
  }
}
