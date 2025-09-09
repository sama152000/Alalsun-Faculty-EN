import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CustomPageService } from '../../../../../colleges/Al-Alsun/Services/custom-page.service';
import { CustomPage } from '../../../../../colleges/Al-Alsun/model/custom-page.model';

@Component({
  selector: 'app-published',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './published.component.html',
  styleUrls: ['./published.component.css']
})
export class PublishedComponent implements OnInit, OnDestroy {
  publishedPages: CustomPage[] = [];
  private subscription: Subscription = new Subscription();

  constructor(
    private customPageService: CustomPageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadPublishedPages();
    this.subscription.add(
      this.customPageService.pagesChanged$.subscribe(() => {
        this.loadPublishedPages();
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadPublishedPages() {
    this.customPageService.getPublishedPages().subscribe(pages => {
      this.publishedPages = pages;
    });
  }

  viewDrafts() {
    this.router.navigate(['/dashboard/custom-pages/drafts']);
  }

  viewPage(page: CustomPage) {
    // Navigate to the custom page route
    this.router.navigate([`/pages/${page.route}`]);
  }

  unpublishPage(pageId: string) {
    if (confirm('Are you sure you want to unpublish this page? It will be moved to drafts.')) {
      this.customPageService.unpublishPage(pageId).subscribe(success => {
        // Pages will auto-reload via subscription
      });
    }
  }

  deletePage(pageId: string) {
    if (confirm('Are you sure you want to delete this page? This action cannot be undone.')) {
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