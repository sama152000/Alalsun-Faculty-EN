import { Injectable } from '@angular/core';
import { NewsItem, NewsCategory, NewsFilter } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsItems: NewsItem[] = [
    // === Students News ===
    {
      id: 10,
      title: 'World Translation Day: Challenges of Written Translation',
      summary: 'The Scientific Committee of the Faculty of Al-Alsun organized a distinguished event titled "World Translation Day: Challenges of Written Translation" under the patronage of the University President and the Dean of the Faculty, with attendance from faculty members and students.',
      content: `Under the patronage of Prof. Dr. Sabreen Jaber Abdel-Gelil, President of Luxor University, Prof. Dr. Mahmoud El-Nouby, Dean of the Faculty of Al-Alsun, and Prof. Dr. Mohamed Ahmed Sayed Hamza, Vice Dean for Education and Student Affairs, and under the supervision of Dr. Elham Ali Issa, Coordinator of Student Activities, and Dr. Asmaa Salah, Coordinator of the Scientific Committee, the Scientific Committee of the Faculty of Al-Alsun organized a distinguished event titled "World Translation Day: Challenges of Written Translation". The speakers were Dr. Beligh Hamdy Nafi El-Ridi, Head of the German Language Department and Certified Translator at the German Embassy, Dr. Riham Shokry, Lecturer of Linguistics and Translation in the Italian Language Department, and Dr. Lamis Hassan El-Banna, Lecturer of Linguistics and Translation in the English Language Department. They discussed the origins of translation, why September 30 was designated as International Translation Day, the most important modern translation tools, the challenges of written translation, and how to overcome them. They also highlighted the importance of translation as a bridge between cultures and peoples, and shed light on prominent figures in translation in Egypt and the Arab world in the modern era. The seminar was attended by His Excellency Prof. Dr. Mahmoud El-Nouby Ahmed, Dean of the Faculty, Prof. Dr. Mohamed Ahmed Sayed Hamza, Vice Dean for Education and Student Affairs, Prof. Dr. Mahmoud Hamza, Vice Dean for Environmental Affairs and Community Service, Dr. Waleed Magdy, Head of the Spanish Language Department, Dr. Sahar Abdel-Salam, Assistant Lecturer in the Russian Language Department, Dr. Asmaa Salah, Lecturer of German Literature, Dr. Mona Mustafa, Lecturer of Linguistics and Translation in the German Language Department, Dr. Elham Ali Issa, Lecturer of Linguistics and Translation in the French Language Department, and a large number of students from various departments.`,
      date: new Date('2025-09-30'),
      category: NewsCategory.STUDENTS,
      image: './assets/world-translation-day.jpg',
      author: 'Student Activities Committee',
      tags: ['translation', 'students', 'event', 'international']
    },
    {
      id: 11,
      title: 'Certified Translation: Requirements and Challenges',
      summary: 'The German Language Department organized an event titled "Certified Translation" under the patronage of the University President and the Dean of the Faculty, presented by Dr. Beligh Hamdy Nafi.',
      content: `Under the patronage of Prof. Dr. Sabreen Jaber Abdel-Gelil, President of Luxor University, Prof. Dr. Mahmoud El-Nouby, Dean of the Faculty of Al-Alsun, and Prof. Dr. Mohamed Ahmed Sayed Hamza, Vice Dean for Education and Student Affairs, and under the supervision of Dr. Beligh Hamdy Nafi, Head of the German Language Department, the German Language Department of the Faculty of Al-Alsun organized a distinguished event titled "Certified Translation". The speaker was Dr. Beligh Hamdy Nafi El-Ridi, Head of the German Language Department and Certified Translator at the German Embassy. He discussed certified translation, the requirements to become a certified translator, and the challenges faced by certified translators. The seminar was attended by His Excellency Prof. Dr. Mahmoud El-Nouby Ahmed, Dean of the Faculty, Dr. Waleed Magdy, Head of the Spanish Language Department, Dr. Sahar Abdel-Salam, Assistant Lecturer in the Russian Language Department, Dr. Asmaa Salah, Lecturer of German Literature, Dr. Mona Mustafa, Lecturer of Linguistics and Translation in the German Language Department, Dr. Lamis El-Banna, Lecturer of Linguistics in the English Language Department, Dr. Riham Shokry, Lecturer of Linguistics in the Italian Language Department, and a large number of students from various departments.`,
      date: new Date('2025-10-01'),
      category: NewsCategory.STUDENTS,
      image: './assets/german-news.jpg',
      author: 'Student Activities Committee',
      tags: ['translation', 'students', 'event', 'certified']
    },
     {
      id: 18,
      title: 'Certified Translation: Requirements and Challenges',
      summary: 'The German Language Department organized an event titled "Certified Translation" under the patronage of the University President and the Dean of the Faculty, presented by Dr. Beligh Hamdy Nafi.',
      content: `Under the patronage of Prof. Dr. Sabreen Jaber Abdel-Gelil, President of Luxor University, Prof. Dr. Mahmoud El-Nouby, Dean of the Faculty of Al-Alsun, and Prof. Dr. Mohamed Ahmed Sayed Hamza, Vice Dean for Education and Student Affairs, and under the supervision of Dr. Beligh Hamdy Nafi, Head of the German Language Department, the German Language Department of the Faculty of Al-Alsun organized a distinguished event titled "Certified Translation". The speaker was Dr. Beligh Hamdy Nafi El-Ridi, Head of the German Language Department and Certified Translator at the German Embassy. He discussed certified translation, the requirements to become a certified translator, and the challenges faced by certified translators. The seminar was attended by His Excellency Prof. Dr. Mahmoud El-Nouby Ahmed, Dean of the Faculty, Dr. Waleed Magdy, Head of the Spanish Language Department, Dr. Sahar Abdel-Salam, Assistant Lecturer in the Russian Language Department, Dr. Asmaa Salah, Lecturer of German Literature, Dr. Mona Mustafa, Lecturer of Linguistics and Translation in the German Language Department, Dr. Lamis El-Banna, Lecturer of Linguistics in the English Language Department, Dr. Riham Shokry, Lecturer of Linguistics in the Italian Language Department, and a large number of students from various departments.`,
      date: new Date('2025-10-01'),
      category: NewsCategory.STUDENTS,
      image: './assets/world-translation-day.jpg',
      author: 'Student Activities Committee',
      tags: ['translation', 'students', 'event', 'certified']
    },

    // === Board & Administration News ===
    {
      id: 12,
      title: 'Government Excellence Team Continues Preparations at the Faculty of Al-Alsun',
      summary: 'The Faculty\'s Excellence Team continues intensive work in preparation for the Government Excellence Competition, under the supervision of Dr. Mohamed Gomaa El-Darby.',
      content: `In line with the directives of Her Excellency Prof. Dr. Sabreen Jaber Abdel-Gelil, President of Luxor University, and with the support and follow-up of Prof. Dr. Mahmoud El-Nouby Ahmed, Dean of the Faculty of Al-Alsun, the Faculty\'s Excellence Team continues its intensive efforts in preparation for participation in the Government Excellence Competition. The team\'s work is supervised by Dr. Mohamed Gomaa El-Darby, the Faculty\'s Excellence Ambassador. Currently, initial procedures are being completed and supporting files are being uploaded for participation, reflecting the Faculty\'s commitment to the quality and institutional excellence standards adopted by Luxor University. This effort is part of the Faculty of Al-Alsun\'s ongoing pursuit to enhance the culture of excellence and institutional development, and to apply best administrative and academic practices, in support of the University\'s vision to achieve leadership at the local and regional levels.`,
      date: new Date('2025-10-20'),
      category: NewsCategory.BOARD,
      image: './assets/faculty-new2.jpg',
      author: 'Administration Office',
      tags: ['excellence', 'administration', 'competition', 'government']
    },
    {
      id: 13,
      title: 'Luxor University Showcases Student Support Efforts at the Supreme Council of Universities Meeting',
      summary: 'The University President participated in the Supreme Council of Universities meeting and highlighted Luxor University\'s efforts in supporting students and implementing the "Tamkeen" initiative.',
      content: `Prof. Dr. Sabreen Jaber Abdel-Gelil, President of Luxor University, participated in the meeting of the Supreme Council of Universities held at Alexandria University, chaired by Dr. Ayman Ashour, Minister of Higher Education and Scientific Research, in the presence of university presidents and the Secretary of the Supreme Council of Universities. During the meeting, the Minister of Higher Education praised the efforts of Egyptian universities in advancing the education system, confirming distinguished achievements in international rankings, including the inclusion of 26 Egyptian universities in the Times World Ranking for 2026, reflecting continuous development in the level of education and scientific research. The meeting followed up on the implementation of the presidential initiative "Tamkeen" to support students with disabilities, where universities, including Luxor University, continue their active role in providing specialized services to students and promoting a culture of inclusion and integration within the university community. Luxor University also reviewed its efforts in supporting student activities, skill development, and linking them to labor market needs, in addition to achievements in digital transformation within the faculties to develop educational and administrative services. The meeting also addressed several files related to the development of education and scientific research, including expanding academic and research cooperation with international universities through the "Horizon Europe" program, which contributes to opening broader educational and research horizons for university students. At the end of the meeting, the Minister of Higher Education affirmed the state\'s continued support for universities, for their pivotal role in Egyptian development and societal progress.`,
      date: new Date('2025-10-25'),
      category: NewsCategory.BOARD,
      image: './assets/faculty-new1.jpg',
      author: 'Administration Office',
      tags: ['supreme council', 'administration', 'student support', 'tamkeen']
    },

     {
      id: 17,
      title: 'Luxor University Showcases Student Support Efforts at the Supreme Council of Universities Meeting',
      summary: 'The University President participated in the Supreme Council of Universities meeting and highlighted Luxor University\'s efforts in supporting students and implementing the "Tamkeen" initiative.',
      content: `Prof. Dr. Sabreen Jaber Abdel-Gelil, President of Luxor University, participated in the meeting of the Supreme Council of Universities held at Alexandria University, chaired by Dr. Ayman Ashour, Minister of Higher Education and Scientific Research, in the presence of university presidents and the Secretary of the Supreme Council of Universities. During the meeting, the Minister of Higher Education praised the efforts of Egyptian universities in advancing the education system, confirming distinguished achievements in international rankings, including the inclusion of 26 Egyptian universities in the Times World Ranking for 2026, reflecting continuous development in the level of education and scientific research. The meeting followed up on the implementation of the presidential initiative "Tamkeen" to support students with disabilities, where universities, including Luxor University, continue their active role in providing specialized services to students and promoting a culture of inclusion and integration within the university community. Luxor University also reviewed its efforts in supporting student activities, skill development, and linking them to labor market needs, in addition to achievements in digital transformation within the faculties to develop educational and administrative services. The meeting also addressed several files related to the development of education and scientific research, including expanding academic and research cooperation with international universities through the "Horizon Europe" program, which contributes to opening broader educational and research horizons for university students. At the end of the meeting, the Minister of Higher Education affirmed the state\'s continued support for universities, for their pivotal role in Egyptian development and societal progress.`,
      date: new Date('2025-10-25'),
      category: NewsCategory.BOARD,
      image: './assets/faculty-new2.jpg',
      author: 'Administration Office',
      tags: ['supreme council', 'administration', 'student support', 'tamkeen']
    },
    // === Postgraduate News ===
    {
      id: 14,
      title: 'Preparations for the Fourth International Conference at the Faculty of Al-Alsun',
      summary: 'The Faculty continues final preparations for the Fourth International Conference titled "Linguistic and Cultural Communication in the Digital Age: Prospects and Challenges", with participation from 69 researchers.',
      content: `The Faculty of Al-Alsun at Luxor University is putting the final touches on the launch of the Fourth International Conference organized by the Faculty under the title: "Linguistic and Cultural Communication in the Digital Age: Prospects and Challenges", scheduled to open tomorrow, Wednesday, April 23, 2025, and continue until Thursday, April 24, under the patronage of Prof. Dr. Sabreen Jaber Abdel-Gelil, President of Luxor University, chaired by Prof. Dr. Mahmoud El-Nouby Ahmed, Dean of the Faculty of Al-Alsun, and supervised by Prof. Dr. Youssef Abbas Ali, Vice Dean for Postgraduate Studies and Research. The conference will feature 69 researchers from Egypt and several Arab countries, representing an elite group of specialists in language, translation, cultural studies, and digital studies. The conference will discuss the impact of digital transformation on patterns of intercultural communication and the challenges facing language and identity in the age of technology. As part of the intensive preparations, the conference secretariat, consisting of Dr. Asmaa Salah, Dr. Lamis El-Banna, Dr. Tahany Kamel, and Dr. Mohamed Sultan, confirmed that the Faculty\'s team of faculty members, administrative staff, and students is working around the clock to prepare the halls, organize scientific sessions, and ensure the readiness of technical means, to ensure the conference is held in a manner befitting the name of the Faculty of Al-Alsun at Luxor University.`,
      date: new Date('2025-04-23'),
      category: NewsCategory.POSTGRADUATE,
      image: './assets/postgraduate-new1.png',
      author: 'Postgraduate Studies Office',
      tags: ['conference', 'postgraduate', 'research', 'international']
    },
    {
      id: 15,
      title: 'Young Researchers Conference at the Faculty of Al-Alsun: 28 Researchers Discuss the Role of Humanities',
      summary: 'The conference witnessed active participation from 28 researchers discussing linguistic, translation, and literary issues, under the patronage of the University President.',
      content: `Under the title "The Role of Humanities and Social Sciences in Facing Challenges and Enhancing Communication Between Peoples" on April 13, 2025, 28 researchers participated with valuable research in the Young Researchers Conference at the Faculty of Al-Alsun - Luxor University. The Faculty of Al-Alsun at Luxor University organized its annual conference for young researchers, which witnessed active participation from 28 male and female researchers from various linguistic, literary, and translation specializations. The conference events were held under the patronage of Prof. Dr. Sabreen Jaber Abdel-Gelil, President of the University, and Prof. Dr. Mahmoud El-Nouby Ahmed, Dean of the Faculty, and under the supervision of postgraduate studies at the Faculty led by Dr. Youssef Abbas Ali, Vice Dean for Postgraduate Studies and Research. The University President confirmed in her speech that scientific research has become an urgent necessity in an era where challenges are multiplying, stressing that Luxor University aims to enhance the culture of research linked to sustainable development issues, by supporting young researchers and guiding them towards preparing research with tangible societal impact, contributing to achieving the goals of Egypt Vision 2030. The conference was held under the title: "The Role of Humanities and Social Sciences in Facing Challenges and Enhancing Communication Between Peoples", where participants discussed a wide range of topics touching on modern linguistic issues, translation problems, contemporary artificial intelligence techniques, in addition to critical readings in Arabic and world literature. The submitted research was distributed over specialized scientific sessions managed by an elite group of specialists from inside and outside the Faculty, which added a rigorous scientific character to the discussions and opened new horizons for researchers.`,
      date: new Date('2025-04-13'),
      category: NewsCategory.POSTGRADUATE,
      image: './assets/postgraduate-new2.png',
      author: 'Postgraduate Studies Office',
      tags: ['conference', 'postgraduate', 'research', 'young researchers']
    },
     {
      id: 16,
      title: 'Young Researchers Conference at the Faculty of Al-Alsun: 28 Researchers Discuss the Role of Humanities',
      summary: 'The conference witnessed active participation from 28 researchers discussing linguistic, translation, and literary issues, under the patronage of the University President.',
      content: `Under the title "The Role of Humanities and Social Sciences in Facing Challenges and Enhancing Communication Between Peoples" on April 13, 2025, 28 researchers participated with valuable research in the Young Researchers Conference at the Faculty of Al-Alsun - Luxor University. The Faculty of Al-Alsun at Luxor University organized its annual conference for young researchers, which witnessed active participation from 28 male and female researchers from various linguistic, literary, and translation specializations. The conference events were held under the patronage of Prof. Dr. Sabreen Jaber Abdel-Gelil, President of the University, and Prof. Dr. Mahmoud El-Nouby Ahmed, Dean of the Faculty, and under the supervision of postgraduate studies at the Faculty led by Dr. Youssef Abbas Ali, Vice Dean for Postgraduate Studies and Research. The University President confirmed in her speech that scientific research has become an urgent necessity in an era where challenges are multiplying, stressing that Luxor University aims to enhance the culture of research linked to sustainable development issues, by supporting young researchers and guiding them towards preparing research with tangible societal impact, contributing to achieving the goals of Egypt Vision 2030. The conference was held under the title: "The Role of Humanities and Social Sciences in Facing Challenges and Enhancing Communication Between Peoples", where participants discussed a wide range of topics touching on modern linguistic issues, translation problems, contemporary artificial intelligence techniques, in addition to critical readings in Arabic and world literature. The submitted research was distributed over specialized scientific sessions managed by an elite group of specialists from inside and outside the Faculty, which added a rigorous scientific character to the discussions and opened new horizons for researchers.`,
      date: new Date('2025-04-13'),
      category: NewsCategory.POSTGRADUATE,
      image: './assets/postgraduate-new1.png',
      author: 'Postgraduate Studies Office',
      tags: ['conference', 'postgraduate', 'research', 'young researchers']
    }
  ];

  getAllNews(): NewsItem[] {
    return this.newsItems.sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  getNewsById(id: number): NewsItem | undefined {
    return this.newsItems.find(item => item.id === id);
  }

  getNewsByCategory(category: NewsCategory): NewsItem[] {
    return this.newsItems
      .filter(item => item.category === category)
      .sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  filterNews(filter: NewsFilter): NewsItem[] {
    let filteredNews = this.newsItems;

    if (filter.category) {
      filteredNews = filteredNews.filter(item => item.category === filter.category);
    }

    if (filter.year) {
      filteredNews = filteredNews.filter(item => item.date.getFullYear() === filter.year);
    }

    if (filter.month) {
      filteredNews = filteredNews.filter(item => item.date.getMonth() + 1 === filter.month);
    }

    if (filter.keyword) {
      const keyword = filter.keyword.toLowerCase();
      filteredNews = filteredNews.filter(item =>
        item.title.toLowerCase().includes(keyword) ||
        item.summary.toLowerCase().includes(keyword) ||
        item.content.toLowerCase().includes(keyword) ||
        (item.tags && item.tags.some(tag => tag.toLowerCase().includes(keyword)))
      );
    }

    return filteredNews.sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  getFeaturedNews(): NewsItem[] {
    return this.newsItems
      .filter(item => item.featured)
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .slice(0, 3);
  }

  getRecentNews(limit: number = 5): NewsItem[] {
    return this.newsItems
      .sort((a, b) => b.date.getTime() - a.date.getTime())
      .slice(0, limit);
  }

  addNews(newNews: NewsItem): void {
    newNews.id = this.newsItems.length ? Math.max(...this.newsItems.map(item => item.id)) + 1 : 1;
    this.newsItems.push(newNews);
  }

  updateNews(updatedNews: NewsItem): void {
    const index = this.newsItems.findIndex(item => item.id === updatedNews.id);
    if (index !== -1) {
      this.newsItems[index] = updatedNews;
    }
  }

  deleteNews(id: number): void {
    this.newsItems = this.newsItems.filter(item => item.id !== id);
  }
}