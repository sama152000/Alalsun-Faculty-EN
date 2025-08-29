import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyCTAComponent } from './faculty-cta/faculty-cta.component';
import { PageHeaderComponent } from '../shared/page-header/page-header/page-header.component';
import { DeanFullMessageComponent } from './dean-full-message/dean-full-message.component';
import { ViceDeanMessageComponent } from './vice-dean-message/vice-dean-message.component';
import { FacultyHistoryComponent } from './faculty-history/faculty-history.component';
import { VisionMissionSimpleComponent } from './vision-mission-simple/vision-mission-simple.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';

// Import all components
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    DeanFullMessageComponent,
    ViceDeanMessageComponent,
    FacultyHistoryComponent,
    VisionMissionSimpleComponent,
    FacultyCTAComponent,
    FooterComponent
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  breadcrumbs = [
    { label: 'About', url: '/alalsun-faculty/about' }
  ];

  
  };
