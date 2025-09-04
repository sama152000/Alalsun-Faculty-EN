import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AboutService } from '../../../../colleges/Al-Alsun/Services/about.service';
import { HistoryEvent } from '../../../../colleges/Al-Alsun/model/about.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-add-history-event',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-history-event.component.html',
  styleUrls: ['./add-history-event.component.css']
})
export class AddHistoryEventComponent implements OnInit {
  historyEventForm: FormGroup;
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
    this.historyEventForm = this.createForm();
  }

  ngOnInit() {
    this.historyEventForm.reset();
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
      title: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      image: ['']
    });
  }

  saveHistoryEvent() {
    if (this.historyEventForm.valid) {
      const formValue = this.historyEventForm.value as HistoryEvent;
      this.aboutService.addHistoryEvent(formValue).subscribe(() => {
        this.showSuccessToast('History Event added successfully');
        setTimeout(() => {
          this.router.navigate(['/dashboard/about']);
        }, 3000);
      });
    } else {
      this.showErrorToast('Please fill all required fields');
    }
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