import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { MenuService } from '../../../../colleges/Al-Alsun/Services/menu.service';
import { MenuItem, MenuType, HeaderType, NavbarItem, HeaderData, FooterData, SocialMediaIcon } from '../../../../colleges/Al-Alsun/model/menu.model';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, ButtonModule, ToastModule],
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css'],
  providers: [MessageService]
})
export class EditMenuComponent implements OnInit {
  menuForm: FormGroup;
  menuTypes = Object.values(MenuType);
  headerTypes = Object.values(HeaderType);
  socialIcons: SocialMediaIcon[] = [
    { label: 'Facebook', value: 'pi pi-facebook', color: '#1877f2' },
    { label: 'Twitter', value: 'pi pi-twitter', color: '#1da1f2' },
    { label: 'Instagram', value: 'pi pi-instagram', color: '#e4405f' },
    { label: 'LinkedIn', value: 'pi pi-linkedin', color: '#0077b5' },
    { label: 'YouTube', value: 'pi pi-youtube', color: '#ff0000' },
    { label: 'WhatsApp', value: 'pi pi-whatsapp', color: '#25d366' },
    { label: 'Telegram', value: 'pi pi-telegram', color: '#0088cc' },
    { label: 'Email', value: 'pi pi-envelope', color: '#6c757d' },
    { label: 'Phone', value: 'pi pi-phone', color: '#28a745' },
    { label: 'Website', value: 'pi pi-globe', color: '#17a2b8' }
  ];
  showToast = false;
  toastMessage = '';
  toastClass = '';
  toastIcon = '';
  menuId: number;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {
    this.menuId = +this.route.snapshot.paramMap.get('id')!;
    this.menuForm = this.createForm();
  }

