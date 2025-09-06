import { Component, HostListener } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { NanoWidgetComponent  } from './features/colleges/Al-Alsun/Pages/shared/nano-widget/nano-widget.component';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, CommonModule, RouterModule, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected title = 'AL-ALSUN Faculty';
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
