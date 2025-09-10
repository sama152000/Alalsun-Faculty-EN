import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { DepartmentsService } from '../../../../colleges/Al-Alsun/Services/departments.service';
import { Department } from '../../../../colleges/Al-Alsun/model/department.model';

@Component({
  selector: 'app-departments-management',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './departments-management.component.html',
  styleUrls: ['./departments-management.component.css']
})
export class DepartmentsManagementComponent implements OnInit {
  departments: Department[] = [];
  showConfirmDialog = false;
  showToast = false;
  toastMessage = '';
  toastClass = '';
  toastIcon = '';
  deleteId: string | null = null;

  constructor(
    private departmentService: DepartmentsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadDepartments();
  }

  loadDepartments() {
    this.departmentService.getAllDepartments().subscribe(departments => {
      this.departments = departments;
    });
  }

  confirmDelete(id: string) {
    this.deleteId = id;
    this.showConfirmDialog = true;
  }

  closeConfirmDialog() {
    this.showConfirmDialog = false;
    this.deleteId = null;
  }

  deleteDepartment() {
  if (this.deleteId) {
    this.departmentService.deleteDepartment(this.deleteId).subscribe({
      next: () => {
        this.showSuccessToast('Department deleted successfully');
        this.loadDepartments();
        this.closeConfirmDialog();
      },
      error: (error) => {
        this.showErrorToast('Error deleting department: ' + (error.error?.message || error.message));
      }
    });
  }
}

  showSuccessToast(message: string) {
    this.showToast = true;
    this.toastClass = 'toast-success';
    this.toastIcon = 'pi pi-check';
    this.toastMessage = message;
    setTimeout(() => this.hideToast(), 3000);
  }

  showErrorToast(message: string) {
    this.showToast = true;
    this.toastClass = 'toast-error';
    this.toastIcon = 'pi pi-times';
    this.toastMessage = message;
    setTimeout(() => this.hideToast(), 3000);
  }

  hideToast() {
    this.showToast = false;
    this.toastMessage = '';
    this.toastClass = '';
    this.toastIcon = '';
  }
}