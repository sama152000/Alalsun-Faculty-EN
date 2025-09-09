import { Injectable } from '@angular/core';
import { Observable, of, combineLatest, BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { MenuItem, MenuType, HeaderType, HeaderData, FooterData, NavbarItem } from '../model/menu.model';
import { CustomPageService } from './custom-page.service';
import { CustomPage } from '../model/custom-page.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menus: MenuItem[] = [
    {
      id: 1,
      name: 'Default Header',
      type: MenuType.HEADER,
      headerType: HeaderType.MAIN_NAV,
      isActive: true,
      data: {
        navbarItems: [
          { label: 'Home', icon: 'pi pi-home me-2', route: '/home' },
          { label: 'About', route: '/about' },
          { label: 'Departments', route: '/departments' },
          { label: 'Staff', route: '/staff' },
          { label: 'News', route: '/news' },
          { label: 'Contact Us', route: '/contact' },
          {
            label: 'Sectors',
            children: [
              { label: 'Education & Students Affairs', icon: 'pi pi-users me-2', route: '/sectors/education-students' },
              { label: 'Postgraduate Studies & Research', icon: 'pi pi-graduation-cap me-2', route: '/sectors/postgraduate-research' },
              { label: 'Community Service & Environmental Development', icon: 'pi pi-globe me-2', route: '/sectors/community-environmental' },
            ]
          }
        ]
      }
    },
    {
      id: 2,
      name: 'Default TopNav',
      type: MenuType.HEADER,
      headerType: HeaderType.TOP_NAV,
      isActive: true,
      data: {}
    },
    {
      id: 3,
      name: 'Default Submenu',
      type: MenuType.HEADER,
      headerType: HeaderType.SUBMENU,
      isActive: true,
      data: {
        submenu: {
          copyright: '2025 Faculty of Al-Alsun. All rights reserved.',
          contactMethods: {
            phone: '+1234567890',
            email: 'info@alsun.edu',
            universityWebsite: 'https://luxor-university.edu',
            languages: [
              { value: 'en', label: 'English' },
              { value: 'ar', label: 'العربية' }
            ]
          }
        }
      }
    },
    {
      id: 4,
      name: 'Default Footer',
      type: MenuType.FOOTER,
      isActive: true,
      data: {
        logoIcon: 'pi pi-book',
        title: 'Faculty of Al-Alsun',
        subtitle: 'Luxor University',
        tagline: 'Excellence in languages and translation education',
        socialLinks: [
          { platform: 'Facebook', url: '#', icon: 'pi pi-facebook' },
          { platform: 'YouTube', url: '#', icon: 'pi pi-youtube' },
          { platform: 'LinkedIn', url: '#', icon: 'pi pi-linkedin' },
          { platform: 'Twitter', url: '#', icon: 'pi pi-twitter' }
        ],
        quickLinks: {
          title: 'Quick Links',
          links: [
            { title: 'About Us', url: '/about' },
            { title: 'Departments', url: '/departments' },
            { title: 'Faculty Members', url: '/staff' },
            { title: 'News', url: '/news' },
            { title: 'Contact', url: '/contact' }
          ]
        },
        academicLinks: {
          title: 'Academic',
          links: [
            { title: 'Postgraduate Studies', url: '/postgraduate' },
            { title: 'Research Centers', url: '/research' },
            { title: 'Al-Alsun Journal', url: '/journal' },
            { title: 'Academic Calendar', url: '/calendar' }
          ]
        },
        resourceLinks: {
          title: 'Resources',
          links: [
            { title: 'Language & Translation Center', url: '/centers/translation' },
            { title: 'Confucius Classroom', url: '/centers/confucius' },
            { title: 'Student Portal', url: '/student-portal' },
            { title: 'Library', url: '/library' }
          ]
        },
        copyright: '© 2025 Faculty of Al-Alsun – Luxor University. All Rights Reserved.',
        contactMethods: {
          phone: '(+20) 095-2356555',
          email: 'info@alsun.luxor.edu.eg',
          universityWebsite: 'https://luxor.edu.eg',
          languages: [
            { value: 'en', label: 'English' },
            { value: 'ar', label: 'العربية' }
          ]
        }
      }
    }
  ];

  constructor(private customPageService: CustomPageService) {}

  getAllMenus(): Observable<MenuItem[]> {
    return of(this.menus);
  }

  getMenuById(id: number): Observable<MenuItem | undefined> {
    return of(this.menus.find(menu => menu.id === id));
  }

  addMenu(menu: MenuItem): Observable<void> {
    menu.id = this.menus.length ? Math.max(...this.menus.map(m => m.id)) + 1 : 1;
    this.menus.push(menu);
    return of();
  }

  updateMenu(updatedMenu: MenuItem): Observable<void> {
    const index = this.menus.findIndex(menu => menu.id === updatedMenu.id);
    if (index !== -1) {
      this.menus[index] = updatedMenu;
    }
    return of();
  }

  deleteMenu(id: number): Observable<void> {
    this.menus = this.menus.filter(menu => menu.id !== id);
    return of();
  }

  setActiveMenu(id: number, type: MenuType, headerType?: HeaderType): Observable<void> {
    this.menus.forEach(menu => {
      if (menu.type === type && (!headerType || menu.headerType === headerType)) {
        menu.isActive = menu.id === id;
      }
    });
    return of();
  }

  getActiveHeader(headerType: HeaderType): Observable<MenuItem | undefined> {
    if (headerType === HeaderType.MAIN_NAV) {
      return combineLatest([
        of(this.menus.find(menu => menu.type === MenuType.HEADER && menu.headerType === headerType && menu.isActive)),
        this.customPageService.getPublishedPages()
      ]).pipe(
        map(([menu, publishedPages]) => {
          if (!menu || !menu.data) return menu;

          const customPageItems: NavbarItem[] = publishedPages
            .slice(0, 7) // Limit to 7 pages
            .map(page => ({
              label: page.title,
              route: `/pages/${page.route}`
            }));

          const moreDropdown: NavbarItem = {
            label: 'More+',
            children: customPageItems
          };

          const updatedMenu: MenuItem = {
            ...menu,
            data: {
              ...menu.data,
              navbarItems: [...((menu.data as HeaderData).navbarItems || []), moreDropdown]
            }
          };

          return updatedMenu;
        })
      );
    }
    return of(this.menus.find(menu => menu.type === MenuType.HEADER && menu.headerType === headerType && menu.isActive));
  }

  refreshMenu() {
    // This method can be called to force menu refresh
    // The navbar component will automatically update due to the observable
  }

  getActiveFooter(): Observable<MenuItem | undefined> {
    return of(this.menus.find(menu => menu.type === MenuType.FOOTER && menu.isActive));
  }
}