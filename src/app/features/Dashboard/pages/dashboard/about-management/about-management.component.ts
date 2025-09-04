import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AboutService } from '../../../../colleges/Al-Alsun/Services/about.service';
import { DeanInfo, ViceDean, HistoryEvent, VisionMission } from '../../../../colleges/Al-Alsun/model/about.model';

@Component({
  selector: 'app-about-management',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about-management.component.html',
  styleUrls: ['./about-management.component.css']
})
export class AboutManagementComponent implements OnInit {
  activeTab = 'dean';
  dean: DeanInfo | null = null;
  viceDeans: ViceDean[] = [];
  historyEvents: HistoryEvent[] = [];
  visionMissions: VisionMission[] = [];
  showConfirmDialog = false;
  deleteId: string | null = null;
  deleteType: 'viceDean' | 'historyEvent' | 'visionMission' | null = null;
  showToast = false;
  toastMessage = '';
  toastClass = '';
  toastIcon = '';

  constructor(
    private aboutService: AboutService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadDeanInfo();
    this.loadViceDeans();
    this.loadHistoryEvents();
    this.loadVisionMissions();
  }

  loadDeanInfo() {
    this.aboutService.getDeanInfo().subscribe(dean => {
      this.dean = dean;
    });
  }

  loadViceDeans() {
    this.aboutService.getAllViceDeans().subscribe(viceDeans => {
      this.viceDeans = viceDeans;
    });
  }

  loadHistoryEvents() {
    this.aboutService.getHistoryEvents().subscribe(events => {
      this.historyEvents = events;
    });
  }

  loadVisionMissions() {
    this.aboutService.getVisionMission().subscribe(vm => {
      this.visionMissions = vm;
    });
  }

  confirmDelete(id: string, type: 'viceDean' | 'historyEvent' | 'visionMission') {
    this.deleteId = id;
    this.deleteType = type;
    this.showConfirmDialog = true;
  }

  closeConfirmDialog() {
    this.showConfirmDialog = false;
    this.deleteId = null;
    this.deleteType = null;
  }

  deleteItem() {
    if (this.deleteId && this.deleteType) {
      if (this.deleteType === 'viceDean') {
        this.aboutService.deleteViceDean(this.deleteId).subscribe(() => {
          this.showSuccessToast('Vice Dean deleted successfully');
          this.loadViceDeans();
        });
      } else if (this.deleteType === 'historyEvent') {
        this.aboutService.deleteHistoryEvent(this.deleteId).subscribe(() => {
          this.showSuccessToast('History Event deleted successfully');
          this.loadHistoryEvents();
        });
      } else if (this.deleteType === 'visionMission') {
        this.aboutService.deleteVisionMission(this.deleteId).subscribe(() => {
          this.showSuccessToast('Vision/Mission deleted successfully');
          this.loadVisionMissions();
        });
      }
      this.closeConfirmDialog();
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