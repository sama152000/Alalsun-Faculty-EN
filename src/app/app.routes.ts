import { Routes } from '@angular/router';
import { AlAlsunComponent } from './features/colleges/Al-Alsun/Al-Alsun.component';
import { AboutComponent } from './features/colleges/Al-Alsun/Pages/about/about.component';
import { DepartmentsComponent } from './features/colleges/Al-Alsun/Pages/departments/departments.component';
import { ContactComponent } from './features/colleges/Al-Alsun/Pages/contact/contact.component';
import { StaffComponent } from './features/colleges/Al-Alsun/Pages/staff/staff.component';
import { HomeComponent } from './features/colleges/Al-Alsun/Pages/Home/Home.component';
import { StaffDetailComponent } from './features/colleges/Al-Alsun/Pages/shared/staff-detail/staff-detail.component';
import { NewsComponent } from './features/colleges/Al-Alsun/Pages/news/news.component';
import { NewsDetailComponent } from './features/colleges/Al-Alsun/Pages/shared/news-detail/news-detail.component';
import { SectorPageComponent } from './features/colleges/Al-Alsun/Pages/sector-page/sector-page.component';
import { DashboardComponent } from './features/Dashboard/pages/dashboard/dashboard.component';
import { DashboardOverviewComponent } from './features/Dashboard/pages/dashboard-overview/dashboard-overview.component';
import { SettingsManagementComponent } from './features/Dashboard/pages/dashboard/settings-management/settings-management.component';
import { MenuManagementComponent } from './features/Dashboard/pages/dashboard/menu-management/menu-management.component';
import { MediaManagementComponent } from './features/Dashboard/pages/dashboard/app-media-management/media-management.component';
import { AboutManagementComponent } from './features/Dashboard/pages/dashboard/about-management/about-management.component';
import { SectorsManagementComponent } from './features/Dashboard/pages/sectors-management/sectors-management.component';
import { StaffManagementComponent } from './features/Dashboard/pages/staff-management/staff-management.component';
import { DepartmentsManagementComponent } from './features/Dashboard/pages/departments-management/departments-management.component';
import { NewsManagementComponent } from './features/Dashboard/pages/news-management/news-management.component';
import { PagesManagementComponent } from './features/Dashboard/pages/pages-management/pages-management.component';
import { AddDepartmentComponent } from './features/Dashboard/pages/dashboard/AddDepartmentComponent/AddDepartmentComponent.component';
import { EditDepartmentComponent } from './features/Dashboard/pages/dashboard/edit-department/edit-department.component';
import { AddStaffComponent } from './features/Dashboard/pages/dashboard/add-staff/add-staff.component';
import { EditStaffComponent } from './features/Dashboard/pages/dashboard/edit-staff/edit-staff.component';
import { AddSectorComponent } from './features/Dashboard/pages/dashboard/add-sector/add-sector.component';
import { EditSectorComponent } from './features/Dashboard/pages/dashboard/edit-sector/edit-sector.component';

export const routes: Routes = [
  {
    path: '',
    component: AlAlsunComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'departments', component: DepartmentsComponent },
      { path: 'departments/:id', component: DepartmentsComponent }, 
      { path: 'staff', component: StaffComponent },
      { path: 'staff/:id', component: StaffDetailComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'news', component: NewsComponent },
      { path: 'news/:id', component: NewsDetailComponent },
      { path: 'sectors/:id', component: SectorPageComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'staff', component: StaffManagementComponent },
         { path: 'staff/add', component: AddStaffComponent },
      { path: 'staff/edit/:id', component: EditStaffComponent },
      { path: 'overview', component: DashboardOverviewComponent },
      { path: 'departments', component: DepartmentsManagementComponent },
       { path: 'departments/add', component: AddDepartmentComponent },
       { path: 'departments/edit/:id', component: EditDepartmentComponent },
      { path: 'sectors', component: SectorsManagementComponent },
      { path: 'sectors/add', component: AddSectorComponent },
      { path: 'sectors/edit/:id', component: EditSectorComponent },
      { path: 'about', component: AboutManagementComponent },
      { path: 'news', component: NewsManagementComponent },
      { path: 'media', component: MediaManagementComponent },
      { path: 'menus', component: MenuManagementComponent },
      { path: 'pages', component: PagesManagementComponent },
      { path: 'settings', component: SettingsManagementComponent },
      { path: '', redirectTo: 'overview', pathMatch: 'full' }
    ]
  }
];