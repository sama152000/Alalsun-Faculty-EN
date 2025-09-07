import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { NewsService } from '../../../../colleges/Al-Alsun/Services/news.service';
import { NewsItem, NewsCategory, NewsFilter } from '../../../../colleges/Al-Alsun/model/news.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-add-news',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  newsForm: FormGroup;
  categories = Object.values(NewsCategory);
  showToast = false;
  toastMessage = '';
  toastClass = '';
  toastIcon = '';
  activeSubmenu: string | null = 'news';

  constructor(
    private fb: FormBuilder,
    private newsService: NewsService,
    private router: Router
  ) {
    this.newsForm = this.createForm();
  }

  ngOnInit() {
    this.newsForm.reset();
    this.clearFormArrays();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects;
      if (url.includes('/dashboard/news')) {
        this.activeSubmenu = 'news';
      } else {
        this.activeSubmenu = null;
      }
    });
  }

  private createForm(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      summary: ['', Validators.required],
      content: ['', Validators.required],
      date: ['', Validators.required],
      category: ['', Validators.required],
      image: [''],
      author: [''],
      tags: this.fb.array([]),
      featured: [false]
    });
  }

  get tagsArray() {
    return this.newsForm.get('tags') as FormArray;
  }

  addTag() {
    this.tagsArray.push(this.fb.control('', Validators.required));
  }

  removeTag(index: number) {
    this.tagsArray.removeAt(index);
  }

  private clearFormArrays() {
    while (this.tagsArray.length !== 0) {
      this.tagsArray.removeAt(0);
    }
  }

  saveNews() {
    if (this.newsForm.valid) {
      const formValue = this.newsForm.value as NewsItem;
      formValue.date = new Date(formValue.date);
      this.newsService.addNews(formValue);
      this.showSuccessToast('News added successfully');
      setTimeout(() => {
        this.router.navigate(['/dashboard/news']);
      }, 3000);
    } else {
      this.showErrorToast('Please fill all required fields');
    }
  }

  showSuccessToast(message: string) {
    this.showToast = true;
    this.toastClass = 'toast-success';
    this.toastIcon = 'pi pi-check';
    this.toastMessage = message;
    setTimeout(() => this.hideToast(), 3000);
  }

  showErrorToast(message: string) {
    this.showToast = true;
    this.toastClass = 'toast-error';
    this.toastIcon = 'pi pi-times';
    this.toastMessage = message;
    setTimeout(() => this.hideToast(), 3000);
  }

  hideToast() {
    this.showToast = false;
    this.toastMessage = '';
    this.toastClass = '';
    this.toastIcon = '';
  }
}