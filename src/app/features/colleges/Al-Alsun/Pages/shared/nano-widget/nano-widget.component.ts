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
      color: '#0c685c'
    },
    {
      id: 'about',
      icon: 'pi pi-info-circle',
      label: 'About',
      route: '/about',
      color: '#c42a03'
    },
    {
      id: 'departments',
      icon: 'pi pi-building',
      label: 'Departments',
      route: '/departments',
      color: '#d4af37'
    },
    {
      id: 'staff',
      icon: 'pi pi-users',
      label: 'Staff',
      route: '/staff',
      color: '#28a746'
    },
    {
      id: 'news',
      icon: 'pi pi-calendar',
      label: 'News',
      route: '/news',
      color: '#6f42c1'
    },
    {
      id: 'contact',
      icon: 'pi pi-phone',
      label: 'Contact Us',
      route: '/contact',
      color: '#fd7e14'
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