import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CustomPageService } from '../../../../../colleges/Al-Alsun/Services/custom-page.service';
import { PageHeaderComponent } from '../../../../../colleges/Al-Alsun/Pages/shared/page-header/page-header/page-header.component';

@Component({
  selector: 'app-page-preview',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent],
  templateUrl: './page-preview.component.html',
  styleUrls: ['./page-preview.component.css']
})
export class PagePreviewComponent implements OnInit {
  pageData: any;

  constructor(
    private router: Router,
    private customPageService: CustomPageService
  ) {
    const navigation = this.router.getCurrentNavigation();
    this.pageData = navigation?.extras?.state?.['pageData'];
    
    if (!this.pageData) {
      this.pageData = this.customPageService.getPreviewData();
    }
  }

  ngOnInit() {
    if (!this.pageData) {
      console.error('No page data available for preview');
      this.router.navigate(['/dashboard/custom-pages']);
    } else {
      console.log('Previewing page data:', this.pageData); // Debugging
    }
  }

  goBack() {
    this.customPageService.clearPreviewData();
    this.router.navigate(['/dashboard/custom-pages/create', this.pageData.template]);
  }

  saveToDrafts() {
    this.customPageService.createPage(this.pageData).subscribe(
      (createdPage) => {
        console.log('Page saved to drafts:', createdPage); // Debugging
        this.customPageService.clearPreviewData();
        this.router.navigate(['/dashboard/custom-pages/drafts']);
      },
      (error) => {
        console.error('Error saving page to drafts:', error);
      }
    );
  }
}