import { Component, HostListener, AfterViewInit } from '@angular/core';
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
export class HeroComponent implements AfterViewInit {
  slides: HeroSlide[] = [];
  currentSlideIndex: number = 0;
  showScrollUp: boolean = false;
  isContentChanging: boolean = false;
  isFirstLoad: boolean = true;

  constructor(private heroService: HeroService) {
    this.heroService.getSlides().subscribe(slides => {
      this.slides = slides;
    });
  }

  ngAfterViewInit() {
    // Initialize carousel index after view is rendered
    setTimeout(() => {
      const activeSlide = document.querySelector('.carousel-item.active');
      const slides = Array.from(document.querySelectorAll('.carousel-item'));
      this.currentSlideIndex = slides.indexOf(activeSlide as Element);
      this.isFirstLoad = false;
    }, 0); // Run in next tick to ensure DOM is ready
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showScrollUp = scrollTop > 300;
  }

  onSlideChange(event: any): void {
    this.isContentChanging = true;

    // Update slide index immediately
    const activeSlide = document.querySelector('.carousel-item.active');
    const slides = Array.from(document.querySelectorAll('.carousel-item'));
    const newIndex = slides.indexOf(activeSlide as Element);

    // Only update if index changes to avoid redundant updates
    if (newIndex !== this.currentSlideIndex) {
      setTimeout(() => {
        this.currentSlideIndex = newIndex;
        this.isContentChanging = false;
      }, 300); // Reduced to match a faster transition
    } else {
      this.isContentChanging = false;
    }
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