import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentsService } from '../../../../colleges/Al-Alsun/Services/departments.service';

@Component({
  selector: 'app-add-department',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './AddDepartmentComponent.component.html',
  styleUrls: ['./AddDepartmentComponent.component.css']
})
export class AddDepartmentComponent implements OnInit {
  departmentForm: FormGroup;
  departmentTypes = [
    { label: 'Academic Department', value: 'Academic Department' },
    { label: 'Research Center', value: 'Research Center' },
    { label: 'Administrative Unit', value: 'Administrative Unit' }
  ];
  showToast = false;
  toastMessage = '';
  toastClass = '';
  toastIcon = '';

  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentsService,
    private router: Router
  ) {
    this.departmentForm = this.createForm();
  }

  ngOnInit() {
    this.departmentForm.reset();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      shortName: ['', Validators.required],
      overview: ['', Validators.required],
      type: ['Academic Department'],
      established: [''],
      image: [''],
      icon: ['pi pi-building'],
      route: ['']
    });
  }

  saveDepartment() {
    if (this.departmentForm.valid) {
      const formValue = this.departmentForm.value;
      const department = {
        ...formValue,
        programs: [],
        faculty: [],
        activities: [],
        contact: { email: '', phone: '', office: '', headOfDepartment: '' }
      };
      this.departmentService.addDepartment(department).subscribe({
        next: (response: any) => {
          this.showSuccessToast('Department created successfully');
          setTimeout(() => {
            this.router.navigate([`/dashboard/departments/additional/${response.id}`]);
          }, 2000);
        },
        error: (error) => {
          this.showErrorToast('Error creating department: ' + (error.error?.message || error.message));
        }
      });
    } else {
      this.showErrorToast('Please fill all required fields');
      this.markFormGroupTouched(this.departmentForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
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