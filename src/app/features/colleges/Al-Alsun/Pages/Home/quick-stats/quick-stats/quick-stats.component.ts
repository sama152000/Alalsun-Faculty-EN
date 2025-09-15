import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Stat } from '../../../../model/quick-stats.model';
import { QuickStatsService } from '../../../../Services/quick-stats.service';

@Component({
  selector: 'app-quick-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quick-stats.component.html',
  styleUrls: ['./quick-stats.component.css']
})
export class QuickStatsComponent implements OnInit {
  stats: Stat[] = [];

  constructor(private quickStatsService: QuickStatsService) {}

  ngOnInit(): void {
    this.quickStatsService.getStats().subscribe((stats: Stat[]) => {
      this.stats = stats;
    });
  }
}
