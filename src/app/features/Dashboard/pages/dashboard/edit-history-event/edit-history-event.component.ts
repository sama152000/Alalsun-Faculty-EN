import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AboutService } from '../../../../colleges/Al-Alsun/Services/about.service';
import { HistoryEvent } from '../../../../colleges/Al-Alsun/model/about.model';

@Component({
  selector: 'app-edit-history-event',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './edit-history-event.component.html',
  styleUrls: ['./edit-history-event.component.css']
})
export class EditHistoryEventComponent implements OnInit {
  historyEventForm: FormGroup;
  showToast = false;
  toastMessage = '';
  toastClass = '';
  toastIcon = '';
  eventId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private aboutService: AboutService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.historyEventForm = this.createForm();
  }

  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get('id');
    if (this.eventId) {
      this.aboutService.getHistoryEvents().subscribe(events => {
        const event = events.find(e => e.id === this.eventId);
        if (event) {
          this.historyEventForm.patchValue(event);
        } else {
          this.showErrorToast('History Event not found');
          this.router.navigate(['/dashboard/about']);
        }
      });
    }
  }

  private createForm(): FormGroup {
    return this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      date: ['', Validators.required],
      description: ['', Validators.required],
      image: ['']
    });
  }

  saveHistoryEvent() {
    if (this.historyEventForm.valid) {
      const formValue = this.historyEventForm.value as HistoryEvent;
      this.aboutService.updateHistoryEvent(formValue).subscribe(() => {
        this.showSuccessToast('History Event updated successfully');
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