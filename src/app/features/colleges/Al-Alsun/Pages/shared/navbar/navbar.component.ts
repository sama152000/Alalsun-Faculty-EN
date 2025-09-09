import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuService } from '../../../Services/menu.service';
import { FacultyInfoService } from '../../../Services/faculty-info.service';
import { NavbarItem, Submenu, HeaderType } from '../../../model/menu.model';
import { FacultyInfo } from '../../../model/faculty-info.model';
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

  constructor(private menuService: MenuService, private facultyInfoService: FacultyInfoService) {}

  ngOnInit(): void {
    // Fetch faculty info from FacultyInfoService
    this.facultyInfoService.getFacultyInfo().subscribe((info) => {
      this.facultyInfo = info;
    });

    // Fetch all contacts and try to set logo based on data
    this.facultyInfoService.getAllContacts().subscribe({
      next: (contacts) => {
        if (contacts.length > 0) {
          // افتراض إن اللوجو مرتبط بـ id الأول أو تحتاج تضيف منطق لاختيار اللوجو
          const defaultContact = contacts[0]; // خذ أول عنصر كمثال
          if (this.facultyInfo) {
            // غيّر المسار لو عندك منطق معين (مثل إضافة id للوجو)
            this.facultyInfo.logoUrl = `assets/logos/${defaultContact.id}.jpg` || 'assets/logo.jpg';
          }
        }
      },
      error: (err) => {
        console.error('Failed to load contacts:', err);
      }
    });

    // Fetch MAIN_NAV with custom pages in More+ dropdown
    this.menuService.getActiveHeader(HeaderType.MAIN_NAV).subscribe((menu) => {
      if (menu && menu.data) {
        this.navbarItems = (menu.data as any).navbarItems || [];
        this.navbarItems.forEach((item) => {
          if (item.children) {
            this.isDropdownOpen[item.label] = false;
          }
        });
      }
    });

    this.menuService.getActiveHeader(HeaderType.SUBMENU).subscribe((menu) => {
      if (menu && menu.data) {
        this.submenu = (menu.data as any).submenu;
      }
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