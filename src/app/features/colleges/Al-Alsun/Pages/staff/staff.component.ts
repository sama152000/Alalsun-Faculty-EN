import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageHeaderComponent } from '../shared/page-header/page-header/page-header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { StaffService } from '../../Services/staff.service';
import { StaffMember, Department } from '../../model/staff.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-staff',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    PageHeaderComponent,
    FooterComponent,
    RouterLink
  ],
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  breadcrumbs = [
    { label: 'Staff', url: '/staff' }
  ];

  allStaff: StaffMember[] = [];
  filteredStaff: StaffMember[] = [];
  departments: Department[] = [];
  positions: { value: string; label: string; icon: string }[] = [
    { value: 'Dean of the Faculty', label: 'Dean', icon: 'pi pi-crown' },
    { value: 'Vice Dean', label: 'Vice Dean', icon: 'pi pi-shield' },
    { value: 'Professor', label: 'Professor', icon: 'pi pi-book' },
    { value: 'Associate Professor', label: 'Associate Professor', icon: 'pi pi-graduation-cap' },
    { value: 'Assistant Professor', label: 'Assistant Professor', icon: 'pi pi-user' }
  ];
  searchQuery: string = '';
  selectedDepartment: string = '';
  selectedPosition: string = '';
  sidebarCollapsed: boolean = true;
  isMobile: boolean = window.innerWidth <= 991;

  constructor(
    private staffService: StaffService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadData();
    this.route.queryParams.subscribe(params => {
      if (params['position']) {
        this.selectedPosition = params['position'];
        this.applyFilters();
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = window.innerWidth <= 991;
    if (!this.isMobile) {
      this.sidebarCollapsed = false;
    }
  }

  loadData() {
    this.allStaff = this.staffService.getAllStaff();
    this.filteredStaff = [...this.allStaff];
    this.departments = this.staffService.getDepartments();
  }

  applyFilters() {
    let filtered = [...this.allStaff];

    // Filter by search query
    if (this.searchQuery.trim()) {
      const query = this.searchQuery.toLowerCase().trim();
      filtered = filtered.filter(member =>
        member.name.toLowerCase().includes(query) ||
        member.department.toLowerCase().includes(query) ||
        member.position.toLowerCase().includes(query) ||
        (member.specialization && member.specialization.toLowerCase().includes(query))
      );
    }

    // Filter by department
    if (this.selectedDepartment) {
      filtered = filtered.filter(member =>
        member.department.toLowerCase() === this.selectedDepartment.toLowerCase()
      );
    }

    // Filter by position
    if (this.selectedPosition) {
      filtered = filtered.filter(member =>
        member.position.toLowerCase() === this.selectedPosition.toLowerCase()
      );
    }

    this.filteredStaff = filtered;
  }

  filterByPosition(position: string) {
    this.selectedPosition = position;
    this.applyFilters();
  }

  clearFilters() {
    this.searchQuery = '';
    this.selectedDepartment = '';
    this.selectedPosition = '';
    this.filteredStaff = [...this.allStaff];
    this.router.navigate(['/staff'], { queryParams: {} });
  }

  hasActiveFilters(): boolean {
    return !!(this.searchQuery || this.selectedDepartment || this.selectedPosition);
  }

  viewStaffDetails(id: number) {
    this.router.navigate(['staff', id]);
  }

  trackByStaffId(index: number, member: StaffMember): number {
    return member.id;
  }

  trackByPosition(index: number, position: { value: string; label: string; icon: string }): string {
    return position.value;
  }
  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}