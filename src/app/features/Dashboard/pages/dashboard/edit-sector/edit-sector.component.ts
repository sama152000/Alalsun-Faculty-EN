import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { SectorsService } from '../../../../colleges/Al-Alsun/Services/sectors.service';
import { SectorData, ViceDeanInfo, SectorDepartment, SectorService, NewsItem, MediaItem, SectorStatistic, ActivityItem, Achievement } from '../../../../colleges/Al-Alsun/model/sector.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-edit-sector',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './edit-sector.component.html',
  styleUrls: ['./edit-sector.component.css']
})
export class EditSectorComponent implements OnInit {
  sectorForm: FormGroup;
  activeTab = 'basic';
  showToast = false;
  toastMessage = '';
  toastClass = '';
  toastIcon = '';
  activeSubmenu: string | null = 'pages';
  editingId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private sectorsService: SectorsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.sectorForm = this.createForm();
  }

  ngOnInit() {
    this.editingId = this.route.snapshot.paramMap.get('id');
    if (this.editingId) {
      this.sectorsService.getSectorById(this.editingId).subscribe(sector => {
        if (sector) {
          this.populateForm(sector);
        } else {
          this.showErrorToast('Sector not found');
          this.router.navigate(['/dashboard/sectors']);
        }
      });
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
      id: ['', Validators.required],
      name: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: [''],
      viceDean: this.fb.group({
        name: ['', Validators.required],
        title: ['', Validators.required],
        photo: [''],
        email: ['', [Validators.required, Validators.email]],
        office: ['']
      }),
      departments: this.fb.array([]),
      services: this.fb.array([]),
      news: this.fb.array([]),
      media: this.fb.array([]),
      statistics: this.fb.array([]),
      activities: this.fb.array([]),
      achievements: this.fb.array([])
    });
  }

  get departmentsArray() {
    return this.sectorForm.get('departments') as FormArray;
  }

  get servicesArray() {
    return this.sectorForm.get('services') as FormArray;
  }

  get newsArray() {
    return this.sectorForm.get('news') as FormArray;
  }

  get mediaArray() {
    return this.sectorForm.get('media') as FormArray;
  }

  get statisticsArray() {
    return this.sectorForm.get('statistics') as FormArray;
  }

  get activitiesArray() {
    return this.sectorForm.get('activities') as FormArray;
  }

  get achievementsArray() {
    return this.sectorForm.get('achievements') as FormArray;
  }

  private createDepartmentFormGroup(): FormGroup {
    return this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      overview: ['', Validators.required],
      responsibilities: this.fb.array([]),
      contact: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        office: ['', Validators.required],
        phone: ['']
      })
    });
  }

  private createServiceFormGroup(): FormGroup {
    return this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      steps: this.fb.array([]),
      requiredDocuments: this.fb.array([]),
      downloadableForms: this.fb.array([])
    });
  }

  private createNewsFormGroup(): FormGroup {
    return this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      summary: ['', Validators.required],
      date: ['', Validators.required],
      image: [''],
      category: ['', Validators.required]
    });
  }

  private createMediaFormGroup(): FormGroup {
    return this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      type: ['', Validators.required],
      url: ['', Validators.required],
      thumbnail: [''],
      description: [''],
      date: ['', Validators.required]
    });
  }

  private createStatisticFormGroup(): FormGroup {
    return this.fb.group({
      label: ['', Validators.required],
      value: ['', Validators.required],
      icon: ['', Validators.required]
    });
  }

  private createActivityFormGroup(): FormGroup {
    return this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      image: [''],
      type: ['', Validators.required]
    });
  }

  private createAchievementFormGroup(): FormGroup {
    return this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      image: ['']
    });
  }

  addDepartment() {
    this.departmentsArray.push(this.createDepartmentFormGroup());
  }

  removeDepartment(index: number) {
    this.departmentsArray.removeAt(index);
  }

  addService() {
    this.servicesArray.push(this.createServiceFormGroup());
  }

  removeService(index: number) {
    this.servicesArray.removeAt(index);
  }

  addNews() {
    this.newsArray.push(this.createNewsFormGroup());
  }

  removeNews(index: number) {
    this.newsArray.removeAt(index);
  }

  addMedia() {
    this.mediaArray.push(this.createMediaFormGroup());
  }

  removeMedia(index: number) {
    this.mediaArray.removeAt(index);
  }

  addStatistic() {
    this.statisticsArray.push(this.createStatisticFormGroup());
  }

  removeStatistic(index: number) {
    this.statisticsArray.removeAt(index);
  }

  addActivity() {
    this.activitiesArray.push(this.createActivityFormGroup());
  }

  removeActivity(index: number) {
    this.activitiesArray.removeAt(index);
  }

  addAchievement() {
    this.achievementsArray.push(this.createAchievementFormGroup());
  }

  removeAchievement(index: number) {
    this.achievementsArray.removeAt(index);
  }

  // Helpers for array of strings
  getResponsibilities(departmentIndex: number): FormArray {
    return this.departmentsArray.at(departmentIndex).get('responsibilities') as FormArray;
  }

  addResponsibility(departmentIndex: number) {
    this.getResponsibilities(departmentIndex).push(this.fb.control('', Validators.required));
  }

  removeResponsibility(departmentIndex: number, respIndex: number) {
    this.getResponsibilities(departmentIndex).removeAt(respIndex);
  }

  getSteps(serviceIndex: number): FormArray {
    return this.servicesArray.at(serviceIndex).get('steps') as FormArray;
  }

  addStep(serviceIndex: number) {
    this.getSteps(serviceIndex).push(this.fb.control('', Validators.required));
  }

  removeStep(serviceIndex: number, stepIndex: number) {
    this.getSteps(serviceIndex).removeAt(stepIndex);
  }

  getRequiredDocuments(serviceIndex: number): FormArray {
    return this.servicesArray.at(serviceIndex).get('requiredDocuments') as FormArray;
  }

  addRequiredDocument(serviceIndex: number) {
    this.getRequiredDocuments(serviceIndex).push(this.fb.control('', Validators.required));
  }

  removeRequiredDocument(serviceIndex: number, docIndex: number) {
    this.getRequiredDocuments(serviceIndex).removeAt(docIndex);
  }

  getDownloadableForms(serviceIndex: number): FormArray {
    return this.servicesArray.at(serviceIndex).get('downloadableForms') as FormArray;
  }

  addDownloadableForm(serviceIndex: number) {
    this.getDownloadableForms(serviceIndex).push(this.fb.control('', Validators.required));
  }

  removeDownloadableForm(serviceIndex: number, formIndex: number) {
    this.getDownloadableForms(serviceIndex).removeAt(formIndex);
  }

  private populateForm(sector: SectorData) {
    this.clearFormArrays();
    this.sectorForm.patchValue({
      id: sector.id,
      name: sector.name,
      title: sector.title,
      description: sector.description,
      image: sector.image,
      viceDean: {
        name: sector.viceDean.name,
        title: sector.viceDean.title,
        photo: sector.viceDean.photo,
        email: sector.viceDean.email,
        office: sector.viceDean.office
      }
    });

    sector.departments.forEach(dept => {
      const deptGroup = this.createDepartmentFormGroup();
      deptGroup.patchValue(dept);
      dept.responsibilities.forEach(resp => {
        (deptGroup.get('responsibilities') as FormArray).push(this.fb.control(resp, Validators.required));
      });
      this.departmentsArray.push(deptGroup);
    });

    sector.services.forEach(serv => {
      const servGroup = this.createServiceFormGroup();
      servGroup.patchValue(serv);
      serv.steps.forEach(step => {
        (servGroup.get('steps') as FormArray).push(this.fb.control(step, Validators.required));
      });
      serv.requiredDocuments.forEach(doc => {
        (servGroup.get('requiredDocuments') as FormArray).push(this.fb.control(doc, Validators.required));
      });
      if (serv.downloadableForms) {
        serv.downloadableForms.forEach(form => {
          (servGroup.get('downloadableForms') as FormArray).push(this.fb.control(form, Validators.required));
        });
      }
      this.servicesArray.push(servGroup);
    });

    sector.news.forEach(news => {
      this.newsArray.push(this.fb.group(news));
    });

    sector.media.forEach(media => {
      this.mediaArray.push(this.fb.group(media));
    });

    sector.statistics.forEach(stat => {
      this.statisticsArray.push(this.fb.group(stat));
    });

    sector.activities.forEach(act => {
      this.activitiesArray.push(this.fb.group(act));
    });

    sector.achievements.forEach(ach => {
      this.achievementsArray.push(this.fb.group(ach));
    });
  }

  private clearFormArrays() {
    while (this.departmentsArray.length !== 0) {
      this.departmentsArray.removeAt(0);
    }
    while (this.servicesArray.length !== 0) {
      this.servicesArray.removeAt(0);
    }
    while (this.newsArray.length !== 0) {
      this.newsArray.removeAt(0);
    }
    while (this.mediaArray.length !== 0) {
      this.mediaArray.removeAt(0);
    }
    while (this.statisticsArray.length !== 0) {
      this.statisticsArray.removeAt(0);
    }
    while (this.activitiesArray.length !== 0) {
      this.activitiesArray.removeAt(0);
    }
    while (this.achievementsArray.length !== 0) {
      this.achievementsArray.removeAt(0);
    }
  }

  saveSector() {
    if (this.sectorForm.valid && this.editingId) {
      const formValue = this.sectorForm.value as SectorData;
      this.sectorsService.updateSector(this.editingId, formValue).subscribe(() => {
        this.showSuccessToast('Sector updated successfully');
        setTimeout(() => {
          this.router.navigate(['/dashboard/sectors']);
        }, 3000);
      });
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