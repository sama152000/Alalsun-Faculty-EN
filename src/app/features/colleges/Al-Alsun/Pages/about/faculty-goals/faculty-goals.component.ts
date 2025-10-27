import { Component, OnInit, OnDestroy, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FacultyGoalsService } from '../../../Services/faculty-goals.service';
import { FacultyGoalsSection, FacultyGoal } from '../../../model/faculty-goals.model';

@Component({
  selector: 'app-faculty-goals',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './faculty-goals.component.html',
  styleUrls: ['./faculty-goals.component.css']
})
export class FacultyGoalsComponent implements OnInit, OnDestroy {
  @ViewChildren('goalCard') goalCards!: QueryList<ElementRef>;
  
  facultyGoalsSection!: FacultyGoalsSection;
  private observer!: IntersectionObserver;
  animatedCards = new Set<number>();

  constructor(private facultyGoalsService: FacultyGoalsService) {}

  ngOnInit() {
    this.facultyGoalsSection = this.facultyGoalsService.getFacultyGoals();
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  ngAfterViewInit() {
    this.observeGoalCards();
  }

  private setupIntersectionObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const goalId = parseInt(entry.target.getAttribute('data-goal-id') || '0');
            if (!this.animatedCards.has(goalId)) {
              entry.target.classList.add('animate-in');
              this.animatedCards.add(goalId);
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );
  }

  private observeGoalCards() {
    if (this.goalCards) {
      this.goalCards.forEach((card) => {
        this.observer.observe(card.nativeElement);
      });
    }
  }

  downloadPDF() {
    console.log('Downloading strategic plan PDF...');
    // Add PDF download logic here
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}