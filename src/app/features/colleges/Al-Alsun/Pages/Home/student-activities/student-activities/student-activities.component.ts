import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';


interface Activity {
  title: string;
  image: string;
  description: string;
}
@Component({
  selector: 'app-student-activities',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './student-activities.component.html',
  styleUrls: ['./student-activities.component.css']
})
export class StudentActivitiesComponent {
  activities: Activity[] = [
    {
      title: 'Multilingual Cultural Day',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Students showcase their linguistic talents and cultural heritage from different countries.'
    },
    {
      title: 'Translation Workshop',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Professional development workshops focusing on specialized translation techniques.'
    },
    {
      title: 'Student Arts Festival',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Annual celebration of student creativity through various artistic performances.'
    },
    {
      title: 'Confucius Classroom Event',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Chinese cultural exchange programs and language immersion activities.'
    },
    {
      title: 'Language Exchange Program',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'International students participate in peer-to-peer language learning sessions.'
    },
    {
      title: 'Academic Conference',
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Students present research papers and participate in academic discussions.'
    }
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}