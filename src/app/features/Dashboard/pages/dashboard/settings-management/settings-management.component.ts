import { Component } from '@angular/core';

@Component({
  selector: 'app-settings-management',
  standalone: true,
  template: `
    <div class="settings-management">
      <h2>Settings Management</h2>
      <div class="settings-grid">
        <div class="settings-card">
          <h3>General Settings</h3>
          <form class="settings-form">
            <div class="form-group">
              <label for="siteTitle">Site Title</label>
              <input type="text" id="siteTitle" value="Faculty of Al-Alsun">
            </div>
            <div class="form-group">
              <label for="siteDescription">Site Description</label>
              <textarea id="siteDescription" rows="3">Faculty of Languages and Translation</textarea>
            </div>
            <div class="form-group">
              <label for="contactEmail">Contact Email</label>
              <input type="email" id="contactEmail" value="info@alsun.edu">
            </div>
          </form>
        </div>

        <div class="settings-card">
          <h3>SEO Settings</h3>
          <form class="settings-form">
            <div class="form-group">
              <label for="metaTitle">Meta Title</label>
              <input type="text" id="metaTitle" value="Faculty of Al-Alsun">
            </div>
            <div class="form-group">
              <label for="metaDescription">Meta Description</label>
              <textarea id="metaDescription" rows="3">Leading faculty for languages and translation studies</textarea>
            </div>
            <div class="form-group">
              <label for="keywords">Keywords</label>
              <input type="text" id="keywords" value="languages, translation, faculty, education">
            </div>
          </form>
        </div>

        <div class="settings-card">
          <h3>System Settings</h3>
          <form class="settings-form">
            <div class="form-group">
              <label for="language">Default Language</label>
              <select id="language">
                <option value="en">English</option>
                <option value="ar" selected>Arabic</option>
              </select>
            </div>
            <div class="form-group">
              <label for="timezone">Timezone</label>
              <select id="timezone">
                <option value="UTC+2" selected>Cairo (UTC+2)</option>
                <option value="UTC+3">Riyadh (UTC+3)</option>
              </select>
            </div>
            <div class="form-group">
              <label class="checkbox-label">
                <input type="checkbox" checked>
                Enable Maintenance Mode
              </label>
            </div>
          </form>
        </div>
      </div>

      <div class="actions">
        <button class="btn-primary">Save Changes</button>
        <button class="btn-secondary">Reset to Defaults</button>
      </div>
    </div>
  `,
  styles: [`
    .settings-management {
      padding: 2rem;
    }

    h2 {
      color: var(--primary-color);
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    .settings-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .settings-card {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }

    .settings-card h3 {
      color: var(--primary-color);
      margin-bottom: 1.5rem;
      font-size: 1.2rem;
    }

    .settings-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .form-group label {
      font-weight: 500;
      color: #333;
    }

    .form-group input,
    .form-group textarea,
    .form-group select {
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 1rem;
      transition: border-color 0.3s ease;
    }

    .form-group input:focus,
    .form-group textarea:focus,
    .form-group select:focus {
      outline: none;
      border-color: var(--primary-color);
    }

    .checkbox-label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
    }

    .actions {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }

    .btn-primary {
      background: var(--primary-color);
      color: white;
      border: none;
      padding: 0.75rem 2rem;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .btn-primary:hover {
      background: var(--accent-gold);
    }

    .btn-secondary {
      background: #6c757d;
      color: white;
      border: none;
      padding: 0.75rem 2rem;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .btn-secondary:hover {
      background: #5a6268;
    }
  `]
})
export class SettingsManagementComponent {

}
