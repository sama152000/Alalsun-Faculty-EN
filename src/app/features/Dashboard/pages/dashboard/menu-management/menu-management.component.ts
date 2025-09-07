import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { MenuService}from '../../../../colleges/Al-Alsun/Services/menu.service';
import {  MenuItem, MenuType, HeaderType } from '../../../../colleges/Al-Alsun/model/menu.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu-management',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.css']
})
export class MenuManagementComponent implements OnInit {
  menus: MenuItem[] = [];
  showConfirmDialog = false;
  deleteId: number | null = null;
  showToast = false;
  toastMessage = '';
  toastClass = '';
  toastIcon = '';

  constructor(
    private menuService: MenuService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadMenus();
  }

  loadMenus() {
    this.menuService.getAllMenus().subscribe(menus => {
      this.menus = menus;
    });
  }

  setActive(id: number, type: MenuType, headerType?: HeaderType) {
    this.menuService.setActiveMenu(id, type, headerType).subscribe(() => {
      this.showSuccessToast(`${type === MenuType.HEADER ? 'Header' : 'Footer'} set as active`);
      this.loadMenus();
    });
  }

  confirmDelete(id: number) {
    this.deleteId = id;
    this.showConfirmDialog = true;
  }

  closeConfirmDialog() {
    this.showConfirmDialog = false;
    this.deleteId = null;
  }

  deleteMenu() {
    if (this.deleteId !== null) {
      this.menuService.deleteMenu(this.deleteId).subscribe(() => {
        this.showSuccessToast('Menu deleted successfully');
        this.loadMenus();
        this.closeConfirmDialog();
      });
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
}