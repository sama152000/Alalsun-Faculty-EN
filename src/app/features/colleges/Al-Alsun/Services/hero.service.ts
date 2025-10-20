import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HeroSlide } from '../model/hero-slide.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private slides: HeroSlide[] = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/356065/pexels-photo-356065.jpeg',
      alt: 'Library Image 1',
      title: 'Faculty of Al-Alsun – Luxor University',
      subtitle: 'Excellence and leadership in the study of languages…',
      description: 'A leading faculty in languages and translation, preparing qualified graduates for the labor market, while supporting scientific research and community service in line with Egypt Vision 2030.',
      showButton: true
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg',
      alt: 'Library Image 2',
      title: 'Discover Our Academic Programs',
      subtitle: 'Innovative learning experiences…',
      description: 'Explore diverse programs in languages, translation, and cultural studies designed to equip students with global competencies and practical skills for international careers.',
      showButton: false
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
      alt: 'Library Image 3',
      title: 'Join Our Research Community',
      subtitle: 'Pioneering discoveries in linguistics…',
      description: 'Engage in cutting-edge research projects, collaborate with international scholars, and contribute to advancements in language technology and cross-cultural communication.',
      showButton: false
    }
  ];

  getSlides(): Observable<HeroSlide[]> {
    return of(this.slides);
  }
}