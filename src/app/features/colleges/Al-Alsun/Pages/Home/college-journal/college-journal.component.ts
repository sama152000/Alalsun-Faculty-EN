import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { JournalService } from '../../../Services/journal.service';
import { JournalInfo, JournalButton } from '../../../model/journal.model';

@Component({
  selector: 'app-college-journal',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './college-journal.component.html',
  styleUrls: ['./college-journal.component.css']
})
export class CollegeJournalComponent implements OnInit {
  journalInfo!: JournalInfo;
  journalButtons!: JournalButton[];

  constructor(private journalService: JournalService) {}

  ngOnInit() {
    this.journalInfo = this.journalService.getJournalInfo();
    this.journalButtons = this.journalService.getJournalButtons();
  }

  onButtonClick(link: string) {
    console.log('Navigating to:', link);
    // Add navigation logic here
  }
}