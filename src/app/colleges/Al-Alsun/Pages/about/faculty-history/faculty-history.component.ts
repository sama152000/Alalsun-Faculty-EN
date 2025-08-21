import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HistoryEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-faculty-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faculty-history.component.html',
  styleUrls: ['./faculty-history.component.css']
})
export class FacultyHistoryComponent {
  historyEvents: HistoryEvent[] = [
    {
      year: '2016',
      title: 'Faculty Establishment',
      description: 'The Faculty of Al-Alsun was established by the Prime Minister\'s decree No. 2693 in 2016, marking the beginning of a new era in language education at Luxor University.',
      icon: 'pi pi-flag'
    },
    {
      year: '2016/2017',
      title: 'First Academic Year',
      description: 'The first academic year began in 2016/2017 with a limited number of departments, laying the foundation for comprehensive language education programs.',
      icon: 'pi pi-graduation-cap'
    },
    {
      year: '2017-2020',
      title: 'Gradual Expansion',
      description: 'The faculty expanded gradually to include eight language departments, offering diverse programs in Arabic, English, French, German, Italian, Spanish, Russian, and Chinese languages.',
      icon: 'pi pi-building'
    },
    {
      year: '2020-Present',
      title: 'Excellence & Growth',
      description: 'Since its foundation, the faculty has strived to provide high-quality education in languages and translation, develop its academic programs, and support research and community service.',
      icon: 'pi pi-star'
    }
  ];
}