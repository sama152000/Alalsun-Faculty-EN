import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SectorsService } from '../../../../colleges/Al-Alsun/Services/sectors.service';
import { SectorData } from '../../../../colleges/Al-Alsun/model/sector.model';

@Component({
  selector: 'app-add-sector',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-sector.component.html',
  styleUrls: ['./add-sector.component.css']
})
export class AddSectorComponent implements OnInit {
  sectorForm: FormGroup;
  showToast = false;
  toastMessage = '';
  toastClass = '';
  toastIcon = '';
  activeSubmenu: string | null = 'pages';

  constructor(
    private fb: FormBuilder,
    private sectorsService: SectorsService,
    private router: Router
  ) {
    this.sectorForm = this.createForm();
  }

  ngOnInit() {
    this.sectorForm.reset();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: ['']
    });
  }

  saveAndContinue() {
    if (this.sectorForm.valid) {
      const formValue: SectorData = {
        ...this.sectorForm.value,
        viceDean: { name: '', title: '', photo: '', email: '', office: '' },
        departments: [],
        services: [],
        news: [],
        media: [],
        statistics: [],
        activities: [],
        achievements: []
      };
      this.sectorsService.addSector(formValue).subscribe({
        next: (response) => {
          this.showSuccessToast('Sector added successfully');
          setTimeout(() => {
            this.router.navigate(['/dashboard/sectors/additional-information', formValue.id]);
          }, 3000);
        },
        error: (error) => {
          console.error('Error adding sector:', error);
          this.showErrorToast('Error adding sector: ' + (error.error?.message || error.message));
        }
      });
    } else {
      this.showErrorToast('Please fill all required fields');
    }
  }

  skipToSectorsManagement() {
    if (this.sectorForm.valid) {
      const formValue: SectorData = {
        ...this.sectorForm.value,
        viceDean: { name: '', title: '', photo: '', email: '', office: '' },
        departments: [],
        services: [],
        news: [],
        media: [],
        statistics: [],
        activities: [],
        achievements: []
      };
      this.sectorsService.addSector(formValue).subscribe({
        next: (response) => {
          this.showSuccessToast('Sector added successfully');
          setTimeout(() => {
            this.router.navigate(['/dashboard/sectors']);
          }, 3000);
        },
        error: (error) => {
          console.error('Error adding sector:', error);
          this.showErrorToast('Error adding sector: ' + (error.error?.message || error.message));
        }
      });
    } else {
      this.showErrorToast('Please fill all required fields');
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
