import { Routes } from '@angular/router';
import { AlAlsunComponent } from '../app/features/colleges/Al-Alsun/Al-Alsun.component';
import { AboutComponent } from '../app/features/colleges/Al-Alsun/Pages/about/about.component'; 
import { DepartmentsComponent } from '../app/features/colleges/Al-Alsun/Pages/departments/departments.component';
import { ContactComponent } from '../app/features/colleges/Al-Alsun/Pages/contact/contact.component';
import { StaffComponent } from '../app/features/colleges/Al-Alsun/Pages/staff/staff.component';
import { HomeComponent } from '../app/features/colleges/Al-Alsun/Pages/Home/Home.component';
import { StaffDetailComponent } from '../app/features/colleges/Al-Alsun/Pages/shared/staff-detail/staff-detail.component';
import { NewsComponent } from '../app/features/colleges/Al-Alsun/Pages/news/news.component';
import { NewsDetailComponent } from '../app/features/colleges/Al-Alsun/Pages/shared/news-detail/news-detail.component';
import { DepartmentsContantComponent } from '../app/features/colleges/Al-Alsun/Pages/departments/departments-contant/departments-contant.component';

// export const routes: Routes = [
//     { path: 'alalsun-faculty/home', component: HomeComponent },
//     { path: 'alalsun-faculty/about', component: AboutComponent },
//     { path: 'alalsun-faculty/departments', component: DepartmentsComponent },
//     { path: 'alalsun-faculty/departments/content', component: DepartmentsContantComponent },
//     { path: 'alalsun-faculty/staff', component: StaffComponent },
//     { path: 'alalsun-faculty/contact', component: ContactComponent },
//     { path: 'alalsun-faculty', component: AlAlsunComponent },
//     { path: 'alalsun-faculty/staff/:id', component: StaffDetailComponent },
//     { path: 'alalsun-faculty/news', component: NewsComponent },
//       { path: 'alalsun-faculty/news/:id', component: NewsDetailComponent },

    
// ];


export const routes: Routes = [
  {
    path: 'alalsun-faculty', component: AlAlsunComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'departments', component: DepartmentsComponent },
      { path: 'departments/content', component: DepartmentsContantComponent },
      { path: 'staff', component: StaffComponent },
      { path: 'staff/:id', component: StaffDetailComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'news', component: NewsComponent },
      { path: 'news/:id', component: NewsDetailComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' } // default
    ]
  }
];
