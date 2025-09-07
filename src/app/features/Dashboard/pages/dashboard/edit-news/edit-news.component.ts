import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { NewsService } from '../../../../colleges/Al-Alsun/Services/news.service';
import { NewsItem, NewsCategory, NewsFilter } from '../../../../colleges/Al-Alsun/model/news.model';
@Component({
  selector: 'app-edit-news',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {
  newsForm: FormGroup;
  categories = Object.values(NewsCategory);
  showToast = false;
  toastMessage = '';
  toastClass = '';
  toastIcon = '';
  newsId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private newsService: NewsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.newsForm = this.createForm();
  }

  ngOnInit() {
    this.newsId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.newsId) {
      const news = this.newsService.getNewsById(this.newsId);
      if (news) {
        this.newsForm.patchValue({
          ...news,
          date: news.date.toISOString().split('T')[0]
        });
        news.tags?.forEach(tag => {
          this.tagsArray.push(this.fb.control(tag, Validators.required));
        });
      } else {
        this.showErrorToast('News item not found');
        this.router.navigate(['/dashboard/news']);
      }
    }
  }

  private createForm(): FormGroup {
    return this.fb.group({
      id: ['', Validators.required],
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

  saveNews() {
    if (this.newsForm.valid) {
      const formValue = this.newsForm.value as NewsItem;
      formValue.id = this.newsId!;
      formValue.date = new Date(formValue.date);
      this.newsService.updateNews(formValue);
      this.showSuccessToast('News updated successfully');
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