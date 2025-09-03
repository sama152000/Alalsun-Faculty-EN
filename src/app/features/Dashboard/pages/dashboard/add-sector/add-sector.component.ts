import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SectorsService } from '../../../../colleges/Al-Alsun/Services/sectors.service';
import { SectorData, ViceDeanInfo } from '../../../../colleges/Al-Alsun/model/sector.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-add-sector',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule, ToastModule],
  templateUrl: './add-sector.component.html',
  styleUrls: ['./add-sector.component.css'],
  providers: [MessageService]
})
export class AddSectorComponent {
  sector: SectorData = {
    id: '',
    name: '',
    title: '',
    description: '',
    image: '',
    viceDean: {
      name: '',
      title: '',
      photo: '',
      email: '',
      office: ''
    },
    departments: [],
    services: [],
    news: [],
    media: [],
    statistics: [],
    activities: [],
    achievements: []
  };

  constructor(
    private sectorsService: SectorsService,
    private router: Router,
    private messageService: MessageService
  ) {}

  onSubmit() {
    if (this.sector.id && this.sector.name && this.sector.title && this.sector.viceDean.name && this.sector.viceDean.title && this.sector.viceDean.email && this.sector.viceDean.office) {
      this.sectorsService.addSector(this.sector).subscribe(() => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Sector added successfully' });
        setTimeout(() => this.router.navigate(['/dashboard/sectors']), 1000);
      });
    } else {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill all required fields' });
    }
  }

  onCancel() {
    this.router.navigate(['/dashboard/sectors']);
  }
}