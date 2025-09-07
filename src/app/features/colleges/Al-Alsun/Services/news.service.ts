import { Injectable } from '@angular/core';
import { NewsItem, NewsCategory, NewsFilter } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsItems: NewsItem[] = [
    // Students News
    {
      id: 1,
      title: 'Final Exam Schedule – Spring 2025',
      summary: 'The official schedule for final exams (Spring 2025) has been announced for all departments.',
      content: `The Faculty of Al-Alsun announces the final examination schedule for the Spring 2025 semester. All students are required to check their examination timetables and prepare accordingly.

      Key Information:
      - Examination period: May 15-30, 2025
      - Students must bring their university ID cards
      - Mobile phones are strictly prohibited in examination halls
      - Late arrivals will not be permitted after 30 minutes

      For any inquiries, please contact the Student Affairs Office.`,
      date: new Date('2025-04-15'),
      category: NewsCategory.STUDENTS,
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Student Affairs Office',
      tags: ['exams', 'schedule', 'spring2025']
    },
    {
      id: 2,
      title: 'Student Cultural Day 2025',
      summary: 'The faculty organized a cultural day showcasing student talents in art, literature, and music.',
      content: `The Faculty of Al-Alsun successfully hosted its annual Student Cultural Day, featuring performances and exhibitions from students across all departments.

      Highlights included:
      - Multilingual poetry recitations
      - Traditional music performances
      - Art exhibitions featuring student works
      - Cultural food festival
      - Language exchange activities

      The event promoted intercultural understanding and celebrated the diversity of our student body.`,
      date: new Date('2025-03-10'),
      category: NewsCategory.STUDENTS,
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Cultural Activities Committee',
      tags: ['culture', 'students', 'arts', 'diversity']
    },
    {
      id: 3,
      title: 'Student Exchange Program',
      summary: 'Applications are now open for the international student exchange program for the 2025-2026 academic year.',
      content: `The Faculty of Al-Alsun is pleased to announce that applications for the international student exchange program are now open.

      Program Details:
      - Duration: One semester or full academic year
      - Partner universities in Europe, Asia, and North America
      - Scholarships available for qualified students
      - Application deadline: June 30, 2025

      Eligible students must have a minimum GPA of 3.0 and demonstrate proficiency in the target language.`,
      date: new Date('2025-05-01'),
      category: NewsCategory.STUDENTS,
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'International Programs Office',
      tags: ['exchange', 'international', 'scholarship', 'application']
    },
    // Postgraduate News
    {
      id: 4,
      title: 'International Translation Conference 2025',
      summary: 'The Faculty of Al-Alsun hosts an international conference on translation studies and cross-cultural communication.',
      content: `The Faculty of Al-Alsun is proud to host the International Translation Conference 2025, bringing together scholars and practitioners from around the world.

      Conference Themes:
      - Digital Translation Technologies
      - Literary Translation Challenges
      - Cross-cultural Communication
      - Translation Ethics and Quality

      The conference will feature keynote speakers, panel discussions, and workshops. Registration is open for faculty, students, and external participants.`,
      date: new Date('2025-05-20'),
      category: NewsCategory.POSTGRADUATE,
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Conference Committee',
      tags: ['conference', 'translation', 'research', 'international']
    },
    {
      id: 5,
      title: 'Master\'s Thesis Defense – Arabic Literature',
      summary: 'Graduate student Ahmed Ali successfully defended his thesis on contemporary Arabic literature.',
      content: `Ahmed Ali, a Master's student in the Arabic Department, successfully defended his thesis titled "Narrative Techniques in Contemporary Arabic Literature: A Comparative Study."

      Thesis Details:
      - Supervisor: Dr. Fatima Hassan
      - External Examiner: Prof. Omar Mahmoud (Cairo University)
      - Grade: Excellent with Honors
      - Defense Date: June 5, 2025

      The thesis explores innovative narrative techniques used by contemporary Arabic authors and their impact on modern literary discourse.`,
      date: new Date('2025-06-05'),
      category: NewsCategory.POSTGRADUATE,
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Graduate Studies Office',
      tags: ['thesis', 'defense', 'arabic', 'literature', 'masters']
    },
    {
      id: 6,
      title: 'New PhD Program in Translation Studies',
      summary: 'The faculty announces a new doctoral program in Translation Studies starting Fall 2025.',
      content: `The Faculty of Al-Alsun is excited to announce the launch of a new PhD program in Translation Studies, beginning in Fall 2025.

      Program Features:
      - Interdisciplinary approach combining linguistics, literature, and technology
      - Research opportunities with international partners
      - Funding available for qualified candidates
      - Duration: 3-4 years

      The program aims to prepare the next generation of translation scholars and practitioners for academic and professional careers.`,
      date: new Date('2025-03-15'),
      category: NewsCategory.POSTGRADUATE,
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Graduate Studies Committee',
      tags: ['phd', 'translation', 'program', 'research']
    },
    // Board & Administration News
    {
      id: 7,
      title: 'Faculty Council Meeting – April 2025',
      summary: 'The faculty council discussed new programs, student affairs, and research strategies.',
      content: `The Faculty Council convened for its monthly meeting to discuss various academic and administrative matters.

      Key Decisions:
      - Approval of new curriculum updates for all departments
      - Budget allocation for research projects
      - Student support services enhancement
      - International partnership agreements

      The council emphasized the importance of maintaining academic excellence while expanding opportunities for students and faculty.`,
      date: new Date('2025-04-02'),
      category: NewsCategory.BOARD,
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Faculty Secretary',
      tags: ['council', 'meeting', 'decisions', 'academic']
    },
    {
      id: 8,
      title: 'New Regulations for Postgraduate Enrollment',
      summary: 'The council approved new regulations for postgraduate studies starting from the 2025/2026 academic year.',
      content: `The Faculty Council has approved new regulations for postgraduate enrollment to enhance the quality of graduate education.

      New Regulations Include:
      - Updated admission criteria
      - Enhanced English proficiency requirements
      - Research proposal evaluation process
      - Supervisor assignment procedures

      These changes aim to ensure that our graduate programs maintain the highest academic standards and prepare students for successful careers in academia and industry.`,
      date: new Date('2025-03-01'),
      category: NewsCategory.BOARD,
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Academic Affairs Committee',
      tags: ['regulations', 'postgraduate', 'enrollment', 'standards']
    },
    {
      id: 9,
      title: 'Faculty Strategic Plan 2025-2030',
      summary: 'The faculty board announces the new five-year strategic plan focusing on innovation and excellence.',
      content: `The Faculty of Al-Alsun has unveiled its strategic plan for 2025-2030, outlining ambitious goals for academic excellence and innovation.

      Strategic Priorities:
      - Digital transformation of education
      - Research excellence and innovation
      - International partnerships expansion
      - Student success and employability
      - Community engagement and service

      The plan reflects our commitment to becoming a leading institution in language education and research in the region.`,
      date: new Date('2025-02-15'),
      category: NewsCategory.BOARD,
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400',
      author: 'Strategic Planning Committee',
      tags: ['strategy', 'planning', 'innovation', 'excellence']
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