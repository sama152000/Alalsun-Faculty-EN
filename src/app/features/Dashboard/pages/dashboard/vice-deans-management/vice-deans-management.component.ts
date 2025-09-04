import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AboutService } from '../../../../colleges/Al-Alsun/Services/about.service';
import { ViceDean } from '../../../../colleges/Al-Alsun/model/about.model';

@Component({
  selector: 'app-vice-deans-management',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './vice-deans-management.component.html',
  styleUrls: ['./vice-deans-management.component.css']
})
export class ViceDeansManagementComponent implements OnInit {
  viceDeans: ViceDean[] = [];
  showConfirmDialog = false;
  showToast = false;
  toastMessage = '';
  toastClass = '';
  toastIcon = '';
  deleteId: string | null = null;

  constructor(
    private aboutService: AboutService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadViceDeans();
  }

  loadViceDeans() {
    this.aboutService.getAllViceDeans().subscribe(viceDeans => {
      this.viceDeans = viceDeans;
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

  deleteViceDean() {
    if (this.deleteId) {
      this.aboutService.deleteViceDean(this.deleteId).subscribe(() => {
        this.showToast = true;
        this.toastClass = 'toast-success';
        this.toastIcon = 'pi pi-check';
        this.toastMessage = 'Vice Dean deleted successfully';
        this.loadViceDeans();
        this.closeConfirmDialog();
        setTimeout(() => this.hideToast(), 3000);
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