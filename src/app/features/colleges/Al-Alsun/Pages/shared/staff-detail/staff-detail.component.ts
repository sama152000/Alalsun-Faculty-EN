import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../../shared/page-header/page-header/page-header.component';
import { StaffService } from '../../../Services/staff.service';
import { StaffMember } from '../../../model/staff.model';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-staff-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, PageHeaderComponent, FooterComponent, RouterLink],
  templateUrl: './staff-detail.component.html',
  styleUrls: ['./staff-detail.component.css']
})
export class StaffDetailComponent implements OnInit {
  staffMember: StaffMember | undefined;
  loading = true;
  breadcrumbs: Array<{label: string, url?: string}> = [
    { label: 'Staff', url: '/staff' }
  ];
  positions: { value: string; label: string; icon: string }[] = [
    { value: 'Dean of the Faculty', label: 'Dean', icon: 'pi pi-crown' },
    { value: 'Vice Dean', label: 'Vice Dean', icon: 'pi pi-shield' },
    { value: 'Professor', label: 'Professor', icon: 'pi pi-book' },
    { value: 'Associate Professor', label: 'Associate Professor', icon: 'pi pi-graduation-cap' },
    { value: 'Assistant Professor', label: 'Assistant Professor', icon: 'pi pi-user' }
  ];
  sidebarCollapsed: boolean = true;
  isMobile: boolean = window.innerWidth <= 991;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private staffService: StaffService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.loadStaffMember(id);
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMobile = window.innerWidth <= 991;
    if (!this.isMobile) {
      this.sidebarCollapsed = false;
    }
  }

  loadStaffMember(id: number) {
    this.loading = true;
    this.staffMember = this.staffService.getStaffById(id);
    
    if (this.staffMember) {
      this.breadcrumbs.push({ label: this.staffMember.name });
    }
    
    this.loading = false;
  }

  toggleSidebar(): void {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  goBack() {
    this.router.navigate(['/staff']);
  }

  trackByPosition(index: number, position: { value: string; label: string; icon: string }): string {
    return position.value;
  }
}