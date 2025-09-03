import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-management',
  standalone: true,
  template: `
    <div class="menu-management">
      <h2>Menu Management</h2>
      <div class="menu-editor">
        <div class="menu-section">
          <h3>Main Navigation</h3>
          <ul class="menu-items">
            <li class="menu-item">
              <i class="pi pi-home"></i>
              <span>Home</span>
              <div class="menu-actions">
                <button class="btn-edit">Edit</button>
                <button class="btn-delete">Delete</button>
              </div>
            </li>
            <li class="menu-item">
              <i class="pi pi-info-circle"></i>
              <span>About</span>
              <div class="menu-actions">
                <button class="btn-edit">Edit</button>
                <button class="btn-delete">Delete</button>
              </div>
            </li>
            <li class="menu-item">
              <i class="pi pi-building"></i>
              <span>Departments</span>
              <div class="menu-actions">
                <button class="btn-edit">Edit</button>
                <button class="btn-delete">Delete</button>
              </div>
            </li>
            <li class="menu-item">
              <i class="pi pi-users"></i>
              <span>Staff</span>
              <div class="menu-actions">
                <button class="btn-edit">Edit</button>
                <button class="btn-delete">Delete</button>
              </div>
            </li>
            <li class="menu-item">
              <i class="pi pi-phone"></i>
              <span>Contact</span>
              <div class="menu-actions">
                <button class="btn-edit">Edit</button>
                <button class="btn-delete">Delete</button>
              </div>
            </li>
          </ul>
        </div>
        <div class="add-menu-item">
          <button class="btn-add">Add New Menu Item</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .menu-management {
      padding: 2rem;
    }

    h2 {
      color: var(--primary-color);
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    .menu-editor {
      background: white;
      border-radius: 10px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      padding: 2rem;
    }

    .menu-section h3 {
      color: var(--primary-color);
      margin-bottom: 1.5rem;
      font-size: 1.3rem;
    }

    .menu-items {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .menu-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      border: 1px solid #eee;
      border-radius: 5px;
      margin-bottom: 0.5rem;
      background: #f8f9fa;
    }

    .menu-item i {
      color: var(--primary-color);
      font-size: 1.2rem;
    }

    .menu-item span {
      flex: 1;
      font-weight: 500;
    }

    .menu-actions {
      display: flex;
      gap: 0.5rem;
    }

    .btn-edit, .btn-delete {
      padding: 0.25rem 0.75rem;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      font-size: 0.9rem;
    }

    .btn-edit {
      background: var(--primary-color);
      color: white;
    }

    .btn-delete {
      background: #dc3545;
      color: white;
    }

    .add-menu-item {
      margin-top: 2rem;
      text-align: center;
    }

    .btn-add {
      background: var(--accent-gold);
      color: white;
      border: none;
      padding: 0.75rem 2rem;
      border-radius: 5px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .btn-add:hover {
      background: var(--primary-color);
    }
  `]
})
export class MenuManagementComponent {

}
