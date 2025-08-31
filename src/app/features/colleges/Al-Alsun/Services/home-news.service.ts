import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsItem } from '../model/news-item.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'Translation and Cultural Communication Conference',
      excerpt: 'Focusing on specialized translation and cultural dialogue. Join experts from around the world to discuss the future of cross-cultural communication.',
      date: '12 October 2025',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Conference',
      author: 'Dr. Sarah Ahmed',
      priority: true
    },
    {
      id: 2,
      title: 'Opening of the New German Language Lab',
      excerpt: 'Equipped with the latest audiovisual technologies. Modern facilities to enhance the German language learning experience.',
      date: '3 November 2025',
      image: 'https://images.pexels.com/photos/8617733/pexels-photo-8617733.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Facilities',
      author: 'Professor Michael Weber',
      priority: false
    },
    {
      id: 3,
      title: 'Student Exchange Scholarship - Confucius Institute',
      excerpt: 'Study opportunities in Chinese language and culture. Exclusive scholarship program for outstanding students.',
      date: '1 December 2025',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=300',
      category: 'Scholarship',
      author: 'Dr. Li Wei',
      priority: false
    }
  ];

  getNewsItems(): Observable<NewsItem[]> {
    return of(this.newsItems);
  }

  getTotalNews(): number {
    return this.newsItems.length;
  }

  getTodayNews(): number {
    return Math.floor(Math.random() * 3) + 1;
  }

  getWeeklyNews(): number {
    return Math.floor(Math.random() * 10) + 5;
  }
}