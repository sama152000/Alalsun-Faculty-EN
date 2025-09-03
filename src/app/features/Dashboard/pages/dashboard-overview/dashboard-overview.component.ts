import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-overview',
  standalone: true,
  template: `
    <div class="dashboard-overview">
      <h2>Dashboard Overview</h2>
      <div class="stats-grid">
        <div class="stat-card">
          <i class="pi pi-building"></i>
          <div class="stat-info">
            <h3>Departments</h3>
            <p class="stat-number">12</p>
          </div>
        </div>
        <div class="stat-card">
          <i class="pi pi-users"></i>
          <div class="stat-info">
            <h3>Staff Members</h3>
            <p class="stat-number">45</p>
          </div>
        </div>
        <div class="stat-card">
          <i class="pi pi-megaphone"></i>
          <div class="stat-info">
            <h3>News Articles</h3>
            <p class="stat-number">28</p>
          </div>
        </div>
        <div class="stat-card">
          <i class="pi pi-images"></i>
          <div class="stat-info">
            <h3>Media Files</h3>
            <p class="stat-number">156</p>
          </div>
        </div>
      </div>
      <div class="recent-activity">
        <h3>Recent Activity</h3>
        <ul class="activity-list">
          <li>Department "Computer Science" was updated</li>
          <li>New staff member "Dr. Ahmed" was added</li>
          <li>News article "Faculty Achievements" was published</li>
          <li>Media gallery was updated with new images</li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-overview {
      padding: 2rem;
    }

    h2 {
      color: var(--primary-color);
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    .stat-card {
      background: white;
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      display: flex;
      align-items: center;
      gap: 1rem;
      transition: transform 0.3s ease;
    }

    .stat-card:hover {
      transform: translateY(-5px);
    }

    .stat-card i {
      font-size: 2.5rem;
      color: var(--primary-color);
    }

    .stat-info h3 {
      margin: 0 0 0.5rem 0;
      color: #666;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .stat-number {
      margin: 0;
      font-size: 2rem;
      font-weight: bold;
      color: var(--primary-color);
    }

    .recent-activity {
      background: white;
      padding: 1.5rem;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }

    .recent-activity h3 {
      margin: 0 0 1rem 0;
      color: var(--primary-color);
    }

    .activity-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .activity-list li {
      padding: 0.75rem 0;
      border-bottom: 1px solid #eee;
      color: #666;
    }

    .activity-list li:last-child {
      border-bottom: none;
    }
  `]
})
export class DashboardOverviewComponent {

}
