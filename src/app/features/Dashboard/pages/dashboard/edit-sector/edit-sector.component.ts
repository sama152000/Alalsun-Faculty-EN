import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SectorsService } from '../../../../colleges/Al-Alsun/Services/sectors.service';
import { SectorData, ViceDeanInfo } from '../../../../colleges/Al-Alsun/model/sector.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-edit-sector',
  standalone: true,
  imports: [CommonModule, FormsModule, InputTextModule, ButtonModule, ToastModule],
  template: `
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-4">Edit Sector</h2>
      <p-toast></p-toast>
      <div class="card p-4 bg-white shadow-md rounded" *ngIf="sector">
        <div class="mb-4">
          <label for="id" class="block text-sm font-medium">Sector ID</label>
          <input pInputText id="id" [(ngModel)]="sector.id" class="w-full p-2 border rounded" disabled />
        </div>
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium">Sector Name</label>
          <input pInputText id="name" [(ngModel)]="sector.name" class="w-full p-2 border rounded" required />
        </div>
        <div class="mb-4">
          <label for="title" class="block text-sm font-medium">Sector Title</label>
          <input pInputText id="title" [(ngModel)]="sector.title" class="w-full p-2 border rounded" required />
        </div>
        <div class="mb-4">
          <label for="description" class="block text-sm font-medium">Description</label>
          <textarea pInputText id="description" [(ngModel)]="sector.description" class="w-full p-2 border rounded" rows="4"></textarea>
        </div>
        <div class="mb-4">
          <label for="image" class="block text-sm font-medium">Image URL</label>
          <input pInputText id="image" [(ngModel)]="sector.image" class="w-full p-2 border rounded" />
        </div>
        <h3 class="text-xl font-semibold mb-2">Vice Dean Information</h3>
        <div class="mb-4">
          <label for="viceDeanName" class="block text-sm font-medium">Vice Dean Name</label>
          <input pInputText id="viceDeanName" [(ngModel)]="sector.viceDean.name" class="w-full p-2 border rounded" required />
        </div>
        <div class="mb-4">
          <label for="viceDeanTitle" class="block text-sm font-medium">Vice Dean Title</label>
          <input pInputText id="viceDeanTitle" [(ngModel)]="sector.viceDean.title" class="w-full p-2 border rounded" required />
        </div>
        <div class="mb-4">
          <label for="viceDeanPhoto" class="block text-sm font-medium">Vice Dean Photo URL</label>
          <input pInputText id="viceDeanPhoto" [(ngModel)]="sector.viceDean.photo" class="w-full p-2 border rounded" />
        </div>
        <div class="mb-4">
          <label for="viceDeanEmail" class="block text-sm font-medium">Vice Dean Email</label>
          <input pInputText id="viceDeanEmail" [(ngModel)]="sector.viceDean.email" class="w-full p-2 border rounded" required />
        </div>
        <div class="mb-4">
          <label for="viceDeanOffice" class="block text-sm font-medium">Vice Dean Office</label>
          <input pInputText id="viceDeanOffice" [(ngModel)]="sector.viceDean.office" class="w-full p-2 border rounded" required />
        </div>
        <div class="flex justify-end gap-2">
          <button pButton label="Cancel" class="p-button-secondary" (click)="onCancel()"></button>
          <button pButton label="Update Sector" class="p-button-success" (click)="onSubmit()"></button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      padding: 1rem;
    }
    .card {
      max-width: 600px;
      margin: 0 auto;
    }
    .p-button-success {
      background-color: var(--success-color, #28a745);
    }
    .p-button-secondary {
      background-color: var(--secondary-color, #6c757d);
    }
  `],
  providers: [MessageService]
})
export class EditSectorComponent implements OnInit {
  sector: SectorData | undefined;

  constructor(
    private sectorsService: SectorsService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.sectorsService.getSectorById(id).subscribe(sector => {
        if (sector) {
          this.sector = { ...sector };
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Sector not found' });
          this.router.navigate(['/dashboard/sectors']);
        }
      });
    }
  }

  onSubmit() {
    if (this.sector && this.sector.id && this.sector.name && this.sector.title && this.sector.viceDean.name && this.sector.viceDean.title && this.sector.viceDean.email && this.sector.viceDean.office) {
      this.sectorsService.updateSector(this.sector.id, this.sector).subscribe(() => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Sector updated successfully' });
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