import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PageHeaderComponent } from '../shared/page-header/page-header/page-header.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ContactService } from '../../Servises/contact.service';
import { ContactInfo, ContactForm, DirectContact, ContactSubmissionResult } from '../../model/contact.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, PageHeaderComponent, NavbarComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  breadcrumbs = [
    { label: 'Contact Us', url: '/alalsun-faculty/contact' }
  ];

  contactInfo: ContactInfo | null = null;
  directContacts: DirectContact[] = [];
  
  contactForm: ContactForm = {
    fullName: '',
    email: '',
    subject: '',
    message: ''
  };

  formErrors: { [key: string]: string } = {};
  isSubmitting = false;
  submissionResult: ContactSubmissionResult | null = null;
  showSuccessMessage = false;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.loadContactInfo();
    this.loadDirectContacts();
  }

  loadContactInfo() {
    this.contactService.getContactInfo().subscribe({
      next: (info) => {
        this.contactInfo = info;
      },
      error: (error) => {
        console.error('Error loading contact info:', error);
      }
    });
  }

  loadDirectContacts() {
    this.contactService.getDirectContacts().subscribe({
      next: (contacts) => {
        this.directContacts = contacts;
      },
      error: (error) => {
        console.error('Error loading direct contacts:', error);
      }
    });
  }

  onSubmit() {
    this.formErrors = {};
    this.submissionResult = null;

    // Validate form
    this.formErrors = this.contactService.validateContactForm(this.contactForm);

    if (Object.keys(this.formErrors).length > 0) {
      return;
    }

    this.isSubmitting = true;

    this.contactService.submitContactForm(this.contactForm).subscribe({
      next: (result) => {
        this.submissionResult = result;
        if (result.success) {
          this.showSuccessMessage = true;
          this.resetForm();
          // Hide success message after 5 seconds
          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 5000);
        }
        this.isSubmitting = false;
      },
      error: (error) => {
        console.error('Error submitting form:', error);
        this.submissionResult = {
          success: false,
          message: 'An error occurred while sending your message. Please try again.'
        };
        this.isSubmitting = false;
      }
    });
  }

  resetForm() {
    this.contactForm = {
      fullName: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  hasError(field: string): boolean {
    return !!this.formErrors[field];
  }

  getError(field: string): string {
    return this.formErrors[field] || '';
  }

  getMapUrl(): string {
    if (!this.contactInfo) return '';
    const { lat, lng } = this.contactInfo.location;
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3542.123456789!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLuxor%20University!5e0!3m2!1sen!2seg!4v1234567890`;
  }
}