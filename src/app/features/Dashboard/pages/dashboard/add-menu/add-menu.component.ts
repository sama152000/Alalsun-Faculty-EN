import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { MenuService } from '../../../../colleges/Al-Alsun/Services/menu.service';
import { MessageService } from 'primeng/api';
import { MenuItem, MenuType, HeaderType, NavbarItem, SocialMediaIcon } from '../../../../colleges/Al-Alsun/model/menu.model';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-add-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, ToastModule],
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css'],
  providers: [MessageService]
})
export class AddMenuComponent implements OnInit {
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

  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.menuForm = this.createForm();
  }

  ngOnInit() {
    this.setupFormValidation();
  }

  // Initialize the reactive form
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

  // Set up dynamic validation for headerType based on menu type
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

  // Form Array Getters
  get navbarItemsArray() { return this.menuForm.get('navbarItems') as FormArray; }
  get submenuLanguagesArray() { return this.menuForm.get('submenu.contactMethods.languages') as FormArray; }
  get footerSocialLinksArray() { return this.menuForm.get('footerData.socialLinks') as FormArray; }
  get footerQuickLinksArray() { return this.menuForm.get('footerData.quickLinks.links') as FormArray; }
  get footerAcademicLinksArray() { return this.menuForm.get('footerData.academicLinks.links') as FormArray; }
  get footerResourceLinksArray() { return this.menuForm.get('footerData.resourceLinks.links') as FormArray; }
  get footerContactLanguagesArray() { return this.menuForm.get('footerData.contactMethods.languages') as FormArray; }

  // Navbar Items Management
  addNavbarItem(parentIndex?: number) {
    const itemGroup = this.fb.group({
      label: ['', Validators.required],
      route: [''],
      target: [''],
      parentId: [null],
      children: this.fb.array([])
    });

    this.navbarItemsArray.push(itemGroup);
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
  saveMenu() {
    if (this.menuForm.valid) {
      const formValue = this.menuForm.value;
      const menu: MenuItem = {
        id: 0,
        name: formValue.name,
        type: formValue.type,
        headerType: formValue.type === MenuType.HEADER ? formValue.headerType : undefined,
        isActive: formValue.isActive,
        data: this.buildMenuData(formValue)
      };

      this.menuService.addMenu(menu).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Menu created successfully',
            life: 3000
          });
          setTimeout(() => {
            this.router.navigate(['/dashboard/menus']);
          }, 2000);
        },
        error: () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to create menu. Please try again.',
            life: 3000
          });
        }
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please fill in all required fields',
        life: 3000
      });
      this.markFormGroupTouched(this.menuForm);
    }
  }

  // Build menu data based on form values
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

  // Mark all form fields as touched for validation
  private markFormGroupTouched(formGroup: FormGroup | FormArray) {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormControl) {
        control.markAsTouched();
      } else if (control instanceof FormGroup || control instanceof FormArray) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // Validate form fields
  isFieldInvalid(fieldName: string): boolean {
    const field = this.menuForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  // Get field-specific error messages
  getFieldError(fieldName: string): string {
    const field = this.menuForm.get(fieldName);
    if (field?.errors) {
      if (field.errors['required']) return 'This field is required';
      if (field.errors['email']) return 'Please enter a valid email address';
      if (field.errors['url']) return 'Please enter a valid URL';
    }
    return '';
  }
}