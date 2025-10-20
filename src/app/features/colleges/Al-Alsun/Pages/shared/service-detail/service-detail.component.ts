import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterModule } from '@angular/router';

import { FacultyServiceService } from '../../../Services/services.service';
import { FacultyService } from '../../../model/services.model';
import { PageHeaderComponent } from '../../shared/page-header/page-header/page-header.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, PageHeaderComponent, FooterComponent],
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  service: FacultyService | undefined;
  loading = true;
  breadcrumbs: Array<{label: string, url?: string}> = [
    { label: 'Services', url: '/services' }
  ];
  activeTab: string = 'overview';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private facultyServiceService: FacultyServiceService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.loadService(id);
    });
  }

  loadService(id: string) {
    this.loading = true;
    this.facultyServiceService.getServiceById(id).subscribe(service => {
      this.service = service;
      if (this.service) {
        this.breadcrumbs.push({ label: this.service.name });
      }
      this.loading = false;
    });
  }

  getCategoryLabel(category: string): string {
    switch (category) {
      case 'language-center':
        return 'Language Center';
      case 'cultural-center':
        return 'Cultural Center';
      case 'academic-journal':
        return 'Academic Journal';
      case 'research-center':
        return 'Research Center';
      default:
        return 'Service';
    }
  }

  getInternalBoardMembers() {
    if (!this.service?.details.editorialBoard) return [];
    return this.service.details.editorialBoard.filter(member => 
      member.affiliation?.includes('Faculty of Al-Alsun')
    );
  }

  getExternalBoardMembers() {
    if (!this.service?.details.editorialBoard) return [];
    return this.service.details.editorialBoard.filter(member => 
      member.affiliation === 'External Institution'
    );
  }

  goBack() {
    this.router.navigate(['/services']);
  }

  setActiveTab(tabName: string) {
    this.activeTab = tabName;
  }
}
