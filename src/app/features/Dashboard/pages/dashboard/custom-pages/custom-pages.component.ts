import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CustomPageService } from '../../../../colleges/Al-Alsun/Services/custom-page.service';

@Component({
  selector: 'app-custom-pages',
  standalone: true,
  imports: [CommonModule],
 templateUrl: './custom-pages.component.html',
  styleUrls: ['./custom-pages.component.css']
})
export class CustomPagesComponent implements OnInit {
  templates: any[] = [];

  constructor(
    private customPageService: CustomPageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadTemplates();
  }

  loadTemplates() {
    this.customPageService.getTemplates().subscribe(templates => {
      this.templates = templates;
    });
  }

  selectTemplate(templateId: string) {
    this.router.navigate(['/dashboard/custom-pages/create', templateId]);
  }
}