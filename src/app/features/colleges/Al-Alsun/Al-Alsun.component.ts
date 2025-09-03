import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './Pages/Home/Home.component';
import { NavbarComponent } from "./Pages/shared/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { NanoWidgetComponent } from './Pages/shared/nano-widget/nano-widget.component';
@Component({
  selector: 'app-al-alsun',
  templateUrl: './Al-Alsun.component.html',
  styleUrls: ['./Al-Alsun.component.css'],
  imports: [
    NavbarComponent,
    RouterOutlet,
    NanoWidgetComponent
]
})
export class AlAlsunComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
