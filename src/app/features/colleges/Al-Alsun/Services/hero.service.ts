import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HeroSlide, HeroSettings } from '..//model/hero-slide.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private slides$ = new BehaviorSubject<HeroSlide[]>([]);
  private settings$ = new BehaviorSubject<HeroSettings>({
    autoPlay: true,
    autoPlayInterval: 5000,
    showIndicators: true,
    showNavigation: true,
    transitionEffect: 'fade'
  });

  constructor() {
    this.initializeMockData();
  }

  private initializeMockData() {
    const mockSlides: HeroSlide[] = [
      {
        id: '1',
        image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1920',
        alt: 'Faculty of Al-Alsun Main Building',
        title: 'Faculty of Al-Alsun',
        subtitle: 'Luxor University',
        description: 'Excellence and leadership in the study of languages, towards academic and cultural distinction at local and international levels.',
        showButton: true,
        buttonLink: '#about',
        buttonText: 'About Us',
        order: 1,
        isActive: true
      },
      {
        id: '2',
        image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=1920',
        alt: 'Academic Excellence',
        title: 'Academic Excellence',
        subtitle: 'Innovative Learning Experiences',
        description: 'Explore diverse programs in languages, translation, and cultural studies designed to equip students with global competencies.',
        showButton: true,
        buttonLink: '#departments',
        buttonText: 'Explore Departments',
        order: 2,
        isActive: true
      },
      {
        id: '3',
        image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920',
        alt: 'Research Community',
        title: 'Research Community',
        subtitle: 'Pioneering Discoveries in Linguistics',
        description: 'Engage in cutting-edge research projects and collaborate with international scholars in language technology.',
        showButton: true,
        buttonLink: '#research',
        buttonText: 'Join Research',
        order: 3,
        isActive: true
      }
    ];

    this.slides$.next(mockSlides);
  }

  getSlides(): Observable<HeroSlide[]> {
    return this.slides$.asObservable();
  }

  getSettings(): Observable<HeroSettings> {
    return this.settings$.asObservable();
  }

  addSlide(slide: HeroSlide): Observable<boolean> {
    const current = this.slides$.value;
    slide.id = Date.now().toString();
    slide.order = current.length + 1;
    this.slides$.next([...current, slide]);
    return of(true);
  }

  updateSlide(slide: HeroSlide): Observable<boolean> {
    const current = this.slides$.value;
    const index = current.findIndex(s => s.id === slide.id);
    if (index !== -1) {
      current[index] = slide;
      this.slides$.next([...current]);
    }
    return of(true);
  }

  deleteSlide(id: string): Observable<boolean> {
    const current = this.slides$.value;
    this.slides$.next(current.filter(s => s.id !== id));
    return of(true);
  }

  updateSettings(settings: HeroSettings): Observable<boolean> {
    this.settings$.next(settings);
    return of(true);
  }

  reorderSlides(slides: HeroSlide[]): Observable<boolean> {
    slides.forEach((slide, index) => {
      slide.order = index + 1;
    });
    this.slides$.next(slides);
    return of(true);
  }
}