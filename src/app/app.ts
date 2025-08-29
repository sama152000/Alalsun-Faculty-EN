import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AlAlsunComponent } from './features/colleges/Al-Alsun/Al-Alsun.component';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-root',
  imports: [ButtonModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected title = 'AL-ALSUN Faculty';
}
