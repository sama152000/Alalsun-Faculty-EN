import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LayoutData, Submenu } from '../model/navbar.model';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
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
      submenu: {
        copyright: '2025 Faculty of Al-Alsun. All rights reserved.',
        contactMethods: {
          phone: '+1234567890',
          email: 'info@alsun.edu',
          universityWebsite: 'https://luxor-university.edu',
          languages: [
            { value: 'en', label: 'English' },
            { value: 'ar', label: 'العربية' },
          ],
        },
      },
    });
  }
}