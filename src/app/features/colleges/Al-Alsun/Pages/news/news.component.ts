import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { PageHeaderComponent } from '../shared/page-header/page-header/page-header.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { NewsService } from '../../Servises/news.service';
import { NewsItem, NewsCategory, NewsFilter } from '../../model/news.model';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, PageHeaderComponent, NavbarComponent, FooterComponent],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  breadcrumbs = [
    { label: 'News', url: 'alalsun-faculty/news' }
  ];

  
  allNews: NewsItem[] = [];
  currentCategory: string = 'students';
  searchKeyword: string = '';
  selectedYear: number | null = null;
  selectedMonth: number | null = null;
  
  availableYears: number[] = [];
  months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  constructor(
    private newsService: NewsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadNews();
    this.generateAvailableYears();
  }

  loadNews() {
    this.allNews = this.newsService.getAllNews();
  }

  generateAvailableYears() {
    const years = new Set<number>();
    this.allNews.forEach(news => {
      years.add(news.date.getFullYear());
    });
    this.availableYears = Array.from(years).sort((a, b) => b - a);
  }


  onFilterChange() {
    // Filters are applied in getFilteredNewsByCategory method
  }

  getFilteredNewsByCategory(category: string): NewsItem[] {
    const filter: NewsFilter = {
      category: category as NewsCategory,
      keyword: this.searchKeyword || undefined,
      year: this.selectedYear || undefined,
      month: this.selectedMonth || undefined
    };

    return this.newsService.filterNews(filter);
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }

  viewNewsDetails(id: number) {
    this.router.navigate(['alalsun-faculty/news', id]);
  }
}
