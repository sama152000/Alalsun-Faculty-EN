import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { DepartmentsService } from '../../../../colleges/Al-Alsun/Services/departments.service';

@Component({
  selector: 'app-additional-department-information',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './additional-department-information.component.html',
  styleUrls: ['./additional-department-information.component.css']
})
export class AdditionalDepartmentInformationComponent implements OnInit {
  departmentForm: FormGroup;
  departmentId: string | null = null;
  activeTab = 'programs';
  showToast = false;
  toastMessage = '';
  toastClass = '';
  toastIcon = '';

  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.departmentForm = this.createForm();
  }

  ngOnInit() {
    this.departmentId = this.route.snapshot.paramMap.get('id');
    if (this.departmentId) {
      this.departmentService.getDepartmentById(this.departmentId).subscribe({
        next: (department) => {
          if (department) {
            // Clear existing form arrays
            this.clearFormArray(this.programsArray);
            this.clearFormArray(this.facultyArray);
            this.clearFormArray(this.activitiesArray);

            // Populate programs form array
            (department.programs || []).forEach((program: any) => {
              const programGroup = this.createProgramFormGroup();
              programGroup.patchValue(program);
              this.programsArray.push(programGroup);
            });

            // Populate faculty form array
            (department.faculty || []).forEach((facultyMember: any) => {
              const facultyGroup = this.createFacultyFormGroup();
              facultyGroup.patchValue(facultyMember);
              this.facultyArray.push(facultyGroup);
            });

            // Populate activities form array
            (department.activities || []).forEach((activity: any) => {
              const activityGroup = this.createActivityFormGroup();
              activityGroup.patchValue(activity);
              this.activitiesArray.push(activityGroup);
            });

            // Patch contact info
            this.departmentForm.get('contact')?.patchValue(department.contact || { email: '', phone: '', office: '', headOfDepartment: '' });
          }
        },
        error: (error) => {
          this.showErrorToast('Error loading department data: ' + (error.error?.message || error.message));
        }
      });
    }
  }

  private clearFormArray(formArray: FormArray) {
    while (formArray.length !== 0) {
      formArray.removeAt(0);
    }
  }

  private createForm(): FormGroup {
    return this.fb.group({
      programs: this.fb.array([]),
      faculty: this.fb.array([]),
      activities: this.fb.array([]),
      contact: this.fb.group({
        email: [''],
        phone: [''],
        office: [''],
        headOfDepartment: ['']
      })
    });
  }

  get programsArray() {
    return this.departmentForm.get('programs') as FormArray;
  }

  get facultyArray() {
    return this.departmentForm.get('faculty') as FormArray;
  }

  get activitiesArray() {
    return this.departmentForm.get('activities') as FormArray;
  }

  private createProgramFormGroup(): FormGroup {
    return this.fb.group({
      id: [crypto.randomUUID()],
      name: ['', Validators.required],
      description: [''],
      duration: [''],
      degree: ['']
    });
  }

  private createFacultyFormGroup(): FormGroup {
    return this.fb.group({
      id: [crypto.randomUUID()],
      name: ['', Validators.required],
      title: [''],
      email: ['', Validators.email],
      specialization: [''],
      photo: ['']
    });
  }

  private createActivityFormGroup(): FormGroup {
    return this.fb.group({
      id: [crypto.randomUUID()],
      title: ['', Validators.required],
      description: [''],
      date: [''],
      image: ['']
    });
  }

  addProgram() {
    this.programsArray.push(this.createProgramFormGroup());
  }

  removeProgram(index: number) {
    this.programsArray.removeAt(index);
  }

  addFaculty() {
    this.facultyArray.push(this.createFacultyFormGroup());
  }

  removeFaculty(index: number) {
    this.facultyArray.removeAt(index);
  }

  addActivity() {
    this.activitiesArray.push(this.createActivityFormGroup());
  }

  removeActivity(index: number) {
    this.activitiesArray.removeAt(index);
  }

  saveAdditionalInfo() {
    if (this.departmentId) {
      const formValue = this.departmentForm.value;
      formValue.activities = formValue.activities.map((activity: any) => ({
        ...activity,
        date: activity.date ? new Date(activity.date).toISOString() : null
      }));
      this.departmentService.updateDepartment(this.departmentId, formValue).subscribe({
        next: () => {
          this.showSuccessToast('Additional information saved successfully');
          setTimeout(() => this.router.navigate(['/dashboard/departments']), 2000);
        },
        error: (error) => {
          this.showErrorToast('Error saving additional information: ' + (error.error?.message || error.message));
        }
      });
    } else {
      this.showErrorToast('No department ID provided');
    }
  }

  skipToDashboard() {
    this.router.navigate(['/dashboard/departments']);
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
