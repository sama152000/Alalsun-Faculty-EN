import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageHeaderComponent } from '../shared/page-header/page-header/page-header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { Department } from '../../model/department.model';
import { DepartmentsService } from '../../Services/departments.service';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-departments',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PageHeaderComponent,
    FooterComponent,
    NavbarComponent,
    DepartmentDetailsComponent,
    SlicePipe
  ],
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  allDepartments: Department[] = [];
  filteredDepartments: Department[] = [];
  selectedDepartment: Department | null = null;

  // Filter properties
  selectedType: string = '';
  selectedLanguage: string = '';
  searchQuery: string = '';

  // Breadcrumbs default to the departments list
  breadcrumbs: Array<{ label: string, url?: string }> = [
    { label: 'Departments', url: '/alalsun-faculty/departments' }
  ];

  constructor(private departmentsService: DepartmentsService) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.departmentsService.getAllDepartments().subscribe({
      next: (departments) => {
        this.allDepartments = departments;
        this.filteredDepartments = [...departments];
        console.log('Departments loaded:', departments.length);
      },
      error: (error) => {
        console.error('Error loading departments:', error);
      }
    });
  }

  applyFilters(): void {
    let filtered = [...this.allDepartments];

    // Filter by type (undergraduate/postgraduate)
    if (this.selectedType) {
      filtered = filtered.filter(dept => dept.type === this.selectedType);
    }

    // Filter by language
    if (this.selectedLanguage) {
      filtered = filtered.filter(dept => 
        dept.name.toLowerCase().includes(this.selectedLanguage.toLowerCase()) ||
        dept.shortName.toLowerCase().includes(this.selectedLanguage.toLowerCase())
      );
    }

    // Filter by search query (name, overview, programs, faculty)
    if (this.searchQuery && this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase().trim();
      filtered = filtered.filter(dept =>
        dept.name.toLowerCase().includes(query) ||
        dept.overview.toLowerCase().includes(query) ||
        dept.programs.some(program => 
          program.name.toLowerCase().includes(query) ||
          program.description.toLowerCase().includes(query)
        ) ||
        dept.faculty.some(faculty =>
          faculty.name.toLowerCase().includes(query) ||
          faculty.specialization.toLowerCase().includes(query)
        )
      );
    }

    this.filteredDepartments = filtered;
    console.log('Filtered departments:', filtered.length);
  }

  clearFilters(): void {
    this.selectedType = '';
    this.selectedLanguage = '';
    this.searchQuery = '';
    this.filteredDepartments = [...this.allDepartments];
  }

  hasActiveFilters(): boolean {
    return !!(this.selectedType || this.selectedLanguage || this.searchQuery);
  }

  selectDepartment(department: Department): void {
    console.log('Department selected:', department.name);
    this.selectedDepartment = department;
    // Update breadcrumbs to include department name
    this.breadcrumbs = [
      { label: 'Departments', url: '/alalsun-faculty/departments' },
      { label: department.name }
    ];
  }

  onBackToList(): void {
    this.selectedDepartment = null;
    // Reset breadcrumbs to default
    this.breadcrumbs = [
      { label: 'Departments', url: '/alalsun-faculty/departments' }
    ];
  }

  getUndergraduateCount(): number {
    return this.filteredDepartments.filter(d => d.type === 'undergraduate').length;
  }

  getPostgraduateCount(): number {
    return this.filteredDepartments.filter(d => d.type === 'postgraduate').length;
  }

  trackByDepartmentId(index: number, department: Department): string {
    return department.id;
  }
}