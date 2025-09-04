import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';

import { AboutService } from '../../../Services/about.service';
import { VisionMission } from '../../../model/about.model';

@Component({
  selector: 'app-vision-mission-simple',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vision-mission-simple.component.html',
  styleUrls: ['./vision-mission-simple.component.css']
})
export class VisionMissionSimpleComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  visionMission: VisionMission[] = [];
  loading: boolean = true;

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.loadVisionMission();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadVisionMission(): void {
    this.aboutService.getVisionMission()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.visionMission = data;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading vision/mission:', error);
          this.loading = false;
        }
      });
  }

  getVision(): VisionMission | undefined {
    return this.visionMission.find(item => item.type === 'vision');
  }

  getMission(): VisionMission | undefined {
    return this.visionMission.find(item => item.type === 'mission');
  }
}