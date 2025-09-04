import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AboutService } from '../../../../colleges/Al-Alsun/Services/about.service';
import { VisionMission } from '../../../../colleges/Al-Alsun/model/about.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-add-vision-mission',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-vision-mission.component.html',
  styleUrls: ['./add-vision-mission.component.css']
})
export class AddVisionMissionComponent implements OnInit {
  visionMissionForm: FormGroup;
  showToast = false;
  toastMessage = '';
  toastClass = '';
  toastIcon = '';
  activeSubmenu: string | null = 'pages';

  constructor(
    private fb: FormBuilder,
    private aboutService: AboutService,
    private router: Router
  ) {
    this.visionMissionForm = this.createForm();
  }

  ngOnInit() {
    this.visionMissionForm.reset();
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
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: ['']
    });
  }

  saveVisionMission() {
    if (this.visionMissionForm.valid) {
      const formValue = this.visionMissionForm.value as VisionMission;
      this.aboutService.addVisionMission(formValue).subscribe(() => {
        this.showSuccessToast('Vision/Mission added successfully');
        setTimeout(() => {
          this.router.navigate(['/dashboard/about']);
        }, 3000);
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