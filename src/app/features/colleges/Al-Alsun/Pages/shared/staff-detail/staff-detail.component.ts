import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PageHeaderComponent } from '../../shared/page-header/page-header/page-header.component';
import { StaffService } from '../../../Servises/staff.service';
import { StaffMember } from '../../../model/staff.model';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-staff-detail',
  standalone: true,
  imports: [CommonModule, FormsModule,
    PageHeaderComponent,
      FooterComponent,
      NavbarComponent
  ],
  templateUrl: './staff-detail.component.html',
  styleUrls: ['./staff-detail.component.css']
})
export class StaffDetailComponent implements OnInit {
  staffMember: StaffMember | undefined;
  loading = true;
  breadcrumbs: Array<{label: string, url?: string}> = [
    { label: 'Staff', url: '/alalsun-faculty/staff' }
  ];

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

  loadStaffMember(id: number) {
    this.loading = true;
    this.staffMember = this.staffService.getStaffById(id);
    
    if (this.staffMember) {
      this.breadcrumbs.push({ label: this.staffMember.name });
    }
    
    this.loading = false;
  }

  goBack() {
    this.router.navigate(['/alalsun-faculty/staff']);
  }
}