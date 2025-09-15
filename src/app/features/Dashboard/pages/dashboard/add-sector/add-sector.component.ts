import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SectorsService } from '../../../../colleges/Al-Alsun/Services/sectors.service';
import { MediaService } from '../../../../colleges/Al-Alsun/Services/media.service';
import { SectorData } from '../../../../colleges/Al-Alsun/model/sector.model';
import { MediaItem } from '../../../../colleges/Al-Alsun/model/media.model';

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
  imageMediaItems: MediaItem[] = [];
  showImageModal = false;
  selectedImageUrl = '';
  isUploading = false;
  uploadProgress = 0;

  constructor(
    private fb: FormBuilder,
    private sectorsService: SectorsService,
    private mediaService: MediaService,
    private router: Router
  ) {
    this.sectorForm = this.createForm();
  }

  ngOnInit() {
    this.loadMediaItems();
    this.sectorForm.reset();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required] // Made image required
    });
  }

  loadMediaItems() {
    this.mediaService.getMediaItems().subscribe({
      next: (items) => {
        this.imageMediaItems = items.filter(item => item.type === 'image');
      },
      error: (error) => {
        console.error('Error loading media items:', error);
        this.showErrorToast('Failed to load media items');
      }
    });
  }

  openImageModal() {
    this.selectedImageUrl = this.sectorForm.get('image')?.value || '';
    this.showImageModal = true;
  }

  closeImageModal() {
    this.showImageModal = false;
    this.selectedImageUrl = '';
  }

  selectImageFromModal(imageUrl: string) {
    this.selectedImageUrl = imageUrl;
  }

  confirmImageSelection() {
    if (this.selectedImageUrl) {
      this.sectorForm.get('image')?.setValue(this.selectedImageUrl);
      this.closeImageModal();
    }
  }

  onImageFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploadImageFile(file);
    }
  }

  uploadImageFile(file: File) {
    this.isUploading = true;
    this.uploadProgress = 0;

    // Simulate upload progress
    const interval = setInterval(() => {
      this.uploadProgress += 10;
      if (this.uploadProgress >= 100) {
        clearInterval(interval);
        this.processImageUpload(file);
      }
    }, 200);
  }

  processImageUpload(file: File) {
    this.mediaService.uploadMedia(file, 'sector-images').subscribe({
      next: (result) => {
        if (result.success && result.mediaItem) {
          this.sectorForm.get('image')?.setValue(result.mediaItem.url);
          this.loadMediaItems(); // Refresh media items
          this.showSuccessToast('Image uploaded successfully!');
        }
        this.isUploading = false;
        this.uploadProgress = 0;
      },
      error: (error) => {
        console.error('Upload error:', error);
        this.showErrorToast('Failed to upload image');
        this.isUploading = false;
        this.uploadProgress = 0;
      }
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