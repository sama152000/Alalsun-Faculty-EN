import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViceDeanService } from '../../../Services/vice-dean.service.ts.service';
import { ViceDean } from '../../../model/vice-dean.model';

@Component({
  selector: 'app-vice-dean-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vice-dean-message.component.html',
  styleUrls: ['./vice-dean-message.component.css']
})
export class ViceDeanMessageComponent implements OnInit, OnDestroy {
  viceDeans: ViceDean[] = [];
  currentViceDeanIndex = 0;
  autoplayInterval: any;

  constructor(private viceDeanService: ViceDeanService) {}

  ngOnInit() {
    this.loadViceDeans();
    this.startAutoplay();
  }

  ngOnDestroy() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  loadViceDeans() {
    this.viceDeanService.getAllViceDeans().subscribe({
      next: (viceDeans) => {
        this.viceDeans = viceDeans;
        console.log('Vice Deans loaded:', viceDeans.length);
      },
      error: (error) => {
        console.error('Error loading vice deans:', error);
      }
    });
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextViceDean();
    }, 6000); // 6 seconds per slide
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  nextViceDean() {
    if (this.viceDeans.length > 0) {
      this.currentViceDeanIndex = (this.currentViceDeanIndex + 1) % this.viceDeans.length;
    }
  }

  prevViceDean() {
    if (this.viceDeans.length > 0) {
      this.currentViceDeanIndex = this.currentViceDeanIndex === 0 
        ? this.viceDeans.length - 1 
        : this.currentViceDeanIndex - 1;
    }
  }

  goToViceDean(index: number) {
    this.currentViceDeanIndex = index;
    this.stopAutoplay();
    // Restart autoplay after user interaction
    setTimeout(() => {
      this.startAutoplay();
    }, 3000);
  }

  getPreviewText(): string {
    if (this.viceDeans.length === 0) return '';
    
    const currentViceDean = this.viceDeans[this.currentViceDeanIndex];
    const firstParagraph = currentViceDean.message[0] || '';
    
    // Show first 200 characters with proper word break
    if (firstParagraph.length <= 200) {
      return firstParagraph;
    }
    
    const truncated = firstParagraph.substring(0, 200);
    const lastSpaceIndex = truncated.lastIndexOf(' ');
    
    return lastSpaceIndex > 150 
      ? truncated.substring(0, lastSpaceIndex) + '...'
      : truncated + '...';
  }

  viewFullMessage() {
    if (this.viceDeans.length > 0) {
      const currentViceDean = this.viceDeans[this.currentViceDeanIndex];
      // Navigate to detail page - you'll need to implement routing
      console.log('Navigate to vice dean detail:', currentViceDean.id);
      // Example: this.router.navigate(['/vice-dean', currentViceDean.id]);
    }
  }
}