import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { PageHeaderComponent } from '../../shared/page-header/page-header/page-header.component';
import { NewsService } from '../../../Servises/news.service';
import { NewsItem } from '../../../model/news.model';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-news-detail',
  standalone: true,
  imports: [CommonModule,
     PageHeaderComponent,
     NavbarComponent,
     FooterComponent

  ],
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  newsItem: NewsItem | undefined;
  relatedNews: NewsItem[] = [];
  loading = true;
  breadcrumbs: Array<{label: string, url?: string}> = [
    { label: 'News', url: '/alalsun-faculty/news' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.loadNewsItem(id);
    });
  }

  loadNewsItem(id: number) {
    this.loading = true;
    this.newsItem = this.newsService.getNewsById(id);
    
    if (this.newsItem) {
      this.breadcrumbs.push({ label: this.newsItem.title });
      this.loadRelatedNews();
    }
    
    this.loading = false;
  }

  loadRelatedNews() {
    if (this.newsItem) {
      const allNews = this.newsService.getNewsByCategory(this.newsItem.category);
      this.relatedNews = allNews
        .filter(news => news.id !== this.newsItem!.id)
        .slice(0, 3);
    }
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  }

  getCategoryLabel(category: string): string {
    switch (category) {
      case 'students':
        return 'Students';
      case 'postgraduate':
        return 'Postgraduate Studies';
      case 'board':
        return 'Board & Administration';
      default:
        return category;
    }
  }

  getFormattedContent(): string {
    if (!this.newsItem) return '';
    
    return this.newsItem.content
      .split('\n\n')
      .map(paragraph => `<p>${paragraph.trim()}</p>`)
      .join('');
  }

  viewRelatedNews(id: number) {
    this.router.navigate(['/alalsun-faculty/news', id]);
  }

  goBack() {
    this.router.navigate(['/alalsun-faculty/news']);
  }
}