import { Injectable } from '@angular/core';
import { EducationalService } from '../model/educational-service.model';

@Injectable({
  providedIn: 'root'
})
export class EducationalServiceService {
  private services: EducationalService[] = [
    {
      id: 1,
      title: 'Lecture Halls',
      description: 'The faculty includes 22 lecture halls equipped with appropriate student seating and modern educational tools to provide a comfortable learning environment. Additionally, there are two large halls (each no less than 50 square meters) used for lectures, scientific conferences, and academic seminars.',
      imageUrl: './assets/img.png',
      icon: 'pi pi-building',
      category: 'Infrastructure'
    },
    {
      id: 2,
      title: 'Faculty Library',
      description: 'The Faculty of Al-Alsun has two main libraries: One for Arabic language resources, and one for foreign languages, including English, French, German, Italian, Russian, Latin, Spanish, and Ancient Egyptian. The libraries offer a wide range of books, references, research materials, and modern academic resources to support students and researchers.',
      imageUrl: './assets/img.png',
      icon: 'pi pi-book',
      category: 'Resources'
    },
    {
      id: 3,
      title: 'Xceling Laboratory',
      description: 'As part of the Erasmus+ Program for academic cooperation between EU and Egyptian universities, Luxor University, represented by the Faculty of Al-Alsun, participates in the Xceling Project ("Towards Excellence in Applied Linguistics"). The goal of this project is to establish a Center of Excellence for Applied Linguistics at the faculty, enhancing linguistic research and training in modern methodologies.',
      imageUrl: './assets/img.png',
      icon: 'pi pi-star',
      category: 'Research'
    },
    {
      id: 4,
      title: 'Confucius Classroom',
      description: 'The Confucius Classroom is an extension of the Confucius Institutes established by China to promote Chinese language and culture worldwide. By 2012, over 400 institutes and 500 classrooms had been established in 108 countries. The classroom at the Faculty of Al-Alsun offers Chinese language teaching, local teacher training, Chinese proficiency testing, teacher qualification certification, and cultural and educational exchange programs. It also provides consultancy and research on modern Chinese society, culture, and economy.',
      imageUrl: './assets/img.png',
      icon: 'pi pi-globe',
      category: 'International'
    },
    {
      id: 5,
      title: 'Language Laboratories',
      description: 'The faculty includes three language and phonetics labs, each equipped with 24 learner units, including headphones and audio systems for pronunciation and listening practice.',
      imageUrl: './assets/img.png',
      icon: 'pi pi-microphone',
      category: 'Technology'
    },
    {
      id: 6,
      title: 'Computer Laboratories',
      description: 'The Faculty also includes computer labs equipped with modern PCs and multimedia systems to support digital learning, translation technology, and academic research.',
      imageUrl: './assets/img.png',
      icon: 'pi pi-desktop',
      category: 'Technology'
    }
  ];

  getAllServices(): EducationalService[] {
    return this.services;
  }

  getServiceById(id: number): EducationalService | undefined {
    return this.services.find(service => service.id === id);
  }

  getNextServiceId(currentId: number): number | null {
    const currentIndex = this.services.findIndex(s => s.id === currentId);
    if (currentIndex === -1 || currentIndex === this.services.length - 1) {
      return null;
    }
    return this.services[currentIndex + 1].id;
  }

  getPreviousServiceId(currentId: number): number | null {
    const currentIndex = this.services.findIndex(s => s.id === currentId);
    if (currentIndex === -1 || currentIndex === 0) {
      return null;
    }
    return this.services[currentIndex - 1].id;
  }
}
