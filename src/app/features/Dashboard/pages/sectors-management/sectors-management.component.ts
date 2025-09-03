import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SectorsService } from '../../../../features/colleges/Al-Alsun/Services/sectors.service';
import { SectorData } from '../../../colleges/Al-Alsun/model/sector.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-sectors-management',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule,
    ToastModule
  ],
  templateUrl: './sectors-management.component.html',
  styleUrls: ['./sectors-management.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class SectorsManagementComponent implements OnInit {
  sectors: SectorData[] = [];
  filteredSectors: SectorData[] = [];
  searchQuery: string = '';

  constructor(
    private sectorsService: SectorsService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.loadSectors();
  }

  loadSectors() {
    this.sectorsService.getAllSectors().subscribe(sectors => {
      this.sectors = sectors;
      this.filteredSectors = sectors;
    });
  }

  onSearch() {
    const query = this.searchQuery.toLowerCase();
    this.filteredSectors = this.sectors.filter(
      sector =>
        sector.name.toLowerCase().includes(query) ||
        sector.title.toLowerCase().includes(query)
    );
  }

  onAddSector() {
    this.router.navigate(['/dashboard/sectors/add']);
  }

  onEditSector(id: string) {
    this.router.navigate([`/dashboard/sectors/edit/${id}`]);
  }

  onDeleteSector(id: string) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this sector?',
      header: 'Confirm Deletion',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.sectorsService.deleteSector(id).subscribe(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Sector deleted successfully'
          });
          this.loadSectors();
        });
      }
    });
  }
}