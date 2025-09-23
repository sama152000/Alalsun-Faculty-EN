import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FacultyService, ServiceCategory } from '../model/services.model';

@Injectable({
  providedIn: 'root'
})
export class FacultyServiceService {
  private services: FacultyService[] = [
    {
      id: 'language-translation-center',
      name: 'Al-Alsun Centre for Languages and Translation',
      shortName: 'Language Center',
      description: 'A leading center for language education and translation services, providing training programs and linguistic consulting.',
      image: './assets/service1.png',
      icon: 'pi pi-globe',
      establishedDate: '25 September 2017',
      category: ServiceCategory.LANGUAGE_CENTER,
      route: '/services/language-translation-center',
      contact: {
        contactPerson: 'Ms. Shaimaa',
        phone: '01021817597',
        email: 'language.center@alsun.luxor.edu.eg'
      },
      details: {
        vision: 'To achieve scientific leadership and excellence in the fields of language teaching and translation locally and internationally in order to achieve knowledge and cultural communication with countries around the world in a way that serves society and contributes to facing current and future challenges.',
        objectives: [
          'Prepare and implement training programs in the different languages taught in the departments of the Faculty of Languages, using the latest educational methods and modern technology in the field of languages and translation for the university and external parties.',
          'Provide language consulting for all languages taught at the faculty.'
        ],
        staff: [
          {
            id: 'mahmoud-elnoubi',
            name: 'Prof. Dr. Mahmoud El-Noubi Ahmed',
            position: 'Chairman of the Board',
            role: 'Chairman of the Board of the Al-Alsun Center for Languages and Translation',
            photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=500'
          },
          {
            id: 'mohammed-farouk',
            name: 'Dr. Muhammed Farouk Muhammed Badr',
            position: 'Director of the Center',
            role: 'Director of the Center',
            photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=500'
          },
          {
            id: 'asmaa-salah',
            name: 'Dr. Asmaa Salah Abdel-Razek',
            position: 'Activity Coordinator',
            role: 'Coordinator of Training and Courses Activities',
            photo: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=500'
          },
          {
            id: 'hany-ali',
            name: 'Dr. Hany Ali',
            position: 'Activity Coordinator',
            role: 'Coordinator of Translation and Linguistic Editing Activities',
            photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=500'
          },
          {
            id: 'lamis-hassan',
            name: 'Dr. Lamis Hassan El-Bana Mohamed',
            position: 'Activity Coordinator',
            role: 'Coordinator of Language Testing Activities',
            photo: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=500'
          },
          {
            id: 'shaimaa-abdallah',
            name: 'Ms. Shaimaa Abdallah',
            position: 'Administrative Officer',
            role: 'Administrative Officer',
            photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=500'
          },
          {
            id: 'salwa-sanousi',
            name: 'Ms. Salwa Sanousi Suleiman',
            position: 'Financial Officer',
            role: 'Financial Officer',
            photo: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400&h=500'
          }
        ],
        activities: [
          {
            id: 'training-courses',
            name: 'Training and Courses',
            description: 'Professional language training programs for university and external parties',
            coordinator: 'Dr. Asmaa Salah Abdel-Razek'
          },
          {
            id: 'translation-editing',
            name: 'Translation and Linguistic Editing',
            description: 'Professional translation and linguistic editing services',
            coordinator: 'Dr. Hany Ali'
          },
          {
            id: 'language-testing',
            name: 'Language Testing',
            description: 'Comprehensive language proficiency testing and assessment',
            coordinator: 'Dr. Lamis Hassan El-Bana Mohamed'
          }
        ]
      }
    },
    {
      id: 'confucius-classroom',
      name: 'Confucius Classroom',
      shortName: 'Confucius Classroom',
      description: 'A non-profit educational institution dedicated to spreading Chinese language and culture around the world.',
      image: './assets/service2.jpg',
      icon: 'pi pi-star',
      establishedDate: '2019',
      category: ServiceCategory.CULTURAL_CENTER,
      route: '/services/confucius-classroom',
      contact: {
        facebook: 'https://www.facebook.com/profile.php?id=100064953162513',
        email: 'confucius@alsun.luxor.edu.eg'
      },
      details: {
        mission: 'The Confucius Classroom was established as a non-profit educational institution with the aim of spreading Chinese language and culture around the world. The Confucius Classroom at Luxor University was opened in 2019 in collaboration with the main Confucius Classroom and Capital Normal University in China.',
        programs: [
          {
            id: 'chinese-language',
            name: 'Chinese Language Courses',
            description: 'Comprehensive Chinese language learning programs for all levels',
            duration: 'Semester-based',
            requirements: ['Basic education certificate', 'Commitment to attendance']
          },
          {
            id: 'cultural-exchange',
            name: 'Cultural Exchange Programs',
            description: 'Student and faculty exchange programs with Chinese universities',
            duration: 'Varies',
            requirements: ['Academic excellence', 'Language proficiency']
          }
        ],
        activities: [
          {
            id: 'cultural-events',
            name: 'Chinese Cultural Events',
            description: 'Regular cultural celebrations and festivals showcasing Chinese traditions'
          },
          {
            id: 'language-competitions',
            name: 'Chinese Language Competitions',
            description: 'Annual competitions to promote Chinese language learning'
          }
        ],
        achievements: [
          {
            id: 'partnership-2019',
            title: 'Partnership with Capital Normal University',
            description: 'Established formal partnership with Capital Normal University in China',
            date: new Date('2019-01-01')
          }
        ]
      }
    },
    {
      id: 'alsun-journal',
      name: 'Al-Alsun Journal of Languages and Humanities',
      shortName: 'Al-Alsun Journal',
      description: 'A semi-annual peer-reviewed journal published by the Faculty of Al-Alsun, rated 7/7 in July 2024 evaluations.',
      image: './assets/service3.jpg',
      icon: 'pi pi-book',
      establishedDate: 'Autumn 2019',
      category: ServiceCategory.ACADEMIC_JOURNAL,
      route: '/services/alsun-journal',
      contact: {
        website: 'https://maks.journals.ekb.eg/',
        email: 'journal@alsun.luxor.edu.eg'
      },
      details: {
        mission: 'Al-Alsun Journal of Languages and Humanities is a semi-annual peer-reviewed journal published by the Faculty of Al-Alsun at Luxor University. The first issue was published in Autumn 2019 (October-November-December).',
        specifications: [
          {
            label: 'Publication Frequency',
            value: 'Semi-annual',
            icon: 'pi pi-calendar'
          },
          {
            label: 'Peer Review',
            value: 'Yes',
            icon: 'pi pi-check-circle'
          },
          {
            label: 'Rating',
            value: '7/7 (July 2024)',
            icon: 'pi pi-star'
          },
          {
            label: 'First Issue',
            value: 'Autumn 2019',
            icon: 'pi pi-clock'
          }
        ],
        editorialBoard: [
          {
            id: 'mahmoud-elnoubi-editor',
            name: 'Prof. Dr. Mahmoud El-Noubi Ahmed',
            position: 'Chairman of the Board',
            role: 'Editor-in-Chief',
            affiliation: 'Faculty of Al-Alsun, Luxor University'
          },
          {
            id: 'youssef-abbas',
            name: 'Prof. Dr. Youssef Abbas Ali',
            position: 'Vice Chairman of the Board',
            role: 'Vice Chairman',
            affiliation: 'Faculty of Al-Alsun, Luxor University'
          },
          {
            id: 'asmaa-salah-editor',
            name: 'Dr. Asmaa Salah Abdel-Razek',
            position: 'Managing Editor',
            role: 'Managing Editor',
            affiliation: 'Faculty of Al-Alsun, Luxor University'
          },
          {
            id: 'reham-shoukry',
            name: 'Dr. Reham Shoukry Abdel-Salam',
            position: 'Assistant Managing Editor',
            role: 'Assistant Managing Editor',
            affiliation: 'Faculty of Al-Alsun, Luxor University'
          },
          {
            id: 'ramadan-eid',
            name: 'Dr. Ramadan Eid',
            position: 'Linguistic Editor',
            role: 'Linguistic Editor',
            affiliation: 'Faculty of Al-Alsun, Luxor University'
          },
          {
            id: 'lamis-hassan-editor',
            name: 'Dr. Lamis Hassan El-Bana Mohamed',
            position: 'Linguistic Editor',
            role: 'Linguistic Editor',
            affiliation: 'Faculty of Al-Alsun, Luxor University'
          },
          {
            id: 'arwa-ahmed',
            name: 'Ms. Arwa Ahmed Hassan',
            position: 'Linguistic Editor',
            role: 'Linguistic Editor',
            affiliation: 'Faculty of Al-Alsun, Luxor University'
          },
          {
            id: 'baleegh-hamdy',
            name: 'Dr. Baleegh Hamdy',
            position: 'Technical Editor',
            role: 'Technical Editor',
            affiliation: 'Faculty of Al-Alsun, Luxor University'
          },
          {
            id: 'mosheera-mahmoud',
            name: 'Ms. Mosheera Mahmoud',
            position: 'Technical Editor',
            role: 'Technical Editor',
            affiliation: 'Faculty of Al-Alsun, Luxor University'
          },
          {
            id: 'aya-said',
            name: 'Ms. Aya Said Ali',
            position: 'Page Editor',
            role: 'Page Editor',
            affiliation: 'Faculty of Al-Alsun, Luxor University'
          },
          {
            id: 'safaa-ali',
            name: 'Dr. Safaa Ali',
            position: 'Editorial Secretary',
            role: 'Editorial Secretary',
            affiliation: 'Faculty of Al-Alsun, Luxor University'
          },
          {
            id: 'khaled-said',
            name: 'Mr. Khaled Said',
            position: 'Financial Officer',
            role: 'Executive Officer',
            affiliation: 'Faculty of Al-Alsun, Luxor University'
          },
          {
            id: 'randa-andria',
            name: 'Ms. Randa Andria Anwar',
            position: 'Administrative Officer',
            role: 'Executive Officer',
            affiliation: 'Faculty of Al-Alsun, Luxor University'
          },
          {
            id: 'elena-tarasyuk',
            name: 'Prof. Elena Tarasyuk',
            position: 'External Editorial Board Member',
            role: 'External Editorial Board Member',
            affiliation: 'External Institution'
          },
          {
            id: 'rosmarie-kalass',
            name: 'Prof. Rosmarie Kalass',
            position: 'External Editorial Board Member',
            role: 'External Editorial Board Member',
            affiliation: 'External Institution'
          },
          {
            id: 'mariam-albadi',
            name: 'Prof. Mariam bint Salem Al-Badi',
            position: 'External Editorial Board Member',
            role: 'External Editorial Board Member',
            affiliation: 'External Institution'
          },
          {
            id: 'warda-bouiran',
            name: 'Prof. Warda Bouiran',
            position: 'External Editorial Board Member',
            role: 'External Editorial Board Member',
            affiliation: 'External Institution'
          },
          {
            id: 'hani-ismail',
            name: 'Prof. Hani Ismail Mohamed Ismail',
            position: 'External Editorial Board Member',
            role: 'External Editorial Board Member',
            affiliation: 'External Institution'
          },
          {
            id: 'rasha-aboudi',
            name: 'Prof. Rasha Mohamed Aboudi',
            position: 'External Editorial Board Member',
            role: 'External Editorial Board Member',
            affiliation: 'External Institution'
          }
        ]
      }
    }
  ];

  getAllServices(): Observable<FacultyService[]> {
    return of(this.services);
  }

  getServiceById(id: string): Observable<FacultyService | undefined> {
    return of(this.services.find(service => service.id === id));
  }

  getServicesByCategory(category: ServiceCategory): Observable<FacultyService[]> {
    return of(this.services.filter(service => service.category === category));
  }

  addService(service: FacultyService): Observable<FacultyService> {
    this.services.push(service);
    return of(service);
  }

  updateService(id: string, updates: Partial<FacultyService>): Observable<FacultyService | null> {
    const index = this.services.findIndex(service => service.id === id);
    if (index !== -1) {
      this.services[index] = { ...this.services[index], ...updates };
      return of(this.services[index]);
    }
    return of(null);
  }

  deleteService(id: string): Observable<boolean> {
    const index = this.services.findIndex(service => service.id === id);
    if (index !== -1) {
      this.services.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}