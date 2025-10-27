import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { StudentGuideService } from '../../Services/student-guide.service';
import { StudentGuideSection } from '../../model/student-guide.model';
import { Subject, takeUntil } from 'rxjs';
import { FooterComponent } from "../shared/footer/footer.component";
import { PageHeaderComponent } from '../shared/page-header/page-header/page-header.component';

@Component({
  selector: 'app-student-guide',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    DividerModule,
    ScrollPanelModule,
    FooterComponent,
    PageHeaderComponent
],
  templateUrl: './student-guide.component.html',
  styleUrls: ['./student-guide.component.css']
})
export class StudentGuideComponent implements OnInit, OnDestroy {
  sections: StudentGuideSection[] = [];
  currentSection: StudentGuideSection | null = null;
  private destroy$ = new Subject<void>();

  breadcrumbs = [
    { label: 'Student Guide', url: '/student-guide' }
  ];

  constructor(private studentGuideService: StudentGuideService) {}

  ngOnInit(): void {
    this.sections = this.studentGuideService.getAllSections();
    
    this.studentGuideService.getCurrentSection()
      .pipe(takeUntil(this.destroy$))
      .subscribe(section => {
        this.currentSection = section;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  selectSection(sectionId: string): void {
    this.studentGuideService.setCurrentSection(sectionId);
  }

  isActiveSection(sectionId: string): boolean {
    return this.currentSection?.id === sectionId;
  }
}