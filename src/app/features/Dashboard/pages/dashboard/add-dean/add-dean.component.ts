import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AboutService } from '../../../../colleges/Al-Alsun/Services/about.service';
import { MediaService } from '../../../../colleges/Al-Alsun/Services/media.service';
import { DeanInfo } from '../../../../colleges/Al-Alsun/model/about.model';
import { MediaItem } from '../../../../colleges/Al-Alsun/model/media.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-add-dean',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-dean.component.html',
  styleUrls: ['./add-dean.component.css']
})
export class AddDeanComponent implements OnInit {
  deanForm: FormGroup;
  activeTab = 'basic';
  showToast = false;
  toastMessage = '';
  toastClass = '';
  toastIcon = '';
  activeSubmenu: string | null = 'pages';
  imageMediaItems: MediaItem[] = [];
  showImageModal = false;
  selectedImageUrl = '';
  isUploading = false;
  uploadProgress = 0;

  constructor(
    private fb: FormBuilder,
    private aboutService: AboutService,
    private mediaService: MediaService,
    private router: Router
  ) {
    this.deanForm = this.createForm();
  }

  ngOnInit() {
    this.deanForm.reset();
    this.clearFormArrays();
    this.loadMediaItems();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects;
      if (url.includes('/dashboard/pages')) {
        this.activeSubmenu = 'pages';
      } else if (url.includes('/dashboard/posts')) {
        this.activeSubmenu = 'posts';
      } else {
        this.activeSubmenu = null;
      }
    });
  }

  private createForm(): FormGroup {
    return this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      position: ['', Validators.required],
      photo: ['', Validators.required], // Made photo required
      greeting: ['', Validators.required],
      highlight: ['', Validators.required],
      callToAction: ['', Validators.required],
      message: this.fb.array([]),
      closing: this.fb.array([])
    });
  }

  get messageArray() {
    return this.deanForm.get('message') as FormArray;
  }

  get closingArray() {
    return this.deanForm.get('closing') as FormArray;
  }

  addMessage() {
    this.messageArray.push(this.fb.control('', Validators.required));
  }

  removeMessage(index: number) {
    this.messageArray.removeAt(index);
  }

  addClosing() {
    this.closingArray.push(this.fb.control('', Validators.required));
  }

  removeClosing(index: number) {
    this.closingArray.removeAt(index);
  }

  private clearFormArrays() {
    while (this.messageArray.length !== 0) {
      this.messageArray.removeAt(0);
    }
    while (this.closingArray.length !== 0) {
      this.closingArray.removeAt(0);
    }
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
    this.showImageModal = true;
    this.selectedImageUrl = this.deanForm.get('photo')?.value || '';
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
      this.deanForm.get('photo')?.setValue(this.selectedImageUrl);
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
    this.mediaService.uploadMedia(file, 'dean-photos').subscribe({
      next: (result) => {
        if (result.success && result.mediaItem) {
          this.deanForm.get('photo')?.setValue(result.mediaItem.url);
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

  saveDean() {
    if (this.deanForm.valid) {
      const formValue = this.deanForm.value as DeanInfo;
      this.aboutService.addDeanInfo(formValue).subscribe({
        next: () => {
          this.showSuccessToast('New Dean added successfully');
          setTimeout(() => {
            this.router.navigate(['/dashboard/about/dean']);
          }, 3000);
        },
        error: (error) => {
          console.error('Error adding dean:', error);
          this.showErrorToast('Failed to add dean');
        }
      });
    } else {
      this.showErrorToast('Please fill all required fields');
    }
  }

  toggleSubmenu(menu: string): void {
    this.activeSubmenu = this.activeSubmenu === menu ? null : menu;
  }

  isPagesActive(): boolean {
    return this.router.url.includes('/dashboard/pages');
  }

  isPostsActive(): boolean {
    return this.router.url.includes('/dashboard/posts');
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