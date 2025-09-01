import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavItem {
  id: string;
  icon: string;
  label: string;
  route: string;
  color: string;
}

@Component({
  selector: 'app-nano-widget',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nano-widget.component.html',
  styleUrls: ['./nano-widget.component.css']
})
export class NanoWidgetComponent {
  navItems: NavItem[] = [
    {
      id: 'home',
      icon: 'pi pi-home',
      label: 'Home',
      route: '/home',
      color: '#0c685c42'
    },
    {
      id: 'about',
      icon: 'pi pi-info-circle',
      label: 'About',
      route: '/about',
      color: '#0c685c42'
    },
    {
      id: 'departments',
      icon: 'pi pi-building',
      label: 'Departments',
      route: '/departments',
      color: '#0c685c42'
    },
    {
      id: 'staff',
      icon: 'pi pi-users',
      label: 'Staff',
      route: '/staff',
      color: '#0c685c42'
    },
    {
      id: 'news',
      icon: 'pi pi-calendar',
      label: 'News',
      route: '/news',
      color: '#0c685c42'
    },
    {
      id: 'contact',
      icon: 'pi pi-phone',
      label: 'Contact Us',
      route: '/contact',
      color: '#0c685c42'
    }
  ];

  hoveredItem: string | null = null;

  onItemHover(itemId: string): void {
    this.hoveredItem = itemId;
  }

  onItemLeave(): void {
    this.hoveredItem = null;
  }
}