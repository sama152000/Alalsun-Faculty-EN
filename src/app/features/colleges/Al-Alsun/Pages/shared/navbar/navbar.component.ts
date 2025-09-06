// src/app/components/navbar/navbar.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarService } from '../../../Services/navbar.service';
import { FacultyInfo, NavbarItem, Footer } from '../../../model/navbar.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  facultyInfo: FacultyInfo | null = null;
  navbarItems: NavbarItem[] = [];
  footer: Footer | null = null;
  isNavbarCollapsed = true;
  isDropdownOpen: { [key: string]: boolean } = {};
  isSectorsDropdownOpen = false;

  constructor(private NavbarService: NavbarService) {}

  ngOnInit(): void {
    this.NavbarService.getLayoutData().subscribe((data) => {
      this.facultyInfo = data.facultyInfo;
      this.navbarItems = data.navbarItems;
      this.footer = data.footer;
      // تهيئة حالة القوائم المنسدلة
      this.navbarItems.forEach((item) => {
        if (item.children) {
          this.isDropdownOpen[item.label] = false;
        }
      });
    });
  }

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  toggleDropdown(label: string, event: Event) {
    event.preventDefault();
    this.isDropdownOpen[label] = !this.isDropdownOpen[label];
    // إغلاق القوائم المنسدلة الأخرى
    Object.keys(this.isDropdownOpen).forEach((key) => {
      if (key !== label) {
        this.isDropdownOpen[key] = false;
      }
    });
  }

  onDropdownSelect(label: string) {
    this.isDropdownOpen[label] = false; // إغلاق القائمة المنسدلة عند اختيار عنصر
  }

  toggleSectorsDropdown(event: Event) {
    event.preventDefault();
    this.isSectorsDropdownOpen = !this.isSectorsDropdownOpen;
  }

  onSectorSelect() {
    this.isSectorsDropdownOpen = false;
  }
}
