import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { PageHeaderComponent } from '../shared/page-header/page-header/page-header.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { NewsService } from '../../Services/news.service';
import { NewsItem, NewsCategory, NewsFilter } from '../../model/news.model';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, PageHeaderComponent,  FooterComponent],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  breadcrumbs = [
    { label: 'News', url: '/news' }
  ];

  
  allNews: NewsItem[] = [];
  currentCategory: string = 'all';
  searchKeyword: string = '';
  selectedYear: number | null = null;
  selectedMonth: number | null = null;

  // Pagination properties
  currentPage: number = 1;
  itemsPerPage: number = 9; // 3 rows of 3 cards each
  
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
    this.currentPage = 1; // Reset to first page when filters change
  }

  getFilteredNewsByCategory(category: string): NewsItem[] {
    if (category === 'all') {
      const filter: NewsFilter = {
        keyword: this.searchKeyword || undefined,
        year: this.selectedYear || undefined,
        month: this.selectedMonth || undefined
      };
      return this.newsService.filterNews(filter);
    } else {
      const filter: NewsFilter = {
        category: category as NewsCategory,
        keyword: this.searchKeyword || undefined,
        year: this.selectedYear || undefined,
        month: this.selectedMonth || undefined
      };
      return this.newsService.filterNews(filter);
    }
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  }

  viewNewsDetails(id: number) {
    this.router.navigate(['/news', id]);
  }

  // Pagination methods
  get paginatedNews(): NewsItem[] {
    const filteredNews = this.getFilteredNewsByCategory(this.currentCategory);
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return filteredNews.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages(): number {
    const filteredNews = this.getFilteredNewsByCategory(this.currentCategory);
    return Math.ceil(filteredNews.length / this.itemsPerPage);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToFirstPage() {
    this.currentPage = 1;
  }

  goToLastPage() {
    this.currentPage = this.totalPages;
  }

  get pageNumbers(): number[] {
    const pages: number[] = [];
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push(-1); // Ellipsis
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1);
        pages.push(-1); // Ellipsis
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push(-1); // Ellipsis
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push(-1); // Ellipsis
        pages.push(totalPages);
      }
    }
    return pages;
  }
}
