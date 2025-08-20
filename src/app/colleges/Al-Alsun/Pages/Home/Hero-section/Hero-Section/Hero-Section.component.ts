import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
 templateUrl: './Hero-Section.component.html',
 styleUrls: ['./Hero-Section.component.css']
})
export class HeroComponent {}