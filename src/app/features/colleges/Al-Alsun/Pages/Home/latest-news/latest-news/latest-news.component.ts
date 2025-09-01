import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  author?: string;
  priority?: boolean;
}

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit, OnDestroy {
  newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'Conference on Translation & Cultural Communication',
      excerpt: 'Focus on specialized translation and cultural dialogue. Join experts from around the world discussing the future of cross-cultural communication.',
      date: '12 Oct 2025',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Conference',
      author: 'Dr. Sarah Ahmed',
      priority: true
    },
    {
      id: 2,
      title: 'Opening of New German Language Lab',
      excerpt: 'Equipped with modern audio-visual technologies. State-of-the-art facilities to enhance German language learning experience.',
      date: '3 Nov 2025',
      image: 'https://images.pexels.com/photos/8617733/pexels-photo-8617733.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Facilities',
      author: 'Prof. Michael Weber'
    },
    {
      id: 3,
      title: 'Student Exchange Scholarship – Confucius Classroom',
      excerpt: 'Study opportunities in Chinese language & culture. Exclusive scholarship program for outstanding students.',
      date: '1 Dec 2025',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Scholarship',
      author: 'Dr. Li Wei',
      priority: false
    }
  ];

  // Time-related properties
  currentTime: Date = new Date();
  timezone: string = 'UTC+2';
  private timeInterval: any;

  // Statistics properties
  totalNews: number = 0;
  todayNews: number = 0;
  weeklyNews: number = 0;

  ngOnInit(): void {
    this.updateTime();
    this.calculateStatistics();
    
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
    // Implement navigation or modal logic here
  }

  // Method to load more news
  onLoadMore(): void {
    console.log('Loading more news...');
    // Implement load more functionality here
  }

  // Method to get category color class
  getCategoryClass(category: string): string {
    const categoryClasses: { [key: string]: string } = {
      'Conference': 'category-conference',
      'Facilities': 'category-facilities', 
      'Scholarship': 'category-scholarship',
      'Academic': 'category-academic',
      'Research': 'category-research'
    };
    
    return categoryClasses[category] || 'category-default';
  }
}