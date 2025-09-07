// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { FacultyIntro } from '../model/faculty-intro.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class FacultyIntroService {
//   private facultyIntro: FacultyIntro = {
//     id: 1,
//     title: 'Introduction to the Faculty of Al-Alsun – Luxor University',
//     description: 'Learn about the Faculty of Al-Alsun and its distinguished academic programs in languages and translation, and its vision to prepare graduates for competition in the global job market.',
//     videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
//     thumbnail: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=800',
//     duration: '5:30',
//     publishDate: '2024-12-01',
//     category: 'Faculty Introduction'
//   };

//   getFacultyIntro(): Observable<FacultyIntro> {
//     return of(this.facultyIntro);
//   }
// }