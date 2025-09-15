import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../../../../colleges/Al-Alsun/Services/hero.service';
import { MediaService } from '../../../../colleges/Al-Alsun/Services/media.service';
import { HeroSlide, HeroSettings } from '../../../../colleges/Al-Alsun/model/hero-slide.model';
import { MediaItem } from '../../../../colleges/Al-Alsun/model/media.model';

@Component({
  selector: 'app-hero-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-management.component.html',
  styleUrls: ['./hero-management.component.css']
})
export class HeroManagementComponent implements OnInit {
  slides: HeroSlide[] = [];
  heroSettings: HeroSettings | null = null;
  showForm = false;
  isEditing = false;
  currentSlide: HeroSlide = this.getEmptySlide();
  imageMediaItems: MediaItem[] = [];
  showImageModal = false;
  selectedImageUrl = '';
  isUploading = false;
  uploadProgress = 0;
  showToast = false;
  toastMessage = '';
  toastClass = '';
  toastIcon = '';

  constructor(
    private heroService: HeroService,
    private mediaService: MediaService
  ) {}

  ngOnInit() {
    this.loadSlides();
    this.loadSettings();
    this.loadMediaItems();
  }

  loadSlides() {
    this.heroService.getSlides().subscribe({
      next: (slides) => {
        this.slides = slides.sort((a, b) => a.order - b.order);
      },
      error: (error) => {
        console.error('Error loading slides:', error);
        this.showErrorToast('Failed to load slides');
      }
    });
  }

  loadSettings() {
    this.heroService.getSettings().subscribe({
      next: (settings) => {
        this.heroSettings = settings;
      },
      error: (error) => {
        console.error('Error loading settings:', error);
        this.showErrorToast('Failed to load settings');
      }
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

  openAddForm() {
    this.showForm = true;
    this.isEditing = false;
    this.currentSlide = this.getEmptySlide();
  }

  editSlide(slide: HeroSlide) {
    this.showForm = true;
    this.isEditing = true;
    this.currentSlide = { ...slide };
    this.selectedImageUrl = slide.image;
  }

  cancelForm() {
    this.showForm = false;
    this.isEditing = false;
    this.currentSlide = this.getEmptySlide();
    this.selectedImageUrl = '';
  }

  saveSlide() {
    if (this.currentSlide.title && this.currentSlide.subtitle && this.currentSlide.image && this.currentSlide.alt) {
      if (this.isEditing) {
        this.heroService.updateSlide(this.currentSlide).subscribe({
          next: () => {
            this.showSuccessToast('Slide updated successfully');
            this.loadSlides();
            this.cancelForm();
          },
          error: (error) => {
            console.error('Error updating slide:', error);
            this.showErrorToast('Failed to update slide');
          }
        });
      } else {
        this.heroService.addSlide(this.currentSlide).subscribe({
          next: () => {
            this.showSuccessToast('Slide created successfully');
            this.loadSlides();
            this.cancelForm();
          },
          error: (error) => {
            console.error('Error creating slide:', error);
            this.showErrorToast('Failed to create slide');
          }
        });
      }
    } else {
      this.showErrorToast('Please fill all required fields');
    }
  }

  deleteSlide(id: string) {
    if (confirm('Are you sure you want to delete this slide?')) {
      this.heroService.deleteSlide(id).subscribe({
        next: () => {
          this.showSuccessToast('Slide deleted successfully');
          this.loadSlides();
        },
        error: (error) => {
          console.error('Error deleting slide:', error);
          this.showErrorToast('Failed to delete slide');
        }
      });
    }
  }

  moveSlide(index: number, direction: 'up' | 'down') {
    const newSlides = [...this.slides];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    
    if (targetIndex >= 0 && targetIndex < newSlides.length) {
      [newSlides[index], newSlides[targetIndex]] = [newSlides[targetIndex], newSlides[index]];
      this.heroService.reorderSlides(newSlides).subscribe({
        next: () => {
          this.showSuccessToast('Slides reordered successfully');
          this.loadSlides();
        },
        error: (error) => {
          console.error('Error reordering slides:', error);
          this.showErrorToast('Failed to reorder slides');
        }
      });
    }
  }

  saveSettings() {
    if (this.heroSettings) {
      this.heroService.updateSettings(this.heroSettings).subscribe({
        next: () => {
          this.showSuccessToast('Settings saved successfully');
        },
        error: (error) => {
          console.error('Error saving settings:', error);
          this.showErrorToast('Failed to save settings');
        }
      });
    }
  }

  refreshPreview() {
    this.loadSlides();
  }

  openImageModal() {
    this.showImageModal = true;
    this.selectedImageUrl = this.currentSlide.image || '';
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
      this.currentSlide.image = this.selectedImageUrl;
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
    this.mediaService.uploadMedia(file, 'hero-slides').subscribe({
      next: (result) => {
        if (result.success && result.mediaItem) {
          this.currentSlide.image = result.mediaItem.url;
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

  private getEmptySlide(): HeroSlide {
    return {
      id: '',
      image: '',
      alt: '',
      title: '',
      subtitle: '',
      description: '',
      showButton: false,
      buttonLink: '',
      buttonText: '',
      order: this.slides.length + 1,
      isActive: true
    };
  }
}