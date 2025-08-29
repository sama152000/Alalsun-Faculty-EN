import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../../../Home/Home.component';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule, RouterModule,
    
  ],
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent {
  @Input() title: string = '';
  @Input() breadcrumbs: Array<{label: string, url?: string}> = [];
}