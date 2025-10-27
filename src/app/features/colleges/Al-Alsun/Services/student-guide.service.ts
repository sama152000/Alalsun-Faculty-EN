import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StudentGuideSection, StudentGuideContent, ContentSection, DepartmentInfo, ExamRule } from '../model/student-guide.model';

@Injectable({
  providedIn: 'root'
})
export class StudentGuideService {
  private currentSectionSubject = new BehaviorSubject<StudentGuideSection | null>(null);
  public currentSection$ = this.currentSectionSubject.asObservable();

  private studentGuideSections: StudentGuideSection[] = [
    {
      id: 'study-system',
      title: 'Study System & Regulations',
      icon: 'pi pi-book',
      content: {
        title: 'Study System & Regulations',
        description: 'Comprehensive academic regulations and study system guidelines for students at Faculty of Al-Alsun.',
        sections: [
          {
            subtitle: 'Academic Year Structure',
            points: [
              'The academic year starts on the third Saturday of September and lasts for 30 weeks',
              'Two-week mid-year vacation as determined by the University Council',
              'Each faculty sets its own internal regulations specifying study materials and credit hours'
            ]
          },
          {
            subtitle: 'Student Registration',
            points: [
              'Students are enrolled upon submitting an application before the start of classes',
              'Late registration requires approval from the College Council',
              'A student file is maintained containing all academic and administrative documents'
            ]
          },
          {
            subtitle: 'Academic Requirements',
            points: [
              'Attendance and participation in lectures and practical sessions are mandatory',
              'The College Council may deny exam attendance for unsatisfactory attendance',
              'All facilities are provided including classrooms with smart boards and projectors',
              'Certificates are awarded after fulfilling all academic and financial requirements'
            ]
          }
        ]
      }
    },
    {
      id: 'student-services',
      title: 'Student Services',
      icon: 'pi pi-users',
      content: {
        title: 'Student Services',
        description: 'Comprehensive support services available to all students for academic and personal development.',
        sections: [
          {
            subtitle: 'Housing Services',
            points: [
              'Student housing managed by the University Dormitory Council',
              'Internal regulations define admission conditions and procedures',
              'Small annual fees for maintenance, sports, and equipment renewal'
            ]
          },
          {
            subtitle: 'Healthcare Services',
            points: [
              'Medical Affairs Office provides healthcare through university hospitals',
              'Treatment and medical support available for all students',
              'Emergency medical assistance when needed'
            ]
          },
          {
            subtitle: 'Library Services',
            points: [
              'Student Library with essential books and references',
              'Managed according to internal library regulations',
              'Access to academic resources and study materials'
            ]
          },
          {
            subtitle: 'Social Solidarity Fund',
            points: [
              'Provides social and financial support to students',
              'Offers emergency aid and loans',
              'Helps students overcome financial hardships to continue studies'
            ]
          }
        ]
      }
    },
    {
      id: 'discipline-system',
      title: 'Student Discipline System',
      icon: 'pi pi-shield',
      content: {
        title: 'Student Discipline System',
        description: 'Guidelines and regulations for maintaining academic integrity and proper conduct.',
        sections: [
          {
            subtitle: 'Disciplinary Violations',
            points: [
              'Disturbing college order or promoting class disruption',
              'Cheating or attempting to cheat in exams',
              'Damaging university property or materials',
              'Engaging in immoral or inappropriate conduct',
              'Distributing materials without official permission',
              'Participating in unauthorized demonstrations'
            ]
          },
          {
            subtitle: 'Disciplinary Penalties',
            points: [
              'Verbal or written warning',
              'Deprivation from student services',
              'Suspension from classes or exams',
              'Expulsion from college or university (temporary or permanent)'
            ]
          },
          {
            subtitle: 'Due Process',
            points: [
              'No disciplinary action without formal investigation and hearing',
              'Students have the right to appeal decisions within 15 days',
              'Appeals are submitted to the University President',
              'Fair and transparent disciplinary procedures'
            ]
          }
        ]
      }
    },
    {
      id: 'department-coordination',
      title: 'Internal Coordination for Departments',
      icon: 'pi pi-sitemap',
      content: {
        title: 'Internal Coordination for Departments',
        description: 'Department admission criteria and coordination procedures for academic year organization.',
        sections: [
          {
            subtitle: 'Admission Criteria (Academic Year 2019/2020)',
            points: [
              'Student\'s preference ranking',
              'Grade in related language subject from high school',
              'Total score of three language subjects (Arabic, English, second foreign language)',
              'Priority given to students who studied the foreign language in high school'
            ]
          },
          {
            subtitle: 'Department Assignment Process',
            points: [
              'Students fill out preference forms listing departments in order',
              'Assignment based on preference and total score',
              'Fair and transparent selection process',
              'Academic merit-based allocation'
            ]
          },
          {
            subtitle: 'Available Departments',
            points: [
              'Arabic Language Department',
              'English Language Department',
              'French Language Department',
              'German Language Department',
              'Italian Language Department',
              'Russian Language Department',
              'Chinese Language Department',
              'Spanish Language Department'
            ]
          }
        ]
      }
    },
    {
      id: 'exam-guidelines',
      title: 'Exam Guidelines',
      icon: 'pi pi-file-edit',
      content: {
        title: 'Exam Guidelines',
        description: 'Comprehensive examination rules and procedures according to Universities Regulation Law Article 125.',
        sections: [
          {
            subtitle: 'Cheating Policy',
            points: [
              'Any student caught cheating shall be expelled from the exam hall',
              'Student will be considered failed in all subjects for that term',
              'Case will be referred to the Disciplinary Board',
              'Zero tolerance policy for academic dishonesty'
            ]
          },
          {
            subtitle: 'Exam Hall Rules',
            points: [
              'Students must arrive early; late entry is not allowed',
              'Mobile phones are strictly prohibited',
              'University ID or national ID must be presented',
              'Students must sit in assigned seats according to seat numbers',
              'Attendance sheet must be signed during each exam'
            ]
          },
          {
            subtitle: 'Prohibited Items and Behaviors',
            points: [
              'No books, notes, or bags allowed inside the hall',
              'No writing on walls, desks, or unauthorized papers',
              'Students cannot leave before half of exam time has passed',
              'Writing unrelated comments in answer sheets is forbidden',
              'Any violation may result in disciplinary action'
            ]
          },
          {
            subtitle: 'Invigilator Guidelines',
            points: [
              'Must maintain silence and discipline during exams',
              'Mobile phone use by invigilators is prohibited',
              'Ensure fair and secure examination environment',
              'Report any violations immediately'
            ]
          }
        ]
      }
    }
  ];

  constructor() {
    // Set the first section as default
    this.currentSectionSubject.next(this.studentGuideSections[0]);
  }

  getAllSections(): StudentGuideSection[] {
    return this.studentGuideSections;
  }

  getCurrentSection(): Observable<StudentGuideSection | null> {
    return this.currentSection$;
  }

  setCurrentSection(sectionId: string): void {
    const section = this.studentGuideSections.find(s => s.id === sectionId);
    if (section) {
      this.currentSectionSubject.next(section);
    }
  }

  getSectionById(id: string): StudentGuideSection | undefined {
    return this.studentGuideSections.find(section => section.id === id);
  }
}