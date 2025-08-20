import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './Pages/Home/Home.component';
import { NavbarComponent } from './Pages/shared/navbar/navbar.component';
import { FooterComponent } from './Pages/shared/footer/footer.component';

@Component({
  selector: 'app-al-alsun',
  templateUrl: './Al-Alsun.component.html',
  styleUrls: ['./Al-Alsun.component.css'],
  imports: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
  ]
})
export class AlAlsunComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
