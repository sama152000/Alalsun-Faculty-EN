import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule, SlicePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DepartmentsService } from '../../../Servises/departments.service';
import { Department } from '../../../model/department.model'; // Adjust path

@Component({
  selector: 'app-departments-contant',
  templateUrl: './departments-contant.component.html',
  styleUrls: ['./departments-contant.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    SlicePipe
  ]
})
export class DepartmentsContantComponent {
  @Output() departmentSelected = new EventEmitter<Department>();

  allDepartments: Department[] = [];
  filteredDepartments: Department[] = [];
  
  // Filter properties
  selectedType: string = '';
  selectedLanguage: string = '';
  searchQuery: string = '';

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
    this.departmentSelected.emit(department);
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