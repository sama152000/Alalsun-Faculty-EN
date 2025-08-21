import { Component, OnInit } from '@angular/core';
import { PageHeaderComponent } from '../shared/page-header/page-header/page-header.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    PageHeaderComponent
  ],
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {

breadcrumbs = [
    { label: 'Contact us', url: '/alalsun-faculty/contact' }
  ];

}
