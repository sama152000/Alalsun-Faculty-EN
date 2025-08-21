import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { PageHeaderComponent } from '../shared/page-header/page-header/page-header.component';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    PageHeaderComponent
  ],
  styleUrls: ['./staff.component.css']
})
export class StaffComponent  {

 breadcrumbs = [
    { label: 'Staff', url: '/alalsun-faculty/staff' }
  ];

}
