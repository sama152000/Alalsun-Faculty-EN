import { Injectable } from '@angular/core';
import { FacultyGoalsSection, FacultyGoal } from '../model/faculty-goals.model';

@Injectable({
  providedIn: 'root'
})
export class FacultyGoalsService {

  getFacultyGoals(): FacultyGoalsSection {
    return {
      title: ' Faculty Strategic Goals',
      subtitle: 'Our commitment to excellence in language education and research',
      goals: [
        {
          id: 1,
          icon: 'pi pi-refresh',
          title: 'Continuous review and development of performance',
          description: 'Regularly evaluate and update the educational programs in line with national standards in language teaching and literature, ensuring the preparation of highly qualified specialists in languages, literature, and translation.',
          order: 1
        },
        {
          id: 2,
          icon: 'pi pi-globe',
          title: 'Enhancement of international cooperation',
          description: 'Expand and strengthen academic cooperation and exchange agreements with countries whose languages are taught in the faculty, and activate student and faculty exchange programs due to their significant role in developing linguistic and translation skills.',
          order: 2
        },
        {
          id: 3,
          icon: 'pi pi-search',
          title: 'Five-year research development plan',
          description: 'Establish and implement a five-year research plan to support the progress of scientific research and to build a generation of qualified researchers.',
          order: 3
        },
        {
          id: 4,
          icon: 'pi pi-users',
          title: 'Academic and cultural engagement',
          description: 'Continue organizing specialized and general conferences and seminars that contribute to the scientific and cultural life of the community.',
          order: 4
        }
      ]
    };
  }
}