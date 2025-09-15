import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingsService } from '../../../../colleges/Al-Alsun/Services/settings.service';
import { MediaService } from '../../../../colleges/Al-Alsun/Services/media.service';
import { SiteSettings, IconOption, SettingsUpdateResult } from '../../../../colleges/Al-Alsun/model/settings.model';
import { MediaItem } from '../../../../colleges/Al-Alsun/model/media.model';

@Component({
  selector: 'app-settings-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './settings-management.component.html',
  styleUrls: ['./settings-management.component.css']
})
  


export class SettingsManagementComponent implements OnInit {
  currentSettings: SiteSettings = {} as SiteSettings;
  iconOptions: IconOption[] = [];
  imageMediaItems: MediaItem[] = [];
  activeTab = 'logo';
  showLogoModal = false;
  selectedLogoUrl = '';
  isUploading = false;
  uploadProgress = 0;
  showSuccessMessage = false;
  successMessage = '';

  constructor(
    private settingsService: SettingsService,
    private mediaService: MediaService
  ) {}

  ngOnInit() {
    this.loadSettings();
    this.loadIconOptions();
    this.loadMediaItems();
  }

  loadSettings() {
    this.settingsService.getSettings().subscribe({
      next: (settings) => {
        this.currentSettings = { ...settings };
      },
      error: (error) => {
        console.error('Error loading settings:', error);
      }
    });
  }

  loadIconOptions() {
    this.settingsService.getIconOptions().subscribe({
      next: (options) => {
        this.iconOptions = options;
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
      }
    });
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  selectLogo(logoUrl: string) {
    this.currentSettings.logoUrl = logoUrl;
  }

  openLogoModal() {
    this.showLogoModal = true;
    this.selectedLogoUrl = this.currentSettings.logoUrl;
  }

  closeLogoModal() {
    this.showLogoModal = false;
    this.selectedLogoUrl = '';
  }

  selectLogoFromModal(logoUrl: string) {
    this.selectedLogoUrl = logoUrl;
  }

  confirmLogoSelection() {
    if (this.selectedLogoUrl) {
      this.currentSettings.logoUrl = this.selectedLogoUrl;
      this.closeLogoModal();
    }
  }

  onLogoFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploadLogoFile(file);
    }
  }

  onModalFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.uploadLogoFile(file);
    }
  }

  uploadLogoFile(file: File) {
    this.isUploading = true;
    this.uploadProgress = 0;

    // Simulate upload progress
    const interval = setInterval(() => {
      this.uploadProgress += 10;
      if (this.uploadProgress >= 100) {
        clearInterval(interval);
        this.processLogoUpload(file);
      }
    }, 200);
  }

  processLogoUpload(file: File) {
    this.mediaService.uploadMedia(file, 'logos').subscribe({
      next: (result) => {
        if (result.success && result.mediaItem) {
          this.currentSettings.logoUrl = result.mediaItem.url;
          this.loadMediaItems(); // Refresh media items
          this.showSuccessMessage = true;
          this.successMessage = 'Logo uploaded successfully!';
          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 3000);
        }
        this.isUploading = false;
        this.uploadProgress = 0;
      },
      error: (error) => {
        console.error('Upload error:', error);
        this.isUploading = false;
        this.uploadProgress = 0;
      }
    });
  }

  saveSettings() {
    this.settingsService.updateSettings(this.currentSettings).subscribe({
      next: (result) => {
        if (result.success) {
          this.showSuccessMessage = true;
          this.successMessage = result.message;
          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 3000);
        }
      },
      error: (error) => {
        console.error('Error saving settings:', error);
      }
    });
  }

  resetToDefaults() {
    if (confirm('Are you sure you want to reset all settings to defaults? This action cannot be undone.')) {
      this.settingsService.resetToDefaults().subscribe({
        next: (result) => {
          if (result.success) {
            this.loadSettings();
            this.showSuccessMessage = true;
            this.successMessage = result.message;
            setTimeout(() => {
              this.showSuccessMessage = false;
            }, 3000);
          }
        },
        error: (error) => {
          console.error('Error resetting settings:', error);
        }
      });
    }
  }
}