import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { SectorsService } from '../../../../colleges/Al-Alsun/Services/sectors.service';
import { SectorData, ViceDeanInfo, SectorDepartment, SectorService, NewsItem, MediaItem, SectorStatistic, ActivityItem, Achievement } from '../../../../colleges/Al-Alsun/model/sector.model';

@Component({
  selector: 'app-sectors-additional-information',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sectors-additional-information.component.html',
  styleUrls: ['./sectors-additional-information.component.css']
})
export class SectorsAdditionalInformationComponent implements OnInit {
  sectorForm: FormGroup;
  activeTab = 'viceDean';
  showToast = false;
  toastMessage = '';
  toastClass = '';
  toastIcon = '';
  sectorId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private sectorsService: SectorsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.sectorForm = this.createForm();
  }

  ngOnInit() {
    this.sectorId = this.route.snapshot.paramMap.get('id');
    if (this.sectorId) {
      this.sectorsService.getSectorById(this.sectorId).subscribe({
        next: (sector) => {
          if (sector) {
            this.sectorForm.patchValue({
              viceDean: sector.viceDean,
              departments: sector.departments,
              services: sector.services,
              news: sector.news,
              media: sector.media,
              statistics: sector.statistics,
              activities: sector.activities,
              achievements: sector.achievements
            });
          }
        },
        error: (error) => {
          this.showErrorToast('Error loading sector: ' + error.message);
          this.router.navigate(['/dashboard/sectors']);
        }
      });
    }
    this.sectorForm.reset();
    this.clearFormArrays();
  }

  private createForm(): FormGroup {
    return this.fb.group({
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

  saveAdditionalInfo() {
    if (this.sectorId && this.sectorForm.valid) {
      this.sectorsService.getSectorById(this.sectorId).subscribe({
        next: (sector) => {
          if (sector) {
            const updatedSector: SectorData = {
              ...sector,
              ...this.sectorForm.value
            };
            this.sectorsService.updateSector(this.sectorId!, updatedSector).subscribe({
              next: () => {
                this.showSuccessToast('Additional information saved successfully');
                setTimeout(() => {
                  this.router.navigate(['/dashboard/sectors']);
                }, 3000);
              },
              error: (error) => {
                this.showErrorToast('Error saving additional information: ' + error.message);
              }
            });
          } else {
            this.showErrorToast('Sector not found');
          }
        },
        error: (error) => {
          this.showErrorToast('Error loading sector: ' + error.message);
        }
      });
    } else {
      this.showErrorToast('Please fill all required fields or provide a valid sector ID');
    }
  }

  skipToSectorsManagement() {
    this.router.navigate(['/dashboard/sectors']);
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