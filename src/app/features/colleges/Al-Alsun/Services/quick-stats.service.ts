import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Stat } from '../model/quick-stats.model';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuickStatsService {
  private apiUrl = environment. apiUrl + '/statistics/getall';

  constructor(private http: HttpClient) {}

  getStats(): Observable<Stat[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => {
        if (response && response.success && Array.isArray(response.data)) {
          return response.data.map((item: any) => ({
            id: item.id,
            title: item.title,
            value: item.value,
            iconPath: item.iconPath,
            isActive: item.isActive
          }));
        }
        return [];
      })
    );
  }
}
