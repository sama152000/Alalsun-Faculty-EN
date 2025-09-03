import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pages-management',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="pages-management">
      <div class="management-header">
        <h2>Pages Management</h2>
        <button class="btn-primary-custom" (click)="openAddDialog()">
          <i class="pi pi-plus"></i>
          Add New Page
        </button>
      </div>

      <div class="pages-list">
        <div class="page-card" *ngFor="let page of pages">
          <div class="page-info">
            <h3>{{ page.title }}</h3>
            <p class="page-path">{{ page.path }}</p>
            <div class="page-meta">
              <span class="meta-item">
                <i class="pi pi-calendar"></i>
                Last updated: {{ page.lastUpdated | date }}
              </span>
              <span class="meta-item">
                <i class="pi pi-user"></i>
                {{ page.author }}
              </span>
            </div>
          </div>
          <div class="page-actions">
            <button class="btn-edit" (click)="editPage(page)">
              <i class="pi pi-pencil"></i>
              Edit
            </button>
            <button class="btn-delete" (click)="deletePage(page.id)">
              <i class="pi pi-trash"></i>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .pages-management {
      padding: 2rem;
    }

    .management-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }

    .pages-list {
      display: grid;
      gap: 1.5rem;
    }

    .page-card {
      background: white;
      border-radius: 10px;
      padding: 1.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .page-info h3 {
      margin: 0;
      color: var(--text-primary);
    }

    .page-path {
      margin: 0.5rem 0;
      color: var(--text-secondary);
      font-size: 0.875rem;
    }

    .page-meta {
      display: flex;
      gap: 1rem;
      color: var(--text-secondary);
      font-size: 0.875rem;
    }

    .meta-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .page-actions {
      display: flex;
      gap: 1rem;
    }

    .btn-edit, .btn-delete {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
      transition: all 0.2s ease;
    }

    .btn-edit {
      background-color: var(--primary-light);
      color: var(--primary-color);
    }

    .btn-delete {
      background-color: var(--error-light);
      color: var(--error-color);
    }

    .btn-edit:hover {
      background-color: var(--primary-color);
      color: white;
    }

    .btn-delete:hover {
      background-color: var(--error-color);
      color: white;
    }

    @media (max-width: 768px) {
      .pages-management {
        padding: 1rem;
      }

      .page-card {
        flex-direction: column;
        gap: 1rem;
      }

      .page-actions {
        width: 100%;
        justify-content: flex-end;
      }
    }
  `]
})
export class PagesManagementComponent {
  pages: any[] = [
    {
      id: '1',
      title: 'Home Page',
      path: '/',
      lastUpdated: new Date(),
      author: 'Admin'
    },
    {
      id: '2',
      title: 'About Us',
      path: '/about',
      lastUpdated: new Date(),
      author: 'Admin'
    }
  ];

  openAddDialog() {
    // Implement add page dialog
  }

  editPage(page: any) {
    // Implement edit page
  }

  deletePage(id: string) {
    // Implement delete page
  }
}
