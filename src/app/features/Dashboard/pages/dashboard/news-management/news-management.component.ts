import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../../../../colleges/Al-Alsun/Services/news.service';
import { NewsItem, NewsCategory, NewsFilter } from '../../../../colleges/Al-Alsun/model/news.model';

@Component({
  selector: 'app-news-management',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './news-management.component.html',
  styleUrls: ['./news-management.component.css']
})
export class NewsManagementComponent implements OnInit {
  newsItems: NewsItem[] = [];
  filter: NewsFilter = {};
  categories: string[] = Object.values(NewsCategory);
  years: number[] = [];
  months = [
    { value: 1, label: 'January' },
    { value: 2, label: 'February' },
    { value: 3, label: 'March' },
    { value: 4, label: 'April' },
    { value: 5, label: 'May' },
    { value: 6, label: 'June' },
    { value: 7, label: 'July' },
    { value: 8, label: 'August' },
    { value: 9, label: 'September' },
    { value: 10, label: 'October' },
    { value: 11, label: 'November' },
    { value: 12, label: 'December' }
  ];
  showConfirmDialog = false;
  deleteId: number | null = null;
  showToast = false;
  toastMessage = '';
  toastClass = '';
  toastIcon = '';

  constructor(
    private newsService: NewsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadNews();
    this.generateYears();
  }

  loadNews() {
    this.newsItems = this.newsService.filterNews(this.filter);
  }

  generateYears() {
    const currentYear = new Date().getFullYear();
    for (let year = currentYear - 5; year <= currentYear + 1; year++) {
      this.years.push(year);
    }
  }

  applyFilter() {
    this.loadNews();
  }

  resetFilter() {
    this.filter = {};
    this.loadNews();
  }

  confirmDelete(id: number) {
    this.deleteId = id;
    this.showConfirmDialog = true;
  }

  closeConfirmDialog() {
    this.showConfirmDialog = false;
    this.deleteId = null;
  }

  deleteNews() {
    if (this.deleteId !== null) {
      this.newsService.deleteNews(this.deleteId);
      this.showSuccessToast('News deleted successfully');
      this.loadNews();
      this.closeConfirmDialog();
    }
  }

  showSuccessToast(message: string) {
    this.showToast = true;
    this.toastClass = 'toast-success';
    this.toastIcon = 'pi pi-check';
    this.toastMessage = message;
    setTimeout(() => this.hideToast(), 3000);
  }

  showErrorToast(message: string) {
    this.showToast = true;
    this.toastClass = 'toast-error';
    this.toastIcon = 'pi pi-times';
    this.toastMessage = message;
    setTimeout(() => this.hideToast(), 3000);
  }

  hideToast() {
    this.showToast = false;
    this.toastMessage = '';
    this.toastClass = '';
    this.toastIcon = '';
  }
}