import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-postgraduate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './postgraduate.component.html',
  styleUrls: ['./postgraduate.component.css']
})
export class PostgraduateComponent {
  programs = [
    {
      type: 'Diploma',
      courses: [
        'Arabic (Literature / Linguistics)',
        'English (Literature)',
        'French (Literature & Language)'
      ]
    },
    {
      type: 'Master\'s',
      courses: [
        'Arabic (Literature / Linguistics)',
        'English (Literature)',
        'French (Literature & Language)'
      ]
    },
    {
      type: 'Ph.D.',
      courses: [
        'Arabic (Literature / Linguistics)',
        'English (Literature)'
      ]
    }
  ];
}