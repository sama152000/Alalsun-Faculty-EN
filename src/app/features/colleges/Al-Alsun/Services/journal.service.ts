import { Injectable } from '@angular/core';
import { JournalInfo, JournalButton } from '../model/journal.model';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

  getJournalInfo(): JournalInfo {
    return {
      // title: 'Al-Alsun Journal of Languages and Humanities',
      issuedBy: 'Faculty of Al-Alsun, Luxor University',
      establishmentDate: 'April 2019',
      languages: 'Arabic and Foreign Languages',
      frequency: 'Quarterly',
      type: 'Peer-reviewed scientific journal',
      issuesPublished: 'Two issues have been published, and the third is under preparation.',
      description: 'The Al-Alsun Journal of Languages and Humanities is a peer-reviewed academic publication that reflects the Faculty\'s dedication to promoting scientific research and cultural exchange through multilingual academic contributions.',
      coverImage: './assets/alalsun-jornal.jpg'
    };
  }

  getJournalButtons(): JournalButton[] {
    return [
      {
        label: 'View Journal',
        link: '/journal',
        isPrimary: true
      },
      {
        label: 'Read Issues',
        link: '/journal/issues',
        isPrimary: false
      }
    ];
  }
}