  ngOnInit() {
    this.isLoading = true;
    this.setupFormValidation();
    this.loadMenuData();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      headerType: [''],
      isActive: [false],
      facultyInfo: this.fb.group({
        name: [''],
        subtitle: [''],
        universityName: [''],
        established: ['']
      }),
      navbarItems: this.fb.array<FormGroup>([]),
      submenu: this.fb.group({
        copyright: [''],
        contactMethods: this.fb.group({
          phone: [''],
          email: [''],
          universityWebsite: [''],
          languages: this.fb.array<FormGroup>([])
        })
      }),
      footerData: this.fb.group({
        title: [''],
        subtitle: [''],
        tagline: [''],
        socialLinks: this.fb.array<FormGroup>([]),
        quickLinks: this.fb.group({
          title: [''],
          links: this.fb.array<FormGroup>([])
        }),
        academicLinks: this.fb.group({
          title: [''],
          links: this.fb.array<FormGroup>([])
        }),
        resourceLinks: this.fb.group({
          title: [''],
          links: this.fb.array<FormGroup>([])
        }),
        copyright: [''],
        contactMethods: this.fb.group({
          phone: [''],
          email: [''],
          universityWebsite: [''],
          languages: this.fb.array<FormGroup>([])
        })
      })
    });
  }

  private setupFormValidation() {
    this.menuForm.get('type')?.valueChanges.subscribe(type => {
      const headerTypeControl = this.menuForm.get('headerType');
      if (type === MenuType.HEADER) {
        headerTypeControl?.setValidators([Validators.required]);
      } else {
        headerTypeControl?.clearValidators();
      }
      headerTypeControl?.updateValueAndValidity();
    });
  }

  private loadMenuData() {
    this.menuService.getMenuById(this.menuId).subscribe(menu => {
      this.isLoading = false;
      if (!menu) {
        this.showErrorToast('Menu not found');
        return;
      }
      if (!menu.data) {
        this.showErrorToast('Menu data is not available');
        return;
      }

      this.menuForm.patchValue({
        name: menu.name,
        type: menu.type,
        headerType: menu.headerType || '',
        isActive: menu.isActive
      });

      if (menu.type === MenuType.HEADER) {
        const headerData = menu.data as HeaderData;
        if (menu.headerType === HeaderType.TOP_NAV) {
          this.menuForm.get('facultyInfo')?.patchValue(headerData.facultyInfo || {});
        } else if (menu.headerType === HeaderType.MAIN_NAV) {
          this.setNavbarItems(headerData.navbarItems || []);
        } else if (menu.headerType === HeaderType.SUBMENU) {
          this.menuForm.get('submenu')?.patchValue(headerData.submenu || {});
          this.setSubmenuLanguages(headerData.submenu?.contactMethods?.languages || []);
        }
      } else {
        const footerData = menu.data as FooterData;
        this.menuForm.get('footerData')?.patchValue(footerData);
        this.setFooterSocialLinks(footerData.socialLinks || []);
        this.setFooterQuickLinks(footerData.quickLinks?.links || []);
        this.setFooterAcademicLinks(footerData.academicLinks?.links || []);
        this.setFooterResourceLinks(footerData.resourceLinks?.links || []);
        this.setFooterContactLanguages(footerData.contactMethods?.languages || []);
      }
    }, error => {
      this.isLoading = false;
      this.showErrorToast('Failed to load menu data');
      console.error('Error loading menu:', error);
    });
  }

  // Form Array Getters
  get navbarItemsArray() { return this.menuForm.get('navbarItems') as FormArray; }
  get submenuLanguagesArray() { return this.menuForm.get('submenu.contactMethods.languages') as FormArray; }
  get footerSocialLinksArray() { return this.menuForm.get('footerData.socialLinks') as FormArray; }
  get footerQuickLinksArray() { return this.menuForm.get('footerData.quickLinks.links') as FormArray; }
  get footerAcademicLinksArray() { return this.menuForm.get('footerData.academicLinks.links') as FormArray; }
  get footerResourceLinksArray() { return this.menuForm.get('footerData.resourceLinks.links') as FormArray; }
  get footerContactLanguagesArray() { return this.menuForm.get('footerData.contactMethods.languages') as FormArray; }

  // Navbar Items Management
  private setNavbarItems(items: NavbarItem[]) {
    const navbarItemsArray = this.navbarItemsArray;
    navbarItemsArray.clear();
    items.forEach(item => {
      const childrenArray = this.fb.array<FormGroup>([]);
      item.children?.forEach(child => {
        childrenArray.push(this.fb.group({
          label: [child.label, Validators.required],
          route: [child.route],
          target: [child.target]
        }));
      });
      navbarItemsArray.push(this.fb.group({
        label: [item.label, Validators.required],
        route: [item.route],
        target: [item.target],
        parentId: [item.parentId],
        children: childrenArray
      }));
    });
  }

  addNavbarItem() {
    this.navbarItemsArray.push(this.fb.group({
      label: ['', Validators.required],
      route: [''],
      target: [''],
      parentId: [null],
      children: this.fb.array([])
    }));
  }

  removeNavbarItem(index: number) {
    this.navbarItemsArray.removeAt(index);
  }

  addNavbarChild(index: number) {
    const childrenArray = this.navbarItemsArray.at(index).get('children') as FormArray;
    childrenArray.push(this.fb.group({
      label: ['', Validators.required],
      route: [''],
      target: ['']
    }));
  }

  removeNavbarChild(parentIndex: number, childIndex: number) {
    const childrenArray = this.navbarItemsArray.at(parentIndex).get('children') as FormArray;
    childrenArray.removeAt(childIndex);
  }

  getNavbarChildrenArray(index: number): FormArray {
    return this.navbarItemsArray.at(index).get('children') as FormArray;
  }

  // Language Management
  private setSubmenuLanguages(languages: any[]) {
    const languagesArray = this.submenuLanguagesArray;
    languagesArray.clear();
    languages.forEach(lang => {
      languagesArray.push(this.fb.group({
        value: [lang.value, Validators.required],
        label: [lang.label, Validators.required]
      }));
    });
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

  // Footer Management
  private setFooterSocialLinks(links: any[]) {
    const socialLinksArray = this.footerSocialLinksArray;
    socialLinksArray.clear();
    links.forEach(link => {
      socialLinksArray.push(this.fb.group({
        platform: [link.platform, Validators.required],
        url: [link.url, Validators.required],
        icon: [link.icon, Validators.required],
        target: [link.target]
      }));
    });
  }

  private setFooterQuickLinks(links: any[]) {
    const quickLinksArray = this.footerQuickLinksArray;
    quickLinksArray.clear();
    links.forEach(link => {
      quickLinksArray.push(this.fb.group({
        title: [link.title, Validators.required],
        url: [link.url, Validators.required],
        target: [link.target]
      }));
    });
  }

  private setFooterAcademicLinks(links: any[]) {
    const academicLinksArray = this.footerAcademicLinksArray;
    academicLinksArray.clear();
    links.forEach(link => {
      academicLinksArray.push(this.fb.group({
        title: [link.title, Validators.required],
        url: [link.url, Validators.required],
        target: [link.target]
      }));
    });
  }

  private setFooterResourceLinks(links: any[]) {
    const resourceLinksArray = this.footerResourceLinksArray;
    resourceLinksArray.clear();
    links.forEach(link => {
      resourceLinksArray.push(this.fb.group({
        title: [link.title, Validators.required],
        url: [link.url, Validators.required],
        target: [link.target]
      }));
    });
  }

  private setFooterContactLanguages(languages: any[]) {
    const languagesArray = this.footerContactLanguagesArray;
    languagesArray.clear();
    languages.forEach(lang => {
      languagesArray.push(this.fb.group({
        value: [lang.value, Validators.required],
        label: [lang.label, Validators.required]
      }));
    });
  }

  addFooterSocialLink() {
    this.footerSocialLinksArray.push(this.fb.group({
      platform: ['', Validators.required],
      url: ['', Validators.required],
      icon: ['', Validators.required],
      target: ['']
    }));
  }

  removeFooterSocialLink(index: number) {
    this.footerSocialLinksArray.removeAt(index);
  }

  addFooterQuickLink() {
    this.footerQuickLinksArray.push(this.fb.group({
      title: ['', Validators.required],
      url: ['', Validators.required],
      target: ['']
    }));
  }

  removeFooterQuickLink(index: number) {
    this.footerQuickLinksArray.removeAt(index);
  }

  addFooterAcademicLink() {
    this.footerAcademicLinksArray.push(this.fb.group({
      title: ['', Validators.required],
      url: ['', Validators.required],
      target: ['']
    }));
  }

  removeFooterAcademicLink(index: number) {
    this.footerAcademicLinksArray.removeAt(index);
  }

  addFooterResourceLink() {
    this.footerResourceLinksArray.push(this.fb.group({
      title: ['', Validators.required],
      url: ['', Validators.required],
      target: ['']
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

  // Form Submission
  updateMenu() {
    if (this.menuForm.valid) {
      const formValue = this.menuForm.value;
      const menu: MenuItem = {
        id: this.menuId,
        name: formValue.name,
        type: formValue.type,
        headerType: formValue.type === MenuType.HEADER ? formValue.headerType : undefined,
        isActive: formValue.isActive,
        data: this.buildMenuData(formValue)
      };

      this.menuService.updateMenu(menu).subscribe(() => {
        this.showSuccessToast('Menu updated successfully');
        setTimeout(() => {
          this.router.navigate(['/dashboard/menus']);
        }, 2000);
      }, error => {
        this.showErrorToast('Failed to update menu');
        console.error('Error updating menu:', error);
      });
    } else {
      this.showErrorToast('Please fill all required fields');
      this.markFormGroupTouched(this.menuForm);
    }
  }

  private buildMenuData(formValue: any) {
    if (formValue.type === MenuType.HEADER) {
      switch (formValue.headerType) {
        case HeaderType.TOP_NAV:
          return { facultyInfo: formValue.facultyInfo };
        case HeaderType.MAIN_NAV:
          return { navbarItems: formValue.navbarItems };
        case HeaderType.SUBMENU:
          return { submenu: formValue.submenu };
        default:
          return {};
      }
    } else {
      return formValue.footerData;
    }
  }

  private markFormGroupTouched(formGroup: FormGroup | FormArray) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormControl) {
        control.markAsTouched();
      } else if (control instanceof FormGroup || control instanceof FormArray) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // Utility Methods
  isFieldInvalid(fieldName: string): boolean {
    const field = this.menuForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getFieldError(fieldName: string): string {
    const field = this.menuForm.get(fieldName);
    if (field?.errors) {
      if (field.errors['required']) return 'This field is required';
      if (field.errors['email']) return 'Please enter a valid email';
      if (field.errors['url']) return 'Please enter a valid URL';
    }
    return '';
  }

  // Toast Methods
  showSuccessToast(message: string) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
  }

  showErrorToast(message: string) {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }
}