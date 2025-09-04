// src/app/services/layout.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LayoutData } from '../../Al-Alsun/model/navbar.model';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private apiUrl = 'https://your-api-endpoint.com/layout'; // استبدل برابط الـ API الفعلي عند الحاجة

  constructor() {}

  getLayoutData(): Observable<LayoutData> {
    return of({
      facultyInfo: {
        logoUrl: 'assets/logo.jpg',
        name: 'Faculty of Al-Alsun',
        subtitle: 'Luxor University',
        universityName: 'Luxor University',
        established: 'EST. 2019',
      },
      navbarItems: [
        { label: 'Home', icon: 'pi pi-home me-2', route: '/home' },
        { label: 'About', route: '/about' },
        { label: 'Departments', route: '/departments' },
        { label: 'Staff', route: '/staff' },
        { label: 'News', route: '/news' },
        { label: 'Contact Us', route: '/contact' },
        {
          label: 'Sectors',
          children: [
            { label: 'Education & Students Affairs', icon: 'pi pi-users me-2', route: '/sectors/education-students' },
            { label: 'Postgraduate Studies & Research', icon: 'pi pi-graduation-cap me-2', route: '/sectors/postgraduate-research' },
            { label: 'Community Service & Environmental Development', icon: 'pi pi-globe me-2', route: '/sectors/community-environmental' },
          ],
        },
      ],
      footer: {
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
      },
    });
  }
}