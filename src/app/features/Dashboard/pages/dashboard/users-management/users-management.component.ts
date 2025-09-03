import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  createdAt: Date;
  lastLogin?: Date;
}

@Component({
  selector: 'app-users-management',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})

export class UsersManagementComponent implements OnInit {
  users: User[] = [];
  showDialog = false;
  showConfirmDialog = false;
  isEditing = false;
  editingId: string | null = null;
  activeTab = 'basic';
  userRoles = [
    { label: 'Administrator', value: 'admin' },
    { label: 'Editor', value: 'editor' },
    { label: 'Viewer', value: 'viewer' }
  ];
  showToast = false;
  toastMessage = '';
  toastClass = '';
  toastIcon = '';

  userForm: FormGroup;
  deleteId: string | null = null;

  constructor(private fb: FormBuilder) {
    this.userForm = this.createForm();
  }

  ngOnInit() {
    this.loadUsers();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['viewer'],
      status: ['active'],
      password: ['', this.isEditing ? [] : Validators.required],
      confirmPassword: ['']
    }, { validators: this.passwordMatchValidator });
  }

  private passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ mismatch: true });
      return { mismatch: true };
    }
    return null;
  }

  private generateId(): string {
    return crypto.randomUUID();
  }

  loadUsers() {
    // Mock data - replace with actual service call
    this.users = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'admin',
        status: 'active',
        createdAt: new Date('2023-01-15'),
        lastLogin: new Date('2024-01-10')
      },
      {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'editor',
        status: 'active',
        createdAt: new Date('2023-03-20'),
        lastLogin: new Date('2024-01-09')
      }
    ];
  }

  openAddDialog() {
    this.isEditing = false;
    this.editingId = null;
    this.userForm.reset();
    this.showDialog = true;
    this.activeTab = 'basic';
  }

  openEditDialog(user: User) {
    this.isEditing = true;
    this.editingId = user.id;
    this.userForm.patchValue({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status
    });
    this.showDialog = true;
    this.activeTab = 'basic';
  }

  closeDialog() {
    this.showDialog = false;
    this.userForm.reset();
  }

  saveUser() {
    if (this.userForm.valid) {
      const formValue = this.userForm.value;

      if (this.isEditing && this.editingId) {
        // Update existing user
        const index = this.users.findIndex(u => u.id === this.editingId);
        if (index !== -1) {
          this.users[index] = {
            ...this.users[index],
            name: formValue.name,
            email: formValue.email,
            role: formValue.role,
            status: formValue.status
          };
          this.showSuccessToast('User updated successfully');
        }
      } else {
        // Create new user
        const newUser: User = {
          id: this.generateId(),
          name: formValue.name,
          email: formValue.email,
          role: formValue.role,
          status: formValue.status,
          createdAt: new Date()
        };
        this.users.push(newUser);
        this.showSuccessToast('User created successfully');
      }
      this.closeDialog();
    }
  }

  confirmDelete(id: string) {
    this.deleteId = id;
    this.showConfirmDialog = true;
  }

  closeConfirmDialog() {
    this.showConfirmDialog = false;
    this.deleteId = null;
  }

  deleteUser() {
    if (this.deleteId) {
      this.users = this.users.filter(u => u.id !== this.deleteId);
      this.showSuccessToast('User deleted successfully');
      this.closeConfirmDialog();
    }
  }

  showSuccessToast(message: string) {
    this.showToast = true;
    this.toastClass = 'toast-success';
    this.toastIcon = 'pi pi-check';
    this.toastMessage = message;
    setTimeout(() => this.hideToast(), 3000);
  }

  showErrorToast(message: string) {
    this.showToast = true;
    this.toastClass = 'toast-error';
    this.toastIcon = 'pi pi-times';
    this.toastMessage = message;
    setTimeout(() => this.hideToast(), 3000);
  }

  hideToast() {
    this.showToast = false;
    this.toastMessage = '';
    this.toastClass = '';
    this.toastIcon = '';
  }

  getStatusClass(status: string): string {
    return status === 'active' ? 'status-active' : 'status-inactive';
  }

  getRoleLabel(role: string): string {
    const roleObj = this.userRoles.find(r => r.value === role);
    return roleObj ? roleObj.label : role;
  }
}
