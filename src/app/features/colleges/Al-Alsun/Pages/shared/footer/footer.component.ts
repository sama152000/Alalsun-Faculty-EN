import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../../Services/menu.service';
import { FooterData } from '../../../model/menu.model';
import { FacultyInfoService } from '../../../Services/faculty-info.service';
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
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footerData: FooterData | undefined;
  facultyInfo: any = null; // نفس الـ type زي الـ navbar

  constructor(private menuService: MenuService, private facultyInfoService: FacultyInfoService) {}

  ngOnInit(): void {
    this.menuService.getActiveFooter().subscribe(menu => {
      if (menu && menu.data) {
        this.footerData = menu.data as FooterData;
      }
    });

    // استخدام نفس الـ service زي الـ navbar
    this.facultyInfoService.getFacultyInfo().subscribe(info => {
      this.facultyInfo = info;
    });
  }
}