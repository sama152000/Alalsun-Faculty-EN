import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Department } from '../../../model/department.model'; // Adjust path
import { PageHeaderComponent } from '../../shared/page-header/page-header/page-header.component';

@Component({
  selector: 'app-department-details',
  standalone: true,
  imports: [CommonModule,PageHeaderComponent],
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnChanges {
  @Input() department: Department | null = null;
  @Output() backToList = new EventEmitter<void>();
  
  breadcrumbs: Array<{label: string, url?: string}> = [
    { label: 'Department Details', url: '/alalsun-faculty/departments/content' }
  ];
  activeTab: string = 'overview';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['department'] && changes['department'].currentValue) {
      this.activeTab = 'overview';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  goBack(): void {
    this.backToList.emit();
  }
}