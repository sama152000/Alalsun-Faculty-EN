import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';

import { AboutService } from '../../../Services/about.service';
import { HistoryEvent } from '../../../model/about.model';

@Component({
  selector: 'app-faculty-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faculty-history.component.html',
  styleUrls: ['./faculty-history.component.css']
})
export class FacultyHistoryComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  historyEvents: HistoryEvent[] = [];
  loading: boolean = true;

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.loadHistoryEvents();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadHistoryEvents(): void {
    this.aboutService.getHistoryEvents()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (events) => {
          this.historyEvents = events;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading history events:', error);
          this.loading = false;
        }
      });
  }
}