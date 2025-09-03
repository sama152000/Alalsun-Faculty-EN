import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { DepartmentsService } from '../../..//../colleges/Al-Alsun/Services/departments.service';
import { filter } from 'rxjs/operators';

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
  activeTab = 'basic';
  showToast = false;
  toastMessage = '';
  toastClass = '';
  toastIcon = '';
  activeSubmenu: string | null = 'pages';

  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentsService,
    private router: Router
  ) {
    this.departmentForm = this.createForm();
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

  ngOnInit() {
    this.departmentForm.reset();
    this.clearFormArrays();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      id: [''],
      name: ['', Validators.required],
      shortName: ['', Validators.required],
      overview: ['', Validators.required],
      type: ['Academic Department'],
      established: [''],
      image: [''],
      icon: ['pi pi-building'],
      route: [''],
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

  private clearFormArrays() {
    while (this.programsArray.length !== 0) {
      this.programsArray.removeAt(0);
    }
    while (this.facultyArray.length !== 0) {
      this.facultyArray.removeAt(0);
    }
    while (this.activitiesArray.length !== 0) {
      this.activitiesArray.removeAt(0);
    }
  }

  saveDepartment() {
    if (this.departmentForm.valid) {
      const formValue = this.departmentForm.value;
      formValue.id = crypto.randomUUID();
      if (formValue.activities) {
        formValue.activities = formValue.activities.map((activity: any) => ({
          ...activity,
          date: activity.date ? new Date(activity.date) : null
        }));
      }
      this.departmentService.addDepartment(formValue).subscribe(() => {
        this.showSuccessToast('Department created successfully');
        setTimeout(() => {
          this.router.navigate(['/dashboard/pages/departments']);
        }, 3000);
      }, error => {
        this.showErrorToast('Error creating department');
      });
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