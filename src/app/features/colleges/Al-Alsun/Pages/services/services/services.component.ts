import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { PageHeaderComponent } from '../../shared/page-header/page-header/page-header.component';
import { FacultyService, ServiceCategory } from '../../../model/services.model';
import { FacultyServiceService } from '../../../Services/services.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, FormsModule, PageHeaderComponent],
 templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'] 
})
export class ServicesComponent implements OnInit {
  breadcrumbs = [
    { label: 'Services', url: '/services' }
  ];

  allServices: FacultyService[] = [];
  filteredServices: FacultyService[] = [];
  searchQuery: string = '';
  selectedCategory: string = '';

  constructor(
    private facultyServiceService: FacultyServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadServices();
  }

  loadServices() {
    this.facultyServiceService.getAllServices().subscribe(services => {
      this.allServices = services;
      this.filteredServices = [...services];
    });
  }

  applyFilters() {
    let filtered = [...this.allServices];

    // Apply search filter
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase();
      filtered = filtered.filter(service =>
        service.name.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.shortName.toLowerCase().includes(query)
      );
    }

    // Apply category filter
    if (this.selectedCategory) {
      filtered = filtered.filter(service => service.category === this.selectedCategory);
    }

    this.filteredServices = filtered;
  }

  clearFilters() {
    this.searchQuery = '';
    this.selectedCategory = '';
    this.filteredServices = [...this.allServices];
  }

  getCategoryLabel(category: ServiceCategory): string {
    switch (category) {
      case ServiceCategory.LANGUAGE_CENTER:
        return 'Language Center';
      case ServiceCategory.CULTURAL_CENTER:
        return 'Cultural Center';
      case ServiceCategory.ACADEMIC_JOURNAL:
        return 'Academic Journal';
      case ServiceCategory.RESEARCH_CENTER:
        return 'Research Center';
      default:
        return 'Service';
    }
  }

  viewServiceDetails(id: string) {
    this.router.navigate(['/services', id]);
  }
}