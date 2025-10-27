import { Component, ViewChild, ElementRef, HostListener, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Department {
  name: string;
  link: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit, AfterViewInit {
  @ViewChild('sliderContainer') sliderContainer!: ElementRef;

  departments: Department[] = [
    {
      name: 'Arabic Language',
      link: '/departments/arabic',
      icon: 'pi pi-book',
      color: 'linear-gradient(135deg, #1e4a8c 0%, #2d5aa0 100%)'
    },
    {
      name: 'English Language',
      link: '/departments/english',
      icon: 'pi pi-globe',
      color: 'linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)'
    },
    {
      name: 'French Language',
      link: '/departments/french',
      icon: 'pi pi-flag',
      color: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)'
    },
    {
      name: 'German Language',
      link: '/departments/german',
      icon: 'pi pi-map',
      color: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)'
    },
    {
      name: 'Chinese Language',
      link: '/departments/chinese',
      icon: 'pi pi-star',
      color: 'linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%)'
    },
    {
      name: 'Italian Language',
      link: '/departments/italian',
      icon: 'pi pi-heart',
      color: 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)'
    },
    {
      name: 'Spanish Language',
      link: '/departments/spanish',
      icon: 'pi pi-sun',
      color: 'linear-gradient(135deg, #e67e22 0%, #f39c12 100%)'
    },
    {
      name: 'Russian Language',
      link: '/departments/russian',
      icon: 'pi pi-shield',
      color: 'linear-gradient(135deg, #34495e 0%, #2c3e50 100%)'
    }
  ];

  currentSlide = 0;
  slideWidth = 220;
  maxSlides = 0;
  dotsArray: number[] = [];
  cardsPerView = 4;

  private slideIntervalId: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Removed setInterval to prevent ExpressionChangedAfterItHasBeenCheckedError
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.calculateSlider();
      this.updateDotsArray();
    }, 0);

    // If auto sliding is needed, use this with ChangeDetectorRef to avoid ExpressionChangedAfterItHasBeenCheckedError
    this.slideIntervalId = setInterval(() => {
      this.slideRight();
      this.cdr.detectChanges();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.slideIntervalId) {
      clearInterval(this.slideIntervalId);
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.calculateSlider();
    this.updateDotsArray();
  }

  calculateSlider() {
    const containerWidth = this.sliderContainer?.nativeElement.offsetWidth || 1200;
    
    if (window.innerWidth <= 576) {
      this.cardsPerView = 1;
      this.slideWidth = 280;
    } else if (window.innerWidth <= 768) {
      this.cardsPerView = 2;
      this.slideWidth = 240;
    } else if (window.innerWidth <= 992) {
      this.cardsPerView = 3;
      this.slideWidth = 220;
    } else {
      this.cardsPerView = 4;
      this.slideWidth = 220;
    }
    
    this.maxSlides = Math.max(0, this.departments.length - this.cardsPerView);
    this.currentSlide = Math.min(this.currentSlide, this.maxSlides);
  }

  updateDotsArray() {
    this.dotsArray = Array(Math.max(1, this.maxSlides + 1)).fill(0).map((_, i) => i);
  }

  slideLeft() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.maxSlides;
    }
  }

  slideRight() {
    if (this.currentSlide < this.maxSlides) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0;
    }
  }

  goToSlide(slideIndex: number) {
    this.currentSlide = Math.max(0, Math.min(slideIndex, this.maxSlides));
  }
}
