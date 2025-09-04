import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AboutService } from '../../../../colleges/Al-Alsun/Services/about.service';
import { DeanInfo } from '../../../../colleges/Al-Alsun/model/about.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-add-dean',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-dean.component.html',
  styleUrls: ['./add-dean.component.css']
})
export class AddDeanComponent implements OnInit {
  deanForm: FormGroup;
  activeTab = 'basic';
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
    this.deanForm = this.createForm();
  }

  ngOnInit() {
    this.deanForm.reset();
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
      id: ['', Validators.required],
      name: ['', Validators.required],
      position: ['', Validators.required],
      photo: [''],
      greeting: ['', Validators.required],
      highlight: ['', Validators.required],
      callToAction: ['', Validators.required],
      message: this.fb.array([]),
      closing: this.fb.array([])
    });
  }

  get messageArray() {
    return this.deanForm.get('message') as FormArray;
  }

  get closingArray() {
    return this.deanForm.get('closing') as FormArray;
  }

  addMessage() {
    this.messageArray.push(this.fb.control('', Validators.required));
  }

  removeMessage(index: number) {
    this.messageArray.removeAt(index);
  }

  addClosing() {
    this.closingArray.push(this.fb.control('', Validators.required));
  }

  removeClosing(index: number) {
    this.closingArray.removeAt(index);
  }

  private clearFormArrays() {
    while (this.messageArray.length !== 0) {
      this.messageArray.removeAt(0);
    }
    while (this.closingArray.length !== 0) {
      this.closingArray.removeAt(0);
    }
  }

  saveDean() {
    if (this.deanForm.valid) {
      const formValue = this.deanForm.value as DeanInfo;
      this.aboutService.addDeanInfo(formValue).subscribe(() => {
        this.showSuccessToast('New Dean added successfully');
        setTimeout(() => {
          this.router.navigate(['/dashboard/about/dean']);
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