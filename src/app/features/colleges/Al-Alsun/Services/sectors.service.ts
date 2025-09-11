import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { SectorData, ViceDeanInfo, SectorDepartment, SectorService, NewsItem, MediaItem, SectorStatistic, ActivityItem, Achievement } from '../model/sector.model';
// Removed imports of missing models to fix errors
// import { SectorDetail } from '../model/sector-detail.model';
// import { SectorPost } from '../model/sector-post.model';
// import { SectorProgram } from '../model/sector-program.model';
// import { SectorServiceItem } from '../model/sector-service.model';
// import { SectorUnit } from '../model/sector-unit.model';

@Injectable({
  providedIn: 'root'
})
export class SectorsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // جلب جميع القطاعات
  getAllSectors(): Observable<SectorData[]> {
    return this.http.get<any>(`${this.apiUrl}/api/v1/sectors/getall`, {
      headers: { 'Accept-Language': 'en' }
    }).pipe(
      map(res => res.success && res.data ? res.data : []),
      catchError(error => {
        console.log('Error fetching sectors:', error);
        return of([]);
      })
    );
  }

  // جلب قطاع بـ ID
  getSectorById(id: string): Observable<SectorData | undefined> {
    return this.getAllSectors().pipe(
      map(sectors => sectors.find(s => s.id === id))
    );
  }

  // Note: Removed methods for missing models (SectorDetail, SectorPost, SectorProgram, SectorServiceItem, SectorUnit)
  // These can be added back when the corresponding model files are created

  // إضافة قطاع جديد
  addSector(sector: SectorData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/v2/sectors/add`, sector, {
      headers: { 'Content-Type': 'application/json', 'Accept-Language': 'en' }
    }).pipe(
      catchError(error => {
        console.log('Error adding sector:', error);
        throw error;
      })
    );
  }

  // Note: Removed addSectorDetail and addSectorProgram methods due to missing model types

  // تعديل قطاع
  updateSector(id: string, sector: SectorData): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/v2/sectors/update/${id}`, sector, {
      headers: { 'Content-Type': 'application/json', 'Accept-Language': 'en' }
    }).pipe(
      catchError(error => {
        console.log('Error updating sector:', error);
        throw error;
      })
    );
  }

  // Note: Removed updateSectorDetail and updateSectorProgram methods due to missing model types

  // حذف قطاع (Soft Delete)
  deleteSector(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/api/v2/sectors/deletesoft/${id}`, {
      headers: { 'Accept-Language': 'en' }
    }).pipe(
      catchError(error => {
        console.log('Error deleting sector:', error);
        throw error;
      })
    );
  }
}