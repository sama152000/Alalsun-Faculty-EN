import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './Pages/Home/Home.component';
import { NavbarComponent } from "./Pages/shared/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-al-alsun',
  templateUrl: './Al-Alsun.component.html',
  styleUrls: ['./Al-Alsun.component.css'],
  imports: [
    HomeComponent,
    NavbarComponent,
    RouterOutlet
  ]
})
export class AlAlsunComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
