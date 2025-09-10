import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MediaService } from '../../../../colleges/Al-Alsun/Services/media.service';
import { MediaItem, MediaFolder } from '../../../../colleges/Al-Alsun/model/media.model';

@Component({
  selector: 'app-media-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
templateUrl: './media-management.component.html',
  styleUrls: ['./media-management.component.css']
})
export class MediaManagementComponent implements OnInit {
  mediaItems: MediaItem[] = [];
  folders: MediaFolder[] = [];
  filteredMedia: MediaItem[] = [];
  selectedFolder = '';
  selectedType = '';
  viewMode: 'grid' | 'list' = 'grid';
  isUploading = false;
  uploadProgress = 0;

  constructor(private mediaService: MediaService) {}

  ngOnInit() {
    this.loadMedia();
    this.loadFolders();
  }

  loadMedia() {
    this.mediaService.getMediaItems().subscribe({
      next: (items) => {
        this.mediaItems = items;
        this.filteredMedia = [...items];
      },
      error: (error) => {
        console.error('Error loading media:', error);
      }
    });
  }

  loadFolders() {
    this.mediaService.getFolders().subscribe({
      next: (folders) => {
        this.folders = folders;
      },
      error: (error) => {
        console.error('Error loading folders:', error);
      }
    });
  }

  onFileSelected(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.uploadFiles(files);
    }
  }

  uploadFiles(files: FileList) {
    this.isUploading = true;
    this.uploadProgress = 0;

    // Simulate upload progress
    const interval = setInterval(() => {
      this.uploadProgress += 10;
      if (this.uploadProgress >= 100) {
        clearInterval(interval);
        this.processFiles(files);
      }
    }, 200);
  }

  processFiles(files: FileList) {
    Array.from(files).forEach(file => {
      this.mediaService.uploadMedia(file, this.selectedFolder || 'general').subscribe({
        next: (result) => {
          if (result.success) {
            this.loadMedia();
          }
        },
        error: (error) => {
          console.error('Upload error:', error);
        }
      });
    });

    setTimeout(() => {
      this.isUploading = false;
      this.uploadProgress = 0;
    }, 1000);
  }

  filterByFolder() {
    this.applyFilters();
  }

  filterByType() {
    this.applyFilters();
  }

  applyFilters() {
    let filtered = [...this.mediaItems];

    if (this.selectedFolder) {
      filtered = filtered.filter(item => 
        item.folder?.toLowerCase() === this.selectedFolder.toLowerCase()
      );
    }

    if (this.selectedType) {
      filtered = filtered.filter(item => item.type === this.selectedType);
    }

    this.filteredMedia = filtered;
  }

  viewMedia(item: MediaItem) {
    if (item.type === 'image') {
      window.open(item.url, '_blank');
    } else if (item.type === 'video') {
      // Open video in modal or new tab
      window.open(item.url, '_blank');
    } else {
      // Download PDF
      window.open(item.url, '_blank');
    }
  }

  editMedia(item: MediaItem) {
    // Open edit modal or navigate to edit page
    console.log('Edit media:', item);
  }

  deleteMedia(id: string) {
    if (confirm('Are you sure you want to delete this media item?')) {
      this.mediaService.deleteMedia(id).subscribe({
        next: () => {
          this.loadMedia();
        },
        error: (error) => {
          console.error('Delete error:', error);
        }
      });
    }
  }

  getTypeIcon(type: string): string {
    switch (type) {
      case 'image': return 'pi pi-image';
      case 'video': return 'pi pi-video';
      case 'pdf': return 'pi pi-file-pdf';
      default: return 'pi pi-file';
    }
  }

  formatFileSize(bytes: number): string {
    return this.mediaService.formatFileSize(bytes);
  }
}