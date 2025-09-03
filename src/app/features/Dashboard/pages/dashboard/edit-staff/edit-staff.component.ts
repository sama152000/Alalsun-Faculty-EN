import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { StaffService } from '../../../../colleges/Al-Alsun/Services/staff.service';
import { StaffMember, Department } from '../../../../colleges/Al-Alsun/model/staff.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-edit-staff',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.css']
})
export class EditStaffComponent implements OnInit {
  staffForm: FormGroup;
  departments: Department[] = [];
  activeTab = 'basic';
  showToast = false;
  toastMessage = '';
  toastClass = '';
  toastIcon = '';
  activeSubmenu: string | null = 'pages';
  editingId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private staffService: StaffService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.staffForm = this.createForm();
  }

  ngOnInit() {
    this.departments = this.staffService.getDepartments();
    this.editingId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.editingId) {
      const staff = this.staffService.getStaffById(this.editingId);
      if (staff) {
        this.populateForm(staff);
      } else {
        this.showErrorToast('Staff member not found');
        this.router.navigate(['/dashboard/staff']);
      }
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

  private populateForm(staff: StaffMember) {
    this.clearFormArrays();
    this.staffForm.patchValue({
      id: staff.id,
      name: staff.name,
      position: staff.position,
      department: staff.department,
      image: staff.image,
      email: staff.email,
      phone: staff.phone,
      bio: staff.bio,
      specialization: staff.specialization
    });

    if (staff.education) {
      staff.education.forEach(degree => {
        this.educationArray.push(this.fb.group({
          degree: [degree, Validators.required]
        }));
      });
    }

    if (staff.experience) {
      staff.experience.forEach(role => {
        this.experienceArray.push(this.fb.group({
          role: [role, Validators.required]
        }));
      });
    }

    if (staff.researchInterests) {
      staff.researchInterests.forEach(interest => {
        this.researchInterestsArray.push(this.fb.group({
          interest: [interest, Validators.required]
        }));
      });
    }

    if (staff.publications) {
      staff.publications.forEach(title => {
        this.publicationsArray.push(this.fb.group({
          title: [title, Validators.required]
        }));
      });
    }
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
    if (this.staffForm.valid && this.editingId) {
      const formValue = this.staffForm.value;
      this.staffService.updateStaff(this.editingId, formValue);
      this.showSuccessToast('Staff member updated successfully');
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