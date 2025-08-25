import { Component } from '@angular/core';
import { PageHeaderComponent } from '../shared/page-header/page-header/page-header.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../shared/footer/footer.component';
import { NavbarComponent } from "../shared/navbar/navbar.component";
import { DepartmentsContantComponent } from './departments-contant/departments-contant.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { Department } from '../../model/department.model'; // Adjust path if needed

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  imports: [
    PageHeaderComponent,
    CommonModule,
    FooterComponent,
    NavbarComponent,
    DepartmentsContantComponent,
    DepartmentDetailsComponent
  ],
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent {
  breadcrumbs = [
    { label: 'Departments', url: '/alalsun-faculty/departments' }
  ];

  selectedDepartment: Department | null = null;

  onDepartmentSelected(department: Department): void {
    this.selectedDepartment = department;
  }

  onBackToList(): void {
    this.selectedDepartment = null;
  }
}