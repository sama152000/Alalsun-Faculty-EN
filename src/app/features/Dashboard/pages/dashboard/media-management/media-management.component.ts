import { Component } from '@angular/core';

@Component({
  selector: 'app-media-management',
  standalone: true,
  template: `
    <div class="media-management">
      <h2>Media Management</h2>
      <div class="media-upload">
        <div class="upload-section">
          <h3>Upload Media Files</h3>
          <div class="upload-area">
            <i class="pi pi-cloud-upload"></i>
            <p>Drag & drop files here or click to browse</p>
            <input type="file" multiple accept="image/*,video/*,audio/*,.pdf,.doc,.docx">
          </div>
        </div>
      </div>

        <div class="media-gallery">
          <h3>Media Gallery</h3>
          <div class="media-grid">
            <div class="media-item" *ngFor="let item of mediaItems">
              <img [src]="item.thumbnail" [alt]="item.name">
              <div class="media-info">
                <h4>{{item.name}}</h4>
                <p>{{item.size}} • {{item.date}}</p>
              </div>
              <div class="media-actions">
                <button class="btn-view">View</button>
                <button class="btn-delete">Delete</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  `,
  styles: [`
    .media-management {
      padding: 2rem;
    }

    h2 {
      color: var(--primary-color);
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    .upload-section {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      margin-bottom: 2rem;
    }

    .upload-section h3 {
      color: var(--primary-color);
      margin-bottom: 1.5rem;
    }

    .upload-area {
      border: 2px dashed #ddd;
      border-radius: 10px;
      padding: 3rem;
      text-align: center;
      cursor: pointer;
      transition: border-color 0.3s ease;
    }

    .upload-area:hover {
      border-color: var(--primary-color);
    }

    .upload-area i {
      font-size: 3rem;
      color: #ccc;
      margin-bottom: 1rem;
    }

    .upload-area p {
      color: #666;
      margin-bottom: 1rem;
    }

    .upload-area input {
      display: none;
    }

    .media-gallery h3 {
      color: var(--primary-color);
      margin-bottom: 1.5rem;
    }

    .media-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1.5rem;
    }

    .media-item {
      background: white;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      overflow: hidden;
    }

    .media-item img {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }

    .media-info {
      padding: 1rem;
    }

    .media-info h4 {
      margin: 0 0 0.5rem 0;
      font-size: 1rem;
    }

    .media-info p {
      margin: 0;
      color: #666;
      font-size: 0.9rem;
    }

    .media-actions {
      padding: 0 1rem 1rem 1rem;
      display: flex;
      gap: 0.5rem;
    }

    .btn-view, .btn-delete {
      flex: 1;
      padding: 0.5rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 0.9rem;
    }

    .btn-view {
      background: var(--primary-color);
      color: white;
    }

    .btn-delete {
      background: #dc3545;
      color: white;
    }
  `]
})
export class MediaManagementComponent {
  mediaItems = [
    { name: 'faculty-photo-1.jpg', size: '2.5 MB', date: '2024-01-15', thumbnail: 'https://via.placeholder.com/250x150' },
    { name: 'event-banner.png', size: '1.8 MB', date: '2024-01-10', thumbnail: 'https://via.placeholder.com/250x150' },
    { name: 'student-activity.jpg', size: '3.2 MB', date: '2024-01-08', thumbnail: 'https://via.placeholder.com/250x150' }
  ];
}
