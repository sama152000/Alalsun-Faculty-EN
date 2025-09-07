import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutService } from '../../../Services/navbar.service';
import { FacultyInfo, NavbarItem, Submenu } from '../../..//model/navbar.model';
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
  submenu: Submenu | null = null;
  isNavbarCollapsed = true;
  isDropdownOpen: { [key: string]: boolean } = {};
  isSectorsDropdownOpen = false;

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutService.getLayoutData().subscribe((data) => {
      this.facultyInfo = data.facultyInfo;
      this.navbarItems = data.navbarItems;
      this.submenu = data.submenu; // تحميل بيانات submenu
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
    Object.keys(this.isDropdownOpen).forEach((key) => {
      if (key !== label) {
        this.isDropdownOpen[key] = false;
      }
    });
  }

  onDropdownSelect(label: string) {
    this.isDropdownOpen[label] = false;
  }

  toggleSectorsDropdown(event: Event) {
    event.preventDefault();
    this.isSectorsDropdownOpen = !this.isSectorsDropdownOpen;
  }

  onSectorSelect() {
    this.isSectorsDropdownOpen = false;
  }
}