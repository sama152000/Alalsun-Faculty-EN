import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomPageService } from '../../../../../colleges/Al-Alsun/Services/custom-page.service';
import { CustomPage } from '../../../../../colleges/Al-Alsun/model/custom-page.model';
@Component({
  selector: 'app-drafts',
  standalone: true,
  imports: [CommonModule],
 templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.css']
})
export class DraftsComponent implements OnInit, OnDestroy {
  draftPages: CustomPage[] = [];
  private subscription: Subscription = new Subscription();

  constructor(
    private customPageService: CustomPageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadDraftPages();
    this.subscription.add(
      this.customPageService.pagesChanged$.subscribe(() => {
        this.loadDraftPages();
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadDraftPages() {
    this.customPageService.getDraftPages().subscribe(pages => {
      this.draftPages = pages;
    });
  }

  createNewPage() {
    this.router.navigate(['/dashboard/custom-pages']);
  }

  previewPage(page: CustomPage) {
    // Navigate to preview with page data
    this.router.navigate(['/dashboard/custom-pages/preview'], {
      state: { pageData: page }
    });
  }

  publishPage(pageId: string) {
    this.customPageService.publishPage(pageId).subscribe(success => {
      // Pages will auto-reload via subscription
    });
  }

  deletePage(pageId: string) {
    if (confirm('Are you sure you want to delete this page?')) {
      this.customPageService.deletePage(pageId).subscribe(success => {
        // Pages will auto-reload via subscription
      });
    }
  }

  getTemplateIcon(template: string): string {
    switch (template) {
      case 'title-text':
        return 'pi pi-align-left';
      case 'image-title-text':
        return 'pi pi-image';
      case 'cards':
        return 'pi pi-th-large';
      default:
        return 'pi pi-file';
    }
  }

  getTemplateName(template: string): string {
    switch (template) {
      case 'title-text':
        return 'Title & Text';
      case 'image-title-text':
        return 'Image, Title & Text';
      case 'cards':
        return 'Cards Layout';
      default:
        return 'Unknown';
    }
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }
}