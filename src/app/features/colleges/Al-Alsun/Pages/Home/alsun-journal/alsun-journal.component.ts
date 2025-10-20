import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { AlAlsunJournal } from '../../../model/alsun-journal.model';
import { FacultyServiceService } from '../../../Services/services.service';

@Component({
  selector: 'app-alsun-journal',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './alsun-journal.component.html',
  styleUrls: ['./alsun-journal.component.css']
})
export class AlsunJournalComponent implements OnInit {
  journal: AlAlsunJournal | null = null;

  constructor(private facultyService: FacultyServiceService) {}

  ngOnInit(): void {
    this.facultyService.getServiceById('alsun-journal').subscribe(journal => {
      this.journal = journal as AlAlsunJournal;
    });
  }
}