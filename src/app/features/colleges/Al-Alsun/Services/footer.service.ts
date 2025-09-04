// src/app/features/colleges/Al-Alsun/Services/footer.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Footer } from '../model/footer.model';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  constructor() {}

  getFooterData(): Observable<Footer> {
    return of({
      logoIcon: 'pi pi-book',
      title: 'Faculty of Al-Alsun',
      subtitle: 'Luxor University',
      tagline: 'Excellence in languages and translation education',
      socialLinks: [
        { platform: 'Facebook', url: '#', icon: 'pi pi-facebook' },
        { platform: 'YouTube', url: '#', icon: 'pi pi-youtube' },
        { platform: 'LinkedIn', url: '#', icon: 'pi pi-linkedin' },
        { platform: 'Twitter', url: '#', icon: 'pi pi-twitter' },
      ],
      quickLinks: {
        title: 'Quick Links',
        links: [
          { title: 'About Us', url: '/alalsun-faculty/about' },
          { title: 'Departments', url: '/alalsun-faculty/departments' },
          { title: 'Faculty Members', url: '/alalsun-faculty/staff' },
          { title: 'News', url: '/alalsun-faculty/news' },
          { title: 'Contact', url: '/alalsun-faculty/contact' },
        ],
      },
      academicLinks: {
        title: 'Academic',
        links: [
          { title: 'Postgraduate Studies', url: '/postgraduate' },
          { title: 'Research Centers', url: '/research' },
          { title: 'Al-Alsun Journal', url: '/journal' },
          { title: 'Academic Calendar', url: '/calendar' },
        ],
      },
      resourceLinks: {
        title: 'Resources',
        links: [
          { title: 'Language & Translation Center', url: '/centers/translation' },
          { title: 'Confucius Classroom', url: '/centers/confucius' },
          { title: 'Student Portal', url: '/student-portal' },
          { title: 'Library', url: '/library' },
        ],
      },
      copyright: '© 2025 Faculty of Al-Alsun – Luxor University. All Rights Reserved.',
      contactMethods: {
        phone: '(+20) 095-2356555',
        email: 'info@alsun.luxor.edu.eg',
        universityWebsite: 'https://luxor.edu.eg',
        languages: [
          { value: 'en', label: 'English' },
          { value: 'ar', label: 'العربية' },
        ],
      },
    });
  }
}
