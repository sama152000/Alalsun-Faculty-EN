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
import { SectorPageComponent } from './features/colleges/Al-Alsun/Pages/sector-page/sector-page.component';

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
{ path: 'sectors/:id', component: SectorPageComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' } // default
    ]
  }
];
