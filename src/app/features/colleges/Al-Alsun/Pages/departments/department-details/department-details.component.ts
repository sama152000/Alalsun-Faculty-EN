import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Department } from '../../../model/department.model';
import { Router, RouterLink } from '@angular/router';
import { DepartmentsService } from '../../../Services/departments.service';

@Component({
  selector: 'app-department-details',
  standalone: true,
  imports: [CommonModule,
    RouterLink
  ],
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnChanges {
  @Input() department: Department | null = null;
  @Output() backToList = new EventEmitter<void>();
  @Output() departmentSelected = new EventEmitter<Department>();
  
  departments: Department[] = [];
  activeTab: string = 'overview';
  sidebarCollapsed: boolean = true;
  isMobile: boolean = window.innerWidth <= 991;
  breadcrumbs: Array<{ label: string, url?: string }> = [];

  constructor(private router: Router, private departmentsService: DepartmentsService) {
    this.loadDepartments();
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobile = window.innerWidth < 992; // lg breakpoint
    if (!this.isMobile) {
      this.sidebarCollapsed = false;
    }
  }

ngOnChanges(changes: SimpleChanges): void {
  if (changes['department'] && changes['department'].currentValue) {
    this.activeTab = 'overview';
    this.breadcrumbs = [
      { label: 'Departments', url: '/departments' },
      { label: this.department!.name }
    ];
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.loadDepartments();
  }
}

loadDepartments(): void {
  this.departmentsService.getAllDepartments().subscribe({
    next: (departments) => {
      this.departments = departments;
    },
    error: (error) => {
      console.error('Error loading departments:', error);
    }
  });
}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkScreenSize();
  }

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  goBack(): void {
    this.backToList.emit();
  }

  trackByDepartmentId(index: number, department: Department): string {
    return department.id;
  }

  onDepartmentClick(dept: Department): void {
    this.departmentSelected.emit(dept);
  }
}
