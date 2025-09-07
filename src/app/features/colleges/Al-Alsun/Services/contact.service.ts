import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { ContactInfo, ContactForm, DirectContact, ContactSubmissionResult } from '../model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactInfo: ContactInfo = {
    address: {
      english: 'Luxor – East of the Railway, Gamal Abdel Karim Street – next to the Educational Administration.'
    },
    phone: '(+20) 095-2356555',
    email: 'alsun@luxor.edu.eg',
    website: 'luxor.edu.eg/alsun',
    facebook: 'Faculty of Al-Alsun – Luxor University',
    location: {
      lat: 25.687243,
      lng: 32.639637
    }
  };

  private directContacts: DirectContact[] = [
    {
      department: 'Student Affairs',
      email: 'student.affairs@luxor.edu.eg',
      description: 'Academic registration, student services, and general inquiries',
      icon: 'pi pi-users'
    },
    {
      department: 'Postgraduate Studies',
      email: 'postgraduate@luxor.edu.eg',
      description: 'Master\'s and Ph.D. programs, research supervision',
      icon: 'pi pi-graduation-cap'
    },
    {
      department: 'Community Service',
      email: 'community@luxor.edu.eg',
      description: 'Community outreach programs and partnerships',
      icon: 'pi pi-heart'
    },
    {
      department: 'Feedback & Suggestions',
      email: 'feedback@luxor.edu.eg',
      description: 'Your feedback helps us improve our services',
      icon: 'pi pi-comment'
    }
  ];

  getContactInfo(): Observable<ContactInfo> {
    return of(this.contactInfo);
  }

  getDirectContacts(): Observable<DirectContact[]> {
    return of(this.directContacts);
  }

  submitContactForm(form: ContactForm): Observable<ContactSubmissionResult> {
    // Simulate API call with delay
    return of({
      success: true,
      message: 'Your message has been sent successfully. We will get back to you soon.'
    }).pipe(delay(1000));
  }

  validateContactForm(form: ContactForm): { [key: string]: string } {
    const errors: { [key: string]: string } = {};

    if (!form.fullName || form.fullName.trim().length < 2) {
      errors['fullName'] = 'Full name must be at least 2 characters long';
    }

    if (!form.email || !this.isValidEmail(form.email)) {
      errors['email'] = 'Please enter a valid email address';
    }

    if (!form.subject || form.subject.trim().length < 3) {
      errors['subject'] = 'Subject must be at least 3 characters long';
    }

    if (!form.message || form.message.trim().length < 10) {
      errors['message'] = 'Message must be at least 10 characters long';
    }

    return errors;
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}