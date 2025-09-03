import { Component } from '@angular/core';

@Component({
  selector: 'app-about-management',
  standalone: true,
  template: `
    <div class="about-management">
      <h2>About Management</h2>
      <div class="about-sections">
        <div class="about-card">
          <h3>Faculty History</h3>
          <textarea placeholder="Enter faculty history content..." rows="6"></textarea>
          <button class="btn-save">Save Changes</button>
        </div>

        <div class="about-card">
          <h3>Vision & Mission</h3>
          <div class="form-group">
            <label>Vision</label>
            <textarea placeholder="Enter faculty vision..." rows="3"></textarea>
          </div>
          <div class="form-group">
            <label>Mission</label>
            <textarea placeholder="Enter faculty mission..." rows="3"></textarea>
          </div>
          <button class="btn-save">Save Changes</button>
        </div>

        <div class="about-card">
          <h3>Dean Message</h3>
          <div class="form-group">
            <input type="text" placeholder="Dean Name">
          </div>
          <div class="form-group">
            <textarea placeholder="Enter dean's message..." rows="4"></textarea>
          </div>
          <div class="form-group">
            <label>Dean Photo</label>
            <input type="file" accept="image/*">
          </div>
          <button class="btn-save">Save Changes</button>
        </div>

        <div class="about-card">
          <h3>Vice Dean Message</h3>
          <div class="form-group">
            <input type="text" placeholder="Vice Dean Name">
          </div>
          <div class="form-group">
            <textarea placeholder="Enter vice dean's message..." rows="4"></textarea>
          </div>
          <div class="form-group">
            <label>Vice Dean Photo</label>
            <input type="file" accept="image/*">
          </div>
          <button class="btn-save">Save Changes</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .about-management {
      padding: 2rem;
    }

    h2 {
      color: var(--primary-color);
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    .about-sections {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
    }

    .about-card {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }

    .about-card h3 {
      color: var(--primary-color);
      margin-bottom: 1.5rem;
      font-size: 1.3rem;
    }

    .form-group {
      margin-bottom: 1rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: #333;
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 1rem;
      transition: border-color 0.3s ease;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--primary-color);
    }

    .about-card textarea {
      resize: vertical;
      min-height: 80px;
    }

    .btn-save {
      background: var(--primary-color);
      color: white;
      border: none;
      padding: 0.75rem 2rem;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
      width: 100%;
      margin-top: 1rem;
    }

    .btn-save:hover {
      background: var(--accent-gold);
    }
  `]
})
export class AboutManagementComponent {

}
