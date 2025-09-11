import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { SectorsService } from '../../../../colleges/Al-Alsun/Services/sectors.service'; // غير المسار لو مختلف
import { SectorData } from '../../../../colleges/Al-Alsun/model/sector.model';

@Component({
  selector: 'app-sectors-management',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sectors-management.component.html',
  styleUrls: ['./sectors-management.component.css']
})
export class SectorsManagementComponent implements OnInit {
  sectors: SectorData[] = [];
  showConfirmDialog = false;
  showToast = false;
  toastMessage = '';
  toastClass = '';
  toastIcon = '';
  deleteId: string | null = null;

  constructor(
    private sectorsService: SectorsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadSectors();
  }

  loadSectors() {
    this.sectorsService.getAllSectors().subscribe({
      next: (sectors) => {
        this.sectors = sectors;
      },
      error: (error) => {
        this.showErrorToast('Error loading sectors: ' + error.message);
      }
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

  deleteSector() {
    if (this.deleteId) {
      this.sectorsService.deleteSector(this.deleteId).subscribe({
        next: () => {
          this.showToast = true;
          this.toastClass = 'toast-success';
          this.toastIcon = 'pi pi-check';
          this.toastMessage = 'Sector deleted successfully';
          this.loadSectors();
          this.closeConfirmDialog();
          setTimeout(() => this.hideToast(), 3000);
        },
        error: (error) => {
          this.showErrorToast('Error deleting sector: ' + error.message);
          this.closeConfirmDialog();
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