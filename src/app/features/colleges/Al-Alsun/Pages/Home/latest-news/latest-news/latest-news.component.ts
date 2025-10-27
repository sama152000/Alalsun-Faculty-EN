import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NewsService } from '../../../../Services/news.service';
import { NewsItem } from '../../../../model/news.model';

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit, OnDestroy {
  newsItems: NewsItem[] = [];

  // Time-related properties
  currentTime: Date = new Date();
  timezone: string = 'UTC+2';
  private timeInterval: any;

  // Statistics properties
  totalNews: number = 0;
  todayNews: number = 0;
  weeklyNews: number = 0;

  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit(): void {
    this.updateTime();
    this.calculateStatistics();
    this.loadNews();

    // Update time every second
    this.timeInterval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }

  private updateTime(): void {
    this.currentTime = new Date();
  }

  private loadNews(): void {
    // Fetch recent news items from the service
    this.newsItems = this.newsService.getRecentNews(3);
  }

  private calculateStatistics(): void {
    const today = new Date();
    const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

    this.totalNews = this.newsItems.length;

    // For demo purposes, simulate today's and weekly news count
    this.todayNews = Math.floor(Math.random() * 3) + 1;
    this.weeklyNews = Math.floor(Math.random() * 10) + 5;
  }

  // Method to handle read more click
  onReadMore(newsItem: NewsItem): void {
    console.log('Reading more about:', newsItem.title);
    // Navigate to news detail page
    this.router.navigate(['/news', newsItem.id]);
  }

  // Method to load more news
  onLoadMore(): void {
    console.log('Loading more news...');
    // Navigate to news page
    this.router.navigate(['/news']);
  }

  // Method to get category color class
  getCategoryClass(category: string): string {
    const categoryClasses: { [key: string]: string } = {
      'students': 'category-students',
      'postgraduate': 'category-postgraduate',
      'board': 'category-board'
    };

    return categoryClasses[category] || 'category-default';
  }
}