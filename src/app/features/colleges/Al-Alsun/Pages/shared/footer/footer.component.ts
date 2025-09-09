import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../../Services/menu.service';
import { FooterData } from '../../../model/menu.model';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    RouterModule
  ],
  templateUrl:'./footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerData: FooterData | undefined;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getActiveFooter().subscribe(menu => {
      if (menu && menu.data) {
        this.footerData = menu.data as FooterData;
      }
    });
  }
}
