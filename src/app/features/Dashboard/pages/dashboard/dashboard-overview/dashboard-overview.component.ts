import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardService } from '../../../../colleges/Al-Alsun/Services/dashboard.service';
import { DashboardStats, RecentActivity, QuickAction, SystemHealth } from '../../../../colleges/Al-Alsun/model/dashboard.model';

@Component({
  selector: 'app-dashboard-overview',
  standalone: true,
  imports: [CommonModule, RouterModule],
 templateUrl: './dashboard-overview.component.html',
  styleUrls: ['./dashboard-overview.component.css']
})
export class DashboardOverviewComponent implements OnInit {
  dashboardStats: DashboardStats | null = null;
  recentActivities: RecentActivity[] = [];
  quickActions: QuickAction[] = [];
  systemHealth: SystemHealth | null = null;
  currentTime = new Date();

  constructor(private dashboardService: DashboardService) {
    // Update time every minute
    setInterval(() => {
      this.currentTime = new Date();
    }, 60000);
  }

  ngOnInit() {
    this.loadDashboardData();
  }

  loadDashboardData() {
    this.dashboardService.getDashboardStats().subscribe({
      next: (stats) => {
        this.dashboardStats = stats;
      }
    });

    this.dashboardService.getRecentActivities().subscribe({
      next: (activities) => {
        this.recentActivities = activities;
      }
    });

    this.dashboardService.getQuickActions().subscribe({
      next: (actions) => {
        this.quickActions = actions;
      }
    });

    this.dashboardService.getSystemHealth().subscribe({
      next: (health) => {
        this.systemHealth = health;
      }
    });
  }

  getActivityIcon(type: string): string {
    switch (type) {
      case 'create': return 'pi pi-plus';
      case 'update': return 'pi pi-pencil';
      case 'delete': return 'pi pi-trash';
      case 'publish': return 'pi pi-send';
      default: return 'pi pi-info-circle';
    }
  }

  getHealthColor(): string {
    if (!this.systemHealth) return 'secondary';
    switch (this.systemHealth.status) {
      case 'healthy': return 'success';
      case 'warning': return 'warning';
      case 'error': return 'danger';
      default: return 'secondary';
    }
  }
}