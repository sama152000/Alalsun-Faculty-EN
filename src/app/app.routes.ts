import { Routes } from '@angular/router';
import { AlAlsunComponent } from './colleges/Al-Alsun/Al-Alsun.component';
import { AboutComponent } from './colleges/Al-Alsun/Pages/about/about.component';
import { DepartmentsComponent } from './colleges/Al-Alsun/Pages/departments/departments.component';
import { ContactComponent } from './colleges/Al-Alsun/Pages/contact/contact.component';
import { StaffComponent } from './colleges/Al-Alsun/Pages/staff/staff.component';
import { HomeComponent } from './colleges/Al-Alsun/Pages/Home/Home.component';
import { StaffDetailComponent } from './colleges/Al-Alsun/Pages/shared/staff-detail/staff-detail.component';
import { NewsComponent } from './colleges/Al-Alsun/Pages/news/news.component';
import { NewsDetailComponent } from './colleges/Al-Alsun/Pages/shared/news-detail/news-detail.component';

export const routes: Routes = [
    { path: 'alalsun-faculty/home', component: HomeComponent },
    { path: 'alalsun-faculty/about', component: AboutComponent },
    { path: 'alalsun-faculty/departments', component: DepartmentsComponent },
    { path: 'alalsun-faculty/staff', component: StaffComponent },
    { path: 'alalsun-faculty/contact', component: ContactComponent },
    { path: 'alalsun-faculty', component: AlAlsunComponent },
    { path: 'alalsun-faculty/staff/:id', component: StaffDetailComponent },
    { path: 'alalsun-faculty/news', component: NewsComponent },
      { path: 'alalsun-faculty/news/:id', component: NewsDetailComponent },
    
];
