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
      // Check if the current route is under 'pages'
      if (url.includes('/dashboard/about') || url.includes('/dashboard/departments') || url.includes('/dashboard/staff') || url.includes('/dashboard/sectors')) {
        this.activeSubmenu = 'pages';
      } 
      // Check if the current route is under 'posts'
      else if (url.includes('/dashboard/news')) {
        this.activeSubmenu = 'posts';
      } 
      // Check if the current route is under 'custom-pages'
      else if (url.includes('/dashboard/custom-pages')) {
        this.activeSubmenu = 'custom-pages';
      } 
      // If none of the above, keep the current submenu open (no automatic closing)
      // else {
      //   this.activeSubmenu = null; // Removed to prevent auto-closing
      // }
    });
  }

  toggleSubmenu(menu: string): void {
    // Toggle submenu: open if closed, close if open
    this.activeSubmenu = this.activeSubmenu === menu ? null : menu;
  }

  isPagesActive(): boolean {
    const url = this.router.url;
    return url.includes('/dashboard/about') || url.includes('/dashboard/departments') || url.includes('/dashboard/staff') || url.includes('/dashboard/sectors');
  }

  isPostsActive(): boolean {
    return this.router.url.includes('/dashboard/news');
  }

  isCustomPagesActive(): boolean {
    return this.router.url.includes('/dashboard/custom-pages');
  }
}