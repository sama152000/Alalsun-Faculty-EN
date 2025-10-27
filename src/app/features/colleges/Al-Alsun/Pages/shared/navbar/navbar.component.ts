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
    // Fetch faculty info from FacultyInfoService (static data)
    this.facultyInfoService.getFacultyInfo().subscribe((info: FacultyInfo) => {
      this.facultyInfo = info;
    });

    // Fetch MAIN_NAV static data
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

  closeNavbar() {
    this.isNavbarCollapsed = true;
  }

  toggleSectorsDropdown(event: Event) {
    event.preventDefault();
    this.isSectorsDropdownOpen = !this.isSectorsDropdownOpen;
  }

  onSectorSelect() {
    this.isSectorsDropdownOpen = false;
  }
}
