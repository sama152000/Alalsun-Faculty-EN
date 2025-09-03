import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { StaffService } from '../../../../colleges/Al-Alsun/Services/staff.service';
import { Department } from '../../..//../colleges/Al-Alsun/model/staff.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-add-staff',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.css']
})
export class AddStaffComponent implements OnInit {
  staffForm: FormGroup;
  departments: Department[] = [];
  activeTab = 'basic';
  showToast = false;
  toastMessage = '';
  toastClass = '';
  toastIcon = '';
  activeSubmenu: string | null = 'pages';

  constructor(
    private fb: FormBuilder,
    private staffService: StaffService,
    private router: Router
  ) {
    this.staffForm = this.createForm();
  }

  ngOnInit() {
    this.departments = this.staffService.getDepartments();
    this.staffForm.reset();
    this.clearFormArrays();
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
      id: [''],
      name: ['', Validators.required],
      position: ['', Validators.required],
      department: ['', Validators.required],
      image: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      bio: [''],
      specialization: [''],
      education: this.fb.array([]),
      experience: this.fb.array([]),
      researchInterests: this.fb.array([]),
      publications: this.fb.array([])
    });
  }

  get educationArray() {
    return this.staffForm.get('education') as FormArray;
  }

  get experienceArray() {
    return this.staffForm.get('experience') as FormArray;
  }

  get researchInterestsArray() {
    return this.staffForm.get('researchInterests') as FormArray;
  }

  get publicationsArray() {
    return this.staffForm.get('publications') as FormArray;
  }

  private createEducationFormGroup(): FormGroup {
    return this.fb.group({
      degree: ['', Validators.required]
    });
  }

  private createExperienceFormGroup(): FormGroup {
    return this.fb.group({
      role: ['', Validators.required]
    });
  }

  private createResearchInterestFormGroup(): FormGroup {
    return this.fb.group({
      interest: ['', Validators.required]
    });
  }

  private createPublicationFormGroup(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required]
    });
  }

  addEducation() {
    this.educationArray.push(this.createEducationFormGroup());
  }

  removeEducation(index: number) {
    this.educationArray.removeAt(index);
  }

  addExperience() {
    this.experienceArray.push(this.createExperienceFormGroup());
  }

  removeExperience(index: number) {
    this.experienceArray.removeAt(index);
  }

  addResearchInterest() {
    this.researchInterestsArray.push(this.createResearchInterestFormGroup());
  }

  removeResearchInterest(index: number) {
    this.researchInterestsArray.removeAt(index);
  }

  addPublication() {
    this.publicationsArray.push(this.createPublicationFormGroup());
  }

  removePublication(index: number) {
    this.publicationsArray.removeAt(index);
  }

  private clearFormArrays() {
    while (this.educationArray.length !== 0) {
      this.educationArray.removeAt(0);
    }
    while (this.experienceArray.length !== 0) {
      this.experienceArray.removeAt(0);
    }
    while (this.researchInterestsArray.length !== 0) {
      this.researchInterestsArray.removeAt(0);
    }
    while (this.publicationsArray.length !== 0) {
      this.publicationsArray.removeAt(0);
    }
  }

  saveStaff() {
    if (this.staffForm.valid) {
      const formValue = this.staffForm.value;
      formValue.id = Math.max(...this.staffService.getAllStaff().map(s => s.id)) + 1;
      this.staffService.addStaff(formValue);
      this.showSuccessToast('Staff member created successfully');
      setTimeout(() => {
        this.router.navigate(['/dashboard/staff']);
      }, 3000);
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