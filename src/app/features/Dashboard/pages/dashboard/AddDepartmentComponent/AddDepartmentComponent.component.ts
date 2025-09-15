import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentsService } from '../../../../colleges/Al-Alsun/Services/departments.service';
import { MediaService } from '../../../../colleges/Al-Alsun/Services/media.service';
import { MediaItem } from '../../../../colleges/Al-Alsun/model/media.model';

@Component({
  selector: 'app-add-department',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './AddDepartmentComponent.component.html',
  styleUrls: ['./AddDepartmentComponent.component.css']
})
export class AddDepartmentComponent implements OnInit {
  departmentForm: FormGroup;
  departmentTypes = [
    { label: 'Academic Department', value: 'Academic Department' },
    { label: 'Research Center', value: 'Research Center' },
    { label: 'Administrative Unit', value: 'Administrative Unit' }
  ];
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
    private departmentService: DepartmentsService,
    private mediaService: MediaService,
    private router: Router
  ) {
    this.departmentForm = this.createForm();
  }

  ngOnInit() {
    this.departmentForm.reset();
    this.loadMediaItems();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      shortName: ['', Validators.required],
      overview: ['', Validators.required],
      type: ['Academic Department'],
      established: [''],
      image: [''],
      icon: ['pi pi-building'],
      route: ['']
    });
  }

  loadMediaItems() {
    this.mediaService.getMediaItems().subscribe({
      next: (items) => {
        this.imageMediaItems = items.filter(item => item.type === 'image');
      },
      error: (error) => {
        console.error('Error loading media items:', error);
      }
    });
  }

  openImageModal() {
    this.showImageModal = true;
    this.selectedImageUrl = this.departmentForm.get('image')?.value || '';
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
      this.departmentForm.patchValue({ image: this.selectedImageUrl });
      this.closeImageModal();
    }
  }

  onImageFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploadImageFile(file);
    }
  }

  onModalFileSelected(event: any) {
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
    this.mediaService.uploadMedia(file, 'departments').subscribe({
      next: (result) => {
        if (result.success && result.mediaItem) {
          this.departmentForm.patchValue({ image: result.mediaItem.url });
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

  saveDepartment() {
    if (this.departmentForm.valid) {
      const formValue = this.departmentForm.value;
      const department = {
        ...formValue,
        programs: [],
        faculty: [],
        activities: [],
        contact: { email: '', phone: '', office: '', headOfDepartment: '' }
      };
      this.departmentService.addDepartment(department).subscribe({
        next: (response: any) => {
          this.showSuccessToast('Department created successfully');
          setTimeout(() => {
            this.router.navigate([`/dashboard/departments/additional/${response.id}`]);
          }, 2000);
        },
        error: (error) => {
          this.showErrorToast('Error creating department: ' + (error.error?.message || error.message));
        }
      });
    } else {
      this.showErrorToast('Please fill all required fields');
      this.markFormGroupTouched(this.departmentForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
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