import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { HeroSlide } from '../../../../model/hero-slide.model';
import { HeroService } from '../../../../Services/hero.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonModule, FormsModule, RouterModule],
  templateUrl: './Hero-Section.component.html',
  styleUrls: ['./Hero-Section.component.css']
})
export class HeroComponent {
  slides: HeroSlide[] = [];
  currentSlideIndex: number = 0;
  showScrollUp: boolean = false;
  isContentChanging: boolean = false;
  isFirstLoad: boolean = true;

  constructor(private heroService: HeroService) {
    this.heroService.getSlides().subscribe(slides => {
      this.slides = slides;
      // Initialize with a small delay to ensure proper first render
      setTimeout(() => {
        this.isFirstLoad = false;
      }, 100);
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showScrollUp = scrollTop > 300;
  }

  onSlideChange(event: any): void {
    if (this.isFirstLoad) {
      // Skip animation on first load
      const activeSlide = document.querySelector('.carousel-item.active');
      const slides = Array.from(document.querySelectorAll('.carousel-item'));
      this.currentSlideIndex = slides.indexOf(activeSlide as Element);
      return;
    }

    // Start the content change animation
    this.isContentChanging = true;

    // Wait for the fade out animation to complete
    setTimeout(() => {
      // Get the new slide index from the bootstrap carousel event
      const activeSlide = document.querySelector('.carousel-item.active');
      const slides = Array.from(document.querySelectorAll('.carousel-item'));
      this.currentSlideIndex = slides.indexOf(activeSlide as Element);
      
      // Start the fade in animation
      this.isContentChanging = false;
    }, 500); // This should match the CSS transition duration
  }

  getCurrentSlide(): HeroSlide {
    return this.slides[this.currentSlideIndex] || this.slides[0];
  }

  scrollDown() {
    const nextSection = document.querySelector('.hero-banner + *') as HTMLElement;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  }

  scrollUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}