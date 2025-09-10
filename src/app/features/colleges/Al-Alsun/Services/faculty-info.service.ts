import { Injectable } from '@angular/core';
import { Observable, of, catchError } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FacultyInfoService {
  private facultyInfo: FacultyInfo = {
    logoUrl: 'assets/logo.jpg', // لوغو افتراضي
    name: 'Faculty of Al-Alsun',
    subtitle: 'Luxor University',
    universityName: 'Luxor University',
    established: 'EST. 2019'
  };

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getFacultyInfo(): Observable<FacultyInfo> {
    // Try to fetch logos from backend first
    return this.http.get<any>(`${this.apiUrl}logos/getall`, {
      headers: { 'Accept-Language': 'any', 'Content-Type': 'application/json' }
    }).pipe(
      map(res => {
        if (res.success && res.data && res.data.length > 0) {
          const firstLogo = res.data[0];
          return {
            logoUrl: firstLogo.logoPath ? `${this.apiUrl}${firstLogo.logoPath}` : this.facultyInfo.logoUrl,
            name: this.facultyInfo.name,
            subtitle: this.facultyInfo.subtitle,
            universityName: this.facultyInfo.universityName,
            established: this.facultyInfo.established
          };
        } else {
          return this.facultyInfo;
        }
      }),
      catchError(error => {
        console.log('Backend logos not available, using default:', error);
        return of(this.facultyInfo);
      })
    );
  }

  getAllContacts(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/getall`, {
      headers: { 'Accept-Language': 'any', 'Content-Type': 'application/json' }
    }).pipe(
      map(res => {
        if (res.success && res.data) {
          return res.data; // رجوع القائمة كاملة
        } else {
          throw new Error('No data found in response');
        }
      }),
      catchError(error => {
        console.error('Error fetching contacts:', error);
        return of([]); // رجوع قائمة فارغة في حالة الخطأ
      })
    );
  }

  updateFacultyInfo(updatedInfo: FacultyInfo): Observable<void> {
    this.facultyInfo = updatedInfo;
    return of();
  }
}

export interface FacultyInfo {
  logoUrl: string;
  name: string;
  subtitle: string;
  universityName: string;
  established: string;
}