import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyCTAComponent } from './faculty-cta/faculty-cta.component';
import { PageHeaderComponent } from '../shared/page-header/page-header/page-header.component';
import { DeanFullMessageComponent } from './dean-full-message/dean-full-message.component';
import { ViceDeanMessageComponent } from './vice-dean-message/vice-dean-message.component';
import { FacultyHistoryComponent } from './faculty-history/faculty-history.component';
import { VisionMissionSimpleComponent } from './vision-mission-simple/vision-mission-simple.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';

// Import all components
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    DeanFullMessageComponent,
    ViceDeanMessageComponent,
    FacultyHistoryComponent,
    VisionMissionSimpleComponent,
    FacultyCTAComponent,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  breadcrumbs = [
    { label: 'About', url: '/alalsun-faculty/about' }
  ];

  viceDeanEducation = {
    name: 'Assoc. Prof. Mohamed Ahmed Sayed Hamza',
    title: 'Message from the Vice Dean for Education and Student Affairs',
    position: 'Vice Dean for Education and Student Affairs',
    image: 'assets/Picture2.jpg',
    greeting: 'Dear Students of the Faculty of Al-Alsun,',
    message: [
      'It gives me great pleasure to welcome you to our esteemed Faculty, a distinguished beacon of knowledge and scholarship in the fields of languages and translation.',
      'At the Office of Education and Student Affairs, we are deeply committed to providing an outstanding academic environment that supports your educational journey and equips you with strong theoretical and practical foundations necessary for success in the labor market.',
      'We firmly believe that students are the cornerstone of the educational process. Therefore, we continuously strive to offer the support you need—whether through curriculum development, enhancement of extracurricular activities, or the provision of comprehensive services aimed at helping you achieve excellence and leadership.',
      'We also encourage your active participation in cultural and scientific activities, as they play a vital role in shaping your personality and enhancing your skills.',
      'We are confident that you will be proud ambassadors of your Faculty and University. We urge you to remain dedicated, diligent, and committed to the academic and ethical values that distinguish an Al-Alsun student.'
    ],
    closing: [
      'We wish you a fulfilling academic journey filled with accomplishments and success.'
    ]
  };

  viceDeanCommunity = {
    name: 'Assoc. Prof. Dr. Mahmoud Hamza Mohamed',
    title: 'Message from the Vice Dean for Community Service and Environmental Development',
    position: 'Vice Dean for Community Service and Environmental Development',
    image: 'assets/Picture3.jpg',
    greeting: 'In the Name of Allah, the Most Gracious, the Most Merciful',
    message: [
      'It is my pleasure to welcome you to the webpage of the Community Service and Environmental Development Sector at the Faculty of Al-Alsun – Luxor University.',
      'We firmly believe that the role of the Faculty extends beyond teaching and research to encompass a broader mission: contributing to community service and development, in line with Egypt\'s Vision 2030 and the United Nations Sustainable Development Goals (SDGs).',
      'The sector is committed to strengthening the connection between the Faculty and society through high-impact initiatives, specialized training courses, and workshops that equip students and graduates with skills relevant to the labor market. We also organize cultural and linguistic events that promote Egyptian identity and encourage openness to global cultures.',
      'We place great value on building effective partnerships with public and private institutions to support developmental projects and achieve lasting, positive societal impact.',
      'We are confident that the languages taught at our Faculty are not merely tools for communication, but powerful bridges between peoples—particularly through translation—and essential components in advancing social development. In this spirit, we invite all members of the university and community to engage with our programs and benefit from the wide array of services and activities we offer, aimed at capacity building and cultural awareness.',
      'We look forward to continued achievements in collaboration with our students, graduates, and national and international partners, as we strive to be a leading model in community service and environmental engagement.'
    ]
  };

  viceDeanPostgraduate = {
    name: 'Prof. Youssef Abbas Ali',
    title: 'Message from the Vice Dean for Postgraduate Studies and Research',
    position: 'Vice Dean for Postgraduate Studies and Research',
    image: 'assets/Picture5.jpg',
    message: [
      'Postgraduate studies and scientific research form the cornerstone of progress for nations and societies. They provide rigorous analysis and innovative solutions to the challenges faced by institutions, ultimately contributing to the advancement and prosperity of our beloved country.',
      'At the Faculty of Al-Alsun – Luxor University, we are committed to providing the resources and creating the academic environment necessary to achieve research excellence in the field of languages. Our efforts align with the strategic plan and the vision and mission of Luxor University, which are themselves rooted in Egypt\'s Vision 2030.',
      'Dear sons and daughters, Knowledge is the foundation upon which virtuous ethics are built. Without ethics, knowledge loses its true value. You are the future, and much is expected from you in the service of this nation and as a gesture of loyalty to our beloved Egypt.'
    ],
    closing: [
      'With my sincere regards and deepest appreciation'
    ]
  };
}