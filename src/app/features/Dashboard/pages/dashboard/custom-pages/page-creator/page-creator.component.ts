import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomPageService } from '../../../../../colleges/Al-Alsun/Services/custom-page.service';
import { PageTemplate } from '../../../../../colleges/Al-Alsun/model/custom-page.model';

@Component({
  selector: 'app-page-creator',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './page-creator.component.html',
  styleUrls: ['./page-creator.component.css']
})
export class PageCreatorComponent implements OnInit {
  pageForm: FormGroup;
  templateId: string = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private customPageService: CustomPageService
  ) {
    this.pageForm = this.createForm();
  }

  ngOnInit() {
    this.templateId = this.route.snapshot.params['templateId'];
    this.setupFormForTemplate();
  }

  createForm(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      route: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9-_]+$')]],
      content: this.fb.group({
        title: [''],
        text: [''],
        image: [''],
        cards: this.fb.array([])
      })
    });
  }

  get cardsArray() {
    return this.pageForm.get('content.cards') as FormArray;
  }

  setupFormForTemplate() {
    const contentGroup = this.pageForm.get('content') as FormGroup;
    
    switch (this.templateId) {
      case 'title-text':
        contentGroup.get('title')?.setValidators([Validators.required]);
        contentGroup.get('text')?.setValidators([Validators.required]);
        break;
      case 'image-title-text':
        contentGroup.get('title')?.setValidators([Validators.required]);
        contentGroup.get('text')?.setValidators([Validators.required]);
        contentGroup.get('image')?.setValidators([Validators.required]);
        break;
      case 'cards':
        contentGroup.get('title')?.setValidators([Validators.required]);
        this.addCard();
        break;
    }
    
    contentGroup.updateValueAndValidity();
  }

  addCard() {
    const cardGroup = this.fb.group({
      id: [this.generateId()],
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: [''],
      link: ['']
    });
    
    this.cardsArray.push(cardGroup);
  }

  removeCard(index: number) {
    this.cardsArray.removeAt(index);
  }

  getTemplateName(): string {
    switch (this.templateId) {
      case 'title-text':
        return 'Title & Text';
      case 'image-title-text':
        return 'Image, Title & Text';
      case 'cards':
        return 'Cards Layout';
      default:
        return 'Unknown Template';
    }
  }

  onSubmit() {
    if (this.pageForm.valid) {
      const formData = this.pageForm.value;
      const pageData = {
        title: formData.title,
        route: formData.route.startsWith('/') ? formData.route.slice(1) : formData.route,
        template: this.templateId as PageTemplate,
        content: formData.content,
        isPublished: false
      };

      console.log('Navigating to preview with pageData:', pageData); // Debugging
      this.customPageService.setPreviewData(pageData);
      
      this.router.navigate(['/dashboard/custom-pages/preview'], {
        state: { pageData }
      }).catch(err => {
        console.error('Navigation to preview failed:', err);
      });
    } else {
      console.log('Form is invalid:', this.pageForm.errors);
    }
  }

  goBack() {
    this.router.navigate(['/dashboard/custom-pages']);
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}