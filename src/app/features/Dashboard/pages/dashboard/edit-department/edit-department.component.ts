import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { DepartmentsService } from '../../../../colleges/Al-Alsun/Services/departments.service';
import { Department } from '../../../../colleges/Al-Alsun/model/department.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-edit-department',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {
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
  editingId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.departmentForm = this.createForm();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects;
      if (url.includes('/dashboard')) {
        this.activeSubmenu = 'pages';
      } else if (url.includes('/dashboard/posts')) {
        this.activeSubmenu = 'posts';
      } else {
        this.activeSubmenu = null;
      }
    });
  }

  ngOnInit() {
    this.editingId = this.route.snapshot.paramMap.get('id');
    if (this.editingId) {
      this.departmentService.getDepartmentById(this.editingId).subscribe(department => {
        if (department) {
          this.populateForm(department);
        } else {
          this.showErrorToast('Department not found');
          this.router.navigate(['/dashboard/departments']);
        }
      });
    }
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

  private populateForm(department: Department) {
    this.clearFormArrays();
    this.departmentForm.patchValue({
      id: department.id,
      name: department.name,
      shortName: department.shortName,
      overview: department.overview,
      type: department.type,
      established: department.established,
      image: department.image,
      icon: department.icon,
      route: department.route,
      contact: department.contact
    });

    if (department.programs) {
      department.programs.forEach(program => {
        this.programsArray.push(this.fb.group({
          id: [program.id],
          name: [program.name, Validators.required],
          description: [program.description],
          duration: [program.duration],
          degree: [program.degree]
        }));
      });
    }

    if (department.faculty) {
      department.faculty.forEach(member => {
        this.facultyArray.push(this.fb.group({
          id: [member.id],
          name: [member.name, Validators.required],
          title: [member.title],
          email: [member.email, Validators.email],
          specialization: [member.specialization],
          photo: [member.photo]
        }));
      });
    }

    if (department.activities) {
      department.activities.forEach(activity => {
        this.activitiesArray.push(this.fb.group({
          id: [activity.id],
          title: [activity.title, Validators.required],
          description: [activity.description],
          date: [activity.date],
          image: [activity.image]
        }));
      });
    }
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
  if (this.departmentForm.valid && this.editingId) {
    const formValue = this.departmentForm.value;
    if (formValue.activities) {
      formValue.activities = formValue.activities.map((activity: any) => ({
        ...activity,
        date: activity.date ? new Date(activity.date).toISOString() : null
      }));
    }
    this.departmentService.updateDepartment(this.editingId, formValue).subscribe({
      next: () => {
        this.showSuccessToast('Department updated successfully');
        setTimeout(() => this.router.navigate(['/dashboard/departments']), 3000);
      },
      error: (error) => {
        this.showErrorToast('Error updating department: ' + (error.error?.message || error.message));
      }
    });
  }
}

  toggleSubmenu(menu: string): void {
    this.activeSubmenu = this.activeSubmenu === menu ? null : menu;
  }

  isPagesActive(): boolean {
    return this.router.url.includes('/dashboard');
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