import { Injectable } from '@angular/core';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { CustomPage, PageTemplate } from '../model/custom-page.model';

@Injectable({
  providedIn: 'root'
})
export class CustomPageService {
  private pagesSubject = new BehaviorSubject<CustomPage[]>([]);
  private pagesChanged = new Subject<void>();
  private previewData: any = null;

  get pagesChanged$(): Observable<void> {
    return this.pagesChanged.asObservable();
  }

  private pages: CustomPage[] = [
    {
      id: '1',
      title: 'Research Centers',
      route: 'research-centers',
      template: PageTemplate.IMAGE_TITLE_TEXT,
      content: {
        title: 'Research Centers at Faculty of Al-Alsun',
        text: 'Our faculty hosts several world-class research centers dedicated to advancing knowledge in languages, translation, and cultural studies. These centers serve as hubs for innovative research and academic collaboration.',
        image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      isPublished: true,
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-01-15')
    },
    {
      id: '2',
      title: 'Student Services',
      route: 'student-services',
      template: PageTemplate.CARDS,
      content: {
        title: 'Student Services & Support',
        cards: [
          {
            id: '1',
            title: 'Academic Advising',
            description: 'Professional guidance for course selection and academic planning',
            image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
            link: '/academic-advising'
          },
          {
            id: '2',
            title: 'Career Services',
            description: 'Job placement assistance and career development programs',
            image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
            link: '/career-services'
          },
          {
            id: '3',
            title: 'Student Activities',
            description: 'Cultural events, clubs, and extracurricular activities',
            image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
            link: '/student-activities'
          }
        ]
      },
      isPublished: false,
      createdAt: new Date('2024-02-01'),
      updatedAt: new Date('2024-02-01')
    }
  ];

  private templates = [
    {
      id: 'title-text',
      name: 'Title & Text',
      description: 'Simple page with title and paragraph content',
      icon: 'pi pi-align-left',
      preview: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'image-title-text',
      name: 'Image, Title & Text',
      description: 'Page with image on left, title and text on right',
      icon: 'pi pi-image',
      preview: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'cards',
      name: 'Cards Layout',
      description: 'Grid layout with multiple content cards',
      icon: 'pi pi-th-large',
      preview: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  getAllPages(): Observable<CustomPage[]> {
    return of(this.pages);
  }

  getPageById(id: string): Observable<CustomPage | undefined> {
    return of(this.pages.find(page => page.id === id));
  }

  getDraftPages(): Observable<CustomPage[]> {
    return of(this.pages.filter(page => !page.isPublished));
  }

  getPublishedPages(): Observable<CustomPage[]> {
    return of(this.pages.filter(page => page.isPublished));
  }

  getTemplates(): Observable<any[]> {
    return of(this.templates);
  }

  createPage(page: Omit<CustomPage, 'id' | 'createdAt' | 'updatedAt'>): Observable<CustomPage> {
    const normalizedRoute = page.route.startsWith('/') ? page.route.slice(1) : page.route;
    const newPage: CustomPage = {
      ...page,
      route: normalizedRoute,
      id: this.generateId(),
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.pages.push(newPage);
    this.pagesChanged.next();
    return of(newPage);
  }

  updatePage(id: string, updates: Partial<CustomPage>): Observable<CustomPage | null> {
    const index = this.pages.findIndex(page => page.id === id);
    if (index !== -1) {
      const normalizedRoute = updates.route && updates.route.startsWith('/') ? updates.route.slice(1) : updates.route;
      this.pages[index] = {
        ...this.pages[index],
        ...updates,
        route: normalizedRoute || this.pages[index].route,
        updatedAt: new Date()
      };
      this.pagesChanged.next();
      return of(this.pages[index]);
    }
    return of(null);
  }

  publishPage(id: string): Observable<boolean> {
    const page = this.pages.find(p => p.id === id);
    if (page) {
      page.isPublished = true;
      page.updatedAt = new Date();
      this.pagesChanged.next();
      return of(true);
    }
    return of(false);
  }

  unpublishPage(id: string): Observable<boolean> {
    const page = this.pages.find(p => p.id === id);
    if (page) {
      page.isPublished = false;
      page.updatedAt = new Date();
      this.pagesChanged.next();
      return of(true); // Fixed: Return true on successful unpublish
    }
    return of(false);
  }

  deletePage(id: string): Observable<boolean> {
    const index = this.pages.findIndex(page => page.id === id);
    if (index !== -1) {
      this.pages.splice(index, 1);
      this.pagesChanged.next();
      return of(true);
    }
    return of(false);
  }

  setPreviewData(data: any): void {
    this.previewData = data;
    console.log('Preview data set:', this.previewData); // Debugging
  }

  getPreviewData(): any {
    console.log('Preview data retrieved:', this.previewData); // Debugging
    return this.previewData;
  }

  clearPreviewData(): void {
    this.previewData = null;
    console.log('Preview data cleared'); // Debugging
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}