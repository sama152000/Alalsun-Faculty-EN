import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FacultyService, ServiceCategory } from '../model/services.model';

@Injectable({
  providedIn: 'root'
})
export class FacultyServiceService {
  private services: FacultyService[] = [
    // === 1. مركز الألسن للغات والترجمة (المركز الرئيسي) ===
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
          'Provide language consulting for all languages taught at the faculty.',
          'Contribute to ensuring a distinguished quality of education with a commitment to continuous development and efficient performance of the center, and gaining the community\'s trust in the graduates\' abilities, aiming to ensure quality and achieve competitiveness at local, regional, and international levels in the fields of languages and translation.',
          'Contribute to community and environmental services, support development plans, and enhance community contributions.'
        ],
        staff: [
          {
            id: 'mahmoud-elnoubi',
            name: 'Prof. Dr. Mahmoud El-Noubi Ahmed',
            position: 'Chairman of the Board',
            role: 'Chairman of the Board of the Al-Alsun Center for Languages and Translation',
            photo: './assets/Picture1.jpg'
          },
          {
            id: 'mohammed-farouk',
            name: 'Dr. Muhammed Farouk Muhammed Badr',
            position: 'Director of the Center',
            role: 'Director of the Center',
            photo: './assets/userr.png'
          },
          {
            id: 'asmaa-salah',
            name: 'Dr. Asmaa Salah Abdel-Razek',
            position: 'Activity Coordinator',
            role: 'Coordinator of Training and Courses Activities',
            photo: './assets/userr.png'
          },
          {
            id: 'hany-ali',
            name: 'Dr. Hany Ali',
            position: 'Activity Coordinator',
            role: 'Coordinator of Translation and Linguistic Editing Activities',
            photo: './assets/userr.png'
          },
          {
            id: 'lamis-hassan',
            name: 'Dr. Lamis Hassan El-Bana Mohamed',
            position: 'Activity Coordinator',
            role: 'Coordinator of Language Testing Activities',
            photo: './assets/userr.png'
          },
          {
            id: 'shaimaa-abdallah',
            name: 'Ms. Shaimaa Abdallah',
            position: 'Administrative Officer',
            role: 'Administrative Officer',
            photo: './assets/userr.png'
          },
          {
            id: 'salwa-sanousi',
            name: 'Ms. Salwa Sanousi Suleiman',
            position: 'Financial Officer',
            role: 'Financial Officer',
            photo: './assets/userr.png'
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
        ],
        introduction: 'The Al-Alsun Center for Languages and Translation at Luxor University is a special unit that always strives to be the first choice for learners in the fields of language, translation, and human development. It is committed to providing a competitive product at the local, regional, and international levels in the fields of translation and languages.',
        certificatesAndCourses: [
          'Offers the IELTS English Language Certificate accredited by the British Council in Cairo, in addition to courses at various levels of English.',
          'Provides preparatory courses to pass the TOEFL exam in English.',
          'Provides preparatory courses to pass the DELF exam in French.',
          'Provides training courses in linguistic proofreading from the Arabic Language Department.',
          'Provides training courses in teaching academic subjects in English (Math & Science).',
          'Provides training courses in German.',
          'Provides training courses in Chinese.',
          'Provides training courses in Italian.',
          'The center translates all types of official certificates, documents, and scientific theses from Arabic into various languages and vice versa.'
        ],
        centerObjectives: [
          'Preparing special programs to raise the level of languages taught at the center for students and others.',
          'Ensuring quality and continuous development in line with national development requirements.',
          'Linguistic review of research and scientific theses in the center\'s field.',
          'Cultural linkage between the center and other university centers in language affairs, as well as the external labor market.',
          'Holding local TOEFL preparation courses and training for students from inside and outside the university.',
          'Designing training programs in delivering lectures in the languages taught in the departments of the Faculty of Al-Alsun at Luxor.'
        ]
      }
    },

    // === 2. وحدة ضمان الجودة والاعتماد (كمركز منفصل) ===
    {
      id: 'quality-assurance-unit',
      name: 'Quality Assurance and Accreditation Unit',
      shortName: 'Quality Unit',
      description: 'Ensures continuous improvement of educational quality and alignment with national and international standards.',
      image: './assets/img.png',
      icon: 'pi pi-check-circle',
      establishedDate: '2018',
      category: ServiceCategory.LANGUAGE_CENTER,
      route: '/services/quality-assurance-unit',
      contact: {
        email: 'quality@alsun.luxor.edu.eg'
      },
      details: {
        description: 'The Quality Assurance and Accreditation Unit at the Faculty of Al-Alsun seeks to elevate the level of educational quality and continuously develop the educational process in accordance with national standards that align with international benchmarks, achieving the college\'s vision, mission, and goals.',
        objectives: [
          'Develop and implement quality assurance policies and procedures.',
          'Monitor academic programs to ensure compliance with accreditation standards.',
          'Conduct internal audits and prepare accreditation reports.',
          'Train faculty and staff on quality standards and best practices.'
        ],
        coordinator: 'Dr. Youssef Abbas Ali',
        activities: [
          {
            id: 'accreditation-prep',
            name: 'Accreditation Preparation',
            description: 'Support for national and international accreditation processes'
          },
          {
            id: 'quality-training',
            name: 'Quality Training Workshops',
            description: 'Training programs on quality standards and educational excellence'
          }
        ]
      }
    },

    // === 3. وحدة القياس والتقويم ===
    {
      id: 'measurement-evaluation-unit',
      name: 'Measurement and Evaluation Unit',
      shortName: 'Evaluation Unit',
      description: 'Promotes modern assessment systems and electronic correction to enhance educational quality.',
      image: './assets/img.png',
      icon: 'pi pi-chart-line',
      establishedDate: '2020',
      category: ServiceCategory.LANGUAGE_CENTER,
      route: '/services/measurement-evaluation-unit',
      contact: {
        email: 'evaluation@alsun.luxor.edu.eg'
      },
      details: {
        description: 'Based on the Supreme Council of Universities\' decisions to generalize electronic correction in universities, the Measurement and Evaluation Unit plays a key role in spreading the culture of developing student assessment and examination systems as a means to improve the educational system and ensure its quality.',
        objectives: [
          'Implement electronic correction systems across all departments.',
          'Develop fair and transparent evaluation mechanisms.',
          'Train faculty on modern assessment techniques.',
          'Analyze exam results to improve teaching methods.'
        ],
        coordinator: 'Dr. Ramadan Eid',
        activities: [
          {
            id: 'electronic-correction',
            name: 'Electronic Exam Correction',
            description: 'Full implementation of digital exam grading'
          },
          {
            id: 'assessment-workshops',
            name: 'Assessment Design Workshops',
            description: 'Training on creating effective exam questions'
          }
        ]
      }
    },

    // === 4. وحدة تكنولوجيا المعلومات (IT) ===
    {
      id: 'it-unit',
      name: 'Information Technology Unit (IT)',
      shortName: 'IT Unit',
      description: 'Provides technological infrastructure and digital services to support teaching, learning, and administration.',
      image: './assets/img.png',
      icon: 'pi pi-desktop',
      establishedDate: '2019',
      category: ServiceCategory.LANGUAGE_CENTER,
      route: '/services/it-unit',
      contact: {
        email: 'it.support@alsun.luxor.edu.eg',
        phone: '095-238-1234'
      },
      details: {
        description: 'The IT Unit aims to provide the college and its members—faculty, staff, and students—with diverse technological services and to offer necessary support to organize teaching and learning processes based on information systems and technology. It also activates the university\'s official email as a primary communication tool and establishes an electronic library.',
        objectives: [
          'Maintain and upgrade IT infrastructure across the faculty.',
          'Provide technical support for digital learning platforms.',
          'Manage official university email and communication systems.',
          'Develop and maintain the faculty\'s digital library and online resources.'
        ],
        coordinator: 'Eng. Khaled Said',
        activities: [
          {
            id: 'tech-support',
            name: 'Technical Support Desk',
            description: '24/7 IT support for faculty and students'
          },
          {
            id: 'digital-library',
            name: 'Digital Library Services',
            description: 'Access to e-books, journals, and research databases'
          },
          {
            id: 'lms-management',
            name: 'Learning Management System',
            description: 'Support for Moodle and online course platforms'
          }
        ]
      }
    },

    // === 5. وحدة متابعة الخريجين ===
    {
      id: 'graduate-followup-unit',
      name: 'Graduate Follow-Up Unit',
      shortName: 'Alumni Unit',
      description: 'Connects graduates with the job market and provides continuous professional development opportunities.',
      image: './assets/img.png',
      icon: 'pi pi-users',
      establishedDate: '2021',
      category: ServiceCategory.LANGUAGE_CENTER,
      route: '/services/graduate-followup-unit',
      contact: {
        email: 'alumni@alsun.luxor.edu.eg',
        website: 'https://alumni.alsun.luxor.edu.eg'
      },
      details: {
        description: 'The Graduate Follow-Up Unit aims to elevate the technical and professional level of students and graduates of the Faculty of Al-Alsun, enhance their efficiency, and develop their capabilities to become competitive in the job market. It creates continuous communication channels with alumni, monitors their performance, and improves it through training programs, workshops, and diverse activities.',
        objectives: [
          'Build a comprehensive alumni database and communication network.',
          'Organize career development workshops and job fairs.',
          'Track graduate employment rates and career progression.',
          'Offer lifelong learning and certification programs for alumni.'
        ],
        coordinator: 'Dr. Safaa Ali',
        activities: [
          {
            id: 'career-fair',
            name: 'Annual Career Fair',
            description: 'Connects graduates with employers in language and translation sectors'
          },
          {
            id: 'alumni-mentorship',
            name: 'Alumni Mentorship Program',
            description: 'Senior graduates mentor current students'
          },
          {
            id: 'professional-courses',
            name: 'Professional Development Courses',
            description: 'Specialized training in translation, interpretation, and soft skills'
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