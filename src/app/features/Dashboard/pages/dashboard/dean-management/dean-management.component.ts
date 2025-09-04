import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AboutService } from '../../../../colleges/Al-Alsun/Services/about.service';
import { DeanInfo } from '../../../../colleges/Al-Alsun/model/about.model';

@Component({
  selector: 'app-dean-management',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dean-management.component.html',
  styleUrls: ['./dean-management.component.css']
})
export class DeanManagementComponent implements OnInit {
  dean: DeanInfo | null = null;
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
  }

  loadDeanInfo() {
    this.aboutService.getDeanInfo().subscribe(dean => {
      this.dean = dean;
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