import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PageHeaderComponent } from '../shared/page-header/page-header/page-header.component';
import { SectorsService } from '../../Services/sectors.service';
import { SectorData, SectorDepartment, SectorService, NewsItem, MediaItem } from '../../model/sector.model';

@Component({
  selector: 'app-sector-page',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent],
  templateUrl: './sector-page.component.html',
  styleUrls: ['./sector-page.component.css']
})
export class SectorPageComponent implements OnInit {
  sector: SectorData | null = null;
  activeTab: string = 'about';
  breadcrumbs: Array<{label: string, url?: string}> = [];
  
  // Tab-specific selections
  selectedDepartment: SectorDepartment | null = null;
  selectedService: SectorService | null = null;
  selectedNewsCategory: string = 'all';
  selectedMediaType: string = 'all';

  constructor(
    private route: ActivatedRoute,
    private sectorsService: SectorsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const sectorId = params['id'];
      if (sectorId) {
        this.loadSector(sectorId);
      }
    });
  }

  loadSector(sectorId: string): void {
    this.sectorsService.getSectorById(sectorId).subscribe({
      next: (sector) => {
        if (sector) {
          this.sector = sector;
          this.setupBreadcrumbs();
        }
      },
      error: (error) => {
        console.error('Error loading sector:', error);
      }
    });
  }

  setupBreadcrumbs(): void {
    if (this.sector) {
      this.breadcrumbs = [
        { label: 'Sectors', url: '/alalsun-faculty' },
        { label: this.sector.name }
      ];
    }
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
    // Reset selections when changing tabs
    this.selectedDepartment = null;
    this.selectedService = null;
    this.selectedNewsCategory = 'all';
    this.selectedMediaType = 'all';
  }

  // Department methods
  selectDepartment(department: SectorDepartment): void {
    this.selectedDepartment = department;
  }

  // Service methods
  selectService(service: SectorService): void {
    this.selectedService = service;
  }

  // News methods
  filterNewsByCategory(category: string): void {
    this.selectedNewsCategory = category;
  }

  getNewsCategories(): string[] {
    if (!this.sector) return [];
    const categories = this.sector.news.map(news => news.category);
    return [...new Set(categories)];
  }

  getFilteredNews(): NewsItem[] {
    if (!this.sector) return [];
    if (this.selectedNewsCategory === 'all') {
      return this.sector.news;
    }
    return this.sector.news.filter(news => news.category === this.selectedNewsCategory);
  }

  // Media methods
  filterMediaByType(type: string): void {
    this.selectedMediaType = type;
  }

  getFilteredMedia(): MediaItem[] {
    if (!this.sector) return [];
    if (this.selectedMediaType === 'all') {
      return this.sector.media;
    }
    return this.sector.media.filter(media => media.type === this.selectedMediaType);
  }
}