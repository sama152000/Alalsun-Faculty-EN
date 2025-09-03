import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { StaffService } from '../../../colleges/Al-Alsun/Services/staff.service';
import { StaffMember } from '../../../colleges/Al-Alsun/model/staff.model';

@Component({
  selector: 'app-staff-management',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './staff-management.component.html',
  styleUrls: ['./staff-management.component.css']
})
export class StaffManagementComponent implements OnInit {
  staffMembers: StaffMember[] = [];
  showConfirmDialog = false;
  showToast = false;
  toastMessage = '';
  toastClass = '';
  toastIcon = '';
  deleteId: number | null = null;

  constructor(
    private staffService: StaffService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadStaff();
  }

  loadStaff() {
    this.staffMembers = this.staffService.getAllStaff();
  }

  confirmDelete(id: number) {
    this.deleteId = id;
    this.showConfirmDialog = true;
  }

  closeConfirmDialog() {
    this.showConfirmDialog = false;
    this.deleteId = null;
  }

  deleteStaff() {
    if (this.deleteId) {
      this.staffService.deleteStaff(this.deleteId);
      this.showToast = true;
      this.toastClass = 'toast-success';
      this.toastIcon = 'pi pi-check';
      this.toastMessage = 'Staff member deleted successfully';
      this.loadStaff();
      this.closeConfirmDialog();
      setTimeout(() => this.hideToast(), 3000);
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