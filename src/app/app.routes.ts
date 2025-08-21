import { Routes } from '@angular/router';
import { AlAlsunComponent } from './colleges/Al-Alsun/Al-Alsun.component';
import { AboutComponent } from './colleges/Al-Alsun/Pages/about/about.component';
import { DepartmentsComponent } from './colleges/Al-Alsun/Pages/departments/departments.component';
import { ContactComponent } from './colleges/Al-Alsun/Pages/contact/contact.component';
import { StaffComponent } from './colleges/Al-Alsun/Pages/staff/staff.component';
import { HomeComponent } from './colleges/Al-Alsun/Pages/Home/Home.component';

export const routes: Routes = [
    { path: 'alalsun-faculty/home', component: HomeComponent },
    { path: 'alalsun-faculty/about', component: AboutComponent },
    { path: 'alalsun-faculty/departments', component: DepartmentsComponent },
    { path: 'alalsun-faculty/staff', component: StaffComponent },
    { path: 'alalsun-faculty/contact', component: ContactComponent },
    { path: 'alalsun-faculty', component: AlAlsunComponent },
    

];
