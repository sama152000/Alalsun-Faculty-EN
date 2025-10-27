import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EducationalService } from '../../model/educational-service.model';
import { EducationalServiceService } from '../../Services/educational-service.service';
import { PageHeaderComponent } from '../shared/page-header/page-header/page-header.component';
import { FooterComponent } from "../shared/footer/footer.component";

@Component({
  selector: 'app-educational-services',
  standalone: true,
  imports: [CommonModule, RouterModule, PageHeaderComponent, FooterComponent],
  templateUrl: './educational-services.component.html',
  styleUrls: ['./educational-services.component.css']
})
export class EducationalServicesComponent implements OnInit {
  service: EducationalService | null = null;
  nextServiceId: number | null = null;
  previousServiceId: number | null = null;
  isLoading = true;
  pageTitle = 'Educational Services';

  breadcrumbs = [
    { label: 'Educational Services', url: '/educational-services' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceData: EducationalServiceService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'] || 1;
      this.loadService(id);
    });
  }

  loadService(id: number) {
    this.isLoading = true;

    setTimeout(() => {
      this.service = this.serviceData.getServiceById(id) || null;
      this.nextServiceId = this.serviceData.getNextServiceId(id);
      this.previousServiceId = this.serviceData.getPreviousServiceId(id);
      this.pageTitle = this.service ? this.service.title : 'Educational Services';
      this.updateBreadcrumbs();
      this.isLoading = false;
    }, 300);
  }

  navigateToService(id: number | null) {
    if (id !== null) {
      this.router.navigate(['/educational-services', id]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goToPrevious() {
    this.navigateToService(this.previousServiceId);
  }

  goToNext() {
    this.navigateToService(this.nextServiceId);
  }

  updateBreadcrumbs() {
    this.breadcrumbs = [
      { label: 'Educational Services', url: '/educational-services' }
    ];
    if (this.service) {
      this.breadcrumbs.push({ label: this.service.title, url: '' });
    }
  }
}
