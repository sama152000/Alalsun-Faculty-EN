import { Component } from '@angular/core';

@Component({
  selector: 'app-news-management',
  standalone: true,
  template: `
    <div class="news-management">
      <h2>News Management</h2>

      <div class="news-actions">
        <button class="btn-add">Add New Article</button>
        <div class="search-filter">
          <input type="text" placeholder="Search articles..." class="search-input">
          <select class="filter-select">
            <option value="">All Categories</option>
            <option value="academic">Academic</option>
            <option value="events">Events</option>
            <option value="announcements">Announcements</option>
          </select>
        </div>
      </div>

      <div class="news-list">
        <div class="news-item" *ngFor="let news of newsItems">
          <div class="news-content">
            <h3>{{news.title}}</h3>
            <p class="news-summary">{{news.summary}}</p>
            <div class="news-meta">
              <span class="category">{{news.category}}</span>
              <span class="date">{{news.date}}</span>
              <span class="status" [class.published]="news.published" [class.draft]="!news.published">
                {{news.published ? 'Published' : 'Draft'}}
              </span>
            </div>
          </div>
          <div class="news-actions">
            <button class="btn-edit">Edit</button>
            <button class="btn-delete">Delete</button>
            <button class="btn-publish" *ngIf="!news.published">Publish</button>
          </div>
        </div>
      </div>

      <div class="pagination">
        <button class="btn-prev">Previous</button>
        <span class="page-info">Page 1 of 5</span>
        <button class="btn-next">Next</button>
      </div>
    </div>
  `,
  styles: [`
    .news-management {
      padding: 2rem;
    }

    h2 {
      color: var(--primary-color);
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    .news-actions {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      gap: 1rem;
    }

    .btn-add {
      background: var(--primary-color);
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .btn-add:hover {
      background: var(--accent-gold);
    }

    .search-filter {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .search-input {
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 1rem;
      width: 250px;
    }

    .filter-select {
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 1rem;
      background: white;
    }

    .news-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .news-item {
      background: white;
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .news-content {
      flex: 1;
    }

    .news-content h3 {
      margin: 0 0 0.5rem 0;
      color: var(--primary-color);
      font-size: 1.2rem;
    }

    .news-summary {
      margin: 0 0 1rem 0;
      color: #666;
      line-height: 1.5;
    }

    .news-meta {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .category {
      background: #e9ecef;
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.9rem;
      color: #495057;
    }

    .date {
      color: #666;
      font-size: 0.9rem;
    }

    .status {
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .status.published {
      background: #d4edda;
      color: #155724;
    }

    .status.draft {
      background: #fff3cd;
      color: #856404;
    }

    .news-actions {
      display: flex;
      gap: 0.5rem;
    }

    .btn-edit, .btn-delete, .btn-publish {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 5px;
      font-size: 0.9rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .btn-edit {
      background: #007bff;
      color: white;
    }

    .btn-edit:hover {
      background: #0056b3;
    }

    .btn-delete {
      background: #dc3545;
      color: white;
    }

    .btn-delete:hover {
      background: #c82333;
    }

    .btn-publish {
      background: #28a745;
      color: white;
    }

    .btn-publish:hover {
      background: #218838;
    }

    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin-top: 2rem;
    }

    .btn-prev, .btn-next {
      padding: 0.5rem 1rem;
      border: 1px solid #ddd;
      background: white;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .btn-prev:hover, .btn-next:hover {
      background: #f8f9fa;
    }

    .page-info {
      color: #666;
      font-weight: 500;
    }
  `]
})
export class NewsManagementComponent {
  newsItems = [
    {
      title: 'New Research Grant Awarded',
      summary: 'The faculty has been awarded a significant research grant for sustainable energy studies...',
      category: 'Academic',
      date: '2024-01-15',
      published: true
    },
    {
      title: 'Annual Science Fair Announced',
      summary: 'Registration is now open for the annual science fair featuring student projects...',
      category: 'Events',
      date: '2024-01-12',
      published: false
    },
    {
      title: 'Campus Maintenance Schedule',
      summary: 'Important maintenance work will be conducted in the main building this weekend...',
      category: 'Announcements',
      date: '2024-01-10',
      published: true
    }
  ];
}
