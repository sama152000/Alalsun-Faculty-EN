import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarCollapsed = true;
  isNewsDropdownOpen = false;
  isSectorsDropdownOpen = false;

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  selectTab(tab: string) {
    this.isNewsDropdownOpen = false; // Close news dropdown
    this.isSectorsDropdownOpen = false; // Close sectors dropdown
    // Add navigation logic here, e.g., using Router
  }

  toggleNewsDropdown(event: Event) {
    event.preventDefault();
    this.isNewsDropdownOpen = !this.isNewsDropdownOpen;
    this.isSectorsDropdownOpen = false; // Close sectors dropdown if news is opened
  }

  toggleSectorsDropdown(event: Event) {
    event.preventDefault();
    this.isSectorsDropdownOpen = !this.isSectorsDropdownOpen;
    this.isNewsDropdownOpen = false; // Close news dropdown if sectors is opened
  }

  onSectorSelect() {
    this.isSectorsDropdownOpen = false; // Close the sectors dropdown when an item is selected
  }
}