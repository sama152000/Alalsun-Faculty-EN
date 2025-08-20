import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vision-mission',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vision-mission.component.html',
  styleUrls: ['./vision-mission.component.css']
})
export class VisionMissionComponent {
  missionPoints = [
    {
      icon: 'pi pi-graduation-cap',
      text: 'To qualify graduates with linguistic and translation skills, capable of serving society and the environment while preserving cultural identity.'
    },
    {
      icon: 'pi pi-users',
      text: 'To support students in cultural, artistic, and sports activities, enhancing their academic and personal growth.'
    },
    {
      icon: 'pi pi-briefcase',
      text: 'To develop students\' skills to meet the needs of the labor market.'
    }
  ];

  objectives = [
    {
      icon: 'pi pi-book',
      text: 'Academic excellence and modernization of curricula.'
    },
    {
      icon: 'pi pi-search',
      text: 'Enhancing research and postgraduate studies in languages & translation.'
    },
    {
      icon: 'pi pi-globe',
      text: 'Strengthening partnerships and international cultural exchange.'
    },
    {
      icon: 'pi pi-users',
      text: 'Empowering student activities and employability skills.'
    }
  ];
}