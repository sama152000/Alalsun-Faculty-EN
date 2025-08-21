import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ViceDeanData {
  name: string;
  title: string;
  position: string;
  image: string;
  message: string[];
  greeting?: string;
  closing?: string[];
}

@Component({
  selector: 'app-vice-dean-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vice-dean-message.component.html',
  styleUrls: ['./vice-dean-message.component.css']
})
export class ViceDeanMessageComponent {
  @Input() viceDean!: ViceDeanData;
}