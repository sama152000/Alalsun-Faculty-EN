import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardStats, RecentActivity, QuickAction, SystemHealth } from '../model/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  getDashboardStats(): Observable<DashboardStats> {
    const stats: DashboardStats = {
      totalDepartments: 8,
      totalStaff: 23,
      totalNews: 15,
      totalMedia: 156,
      totalStudents: 705,
      totalSectors: 3,
      publishedPages: 12,
      draftPages: 3
    };
    return of(stats);
  }

  getRecentActivities(): Observable<RecentActivity[]> {
    const activities: RecentActivity[] = [
      {
        id: '1',
        action: 'Updated',
        target: 'English Language Department',
        user: 'Admin User',
        timestamp: '2025-01-15T14:30:00Z',
        details: 'Added new faculty member',
        type: 'update'
      },
      {
        id: '2',
        action: 'Published',
        target: 'News Article',
        user: 'Editor',
        timestamp: '2025-01-15T12:15:00Z',
        details: 'International Conference Announcement',
        type: 'publish'
      },
      {
        id: '3',
        action: 'Created',
        target: 'Staff Member',
        user: 'Admin User',
        timestamp: '2025-01-15T10:45:00Z',
        details: 'Dr. Ahmed Mostafa profile',
        type: 'create'
      },
      {
        id: '4',
        action: 'Updated',
        target: 'Media Gallery',
        user: 'Content Manager',
        timestamp: '2025-01-15T09:20:00Z',
        details: 'Uploaded 5 new images',
        type: 'update'
      },
      {
        id: '5',
        action: 'Deleted',
        target: 'Draft Page',
        user: 'Editor',
        timestamp: '2025-01-14T16:30:00Z',
        details: 'Removed outdated content',
        type: 'delete'
      }
    ];
    return of(activities);
  }

  getQuickActions(): Observable<QuickAction[]> {
    const actions: QuickAction[] = [
      {
        title: 'Add Department',
        description: 'Create a new academic department',
        icon: 'pi pi-building',
        route: '/admin/departments/add',
        color: 'primary'
      },
      {
        title: 'Add Staff Member',
        description: 'Add new faculty or staff member',
        icon: 'pi pi-user-plus',
        route: '/admin/staff/add',
        color: 'success'
      },
      {
        title: 'Create News Post',
        description: 'Publish news and announcements',
        icon: 'pi pi-file-plus',
        route: '/admin/news/add',
        color: 'warning'
      },
      {
        title: 'Upload Media',
        description: 'Add images, videos, or documents',
        icon: 'pi pi-upload',
        route: '/admin/media',
        color: 'info'
      },
      {
        title: 'Manage Sectors',
        description: 'Configure faculty sectors',
        icon: 'pi pi-sitemap',
        route: '/admin/sectors',
        color: 'secondary'
      },
      {
        title: 'Site Settings',
        description: 'Configure website settings',
        icon: 'pi pi-cog',
        route: '/admin/settings',
        color: 'dark'
      }
    ];
    return of(actions);
  }

  getSystemHealth(): Observable<SystemHealth> {
    const health: SystemHealth = {
      status: 'healthy',
      uptime: '15 days, 8 hours',
      lastBackup: '2025-01-15T02:00:00Z',
      storageUsed: 2.4,
      storageTotal: 10.0
    };
    return of(health);
  }
}