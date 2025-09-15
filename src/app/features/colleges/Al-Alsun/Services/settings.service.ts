import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { SiteSettings, ContactSettings, SocialMediaSettings, SiteConfiguration, IconOption, SettingsUpdateResult } from '../model/settings.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private settings$ = new BehaviorSubject<SiteSettings>({
    logoUrl: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=100',
    logoAlt: 'Faculty of Al-Alsun Logo',
    facultyName: 'Faculty of Al-Alsun',
    facultySubtitle: 'Luxor University',
    universityName: 'Luxor University',
    established: 'EST. 2019',
    contactInfo: {
      address: {
        english: 'Luxor – East of the Railway, Gamal Abdel Karim Street – next to the Educational Administration.',
        arabic: 'الأقصر – شرق السكة الحديد، شارع جامع عبد الكريم – بجوار الإدارة التعليمية.'
      },
      phone: '(+20) 095-2356555',
      email: 'alsun@luxor.edu.eg',
      website: 'luxor.edu.eg/alsun',
      location: {
        lat: 25.687243,
        lng: 32.639637
      }
    },
    socialMedia: {
      facebook: 'Faculty of Al-Alsun – Luxor University',
      youtube: '',
      linkedin: '',
      twitter: ''
    },
    siteConfig: {
      defaultLanguage: 'en',
      timezone: 'UTC+2',
      maintenanceMode: false,
      metaTitle: 'Faculty of Al-Alsun – Luxor University',
      metaDescription: 'Excellence and leadership in the study of languages, towards academic and cultural distinction at local and international levels.',
      keywords: 'languages, translation, faculty, education, Luxor University, Al-Alsun'
    }
  });

  private iconOptions: IconOption[] = [
    { value: 'pi pi-book', label: 'Book', icon: 'pi pi-book' },
    { value: 'pi pi-graduation-cap', label: 'Graduation Cap', icon: 'pi pi-graduation-cap' },
    { value: 'pi pi-building', label: 'Building', icon: 'pi pi-building' },
    { value: 'pi pi-globe', label: 'Globe', icon: 'pi pi-globe' },
    { value: 'pi pi-star', label: 'Star', icon: 'pi pi-star' },
    { value: 'pi pi-heart', label: 'Heart', icon: 'pi pi-heart' },
    { value: 'pi pi-shield', label: 'Shield', icon: 'pi pi-shield' },
    { value: 'pi pi-crown', label: 'Crown', icon: 'pi pi-crown' },
    { value: 'pi pi-flag', label: 'Flag', icon: 'pi pi-flag' },
    { value: 'pi pi-compass', label: 'Compass', icon: 'pi pi-compass' }
  ];

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    this.loadSettingsFromBackend();
  }

  private loadSettingsFromBackend() {
    this.http.get<any>(`${this.apiUrl}/Logos/getall`, {
      headers: { 'Accept-Language': 'any', 'Content-Type': 'application/json' }
    }).pipe(
      map(res => {
        if (res.success && res.data && res.data.length > 0) {
          const firstLogo = res.data[0];
          const currentSettings = this.settings$.value;
          currentSettings.logoUrl = firstLogo.logoPath ? `${this.apiUrl}${firstLogo.logoPath}` : currentSettings.logoUrl;
          this.settings$.next(currentSettings);
        }
        return this.settings$.value;
      }),
      catchError(error => {
        console.log('Backend logos not available, using default:', error);
        return of(this.settings$.value);
      })
    ).subscribe();
  }

  getSettings(): Observable<SiteSettings> {
    return this.settings$.asObservable();
  }

  getIconOptions(): Observable<IconOption[]> {
    return of(this.iconOptions);
  }

  updateSettings(settings: SiteSettings): Observable<SettingsUpdateResult> {
    // Update logo in backend if changed
    if (settings.logoUrl !== this.settings$.value.logoUrl) {
      return this.updateLogo(settings.logoUrl).pipe(
        map(() => {
          this.settings$.next(settings);
          return {
            success: true,
            message: 'Settings updated successfully!'
          };
        }),
        catchError(error => {
          console.error('Error updating logo:', error);
          return of({
            success: false,
            message: 'Failed to update logo'
          });
        })
      );
    } else {
      this.settings$.next(settings);
      return of({
        success: true,
        message: 'Settings updated successfully!'
      });
    }
  }

  updateContactInfo(contactInfo: ContactSettings): Observable<SettingsUpdateResult> {
    const currentSettings = this.settings$.value;
    currentSettings.contactInfo = contactInfo;
    this.settings$.next(currentSettings);
    return of({
      success: true,
      message: 'Contact information updated successfully!'
    });
  }

  updateLogo(logoUrl: string): Observable<SettingsUpdateResult> {
    // Assuming the backend API accepts a POST request to update the logo
    return this.http.post<any>(`${this.apiUrl}/Logos/update`, { logoPath: logoUrl }, {
      headers: { 'Accept-Language': 'any', 'Content-Type': 'application/json' }
    }).pipe(
      map(res => {
        if (res.success) {
          const currentSettings = this.settings$.value;
          currentSettings.logoUrl = logoUrl;
          this.settings$.next(currentSettings);
          return {
            success: true,
            message: 'Logo updated successfully!'
          };
        } else {
          return {
            success: false,
            message: 'Failed to update logo'
          };
        }
      }),
      catchError(error => {
        console.error('Error updating logo:', error);
        return of({
          success: false,
          message: 'Failed to update logo'
        });
      })
    );
  }

  resetToDefaults(): Observable<SettingsUpdateResult> {
    const defaultSettings: SiteSettings = {
      logoUrl: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=100',
      logoAlt: 'Faculty of Al-Alsun Logo',
      facultyName: 'Faculty of Al-Alsun',
      facultySubtitle: 'Luxor University',
      universityName: 'Luxor University',
      established: 'EST. 2019',
      contactInfo: {
        address: {
          english: 'Luxor – East of the Railway, Gamal Abdel Karim Street – next to the Educational Administration.',
          arabic: 'الأقصر – شرق السكة الحديد، شارع جامع عبد الكريم – بجوار الإدارة التعليمية.'
        },
        phone: '(+20) 095-2356555',
        email: 'alsun@luxor.edu.eg',
        website: 'luxor.edu.eg/alsun',
        location: {
          lat: 25.687243,
          lng: 32.639637
        }
      },
      socialMedia: {
        facebook: 'Faculty of Al-Alsun – Luxor University',
        youtube: '',
        linkedin: '',
        twitter: ''
      },
      siteConfig: {
        defaultLanguage: 'en',
        timezone: 'UTC+2',
        maintenanceMode: false,
        metaTitle: 'Faculty of Al-Alsun – Luxor University',
        metaDescription: 'Excellence and leadership in the study of languages, towards academic and cultural distinction at local and international levels.',
        keywords: 'languages, translation, faculty, education, Luxor University, Al-Alsun'
      }
    };

    this.settings$.next(defaultSettings);
    return of({
      success: true,
      message: 'Settings reset to defaults successfully!'
    });
  }
}