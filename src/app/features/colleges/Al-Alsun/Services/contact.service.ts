import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { ContactInfo, ContactForm, DirectContact, ContactSubmissionResult, ContactMethod, CampusInfo, CampusFeature } from '../model/contact.model';

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
  ];

  private contactMethods: ContactMethod[] = [
    {
      icon: 'pi pi-phone',
      title: 'Phone',
      primary: '(+20) 095-2356555',
      secondary: 'Available during official working hours',
      color: 'var(--primary-color)'
    },
    {
      icon: 'pi pi-envelope',
      title: 'Email',
      primary: 'alsun@luxor.edu.eg',
      secondary: 'We respond within 24 hours',
      color: 'var(--primary-color)'
    },
    {
      icon: 'pi pi-map-marker',
      title: 'Address',
      primary: 'Luxor – East of the Railway, Gamal Abdel Karim Street – next to the Educational Administration.',
      secondary: 'Luxor University, Faculty of Al-Alsun',
      color: 'var(--primary-color)'
    },
    {
      icon: 'pi pi-facebook',
      title: 'Facebook',
      primary: 'Faculty of Al-Alsun – Luxor University',
      secondary: 'Official Facebook Page',
      color: 'var(--primary-color)'
    }
  ];

  private campusInfo: CampusInfo = {
    name: 'Faculty of Al-Alsun – Luxor University',
    address: 'Luxor – East of the Railway, Gamal Abdel Karim Street – next to the Educational Administration.',
    location: {
      lat: 25.687243,
      lng: 32.639637
    },
    phone: '(+20) 095-2356555',
    email: 'alsun@luxor.edu.eg'
  };

  private campusFeatures: CampusFeature[] = [
    {
      icon: 'pi pi-building',
      title: 'Modern Facilities',
      description: 'Equipped classrooms and language labs for students'
    },
    {
      icon: 'pi pi-users',
      title: 'Student Services',
      description: 'Support for students across different departments'
    },
    {
      icon: 'pi pi-book',
      title: 'Library',
      description: 'Access to references and academic resources'
    },
    {
      icon: 'pi pi-globe',
      title: 'Research & Community',
      description: 'Active participation in research and community service'
    }
  ];

  getContactInfo(): Observable<ContactInfo> {
    return of(this.contactInfo);
  }

  getDirectContacts(): Observable<DirectContact[]> {
    return of(this.directContacts);
  }

  getContactMethods(): Observable<ContactMethod[]> {
    return of(this.contactMethods);
  }

  getCampusInfo(): Observable<CampusInfo> {
    return of(this.campusInfo);
  }

  getCampusFeatures(): Observable<CampusFeature[]> {
    return of(this.campusFeatures);
  }

  submitContactForm(form: ContactForm): Observable<ContactSubmissionResult> {
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

  getMapUrl(): string {
    const lat = this.contactInfo.location.lat;
    const lng = this.contactInfo.location.lng;
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3542.123456789!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLuxor%20University!5e0!3m2!1sen!2seg!4v1697051234567`;
  }
}