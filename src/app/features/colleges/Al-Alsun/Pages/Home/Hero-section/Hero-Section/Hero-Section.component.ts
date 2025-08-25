import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

interface HeroSlide {
  id: number;
  image: string;
  alt: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './Hero-Section.component.html',
  styleUrls: ['./Hero-Section.component.css']
})
export class HeroComponent {
  slides: HeroSlide[] = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg',
      alt: 'Library Image 1'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg',
      alt: 'Library Image 2'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
      alt: 'Library Image 3'
    }
  ];
}