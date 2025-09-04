import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AboutService } from '../../../../colleges/Al-Alsun/Services/about.service';
import { ViceDean } from '../../../../colleges/Al-Alsun/model/about.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-add-vice-dean',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-vice-dean.component.html',
  styleUrls: ['./add-vice-dean.component.css']
})
export class AddViceDeanComponent implements OnInit {
  viceDeanForm: FormGroup;
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
    this.viceDeanForm = this.createForm();
  }

  ngOnInit() {
    this.viceDeanForm.reset();
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
      image: [''],
      sector: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      office: [''],
      message: this.fb.array([])
    });
  }

  get messageArray() {
    return this.viceDeanForm.get('message') as FormArray;
  }

  private createMessageFormControl(): any {
    return this.fb.control('', Validators.required);
  }

  addMessage() {
    this.messageArray.push(this.createMessageFormControl());
  }

  removeMessage(index: number) {
    this.messageArray.removeAt(index);
  }

  private clearFormArrays() {
    while (this.messageArray.length !== 0) {
      this.messageArray.removeAt(0);
    }
  }

  saveViceDean() {
    if (this.viceDeanForm.valid) {
      const formValue = this.viceDeanForm.value as ViceDean;
      this.aboutService.addViceDean(formValue).subscribe(() => {
        this.showSuccessToast('Vice Dean created successfully');
        setTimeout(() => {
          this.router.navigate(['/dashboard/about/vice-deans']);
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