import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AboutService } from '../../../../colleges/Al-Alsun/Services/about.service';
import { MediaService } from '../../../../colleges/Al-Alsun/Services/media.service';
import { ViceDean } from '../../../../colleges/Al-Alsun/model/about.model';
import { MediaItem } from '../../../../colleges/Al-Alsun/model/media.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-edit-vice-dean',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './edit-vice-dean.component.html',
  styleUrls: ['./edit-vice-dean.component.css']
})
export class EditViceDeanComponent implements OnInit {
  viceDeanForm: FormGroup;
  activeTab = 'basic';
  showToast = false;
  toastMessage = '';
  toastClass = '';
  toastIcon = '';
  activeSubmenu: string | null = 'pages';
  editingId: string | null = null;
  imageMediaItems: MediaItem[] = [];
  showImageModal = false;
  selectedImageUrl = '';
  isUploading = false;
  uploadProgress = 0;

  constructor(
    private fb: FormBuilder,
    private aboutService: AboutService,
    private mediaService: MediaService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.viceDeanForm = this.createForm();
  }

  ngOnInit() {
    this.loadMediaItems();
    this.editingId = this.route.snapshot.paramMap.get('id');
    if (this.editingId) {
      this.aboutService.getViceDeanById(this.editingId).subscribe({
        next: (viceDean) => {
          if (viceDean) {
            this.populateForm(viceDean);
          } else {
            this.showErrorToast('Vice Dean not found');
            this.router.navigate(['/dashboard/about/vice-deans']);
          }
        },
        error: (error) => {
          console.error('Error fetching vice dean info:', error);
          this.showErrorToast('Failed to load vice dean information');
          this.router.navigate(['/dashboard/about/vice-deans']);
        }
      });
    } else {
      this.showErrorToast('No Vice Dean ID provided');
      this.router.navigate(['/dashboard/about/vice-deans']);
    }
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
      image: ['', Validators.required], // Made image required
      sector: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      office: [''],
      message: this.fb.array([])
    });
  }

  get messageArray() {
    return this.viceDeanForm.get('message') as FormArray;
  }

  addMessage() {
    this.messageArray.push(this.fb.control('', Validators.required));
  }

  removeMessage(index: number) {
    this.messageArray.removeAt(index);
  }

  private populateForm(viceDean: ViceDean) {
    this.clearFormArrays();
    this.viceDeanForm.patchValue({
      id: viceDean.id,
      name: viceDean.name,
      position: viceDean.position,
      image: viceDean.image,
      sector: viceDean.sector,
      email: viceDean.email,
      office: viceDean.office
    });

    if (viceDean.message) {
      viceDean.message.forEach(msg => {
        this.messageArray.push(this.fb.control(msg, Validators.required));
      });
    }
  }

  private clearFormArrays() {
    while (this.messageArray.length !== 0) {
      this.messageArray.removeAt(0);
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
    this.selectedImageUrl = this.viceDeanForm.get('image')?.value || '';
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
      this.viceDeanForm.get('image')?.setValue(this.selectedImageUrl);
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
    this.mediaService.uploadMedia(file, 'vice-dean-photos').subscribe({
      next: (result) => {
        if (result.success && result.mediaItem) {
          this.viceDeanForm.get('image')?.setValue(result.mediaItem.url);
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

  saveViceDean() {
    if (this.viceDeanForm.valid && this.editingId) {
      const formValue = this.viceDeanForm.value as ViceDean;
      this.aboutService.updateViceDean(formValue).subscribe({
        next: () => {
          this.showSuccessToast('Vice Dean updated successfully');
          setTimeout(() => {
            this.router.navigate(['/dashboard/about/vice-deans']);
          }, 3000);
        },
        error: (error) => {
          console.error('Error updating vice dean:', error);
          this.showErrorToast('Failed to update vice dean');
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