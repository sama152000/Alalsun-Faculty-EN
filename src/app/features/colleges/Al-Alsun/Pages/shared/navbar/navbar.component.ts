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

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  toggleNewsDropdown(event: Event) {
    event.preventDefault();
    this.isNewsDropdownOpen = !this.isNewsDropdownOpen;
  }
}