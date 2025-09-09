import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
  import { CustomPageService } from '../../../../../colleges/Al-Alsun/Services/custom-page.service';
      import { CustomPage, PageTemplate } from '../../../../../colleges/Al-Alsun/model/custom-page.model';
      import { PageHeaderComponent } from '../../../../../colleges/Al-Alsun/Pages/shared/page-header/page-header/page-header.component';
@Component({
  selector: 'app-custom-page-viewer',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent],
  templateUrl: './custom-page-viewer.component.html',
  styleUrls: ['./custom-page-viewer.component.css']
})
export class CustomPageViewerComponent implements OnInit {
  pageData: CustomPage | null = null;

  constructor(
    private route: ActivatedRoute,
    private customPageService: CustomPageService
  ) {}

  ngOnInit() {
    const routeParam = this.route.snapshot.paramMap.get('route');
    if (routeParam) {
      this.customPageService.getAllPages().subscribe(pages => {
        // Normalize the route for comparison
        this.pageData = pages.find(page => page.route === routeParam && page.isPublished) || null;
        if (!this.pageData) {
          console.error(`Page with route '${routeParam}' not found or not published`);
        }
      });
    }
  }

  getTemplateName(): string {
    switch (this.pageData?.template) {
      case PageTemplate.TITLE_TEXT:
        return 'Title & Text';
      case PageTemplate.IMAGE_TITLE_TEXT:
        return 'Image, Title & Text';
      case PageTemplate.CARDS:
        return 'Cards Layout';
      default:
        return 'Unknown';
    }
  }
}
    