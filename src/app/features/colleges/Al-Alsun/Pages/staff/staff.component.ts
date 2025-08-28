import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { PageHeaderComponent } from '../shared/page-header/page-header/page-header.component';
import { StaffService } from '../../Services/staff.service';
import { StaffMember, Department } from '../../model/staff.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    PageHeaderComponent,
    FormsModule
  ],
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  breadcrumbs = [
    { label: 'Staff', url: '/alalsun-faculty/staff' }
  ];

  allStaff: StaffMember[] = [];
  filteredStaff: StaffMember[] = [];
  departments: Department[] = [];
  searchQuery: string = '';
  selectedDepartment: string = '';

  constructor(
    private staffService: StaffService,
    private router: Router   // ✅ هنا الحقن الصح
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.allStaff = this.staffService.getAllStaff();
    this.filteredStaff = [...this.allStaff];
    this.departments = this.staffService.getDepartments();
  }

  onSearch() {
    this.applyFilters();
  }

  onDepartmentChange() {
    this.applyFilters();
  }

  applyFilters() {
    let filtered = [...this.allStaff];

    if (this.searchQuery.trim()) {
      filtered = this.staffService.searchStaff(this.searchQuery);
    }

    if (this.selectedDepartment) {
      filtered = filtered.filter(member =>
        member.department.toLowerCase() === this.selectedDepartment.toLowerCase()
      );
    }

    this.filteredStaff = filtered;
  }

  viewStaffDetails(id: number) {
    this.router.navigate(['/alalsun-faculty/staff', id]);   
  }
}
