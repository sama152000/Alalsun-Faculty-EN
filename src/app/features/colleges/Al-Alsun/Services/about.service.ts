import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DeanInfo, ViceDean, HistoryEvent, VisionMission, FooterSection, SocialLink, ContactInfo } from '../model/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private deanInfo: DeanInfo = {
    id: 'dean-1',
    name: 'Prof. Mahmoud El-Nouby Ahmed Suleiman',
    position: 'Dean of the Faculty of Al-Alsun – Luxor University',
    photo: 'assets/Picture1.jpg',
    greeting: 'Dear students, esteemed faculty members, teaching assistants, administrative staff of the faculty, and visitors to the official website of the Faculty of Al-Alsun, Luxor University.',
    message: [
      'The Faculty of Al-Alsun at Luxor University was established by Prime Ministerial Decree No. 2693 of 2016, issued on 14 Muharram 1438 AH, corresponding to 15 October 2016.',
      'The Faculty of Al-Alsun stands as a distinguished academic institution in the field of languages and translation. It continues the legacy of Egypt\'s pioneers in translation, serving as a bridge between cultures and a vital tool for transferring knowledge and sciences from around the world. The faculty comprises eight academic departments: Arabic Language (with two tracks, Arabic for native speakers and Arabic for non-native speakers), English, French, German, Italian, Spanish, Russian, and Chinese.',
      'In alignment with Egypt\'s Vision 2030, the Faculty is committed to providing high-quality academic education based on modern curricula and innovative teaching methods. Our goal is to graduate qualified professionals equipped with the linguistic and academic skills necessary to meet the demands of both local and international labor markets. The Faculty also seeks to promote scientific research and offer advanced postgraduate programs that encourage creativity and innovation in the fields of languages and translation.',
      'We strive to foster a comprehensive learning environment by supporting student activities, enhancing academic partnerships with local and international universities and research institutions, and offering practical training opportunities that empower our students to gain real-world experience and succeed in their professional lives.'
    ],
    highlight: 'We believe that languages are not merely tools for communication but gateways to understanding other civilizations and essential instruments for fostering intercultural dialogue and human connection.',
    callToAction: 'I call upon all of you, students, faculty, and staff—to actively contribute to the development of the Faculty, and to work together in fulfilling its mission of serving society and advancing the standards of education and scientific research.',
    closing: [
      'May Allah guide us all to success and bless our pursuit of knowledge.',
      'Peace and blessings be upon you.'
    ]
  };

  private viceDeans: ViceDean[] = [
    {
      id: 'vice-dean-1',
      name: 'Prof. Dr. Mohamed Ahmed Sayed Hamza',
      position: 'Vice Dean for Education and Student Affairs',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=300',
      sector: 'Education & Students Affairs',
      email: 'education@luxor.edu.eg',
      office: 'Faculty Building - 1st Floor, Room 105',
      message: [
        'Welcome to the Education and Student Affairs sector of our esteemed Faculty of Al-Alsun. As Vice Dean, I am committed to ensuring that every student receives exceptional educational support and comprehensive services throughout their academic journey.',
        'Our sector is dedicated to fostering an inclusive learning environment where students can thrive academically, personally, and professionally. We provide comprehensive support services including academic advising, career counseling, student activities, and wellness programs.',
        'We believe in the transformative power of education and are committed to preparing our students to become global citizens and leaders in their chosen fields. Through innovative programs and personalized support, we ensure that each student achieves their full potential.',
        'I encourage all students to actively engage with our services and take advantage of the numerous opportunities available for personal and professional growth.'
      ]
    },
    {
      id: 'vice-dean-2',
      name: 'Prof. Dr. Youssef Abbas Ali',
      position: 'Vice Dean for Postgraduate Studies and Research Excellence',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300',
      sector: 'Postgraduate Studies & Research',
      email: 'postgraduate@luxor.edu.eg',
      office: 'Research Excellence Center - Building A, Floor 3, Suite 301',
      message: [
        'The Postgraduate Studies and Research sector represents the pinnacle of academic excellence at our faculty. We are committed to advancing knowledge through rigorous research and innovative scholarship.',
        'Our comprehensive postgraduate programs are designed to develop critical thinking, research skills, and scholarly expertise. We provide state-of-the-art research facilities and mentorship from distinguished faculty members.',
        'We foster a collaborative research environment that encourages interdisciplinary studies and international partnerships. Our graduates contribute significantly to academic knowledge and professional practice in their respective fields.',
        'I invite prospective researchers and scholars to join our vibrant academic community and contribute to the advancement of knowledge in languages, translation, and cultural studies.'
      ]
    },
    {
      id: 'vice-dean-3',
      name: 'Prof. Dr. Mahmoud Hamza Mohamed',
      position: 'Vice Dean for Community Service and Environmental Sustainability',
      image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=300',
      sector: 'Community Service & Environmental Development',
      email: 'community@luxor.edu.eg',
      office: 'Community Engagement Center - Building E, Floor 2, Suite 205',
      message: [
        'The Community Service and Environmental Development sector serves as the bridge between our academic institution and the broader community. We are committed to creating positive social and environmental impact through our initiatives.',
        'Our comprehensive programs address community needs while promoting environmental sustainability and social responsibility. We engage students, faculty, and community members in meaningful projects that create lasting change.',
        'Through partnerships with local organizations and international agencies, we implement evidence-based interventions that address pressing social and environmental challenges.',
        'We invite all members of our academic community to participate in our mission of service and environmental stewardship, contributing to a more sustainable and equitable future.'
      ]
    }
  ];

  private historyEvents: HistoryEvent[] = [
    {
      id: 'history-1',
      year: '2016',
      title: 'Faculty Establishment',
      description: 'The Faculty of Al-Alsun was established by the Prime Minister\'s decree No. 2693 in 2016, marking the beginning of a new era in language education at Luxor University.',
      icon: 'pi pi-flag'
    },
    {
      id: 'history-2',
      year: '2016/2017',
      title: 'First Academic Year',
      description: 'The first academic year began in 2016/2017 with a limited number of departments, laying the foundation for comprehensive language education programs.',
      icon: 'pi pi-graduation-cap'
    },
    {
      id: 'history-3',
      year: '2017-2020',
      title: 'Gradual Expansion',
      description: 'The faculty expanded gradually to include eight language departments, offering diverse programs in Arabic, English, French, German, Italian, Spanish, Russian, and Chinese languages.',
      icon: 'pi pi-building'
    },
    {
      id: 'history-4',
      year: '2020-Present',
      title: 'Excellence & Growth',
      description: 'Since its foundation, the faculty has strived to provide high-quality education in languages and translation, develop its academic programs, and support research and community service.',
      icon: 'pi pi-star'
    }
  ];

  private visionMission: VisionMission[] = [
    {
      id: 'vision',
      type: 'vision',
      title: 'Our Vision',
      icon: 'pi pi-eye',
      content: [
        'The Faculty of Al-Alsun (Languages) strives to achieve excellence and leadership in all areas of knowledge related to the study of multiple languages, with the aim of distinguishing itself, advancing society scientifically and culturally, and competing at the local and international levels.'
      ]
    },
    {
      id: 'mission',
      type: 'mission',
      title: 'Our Mission',
      icon: 'pi pi-compass',
      content: [
        'To qualify graduates of various languages to serve society and the environment in the fields of translation, self-development, and understanding others, while preserving identity and working to keep pace with prosperity.',
        'Supporting students culturally, artistically, and athletically, and developing the skills necessary to master their mother tongue, their specialized language, and an auxiliary language.',
        'Refining students\' skills to meet the actual needs of the job market and society.'
      ]
    }
  ];

  private footerSections: FooterSection[] = [
    {
      title: 'Quick Links',
      links: [
        { title: 'About Us', url: '/alalsun-faculty/about' },
        { title: 'Departments', url: '/alalsun-faculty/departments' },
        { title: 'Faculty Members', url: '/alalsun-faculty/staff' },
        { title: 'News', url: '/alalsun-faculty/news' },
        { title: 'Contact', url: '/alalsun-faculty/contact' }
      ]
    },
    {
      title: 'Academic',
      links: [
        { title: 'Postgraduate Studies', url: '/postgraduate' },
        { title: 'Research Centers', url: '/research' },
        { title: 'Al-Alsun Journal', url: '/journal' },
        { title: 'Academic Calendar', url: '/calendar' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { title: 'Language & Translation Center', url: '/centers/translation' },
        { title: 'Confucius Classroom', url: '/centers/confucius' },
        { title: 'Student Portal', url: '/student-portal' },
        { title: 'Library', url: '/library' }
      ]
    }
  ];

  private socialLinks: SocialLink[] = [
    {
      platform: 'Facebook',
      url: 'https://facebook.com/alsunluxor',
      icon: 'pi pi-facebook',
      label: 'Facebook'
    },
    {
      platform: 'YouTube',
      url: 'https://youtube.com/alsunluxor',
      icon: 'pi pi-youtube',
      label: 'YouTube'
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/school/alsunluxor',
      icon: 'pi pi-linkedin',
      label: 'LinkedIn'
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/alsunluxor',
      icon: 'pi pi-twitter',
      label: 'Twitter'
    }
  ];

  private contactInfo: ContactInfo = {
    phone: '+20952356555',
    email: 'info@alsun.luxor.edu.eg',
    address: 'Faculty of Al-Alsun, Luxor University, Luxor, Egypt'
  };

getDeanInfo(): Observable<DeanInfo> {
    return of(this.deanInfo);
  }

  updateDeanInfo(updatedDean: DeanInfo): Observable<void> {
    this.deanInfo = updatedDean;
    return of(void 0);
  }

  addDeanInfo(newDean: DeanInfo): Observable<void> {
    this.deanInfo = {
      ...newDean,
      id: 'dean-1' // We keep the same ID since there's only one dean
    };
    return of(void 0);
  }

  getAllViceDeans(): Observable<ViceDean[]> {
    return of(this.viceDeans);
  }

  getViceDeanById(id: string): Observable<ViceDean | undefined> {
    const viceDean = this.viceDeans.find(vd => vd.id === id);
    return of(viceDean);
  }

  addViceDean(newViceDean: ViceDean): Observable<void> {
    newViceDean.id = 'vice-dean-' + (this.viceDeans.length + 1);
    this.viceDeans.push(newViceDean);
    return of(void 0);
  }

  updateViceDean(updatedViceDean: ViceDean): Observable<void> {
    const index = this.viceDeans.findIndex(vd => vd.id === updatedViceDean.id);
    if (index !== -1) {
      this.viceDeans[index] = updatedViceDean;
    }
    return of(void 0);
  }

  deleteViceDean(id: string): Observable<void> {
    this.viceDeans = this.viceDeans.filter(vd => vd.id !== id);
    return of(void 0);
  }

  getHistoryEvents(): Observable<HistoryEvent[]> {
    return of(this.historyEvents);
  }

  addHistoryEvent(newEvent: HistoryEvent): Observable<void> {
    newEvent.id = 'history-' + (this.historyEvents.length + 1);
    this.historyEvents.push(newEvent);
    return of(void 0);
  }

  updateHistoryEvent(updatedEvent: HistoryEvent): Observable<void> {
    const index = this.historyEvents.findIndex(e => e.id === updatedEvent.id);
    if (index !== -1) {
      this.historyEvents[index] = updatedEvent;
    }
    return of(void 0);
  }

  deleteHistoryEvent(id: string): Observable<void> {
    this.historyEvents = this.historyEvents.filter(e => e.id !== id);
    return of(void 0);
  }

  getVisionMission(): Observable<VisionMission[]> {
    return of(this.visionMission);
  }

  addVisionMission(newVM: VisionMission): Observable<void> {
    newVM.id = 'vm-' + (this.visionMission.length + 1);
    this.visionMission.push(newVM);
    return of(void 0);
  }

  updateVisionMission(updatedVM: VisionMission): Observable<void> {
    const index = this.visionMission.findIndex(vm => vm.id === updatedVM.id);
    if (index !== -1) {
      this.visionMission[index] = updatedVM;
    }
    return of(void 0);
  }

  deleteVisionMission(id: string): Observable<void> {
    this.visionMission = this.visionMission.filter(vm => vm.id !== id);
    return of(void 0);
  }

  getFooterSections(): Observable<FooterSection[]> {
    return of(this.footerSections);
  }

  addFooterSection(newSection: FooterSection): Observable<void> {
    this.footerSections.push(newSection);
    return of(void 0);
  }

  updateFooterSection(updatedSection: FooterSection, index: number): Observable<void> {
    if (index >= 0 && index < this.footerSections.length) {
      this.footerSections[index] = updatedSection;
    }
    return of(void 0);
  }

  deleteFooterSection(index: number): Observable<void> {
    if (index >= 0 && index < this.footerSections.length) {
      this.footerSections.splice(index, 1);
    }
    return of(void 0);
  }

  getSocialLinks(): Observable<SocialLink[]> {
    return of(this.socialLinks);
  }

  addSocialLink(newLink: SocialLink): Observable<void> {
    this.socialLinks.push(newLink);
    return of(void 0);
  }

  updateSocialLink(updatedLink: SocialLink, index: number): Observable<void> {
    if (index >= 0 && index < this.socialLinks.length) {
      this.socialLinks[index] = updatedLink;
    }
    return of(void 0);
  }

  deleteSocialLink(index: number): Observable<void> {
    if (index >= 0 && index < this.socialLinks.length) {
      this.socialLinks.splice(index, 1);
    }
    return of(void 0);
  }

  getContactInfo(): Observable<ContactInfo> {
    return of(this.contactInfo);
  }

  updateContactInfo(updatedContact: ContactInfo): Observable<void> {
    this.contactInfo = updatedContact;
    return of(void 0);
  }
}

