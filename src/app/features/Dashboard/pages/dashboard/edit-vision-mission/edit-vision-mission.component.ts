import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AboutService } from '../../../../colleges/Al-Alsun/Services/about.service';
import { VisionMission } from '../../../../colleges/Al-Alsun/model/about.model';

@Component({
  selector: 'app-edit-vision-mission',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './edit-vision-mission.component.html',
  styleUrls: ['./edit-vision-mission.component.css']
})
export class EditVisionMissionComponent implements OnInit {
  visionMissionForm: FormGroup;
  showToast = false;
  toastMessage = '';
  toastClass = '';
  toastIcon = '';
  vmId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private aboutService: AboutService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.visionMissionForm = this.createForm();
  }

  ngOnInit() {
    this.vmId = this.route.snapshot.paramMap.get('id');
    if (this.vmId) {
      this.aboutService.getVisionMission().subscribe(vms => {
        const vm = vms.find(v => v.id === this.vmId);
        if (vm) {
          this.visionMissionForm.patchValue(vm);
        } else {
          this.showErrorToast('Vision/Mission not found');
          this.router.navigate(['/dashboard/about']);
        }
      });
    }
  }

  private createForm(): FormGroup {
    return this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: ['']
    });
  }

  saveVisionMission() {
    if (this.visionMissionForm.valid) {
      const formValue = this.visionMissionForm.value as VisionMission;
      this.aboutService.updateVisionMission(formValue).subscribe(() => {
        this.showSuccessToast('Vision/Mission updated successfully');
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