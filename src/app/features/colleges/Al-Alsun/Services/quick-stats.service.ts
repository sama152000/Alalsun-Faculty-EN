import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Stat } from '../model/quick-stats.model';

@Injectable({
  providedIn: 'root'
})
export class QuickStatsService {
  private stats: Stat[] = [
    {
      id: '1',
      title: 'Students',
      value: '705+',
      iconPath: '',
      isActive: true,
      color: 'var(--nano-color)',
      icon: 'pi pi-users',
      label: 'Students'
    },
    {
      id: '2',
      title: 'Departments',
      value: '8',
      iconPath: '',
      isActive: true,
      color: 'var(--nano-color)',
      icon: 'pi pi-building',
      label: 'Departments'
    },
    {
      id: '3',
      title: 'Faculty Members & Assistants',
      value: '23',
      iconPath: '',
      isActive: true,
      color: 'var(--nano-color)',
      icon: 'pi pi-user-plus',
      label: 'Faculty Members & Assistants'
    },
    {
      id: '4',
      title: 'Peer-reviewed Journal',
      value: '1',
      iconPath: '',
      isActive: true,
      color: 'var(--nano-color)',
      icon: 'pi pi-book',
      label: 'Peer-reviewed Journal'
    }
  ];

  constructor() {}

  getStats(): Observable<Stat[]> {
    return of(this.stats);
  }
}
