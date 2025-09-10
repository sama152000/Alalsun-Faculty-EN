import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, forkJoin } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { Department, Program, Faculty, Activity, Contact } from '../model/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllDepartments(): Observable<Department[]> {
    return this.http.get<any>(`${this.apiUrl}/department/getall`).pipe(
      switchMap(res => {
        if (res.success && res.data) {
          return this.enrichDepartments(res.data);
        } else {
          return of([]);
        }
      }),
      catchError(error => {
        console.log('Error fetching departments:', error);
        return of([]);
      })
    );
  }

  getDepartmentById(id: string): Observable<Department | undefined> {
    return this.http.get<any>(`${this.apiUrl}/department/getall`).pipe(
      map(res => {
        if (res.success && res.data) {
          const dept = res.data.find((d: any) => d.id === id);
          return dept ? this.enrichDepartment(dept) : undefined;
        }
        return undefined;
      }),
      catchError(error => {
        console.log('Error fetching department by id:', error);
        return of(undefined);
      })
    );
  }

  private enrichDepartments(departments: any[]): Observable<Department[]> {
    if (!departments || departments.length === 0) return of([]);

    return forkJoin({
      contacts: this.http.get<any>(`${this.apiUrl}/departmentcontacts/getall`),
      members: this.http.get<any>(`${this.apiUrl}/departmentmembers/getall`),
      programs: this.http.get<any>(`${this.apiUrl}/departmentprograms/getall`)
    }).pipe(
      map(results => {
        const contactsMap = this.mapContacts(results.contacts.data);
        const membersMap = this.mapMembers(results.members.data);
        const programsMap = this.mapPrograms(results.programs.data);

        return departments.map(dept => this.enrichDepartment(dept, contactsMap, membersMap, programsMap));
      }),
      catchError(error => {
        console.log('Error enriching departments:', error);
        return of(departments.map(dept => this.mapToDepartment(dept)));
      })
    );
  }

  private enrichDepartment(dept: any, contactsMap?: Map<string, Contact>, membersMap?: Map<string, Faculty[]>, programsMap?: Map<string, Program[]>): Department {
    return {
      id: dept.id,
      name: dept.name || '',
      shortName: dept.shortName || '',
      overview: dept.overView || dept.overview || '',
      type: dept.type || 'undergraduate',
      image: dept.attachment || dept.image || '',
      icon: dept.icon || 'pi pi-book',
      established: dept.established || '2016',
      programs: programsMap?.get(dept.id) || [],
      faculty: membersMap?.get(dept.id) || [],
      activities: [], // No endpoint for activities
      contact: contactsMap?.get(dept.id) || { email: '', phone: '', office: '', headOfDepartment: '' },
      route: `/alalsun-faculty/departments/${dept.id}`
    };
  }

  private mapContacts(contacts: any[]): Map<string, Contact> {
    const map = new Map<string, Contact>();
    contacts.forEach(c => map.set(c.departmentId, { email: c.email || '', phone: c.phone || '', office: '', headOfDepartment: c.headOfDepartment || '' }));
    return map;
  }

  private mapMembers(members: any[]): Map<string, Faculty[]> {
    const map = new Map<string, Faculty[]>();
    members.forEach(m => {
      const facultyList = map.get(m.departmentId) || [];
      facultyList.push({ id: m.id, name: m.name || '', title: m.isLeader ? 'Leader' : 'Member', specialization: '', email: '', photo: '' });
      map.set(m.departmentId, facultyList);
    });
    return map;
  }

  private mapPrograms(programs: any[]): Map<string, Program[]> {
    const map = new Map<string, Program[]>();
    programs.forEach(p => {
      const programList = map.get(p.departmentId) || [];
      programList.push({ id: p.id, name: p.name || '', description: p.description || '', duration: p.duration?.toString() || '0', degree: p.degree || '' });
      map.set(p.departmentId, programList);
    });
    return map;
  }

  private mapToDepartment(dept: any): Department {
    return {
      id: dept.id || '',
      name: dept.name || '',
      shortName: dept.shortName || '',
      overview: dept.overView || dept.overview || '',
      type: dept.type || 'undergraduate',
      image: dept.attachment || dept.image || '',
      icon: dept.icon || 'pi pi-book',
      established: dept.established || '2016',
      programs: [],
      faculty: [],
      activities: [],
      contact: { email: '', phone: '', office: '', headOfDepartment: '' },
      route: `/alalsun-faculty/departments/${dept.id}`
    };
  }

  addDepartment(department: Omit<Department, 'id'>): Observable<Department> {
    const payload = {
      ...department,
      id: crypto.randomUUID(),
      established: department.established || new Date().toISOString().split('T')[0]
    };
    return this.http.post<Department>(`${this.apiUrl}/department/add`, payload, {
      headers: { 'Content-Type': 'application/json-patch+json', 'Accept-Language': 'en' }
    }).pipe(
      catchError(error => {
        console.log('Error adding department:', error);
        throw error;
      })
    );
  }

  updateDepartment(id: string, department: Partial<Department>): Observable<Department> {
    const payload = {
      id,
      name: department.name,
      shortName: department.shortName,
      overview: department.overview,
      type: department.type,
      image: department.image,
      icon: department.icon,
      established: department.established || new Date().toISOString().split('T')[0],
      programs: department.programs || [],
      faculty: department.faculty || [],
      activities: department.activities || [],
      contact: department.contact || { email: '', phone: '', office: '', headOfDepartment: '' }
    };
    return this.http.put<Department>(`${this.apiUrl}/department/update`, payload, {
      headers: { 'Content-Type': 'application/json-patch+json', 'Accept-Language': 'en' }
    }).pipe(
      catchError(error => {
        console.log('Error updating department:', error);
        throw error;
      })
    );
  }

  updateDepartmentPrograms(id: string, programs: Program[]): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/departmentprograms/update/${id}`, programs, {
      headers: { 'Content-Type': 'application/json-patch+json', 'Accept-Language': 'en' }
    }).pipe(
      catchError(error => {
        console.log('Error updating department programs:', error);
        throw error;
      })
    );
  }

  updateDepartmentFaculty(id: string, faculty: Faculty[]): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/departmentmembers/update/${id}`, faculty, {
      headers: { 'Content-Type': 'application/json-patch+json', 'Accept-Language': 'en' }
    }).pipe(
      catchError(error => {
        console.log('Error updating department faculty:', error);
        throw error;
      })
    );
  }

  updateDepartmentActivities(id: string, activities: Activity[]): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/departmentactivities/update/${id}`, activities, {
      headers: { 'Content-Type': 'application/json-patch+json', 'Accept-Language': 'en' }
    }).pipe(
      catchError(error => {
        console.log('Error updating department activities:', error);
        throw error;
      })
    );
  }

  updateDepartmentContact(id: string, contact: Contact): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/departmentcontacts/update/${id}`, contact, {
      headers: { 'Content-Type': 'application/json-patch+json', 'Accept-Language': 'en' }
    }).pipe(
      catchError(error => {
        console.log('Error updating department contact:', error);
        throw error;
      })
    );
  }

  deleteDepartment(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/department/deletesoft/${id}`, {
      headers: { 'Accept-Language': 'en' }
    }).pipe(
      catchError(error => {
        console.log('Error deleting department:', error);
        throw error;
      })
    );
  }
}