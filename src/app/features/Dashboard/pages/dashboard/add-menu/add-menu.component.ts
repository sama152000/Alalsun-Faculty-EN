import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { MenuService } from '../../../../colleges/Al-Alsun/Services/menu.service';
import { MenuItem, MenuType, HeaderType } from '../../../../colleges/Al-Alsun/model/menu.model';

@Component({
  selector: 'app-add-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  menuForm: FormGroup;
  menuTypes = Object.values(MenuType);
  headerTypes = Object.values(HeaderType);
  showToast = false;
  toastMessage = '';
  toastClass = '';
  toastIcon = '';

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private router: Router
  ) {
    this.menuForm = this.createForm();
  }

  ngOnInit() {
    this.menuForm.reset();
    this.clearFormArrays();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      headerType: [''],
      isActive: [false],
      facultyInfo: this.fb.group({
        logoUrl: [''],
        name: [''],
        subtitle: [''],
        universityName: [''],
        established: ['']
      }),
      navbarItems: this.fb.array([]),
      submenu: this.fb.group({
        copyright: [''],
        contactMethods: this.fb.group({
          phone: [''],
          email: [''],
          universityWebsite: [''],
          languages: this.fb.array([])
        })
      }),
      footerData: this.fb.group({
        logoIcon: [''],
        title: [''],
        subtitle: [''],
        tagline: [''],
        socialLinks: this.fb.array([]),
        quickLinks: this.fb.group({
          title: [''],
          links: this.fb.array([])
        }),
        academicLinks: this.fb.group({
          title: [''],
          links: this.fb.array([])
        }),
        resourceLinks: this.fb.group({
          title: [''],
          links: this.fb.array([])
        }),
        copyright: [''],
        contactMethods: this.fb.group({
          phone: [''],
          email: [''],
          universityWebsite: [''],
          languages: this.fb.array([])
        })
      })
    });
  }

  get navbarItemsArray() {
    return this.menuForm.get('navbarItems') as FormArray;
  }

  get submenuLanguagesArray() {
    return this.menuForm.get('submenu.contactMethods.languages') as FormArray;
  }

  get footerSocialLinksArray() {
    return this.menuForm.get('footerData.socialLinks') as FormArray;
  }

  get footerQuickLinksArray() {
    return this.menuForm.get('footerData.quickLinks.links') as FormArray;
  }

  get footerAcademicLinksArray() {
    return this.menuForm.get('footerData.academicLinks.links') as FormArray;
  }

  get footerResourceLinksArray() {
    return this.menuForm.get('footerData.resourceLinks.links') as FormArray;
  }

  get footerContactLanguagesArray() {
    return this.menuForm.get('footerData.contactMethods.languages') as FormArray;
  }

  addNavbarItem() {
    this.navbarItemsArray.push(this.fb.group({
      label: ['', Validators.required],
      icon: [''],
      route: [''],
      children: this.fb.array([])
    }));
  }

  addNavbarChild(index: number) {
    const childrenArray = this.navbarItemsArray.at(index).get('children') as FormArray;
    childrenArray.push(this.fb.group({
      label: ['', Validators.required],
      icon: [''],
      route: ['']
    }));
  }

  removeNavbarItem(index: number) {
    this.navbarItemsArray.removeAt(index);
  }

  removeNavbarChild(parentIndex: number, childIndex: number) {
    const childrenArray = this.navbarItemsArray.at(parentIndex).get('children') as FormArray;
    childrenArray.removeAt(childIndex);
  }

  addSubmenuLanguage() {
    this.submenuLanguagesArray.push(this.fb.group({
      value: ['', Validators.required],
      label: ['', Validators.required]
    }));
  }

  removeSubmenuLanguage(index: number) {
    this.submenuLanguagesArray.removeAt(index);
  }

  addFooterSocialLink() {
    this.footerSocialLinksArray.push(this.fb.group({
      platform: ['', Validators.required],
      url: ['', Validators.required],
      icon: ['', Validators.required]
    }));
  }

  removeFooterSocialLink(index: number) {
    this.footerSocialLinksArray.removeAt(index);
  }

  addFooterQuickLink() {
    this.footerQuickLinksArray.push(this.fb.group({
      title: ['', Validators.required],
      url: ['', Validators.required]
    }));
  }

  removeFooterQuickLink(index: number) {
    this.footerQuickLinksArray.removeAt(index);
  }

  addFooterAcademicLink() {
    this.footerAcademicLinksArray.push(this.fb.group({
      title: ['', Validators.required],
      url: ['', Validators.required]
    }));
  }

  removeFooterAcademicLink(index: number) {
    this.footerAcademicLinksArray.removeAt(index);
  }

  addFooterResourceLink() {
    this.footerResourceLinksArray.push(this.fb.group({
      title: ['', Validators.required],
      url: ['', Validators.required]
    }));
  }

  removeFooterResourceLink(index: number) {
    this.footerResourceLinksArray.removeAt(index);
  }

  addFooterContactLanguage() {
    this.footerContactLanguagesArray.push(this.fb.group({
      value: ['', Validators.required],
      label: ['', Validators.required]
    }));
  }

  removeFooterContactLanguage(index: number) {
    this.footerContactLanguagesArray.removeAt(index);
  }

  private clearFormArrays() {
    while (this.navbarItemsArray.length !== 0) {
      this.navbarItemsArray.removeAt(0);
    }
    while (this.submenuLanguagesArray.length !== 0) {
      this.submenuLanguagesArray.removeAt(0);
    }
    while (this.footerSocialLinksArray.length !== 0) {
      this.footerSocialLinksArray.removeAt(0);
    }
    while (this.footerQuickLinksArray.length !== 0) {
      this.footerQuickLinksArray.removeAt(0);
    }
    while (this.footerAcademicLinksArray.length !== 0) {
      this.footerAcademicLinksArray.removeAt(0);
    }
    while (this.footerResourceLinksArray.length !== 0) {
      this.footerResourceLinksArray.removeAt(0);
    }
    while (this.footerContactLanguagesArray.length !== 0) {
      this.footerContactLanguagesArray.removeAt(0);
    }
  }

  saveMenu() {
    if (this.menuForm.valid) {
      const formValue = this.menuForm.value;
      const menu: MenuItem = {
        id: 0,
        name: formValue.name,
        type: formValue.type,
        headerType: formValue.type === MenuType.HEADER ? formValue.headerType : undefined,
        isActive: formValue.isActive,
        data: formValue.type === MenuType.HEADER
          ? {
              facultyInfo: formValue.headerType === HeaderType.TOP_NAV ? formValue.facultyInfo : undefined,
              navbarItems: formValue.headerType === HeaderType.MAIN_NAV ? formValue.navbarItems : undefined,
              submenu: formValue.headerType === HeaderType.SUBMENU ? formValue.submenu : undefined
            }
          : formValue.footerData
      };
      this.menuService.addMenu(menu).subscribe(() => {
        this.showSuccessToast('Menu added successfully');
        setTimeout(() => {
          this.router.navigate(['/dashboard/menus']);
        }, 3000);
      });
    } else {
      this.showErrorToast('Please fill all required fields');
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