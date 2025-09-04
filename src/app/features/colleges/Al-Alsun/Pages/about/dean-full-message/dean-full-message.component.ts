import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';

import { AboutService } from '../../../Services/about.service';
import { DeanInfo } from '../../../model/about.model';

@Component({
  selector: 'app-dean-full-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dean-full-message.component.html',
  styleUrls: ['./dean-full-message.component.css']
})
export class DeanFullMessageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  deanInfo: DeanInfo | null = null;
  loading: boolean = true;

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.loadDeanInfo();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadDeanInfo(): void {
    this.aboutService.getDeanInfo()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (dean) => {
          this.deanInfo = dean;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading dean info:', error);
          this.loading = false;
        }
      });
  }
}