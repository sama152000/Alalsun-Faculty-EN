import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FooterLink {
  title: string;
  url: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <!-- Footer Links Section -->
      <div class="footer-content">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="footer-section">
                <div class="footer-logo-section">
                  <div class="footer-logo">
                    <i class="pi pi-book"></i>
                  </div>
                  <div>
                    <h3>Faculty of Al-Alsun</h3>
                    <p>Luxor University</p>
                    <p class="footer-tagline">Excellence in languages and translation education</p>
                  </div>
                </div>
                
                <div class="social-media">
                  <h4>Follow Us</h4>
                  <div class="social-links">
                    <a href="#" aria-label="Facebook"><i class="pi pi-facebook"></i></a>
                    <a href="#" aria-label="YouTube"><i class="pi pi-youtube"></i></a>
                    <a href="#" aria-label="LinkedIn"><i class="pi pi-linkedin"></i></a>
                    <a href="#" aria-label="Twitter"><i class="pi pi-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-lg-2 col-md-6">
              <div class="footer-section">
                <h4>Quick Links</h4>
                <ul class="footer-links">
                  <li *ngFor="let link of quickLinks">
                    <a [href]="link.url">{{ link.title }}</a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="col-lg-3 col-md-6">
              <div class="footer-section">
                <h4>Academic</h4>
                <ul class="footer-links">
                  <li *ngFor="let link of academicLinks">
                    <a [href]="link.url">{{ link.title }}</a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="col-lg-3 col-md-6">
              <div class="footer-section">
                <h4>Resources</h4>
                <ul class="footer-links">
                  <li *ngFor="let link of resourceLinks">
                    <a [href]="link.url">{{ link.title }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Copyright Section -->
      <div class="footer-bottom">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <p class="copyright">
                © 2025 Faculty of Al-Alsun – Luxor University. All Rights Reserved.
              </p>
            </div>
            <div class="col-md-6">
              <div class="contact-methods">
                <a href="tel:+20952356555" class="contact-method">
                  <i class="pi pi-phone"></i>
                  (+20) 095-2356555
                </a>
                <a href="mailto:info@alsun.luxor.edu.eg" class="contact-method">
                  <i class="pi pi-envelope"></i>
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, var(--secondary-color) 0%, var(--secondary-color) 100%);
      color: white;
    }

    .footer-content {
      padding: 4rem 0 2rem;
    }

    .footer-section {
      margin-bottom: 2rem;
    }

    .footer-logo-section {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .footer-logo {
      background: rgba(255,255,255,0.2);
      padding: 0.8rem;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .footer-logo i {
      font-size: 1.5rem;
      color: var(--white);
    }

    .footer-logo-section h3 {
      color: white;
      font-size: 1.4rem;
      font-weight: 700;
      margin-bottom: 0.2rem;
    }

    .footer-logo-section p {
      color: rgba(255,255,255,0.8);
      margin-bottom: 0.2rem;
      font-size: 0.95rem;
    }

    .footer-tagline {
      color: var(--white) !important;
      font-style: italic;
      font-size: 0.9rem !important;
    }

    .footer-section h4 {
      color: var(--white);
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      position: relative;
      padding-bottom: 0.5rem;
    }

    .footer-section h4::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 30px;
      height: 2px;
      background: var(--accent-gold);
    }

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-links li {
      margin-bottom: 0.8rem;
    }

    .footer-links a {
      color: rgba(255,255,255,0.8);
      text-decoration: none;
      font-size: 0.95rem;
      transition: all 0.3s ease;
      position: relative;
      padding-left: 1rem;
    }

    .footer-links a::before {
      content: '→';
      position: absolute;
      left: 0;
      color: var(--accent-gold);
      transition: all 0.3s ease;
      opacity: 0;
      transform: translateX(-5px);
    }

    .footer-links a:hover {
      color: var(--accent-gold);
      transform: translateX(5px);
    }

    .footer-links a:hover::before {
      opacity: 1;
      transform: translateX(0);
    }

    .social-media h4 {
      margin-bottom: 1rem;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-links a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 45px;
      height: 45px;
      background: rgba(255,255,255,0.1);
      border-radius: 50%;
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
      border: 2px solid transparent;
    }

    .social-links a:hover {
  
      transform: translateY(-3px);
    }

    .social-links a i {
      font-size: 1.2rem;
    }

    .footer-bottom {
      background: rgba(0,0,0,0.2);
      padding: 1.5rem 0;
      border-top: 1px solid rgba(255,255,255,0.1);
    }

    .copyright {
      color: rgba(255,255,255,0.7);
      font-size: 0.9rem;
      margin: 0;
    }

    .contact-methods {
      display: flex;
      justify-content: flex-end;
      gap: 2rem;
    }

    .contact-method {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: rgba(255,255,255,0.8);
      text-decoration: none;
      font-size: 0.9rem;
      transition: all 0.3s ease;
    }

    .contact-method:hover {
      color: var(--accent-gold);
    }

    .contact-method i {
      font-size: 1rem;
      color: var(--accent-gold);
    }

    @media (max-width: 768px) {
      .footer-content {
        padding: 3rem 0 1.5rem;
      }
      
      .footer-logo-section {
        flex-direction: column;
        text-align: center;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
      }
      
      .footer-section {
        text-align: center;
        margin-bottom: 2.5rem;
      }
      
      .footer-section h4::after {
        left: 50%;
        transform: translateX(-50%);
      }
      
      .social-links {
        justify-content: center;
      }
      
      .contact-methods {
        justify-content: center;
        margin-top: 1rem;
        flex-direction: column;
        gap: 0.5rem;
      }
      
      .copyright {
        text-align: center;
        margin-bottom: 1rem;
      }
    }

    @media (max-width: 576px) {
      .contact-methods {
        gap: 1rem;
        flex-direction: row;
        flex-wrap: wrap;
      }
      
      .contact-method {
        font-size: 0.8rem;
      }
    }
  `]
})
export class FooterComponent {
  quickLinks: FooterLink[] = [
    { title: 'About Us', url: '/about' },
    { title: 'Departments', url: '/departments' },
    { title: 'Faculty Members', url: '/staff' },
    { title: 'News', url: '/news' },
    { title: 'Contact', url: '/contact' }
  ];

  academicLinks: FooterLink[] = [
    { title: 'Postgraduate Studies', url: '/postgraduate' },
    { title: 'Research Centers', url: '/research' },
    { title: 'Al-Alsun Journal', url: '/journal' },
    { title: 'Academic Calendar', url: '/calendar' }
  ];

  resourceLinks: FooterLink[] = [
    { title: 'Language & Translation Center', url: '/centers/translation' },
    { title: 'Confucius Classroom', url: '/centers/confucius' },
    { title: 'Student Portal', url: '/student-portal' },
    { title: 'Library', url: '/library' }
  ];
}