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
import { ServicesComponent } from './features/colleges/Al-Alsun/Pages/services/services/services.component';
import { ServiceDetailComponent } from './features/colleges/Al-Alsun/Pages/shared/service-detail/service-detail.component';
import { DashboardComponent } from './features/Dashboard/pages/dashboard/dashboard.component';
import { DashboardOverviewComponent } from './features/Dashboard/pages/dashboard/dashboard-overview/dashboard-overview.component';
import { SettingsManagementComponent } from './features/Dashboard/pages/dashboard/settings-management/settings-management.component';
import { MenuManagementComponent } from './features/Dashboard/pages/dashboard/menu-management/menu-management.component';
import { MediaManagementComponent } from './features/Dashboard/pages/dashboard/media-management/media-management.component';
import { AboutManagementComponent } from './features/Dashboard/pages/dashboard/about-management/about-management.component';
import { SectorsManagementComponent } from './features/Dashboard/pages/dashboard/sectors-management/sectors-management.component';
import { StaffManagementComponent } from './features/Dashboard/pages/dashboard/staff-management/staff-management.component';
import { DepartmentsManagementComponent } from './features/Dashboard/pages/dashboard/departments-management/departments-management.component';
import { NewsManagementComponent } from './features/Dashboard/pages/dashboard/news-management/news-management.component';
import { AddDepartmentComponent } from './features/Dashboard/pages/dashboard/AddDepartmentComponent/AddDepartmentComponent.component';
import { EditDepartmentComponent } from './features/Dashboard/pages/dashboard/edit-department/edit-department.component';
import { AddStaffComponent } from './features/Dashboard/pages/dashboard/add-staff/add-staff.component';
import { EditStaffComponent } from './features/Dashboard/pages/dashboard/edit-staff/edit-staff.component';
import { AddSectorComponent } from './features/Dashboard/pages/dashboard/add-sector/add-sector.component';
import { EditSectorComponent } from './features/Dashboard/pages/dashboard/edit-sector/edit-sector.component';
import { ViceDeansManagementComponent } from './features/Dashboard/pages/dashboard/vice-deans-management/vice-deans-management.component';
import { AddViceDeanComponent } from './features/Dashboard/pages/dashboard/add-vice-dean/add-vice-dean.component';
import { EditViceDeanComponent } from './features/Dashboard/pages/dashboard/edit-vice-dean/edit-vice-dean.component';
import { EditDeanComponent } from './features/Dashboard/pages/dashboard/edit-dean/edit-dean.component';
import { DeanManagementComponent } from './features/Dashboard/pages/dashboard/dean-management/dean-management.component';
import { AddDeanComponent } from './features/Dashboard/pages/dashboard/add-dean/add-dean.component';
import { AddHistoryEventComponent } from './features/Dashboard/pages/dashboard/add-history-event/add-history-event.component';
import { EditHistoryEventComponent } from './features/Dashboard/pages/dashboard/edit-history-event/edit-history-event.component';
import { EditVisionMissionComponent } from './features/Dashboard/pages/dashboard/edit-vision-mission/edit-vision-mission.component';
import { AddVisionMissionComponent } from './features/Dashboard/pages/dashboard/add-vision-mission/add-vision-mission.component';
import { AddNewsComponent } from './features/Dashboard/pages/dashboard/add-news/add-news.component';
import { EditNewsComponent } from './features/Dashboard/pages/dashboard/edit-news/edit-news.component';
import { AddMenuComponent } from './features/Dashboard/pages/dashboard/add-menu/add-menu.component';
import { EditMenuComponent } from './features/Dashboard/pages/dashboard/edit-menu/edit-menu.component';
import { CustomPagesComponent } from './features/Dashboard/pages/dashboard/custom-pages/custom-pages.component';
import { PageCreatorComponent } from './features/Dashboard/pages/dashboard/custom-pages/page-creator/page-creator.component';
import { PagePreviewComponent } from './features/Dashboard/pages/dashboard/custom-pages/page-preview/page-preview.component';
import { DraftsComponent } from './features/Dashboard/pages/dashboard/custom-pages/drafts/drafts.component';
import { PublishedComponent } from './features/Dashboard/pages/dashboard/custom-pages/published/published.component';
import { CustomPageViewerComponent } from './features/Dashboard/pages/dashboard/custom-pages/custom-page-viewer/custom-page-viewer.component';
import { HeroManagementComponent } from './features/Dashboard/pages/dashboard/hero-management/hero-management.component';
import { AdditionalDepartmentInformationComponent } from './features/Dashboard/pages/dashboard/additional-department-information/additional-department-information.component';
import { SectorsAdditionalInformationComponent } from './features/Dashboard/pages/dashboard/sectors-additional-information/sectors-additional-information.component';

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
      { path: 'services', component: ServicesComponent },
      { path: 'services/:id', component: ServiceDetailComponent },
      { path: 'pages/:route', component: CustomPageViewerComponent },
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
        { path: 'dashboard/departments/additional/:id', component: AdditionalDepartmentInformationComponent },

      { path: 'departments/edit/:id', component: EditDepartmentComponent },
      { path: 'sectors', component: SectorsManagementComponent },
      { path: 'sectors/add', component: AddSectorComponent },
      { path: 'sectors/edit/:id', component: EditSectorComponent },
      { path: 'sectors/additional-information/:id', component: SectorsAdditionalInformationComponent },
      { path: 'about', component: AboutManagementComponent },
      { path: 'about/dean', component: DeanManagementComponent },
      { path: 'about/dean/edit', component: EditDeanComponent },
      { path: 'about/dean/add', component: AddDeanComponent },
      { path: 'about/vice-deans', component: ViceDeansManagementComponent },
      { path: 'about/vice-deans/add', component: AddViceDeanComponent },
      { path: 'about/vice-deans/edit/:id', component: EditViceDeanComponent },
      { path: 'about/history/add', component: AddHistoryEventComponent },
      { path: 'about/history/edit/:id', component: EditHistoryEventComponent },
      { path: 'about/vision-mission/add', component: AddVisionMissionComponent },
      { path: 'about/vision-mission/edit/:id', component: EditVisionMissionComponent },
      { path: 'news', component: NewsManagementComponent },
      { path: 'news/add', component: AddNewsComponent },
      { path: 'news/edit/:id', component: EditNewsComponent },
      { path: 'media', component: MediaManagementComponent },
      { path: 'menus', component: MenuManagementComponent },
      { path: 'menus/add', component: AddMenuComponent },
      { path: 'menus/edit/:id', component: EditMenuComponent },
      { path: 'custom-pages', component: CustomPagesComponent },
      { path: 'custom-pages/create/:templateId', component: PageCreatorComponent },
      { path: 'custom-pages/preview', component: PagePreviewComponent },
      { path: 'custom-pages/drafts', component: DraftsComponent },
      { path: 'custom-pages/published', component: PublishedComponent },
      { path: 'settings', component: SettingsManagementComponent },
      { path: 'hero-mangment', component: HeroManagementComponent },
      { path: '', redirectTo: 'overview', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];