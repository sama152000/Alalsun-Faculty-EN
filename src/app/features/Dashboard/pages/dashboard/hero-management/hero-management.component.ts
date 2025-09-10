import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../../../../colleges/Al-Alsun/Services/hero.service';
import { HeroSlide, HeroSettings } from '../../../../colleges/Al-Alsun/model/hero-slide.model';

@Component({
  selector: 'app-hero-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
 templateUrl: './hero-management.component.html',
  styleUrls: ['./hero-management.component.css']
})
export class HeroManagementComponent implements OnInit {
  slides: HeroSlide[] = [];
  heroSettings: HeroSettings | null = null;
  showForm = false;
  isEditing = false;
  
  currentSlide: HeroSlide = this.getEmptySlide();

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.loadSlides();
    this.loadSettings();
  }

  loadSlides() {
    this.heroService.getSlides().subscribe({
      next: (slides) => {
        this.slides = slides.sort((a, b) => a.order - b.order);
      },
      error: (error) => {
        console.error('Error loading slides:', error);
      }
    });
  }

  loadSettings() {
    this.heroService.getSettings().subscribe({
      next: (settings) => {
        this.heroSettings = settings;
      },
      error: (error) => {
        console.error('Error loading settings:', error);
      }
    });
  }

  openAddForm() {
    this.showForm = true;
    this.isEditing = false;
    this.currentSlide = this.getEmptySlide();
  }

  editSlide(slide: HeroSlide) {
    this.showForm = true;
    this.isEditing = true;
    this.currentSlide = { ...slide };
  }

  cancelForm() {
    this.showForm = false;
    this.isEditing = false;
    this.currentSlide = this.getEmptySlide();
  }

  saveSlide() {
    if (this.isEditing) {
      this.heroService.updateSlide(this.currentSlide).subscribe({
        next: () => {
          this.loadSlides();
          this.cancelForm();
        }
      });
    } else {
      this.heroService.addSlide(this.currentSlide).subscribe({
        next: () => {
          this.loadSlides();
          this.cancelForm();
        }
      });
    }
  }

  deleteSlide(id: string) {
    if (confirm('Are you sure you want to delete this slide?')) {
      this.heroService.deleteSlide(id).subscribe({
        next: () => {
          this.loadSlides();
        }
      });
    }
  }

  moveSlide(index: number, direction: 'up' | 'down') {
    const newSlides = [...this.slides];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (targetIndex >= 0 && targetIndex < newSlides.length) {
      [newSlides[index], newSlides[targetIndex]] = [newSlides[targetIndex], newSlides[index]];
      this.heroService.reorderSlides(newSlides).subscribe({
        next: () => {
          this.loadSlides();
        }
      });
    }
  }

  saveSettings() {
    if (this.heroSettings) {
      this.heroService.updateSettings(this.heroSettings).subscribe({
        next: () => {
          console.log('Settings saved successfully');
        }
      });
    }
  }

  refreshPreview() {
    this.loadSlides();
  }

  private getEmptySlide(): HeroSlide {
    return {
      id: '',
      image: '',
      alt: '',
      title: '',
      subtitle: '',
      description: '',
      showButton: false,
      buttonLink: '',
      buttonText: '',
      order: this.slides.length + 1,
      isActive: true
    };
  }
}