import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  activeSubmenu: string | null = null;

  constructor(private router: Router) {
    // Subscribe to router events to detect active sub-tab
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects;
      // Check if the current route is under 'pages', 'posts', or 'about'
      if (url.includes('/dashboard/departments') || url.includes('/dashboard/sectors') || url.includes('/dashboard/staff')) {
        this.activeSubmenu = 'pages';
      } else if (url.includes('/dashboard/news')) {
        this.activeSubmenu = 'posts';
      } else if (url.includes('/dashboard/about')) {
        this.activeSubmenu = 'about';
      } else {
        this.activeSubmenu = null;
      }
    });
  }

  toggleSubmenu(menu: string): void {
    this.activeSubmenu = this.activeSubmenu === menu ? null : menu;
  }

  isPagesActive(): boolean {
    return this.router.url.includes('/dashboard') || this.router.url.includes('/dashboard/about');
  }

  isPostsActive(): boolean {
    return this.router.url.includes('/dashboard/news');
  }
}