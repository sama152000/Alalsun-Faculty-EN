import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SectorData } from '../model/sector.model';

@Injectable({
  providedIn: 'root'
})
export class SectorsService {
  private sectors: SectorData[] = [
    {
      id: 'education-students',
      name: 'Education & Students Affairs',
      title: 'Sector of Education & Students Affairs',
      description: `The Education & Students Affairs Sector stands as the cornerstone of academic excellence and student empowerment at our institution. Our comprehensive approach to education encompasses not only traditional academic pursuits but also the holistic development of students as future leaders, innovators, and global citizens. We are committed to providing an inclusive, dynamic, and supportive environment that nurtures intellectual curiosity, critical thinking, and personal growth. Through our various departments and specialized programs, we ensure that every student receives personalized attention and access to cutting-edge resources that prepare them for success in an ever-evolving world. Our sector champions diversity, promotes equality, and fosters a culture of continuous learning and innovation.`,
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      viceDean: {
        name: 'Prof. Dr. Mohamed Ahmed Sayed Hamza',
        title: 'Vice Dean for Education and Student Affairs',
        photo: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        email: 'education@luxor.edu.eg',
        office: 'Faculty Building - 1st Floor, Room 105'
      },
      departments: [
        {
          id: 'enrollment-registration',
          name: 'Student Enrollment & Academic Registration Department',
          overview: 'The Student Enrollment & Academic Registration Department serves as the primary gateway for students entering our academic community. We manage comprehensive enrollment processes, academic registration systems, and maintain detailed student records throughout their academic journey.',
          responsibilities: [
            'Processing and reviewing new student applications with comprehensive evaluation criteria',
            'Managing course registration systems and academic scheduling coordination',
            'Maintaining comprehensive student academic records and transcript management',
            'Issuing official enrollment certificates and academic documentation',
            'Coordinating with academic departments for course capacity planning',
            'Implementing academic policies and registration procedures',
            'Providing student orientation and academic advisory services',
            'Managing transfer student evaluations and credit assessments',
            'Overseeing academic probation and academic standing evaluations',
            'Facilitating inter-departmental academic transfers and program changes'
          ],
          contact: {
            email: 'enrollment@luxor.edu.eg',
            office: 'Student Services Building - Ground Floor, Suite 110-115',
            phone: '+20 95 237 1001'
          }
        },
        {
          id: 'examination-results',
          name: 'Examination Management & Academic Assessment Department',
          overview: 'Our Examination Management & Academic Assessment Department ensures academic integrity and excellence through comprehensive examination processes, fair assessment procedures, and transparent result management systems.',
          responsibilities: [
            'Developing and implementing comprehensive examination schedules and protocols',
            'Supervising examination procedures and maintaining academic integrity standards',
            'Processing, analyzing, and publishing academic results with statistical reporting',
            'Managing grade appeals, academic disputes, and examination irregularities',
            'Issuing official transcripts, certificates, and academic credentials',
            'Coordinating with faculty for examination logistics and invigilation',
            'Implementing digital assessment tools and online examination platforms',
            'Managing special examination arrangements for students with disabilities',
            'Conducting statistical analysis of academic performance and trends',
            'Maintaining secure examination materials and confidential result systems'
          ],
          contact: {
            email: 'exams@luxor.edu.eg',
            office: 'Academic Affairs Building - 2nd Floor, Rooms 201-206',
            phone: '+20 95 237 1002'
          }
        },
        {
          id: 'student-activities',
          name: 'Student Life & Extracurricular Activities Department',
          overview: 'The Student Life & Extracurricular Activities Department enriches the university experience by providing diverse opportunities for personal development, cultural engagement, and community building through comprehensive programming.',
          responsibilities: [
            'Organizing comprehensive cultural events, festivals, and artistic performances',
            'Managing student clubs, societies, and special interest organizations',
            'Coordinating competitive sports activities and intramural programs',
            'Planning educational trips, field studies, and international exchange programs',
            'Supporting student-led initiatives and entrepreneurship programs',
            'Facilitating leadership development workshops and training sessions',
            'Managing student media publications and digital platforms',
            'Organizing career development seminars and professional networking events',
            'Coordinating volunteer programs and community service initiatives',
            'Providing mental health support and student counseling services'
          ],
          contact: {
            email: 'activities@luxor.edu.eg',
            office: 'Student Activities Center - Building B, All Floors',
            phone: '+20 95 237 1003'
          }
        },
        {
          id: 'student-support',
          name: 'Student Support & Welfare Services Department',
          overview: 'Dedicated to ensuring student wellbeing and success through comprehensive support services, financial aid programs, and crisis intervention systems.',
          responsibilities: [
            'Providing comprehensive academic advising and career counseling services',
            'Managing financial aid programs, scholarships, and student emergency funds',
            'Operating student health and wellness programs with medical support',
            'Coordinating housing services and residential life programs',
            'Implementing disability support services and accessibility accommodations',
            'Managing international student services and visa support',
            'Providing crisis intervention and emergency support services',
            'Operating student food services and nutrition programs',
            'Coordinating transportation services and parking management',
            'Facilitating peer mentorship and academic tutoring programs'
          ],
          contact: {
            email: 'support@luxor.edu.eg',
            office: 'Student Welfare Center - Building C, Floors 1-2',
            phone: '+20 95 237 1004'
          }
        },
        {
          id: 'technology-innovation',
          name: 'Educational Technology & Innovation Department',
          overview: 'Leading digital transformation in education through innovative technology solutions, online learning platforms, and smart campus initiatives.',
          responsibilities: [
            'Developing and maintaining learning management systems and digital platforms',
            'Implementing smart classroom technologies and interactive learning tools',
            'Managing student information systems and digital record keeping',
            'Providing technical support for online learning and virtual classrooms',
            'Coordinating digital literacy programs and technology training',
            'Developing mobile applications for student services and campus life',
            'Managing cybersecurity protocols for student data protection',
            'Implementing artificial intelligence solutions for academic support',
            'Coordinating distance learning programs and virtual exchange initiatives',
            'Supporting faculty in adopting educational technologies and pedagogical innovations'
          ],
          contact: {
            email: 'techsupport@luxor.edu.eg',
            office: 'Technology Center - Building D, Floor 3',
            phone: '+20 95 237 1005'
          }
        }
      ],
      services: [
        {
          id: 'comprehensive-enrollment',
          name: 'Comprehensive Enrollment & Admission Services',
          description: 'Our streamlined enrollment process ensures a smooth transition into university life with personalized support and comprehensive guidance throughout the admission journey.',
          steps: [
            'Complete the online application form with detailed academic and personal information',
            'Upload all required documents including transcripts, certificates, and supporting materials',
            'Pay application processing fees through secure online payment systems',
            'Schedule and attend entrance interviews, aptitude tests, or portfolio reviews as required',
            'Receive detailed admission decision with program placement and scholarship information',
            'Complete final enrollment procedures including course selection and orientation registration',
            'Attend comprehensive orientation programs and academic planning sessions',
            'Finalize housing arrangements and student services registration'
          ],
          requiredDocuments: [
            'Official high school diploma or equivalent certification (original and certified copies)',
            'Complete official transcripts from all previously attended institutions',
            'Official birth certificate with certified translation if applicable',
            'National identification card or passport (certified copies)',
            'Comprehensive medical examination report from approved healthcare providers',
            'Recent passport-style photographs (4x6 cm) with specified background requirements',
            'Military service completion certificate (required for male applicants)',
            'Financial support documentation and banking statements',
            'Letters of recommendation from academic or professional references',
            'Personal statement and academic goals essay',
            'English/Arabic language proficiency certificates as required',
            'Portfolio or creative work samples for applicable programs'
          ],
          downloadableForms: [
            'Student Application Form (PDF)',
            'Medical Examination Form (PDF)',
            'Financial Declaration Form (PDF)',
            'Emergency Contact Information Form (PDF)',
            'Academic Background Verification Form (PDF)',
            'Housing Application Form (PDF)',
            'International Student Supplemental Form (PDF)'
          ]
        },
        {
          id: 'academic-credentials',
          name: 'Academic Credentials & Documentation Services',
          description: 'Comprehensive certification services providing official academic documents, student identification, and verification services for domestic and international use.',
          steps: [
            'Submit detailed request form specifying document type and intended use',
            'Pay applicable fees through university payment systems',
            'Provide necessary supporting documents and identification verification',
            'Allow processing time (3-5 working days for standard requests, expedited options available)',
            'Collect completed documents from designated office or arrange secure delivery'
          ],
          requiredDocuments: [
            'Current student identification card or alumni verification',
            'Official fee payment receipts with transaction verification',
            'Recent passport-style photograph with white background',
            'Completed request form with detailed specifications',
            'Official identification documents (passport, national ID)',
            'Power of attorney documentation if requesting on behalf of others'
          ],
          downloadableForms: [
            'Certificate Request Form (PDF)',
            'Transcript Request Form (PDF)',
            'Verification Letter Request (PDF)',
            'Duplicate Diploma Application (PDF)'
          ]
        },
        {
          id: 'comprehensive-housing',
          name: 'Comprehensive Student Housing & Residential Life Services',
          description: 'Full-service residential programs providing safe, comfortable, and academically supportive living environments with comprehensive amenities and community programming.',
          steps: [
            'Complete housing application during initial registration or early application period',
            'Submit comprehensive housing preference form with roommate requests and special needs',
            'Pay housing deposits and semester fees through university financial systems',
            'Attend mandatory housing orientation and community guidelines sessions',
            'Receive detailed room assignment with facility information and move-in instructions',
            'Complete comprehensive check-in procedures with resident advisors',
            'Participate in floor meetings and community building activities'
          ],
          requiredDocuments: [
            'Completed housing application with detailed preferences and requirements',
            'Current medical certificates including vaccination records and health assessments',
            'Guardian consent forms and emergency contact information (required for students under 21)',
            'Official fee payment receipts for housing deposits and semester charges',
            'Roommate compatibility questionnaire and lifestyle preferences form',
            'Special accommodation requests with supporting medical documentation if applicable'
          ],
          downloadableForms: [
            'Housing Application Form (PDF)',
            'Roommate Preference Form (PDF)',
            'Medical Information Form (PDF)',
            'Housing Contract Agreement (PDF)',
            'Special Accommodations Request Form (PDF)'
          ]
        },
        {
          id: 'career-development',
          name: 'Career Development & Professional Preparation Services',
          description: 'Comprehensive career services including professional development, internship coordination, job placement assistance, and lifelong career support.',
          steps: [
            'Complete career assessment and professional interests evaluation',
            'Participate in career planning workshops and industry exploration sessions',
            'Develop professional resume, portfolio, and interview preparation',
            'Apply for internships and practical training opportunities',
            'Attend networking events and employer recruitment sessions',
            'Receive job placement assistance and post-graduation career support'
          ],
          requiredDocuments: [
            'Updated academic transcripts and course completion certificates',
            'Professional references and recommendation letters',
            'Portfolio of academic and professional work samples',
            'Career objectives statement and professional goals essay'
          ],
          downloadableForms: [
            'Career Services Registration Form (PDF)',
            'Internship Application Form (PDF)',
            'Employer Partnership Agreement (PDF)',
            'Alumni Career Network Registration (PDF)'
          ]
        },
        {
          id: 'international-programs',
          name: 'International Exchange & Study Abroad Programs',
          description: 'Global education opportunities through international partnerships, exchange programs, and study abroad initiatives with comprehensive support services.',
          steps: [
            'Attend international programs information sessions and cultural orientation',
            'Complete application for specific exchange or study abroad programs',
            'Participate in language proficiency testing and cultural preparation workshops',
            'Secure necessary visas, permits, and international documentation',
            'Complete pre-departure orientation and safety briefings',
            'Begin international academic experience with ongoing support services'
          ],
          requiredDocuments: [
            'Valid passport with appropriate visa documentation',
            'Official academic transcripts with minimum GPA requirements',
            'Language proficiency certificates (TOEFL, IELTS, or equivalent)',
            'International health insurance and medical clearance',
            'Financial support documentation and banking statements',
            'Cultural adaptation and safety agreement forms'
          ],
          downloadableForms: [
            'International Exchange Application (PDF)',
            'Study Abroad Interest Form (PDF)',
            'Cultural Orientation Checklist (PDF)',
            'International Emergency Contact Form (PDF)'
          ]
        }
      ],
      news: [
        {
          id: 'news-1',
          title: 'New Academic Year 2024-2025 Registration Opens with Enhanced Digital Platform',
          summary: 'Revolutionary online registration system launches for the new academic year, featuring AI-powered course recommendations, integrated academic planning, and streamlined enrollment processes.',
          date: '2024-08-15',
          image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          category: 'Academic Announcements'
        },
        {
          id: 'news-2',
          title: 'International Student Activities Week 2024: Celebrating Global Diversity',
          summary: 'Week-long celebration featuring cultural festivals, international cuisine, traditional performances, and global citizenship workshops with participation from 25 countries.',
          date: '2024-09-10',
          image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          category: 'Cultural Events'
        },
        {
          id: 'news-3',
          title: 'Fall Semester 2024 Final Examination Schedule Released with Digital Innovations',
          summary: 'Comprehensive examination schedule published with new digital proctoring options, accessibility accommodations, and real-time result tracking systems.',
          date: '2024-11-20',
          image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          category: 'Examination News'
        },
        {
          id: 'news-4',
          title: 'Mental Health Awareness Campaign Launches Campus-Wide Support Services',
          summary: 'Comprehensive mental health initiative introduces 24/7 counseling hotline, peer support networks, and wellness programming for student mental health.',
          date: '2024-10-05',
          image: 'https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          category: 'Student Wellness'
        },
        {
          id: 'news-5',
          title: 'Student Innovation Challenge 2024 Showcases Breakthrough Projects',
          summary: 'Annual innovation competition highlights student entrepreneurship with winning projects in sustainability, technology, and social impact receiving funding support.',
          date: '2024-11-12',
          image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          category: 'Innovation & Research'
        },
        {
          id: 'news-6',
          title: 'New Student Housing Complex Opens with Smart Technology Integration',
          summary: 'State-of-the-art residential facilities feature smart room controls, sustainable energy systems, and community spaces designed for modern student living.',
          date: '2024-09-28',
          image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          category: 'Campus Development'
        }
      ],
      media: [
        {
          id: 'media-1',
          title: 'Student Orientation Day 2024: Building Tomorrow\'s Leaders',
          type: 'photo',
          url: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
          description: 'Comprehensive photo gallery from student orientation featuring campus tours, academic fairs, and new student welcome ceremonies',
          date: '2024-09-01'
        },
        {
          id: 'media-2',
          title: 'Annual Cultural Festival: Unity in Diversity Celebration',
          type: 'video',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          thumbnail: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
          description: 'Highlights from the annual cultural festival showcasing international performances, art exhibitions, and community celebrations',
          date: '2024-10-15'
        },
        {
          id: 'media-3',
          title: 'Comprehensive Student Handbook 2024-2025',
          type: 'document',
          url: '/assets/documents/student-handbook-2024.pdf',
          description: 'Complete guide covering academic policies, campus resources, student services, and university life information',
          date: '2024-08-01'
        },
        {
          id: 'media-4',
          title: 'Campus Innovation Showcase: Student Projects Exhibition',
          type: 'photo',
          url: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg',
          description: 'Photo documentation of student innovation projects, research presentations, and entrepreneurial ventures',
          date: '2024-11-10'
        },
        {
          id: 'media-5',
          title: 'Student Success Stories: Alumni Impact Documentary',
          type: 'video',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          thumbnail: 'https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg',
          description: 'Inspiring documentary featuring successful alumni and their contributions to society and professional fields',
          date: '2024-10-20'
        },
        {
          id: 'media-6',
          title: 'Academic Excellence Awards Ceremony 2024',
          type: 'photo',
          url: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg',
          description: 'Celebration of academic achievements, scholarship recipients, and outstanding student accomplishments',
          date: '2024-11-25'
        }
      ],
      statistics: [
        { label: 'Enrolled Students', value: '3,750', icon: 'pi pi-users' },
        { label: 'Annual Activities', value: '125', icon: 'pi pi-star' },
        { label: 'Services Delivered', value: '8,400', icon: 'pi pi-check-circle' },
        { label: 'Student Satisfaction', value: '97%', icon: 'pi pi-heart' },
        { label: 'International Students', value: '480', icon: 'pi pi-globe' },
        { label: 'Scholarships Awarded', value: '290', icon: 'pi pi-trophy' },
        { label: 'Career Placement Rate', value: '94%', icon: 'pi pi-briefcase' },
        { label: 'Research Projects', value: '156', icon: 'pi pi-search' }
      ],
      activities: [
        {
          id: 'activity-1',
          title: 'International Language Competition Championship',
          description: 'Annual multilingual competition featuring 12 languages with cultural exchange and translation challenges',
          date: '2024-03-15',
          type: 'Academic Competition',
          image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg'
        },
        {
          id: 'activity-2',
          title: 'Global Cultural Exchange Program Initiative',
          description: 'International student exchange program with partner universities in Europe, Asia, and Americas',
          date: '2024-05-20',
          type: 'International Program',
          image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg'
        },
        {
          id: 'activity-3',
          title: 'Student Leadership Development Summit',
          description: 'Comprehensive leadership training program with workshops on communication, project management, and team building',
          date: '2024-04-18',
          type: 'Professional Development',
          image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg'
        },
        {
          id: 'activity-4',
          title: 'Community Service and Volunteer Fair',
          description: 'Connecting students with local and international volunteer opportunities and community service projects',
          date: '2024-06-12',
          type: 'Community Engagement',
          image: 'https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg'
        },
        {
          id: 'activity-5',
          title: 'Technology and Innovation Hackathon',
          description: '48-hour innovation challenge focusing on sustainable technology solutions and social impact projects',
          date: '2024-07-22',
          type: 'Innovation Challenge',
          image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg'
        }
      ],
      achievements: [
        {
          id: 'achievement-1',
          title: 'Excellence in Student Services National Award 2024',
          description: 'Recognized nationally for outstanding student support services, innovative programs, and exceptional student satisfaction rates',
          date: '2024-06-10',
          image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg'
        },
        {
          id: 'achievement-2',
          title: 'International Education Partnership Recognition',
          description: 'Awarded for successful international collaboration and cultural exchange program development',
          date: '2024-08-22',
          image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg'
        },
        {
          id: 'achievement-3',
          title: 'Digital Innovation in Education Award',
          description: 'Recognized for implementing cutting-edge educational technology and digital learning platforms',
          date: '2024-09-15',
          image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg'
        }
      ]
    },
    // Additional sectors with expanded content...
    {
      id: 'postgraduate-research',
      name: 'Postgraduate Studies & Research',
      title: 'Sector of Postgraduate Studies & Research Excellence',
      description: `The Postgraduate Studies and Research Sector represents the pinnacle of academic achievement and scholarly excellence within our institution. We are dedicated to fostering a vibrant research ecosystem that promotes innovation, critical thinking, and groundbreaking discoveries across diverse academic disciplines. Our comprehensive approach to postgraduate education combines rigorous academic training with practical research experience, preparing scholars to become leaders in their fields and contributors to global knowledge. Through strategic partnerships with international institutions, cutting-edge research facilities, and mentorship from renowned faculty, we create an environment where intellectual curiosity thrives and transformative research emerges. Our commitment extends beyond traditional boundaries, encompassing interdisciplinary collaboration, community engagement, and the practical application of research findings to address real-world challenges.`,
      image: 'https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      viceDean: {
        name: 'Prof. Dr. Youssef Abbas Ali',
        title: 'Vice Dean for Postgraduate Studies and Research Excellence',
        photo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        email: 'postgraduate@luxor.edu.eg',
        office: 'Research Excellence Center - Building A, Floor 3, Suite 301'
      },
      departments: [
        {
          id: 'graduate-admissions',
          name: 'Graduate Admissions & Academic Excellence Department',
          overview: 'The Graduate Admissions & Academic Excellence Department manages comprehensive admission processes for Master\'s and PhD programs while maintaining the highest standards of academic excellence and research integrity.',
          responsibilities: [
            'Managing comprehensive Master\'s and PhD application processes with international standards',
            'Coordinating thesis and dissertation topic registration with faculty advisory committees',
            'Facilitating research supervisor assignments and mentorship relationships',
            'Maintaining detailed postgraduate student academic records and progress tracking',
            'Issuing specialized enrollment certificates and research documentation',
            'Implementing quality assurance measures for postgraduate program standards',
            'Coordinating with external examiners and international research collaborators',
            'Managing research ethics approvals and institutional review board processes',
            'Facilitating interdisciplinary research collaborations and joint degree programs',
            'Supporting postgraduate student professional development and career advancement'
          ],
          contact: {
            email: 'pg.admissions@luxor.edu.eg',
            office: 'Postgraduate Studies Building - 1st Floor, Admissions Suite',
            phone: '+20 95 237 2001'
          }
        },
        {
          id: 'research-development',
          name: 'Research Development & Innovation Department',
          overview: 'Dedicated to advancing research excellence through comprehensive support services, funding acquisition, and innovation commercialization initiatives.',
          responsibilities: [
            'Developing and implementing institutional research strategy and priorities',
            'Managing research grant applications and funding opportunity identification',
            'Supporting research proposal development and peer review processes',
            'Coordinating research ethics training and compliance monitoring',
            'Facilitating industry partnerships and technology transfer initiatives',
            'Managing research facilities and equipment procurement and maintenance',
            'Supporting publication and dissemination of research findings',
            'Organizing research conferences, symposiums, and scholarly events',
            'Providing statistical consulting and research methodology support',
            'Managing intellectual property protection and commercialization processes'
          ],
          contact: {
            email: 'research.dev@luxor.edu.eg',
            office: 'Research Innovation Center - Building B, Floors 2-3',
            phone: '+20 95 237 2002'
          }
        },
        {
          id: 'thesis-dissertation',
          name: 'Thesis & Dissertation Management Department',
          overview: 'Comprehensive oversight of thesis and dissertation processes from conception to completion, ensuring academic excellence and research integrity throughout the scholarly journey.',
          responsibilities: [
            'Managing thesis and dissertation proposal approval processes',
            'Coordinating comprehensive examination scheduling and evaluation',
            'Facilitating defense scheduling and examination committee formation',
            'Overseeing thesis and dissertation formatting and submission requirements',
            'Managing digital repository and archival systems for completed research',
            'Coordinating plagiarism detection and academic integrity verification',
            'Supporting students through research methodology and writing workshops',
            'Managing publication and dissemination of outstanding research work',
            'Coordinating external examiner appointments and evaluation processes',
            'Providing statistical and technical support for research analysis'
          ],
          contact: {
            email: 'thesis.mgmt@luxor.edu.eg',
            office: 'Academic Research Building - 2nd Floor, Thesis Center',
            phone: '+20 95 237 2003'
          }
        },
        {
          id: 'international-collaboration',
          name: 'International Research Collaboration Department',
          overview: 'Fostering global research partnerships, international exchange programs, and collaborative research initiatives that expand the reach and impact of institutional research.',
          responsibilities: [
            'Developing strategic partnerships with international research institutions',
            'Coordinating joint research projects and collaborative grant applications',
            'Managing international researcher exchange and visiting scholar programs',
            'Facilitating cross-cultural research methodologies and comparative studies',
            'Supporting international conference participation and presentation opportunities',
            'Managing bilateral agreements and memoranda of understanding',
            'Coordinating dual degree programs and international research supervision',
            'Supporting publication in international peer-reviewed journals',
            'Managing international research funding and budget administration',
            'Facilitating cultural competency training for international collaboration'
          ],
          contact: {
            email: 'international.research@luxor.edu.eg',
            office: 'International Research Center - Building C, Floor 1',
            phone: '+20 95 237 2004'
          }
        }
      ],
      services: [
        {
          id: 'comprehensive-graduate-admission',
          name: 'Comprehensive Graduate Admission & Program Selection Services',
          description: 'Streamlined admission process for Master\'s and PhD programs with personalized academic counseling, research area matching, and comprehensive support throughout the application journey.',
          steps: [
            'Complete comprehensive online application with detailed academic and research background',
            'Submit research proposal or statement of research interests with preliminary literature review',
            'Participate in subject-specific entrance examinations and research aptitude assessments',
            'Attend in-depth interviews with faculty committees and potential research supervisors',
            'Receive detailed admission decision with program placement and funding information',
            'Complete enrollment procedures including research ethics training and methodology workshops',
            'Participate in comprehensive orientation program with research facility tours',
            'Finalize research supervision arrangements and academic planning consultations'
          ],
          requiredDocuments: [
            'Official Bachelor\'s degree certificate with minimum GPA requirements (for Master\'s)',
            'Official Master\'s degree certificate with thesis documentation (for PhD)',
            'Complete official transcripts from all previously attended institutions worldwide',
            'Comprehensive research proposal with literature review and methodology outline',
            'Three detailed letters of recommendation from academic or professional supervisors',
            'Standardized language proficiency certificates (TOEFL, IELTS, or institutional equivalent)',
            'Curriculum vitae with detailed academic, research, and professional experience',
            'Writing samples or portfolio demonstrating research and analytical capabilities',
            'Statement of purpose outlining research interests and career objectives',
            'Official translations of all non-English documents by certified translation services'
          ],
          downloadableForms: [
            'Graduate Application Form (PDF)',
            'Research Proposal Template (PDF)',
            'Recommendation Letter Form (PDF)',
            'Financial Support Declaration (PDF)',
            'International Student Supplemental Form (PDF)'
          ]
        },
        {
          id: 'research-supervision',
          name: 'Research Supervision & Mentorship Services',
          description: 'Comprehensive research guidance and mentorship program connecting students with expert faculty supervisors and providing ongoing support throughout the research journey.',
          steps: [
            'Complete research interest assessment and academic background evaluation',
            'Participate in supervisor matching process based on research expertise and compatibility',
            'Establish formal supervision agreement with clear expectations and timelines',
            'Attend regular supervision meetings with progress reviews and feedback sessions',
            'Receive guidance on research methodology, data collection, and analysis techniques',
            'Participate in research skill development workshops and academic writing training'
          ],
          requiredDocuments: [
            'Detailed research proposal with supervisor approval and endorsement',
            'Academic transcript verification with minimum GPA confirmation',
            'Supervision agreement signed by student, supervisor, and department head',
            'Research ethics training completion certificate'
          ],
          downloadableForms: [
            'Supervision Agreement Template (PDF)',
            'Research Progress Report Form (PDF)',
            'Supervisor Evaluation Form (PDF)',
            'Research Methodology Checklist (PDF)'
          ]
        },
        {
          id: 'thesis-dissertation-support',
          name: 'Comprehensive Thesis & Dissertation Support Services',
          description: 'End-to-end support for thesis and dissertation completion including writing assistance, formatting guidance, defense preparation, and publication support.',
          steps: [
            'Register thesis or dissertation topic with departmental approval and committee formation',
            'Submit regular progress reports and participate in milestone reviews',
            'Receive writing and research methodology support through workshops and individual consultations',
            'Complete comprehensive examination and proposal defense requirements',
            'Submit draft chapters for review and receive detailed feedback from advisory committee',
            'Prepare final thesis or dissertation with professional formatting and citation standards',
            'Schedule and prepare for final defense with presentation skills training',
            'Complete post-defense revisions and final submission for degree conferral'
          ],
          requiredDocuments: [
            'Approved thesis or dissertation proposal with committee signatures',
            'Regular progress reports and milestone completion certificates',
            'IRB approval documentation for research involving human subjects',
            'Completed thesis or dissertation following institutional formatting guidelines',
            'Committee recommendation letters and defense evaluation forms'
          ],
          downloadableForms: [
            'Thesis Registration Form (PDF)',
            'Progress Report Template (PDF)',
            'Defense Scheduling Form (PDF)',
            'Final Submission Checklist (PDF)'
          ]
        }
      ],
      news: [
        {
          id: 'pg-news-1',
          title: 'Distinguished PhD Defense in Comparative Literature and Cultural Studies',
          summary: 'Groundbreaking dissertation on cross-cultural narrative analysis defended with international examination committee participation via digital platform.',
          date: '2024-12-05',
          image: 'https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg',
          category: 'Thesis Defense'
        },
        {
          id: 'pg-news-2',
          title: 'Revolutionary Master\'s Program in Digital Humanities and Translation Technology',
          summary: 'Innovative interdisciplinary program launching Fall 2025, combining traditional translation studies with artificial intelligence and digital technology.',
          date: '2024-11-15',
          image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg',
          category: 'Program Innovation'
        },
        {
          id: 'pg-news-3',
          title: 'International Research Symposium 2024: Advancing Global Knowledge Exchange',
          summary: 'Three-day international conference featuring 150+ researchers from 30 countries presenting cutting-edge research in humanities and social sciences.',
          date: '2024-10-20',
          image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
          category: 'Academic Conference'
        },
        {
          id: 'pg-news-4',
          title: 'Research Excellence Grant Awards Totaling $2.5M Announced',
          summary: 'Major funding awarded to 15 outstanding research projects focusing on sustainable development, cultural preservation, and technological innovation.',
          date: '2024-11-28',
          image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
          category: 'Research Funding'
        }
      ],
      media: [
        {
          id: 'pg-media-1',
          title: 'International Research Excellence Conference 2024',
          type: 'photo',
          url: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
          description: 'Comprehensive photo gallery from the international research conference featuring keynote speakers, research presentations, and networking sessions',
          date: '2024-10-20'
        },
        {
          id: 'pg-media-2',
          title: 'Outstanding PhD Defense Ceremony Highlights',
          type: 'video',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          thumbnail: 'https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg',
          description: 'Video highlights from exceptional PhD defense ceremonies showcasing academic excellence and scholarly achievement',
          date: '2024-11-01'
        },
        {
          id: 'pg-media-3',
          title: 'Comprehensive Research Guidelines and Methodology Handbook 2024',
          type: 'document',
          url: '/assets/documents/research-guidelines-2024.pdf',
          description: 'Complete research methodology guide for postgraduate students including ethical guidelines, formatting standards, and best practices',
          date: '2024-09-01'
        }
      ],
      statistics: [
        { label: 'Master\'s Students', value: '520', icon: 'pi pi-graduation-cap' },
        { label: 'PhD Candidates', value: '185', icon: 'pi pi-star' },
        { label: 'Annual Conferences', value: '22', icon: 'pi pi-calendar' },
        { label: 'Research Publications', value: '340', icon: 'pi pi-book' },
        { label: 'International Collaborations', value: '45', icon: 'pi pi-globe' },
        { label: 'Research Grants Awarded', value: '$3.2M', icon: 'pi pi-dollar' },
        { label: 'PhD Completion Rate', value: '91%', icon: 'pi pi-chart-line' },
        { label: 'Industry Partnerships', value: '28', icon: 'pi pi-briefcase' }
      ],
      activities: [
        {
          id: 'pg-activity-1',
          title: 'Advanced Research Methodology and Statistical Analysis Workshop',
          description: 'Intensive three-day workshop covering quantitative and qualitative research methods with hands-on data analysis training',
          date: '2024-09-25',
          type: 'Academic Workshop',
          image: 'https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg'
        },
        {
          id: 'pg-activity-2',
          title: 'Global Research Collaboration and Partnership Summit',
          description: 'International summit focusing on building research partnerships and collaborative opportunities with global institutions',
          date: '2024-11-10',
          type: 'International Summit',
          image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg'
        }
      ],
      achievements: [
        {
          id: 'pg-achievement-1',
          title: 'International Excellence in Graduate Education Award 2024',
          description: 'Prestigious international recognition for outstanding postgraduate programs and research supervision excellence',
          date: '2024-07-15',
          image: 'https://images.pexels.com/photos/4207707/pexels-photo-4207707.jpeg'
        }
      ]
    },
    {
      id: 'community-environmental',
      name: 'Community Service & Environmental Development',
      title: 'Sector of Community Service & Environmental Sustainability',
      description: `The Community Service and Environmental Development Sector serves as the vital bridge connecting our academic institution with the broader community through transformative initiatives, sustainable development projects, and comprehensive environmental stewardship programs. Our mission extends far beyond traditional academic boundaries, encompassing holistic community engagement, environmental conservation, and social responsibility. We are committed to creating lasting positive impact through evidence-based interventions, collaborative partnerships, and innovative solutions that address pressing social and environmental challenges. Our comprehensive approach integrates community needs assessment, stakeholder engagement, and sustainable development principles to ensure that our initiatives create meaningful, long-term benefits for all community members while promoting environmental sustainability and social equity.`,
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      viceDean: {
        name: 'Prof. Dr. Mahmoud Hamza Mohamed',
        title: 'Vice Dean for Community Service and Environmental Sustainability',
        photo: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        email: 'community@luxor.edu.eg',
        office: 'Community Engagement Center - Building E, Floor 2, Suite 205'
      },
      departments: [
        {
          id: 'community-outreach',
          name: 'Community Outreach & Social Development Department',
          overview: 'The Community Outreach & Social Development Department designs and implements comprehensive community engagement programs that address social challenges, promote community empowerment, and foster sustainable development through collaborative partnerships.',
          responsibilities: [
            'Developing comprehensive community needs assessments and impact evaluation frameworks',
            'Coordinating large-scale community workshops, training programs, and capacity building initiatives',
            'Managing extensive volunteer recruitment, training, and deployment programs',
            'Implementing targeted social initiatives addressing poverty, education, and health disparities',
            'Building strategic partnerships with NGOs, government agencies, and international organizations',
            'Coordinating awareness campaigns on social issues, human rights, and community development',
            'Managing community-based participatory research projects with measurable outcomes',
            'Facilitating community leadership development and civic engagement programs',
            'Implementing digital inclusion initiatives and technology access programs',
            'Coordinating emergency response and disaster relief community support services'
          ],
          contact: {
            email: 'outreach@luxor.edu.eg',
            office: 'Community Engagement Center - Building E, Floor 1',
            phone: '+20 95 237 3001'
          }
        },
        {
          id: 'environmental-sustainability',
          name: 'Environmental Sustainability & Conservation Department',
          overview: 'Dedicated to advancing environmental stewardship through comprehensive sustainability initiatives, conservation projects, and innovative solutions for environmental challenges.',
          responsibilities: [
            'Developing institutional sustainability policies and environmental management systems',
            'Implementing comprehensive waste reduction, recycling, and circular economy programs',
            'Managing renewable energy projects and carbon footprint reduction initiatives',
            'Coordinating biodiversity conservation and ecosystem restoration projects',
            'Operating environmental monitoring and research programs with community participation',
            'Facilitating environmental education and awareness programs for all age groups',
            'Managing green infrastructure development and sustainable campus initiatives',
            'Coordinating climate change adaptation and mitigation community programs',
            'Implementing water conservation and management systems with technological innovation',
            'Supporting sustainable agriculture and food security community projects'
          ],
          contact: {
            email: 'environment@luxor.edu.eg',
            office: 'Environmental Research Center - Building F, Floors 1-2',
            phone: '+20 95 237 3002'
          }
        }
      ],
      services: [
        {
          id: 'comprehensive-training',
          name: 'Comprehensive Community Training & Professional Development Programs',
          description: 'Extensive training programs designed to build community capacity, enhance professional skills, and promote lifelong learning through diverse educational opportunities.',
          steps: [
            'Complete comprehensive community needs assessment and skills gap analysis',
            'Browse extensive catalog of available training programs and professional development workshops',
            'Register through online platform or in-person consultation with program coordinators',
            'Pay program fees through flexible payment options including sliding scale and scholarship opportunities',
            'Attend interactive workshop sessions with expert facilitators and hands-on learning experiences',
            'Complete practical assignments and community-based project implementations',
            'Receive official completion certificates and continuing education credit recognition',
            'Participate in ongoing alumni network and professional development support services'
          ],
          requiredDocuments: [
            'Completed registration form with detailed background and goals information',
            'Official identification documents and residency verification',
            'Educational certificates or professional credentials relevant to training area',
            'Community recommendation letters or organizational endorsement (for specialized programs)',
            'Financial assistance application and supporting documentation if applicable'
          ],
          downloadableForms: [
            'Training Program Registration Form (PDF)',
            'Professional Development Plan Template (PDF)',
            'Community Impact Assessment Form (PDF)',
            'Certificate Verification Request (PDF)'
          ]
        }
      ],
      news: [
        {
          id: 'comm-news-1',
          title: 'Transformative Environmental Conservation Campaign 2024: Community Partnership Initiative',
          summary: 'Comprehensive environmental awareness and action campaign launched with 25 community organizations, targeting climate change mitigation and sustainable development goals.',
          date: '2024-10-05',
          image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
          category: 'Environmental Action'
        },
        {
          id: 'comm-news-2',
          title: 'Mobile Medical Outreach Program Reaches 15,000 Community Members',
          summary: 'Comprehensive healthcare initiative providing free medical services, health screenings, and wellness education to underserved rural communities.',
          date: '2024-11-12',
          image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
          category: 'Health & Wellness'
        },
          {
          id: 'comm-news-2',
          title: 'Mobile Medical Outreach Program Reaches 15,000 Community Members',
          summary: 'Comprehensive healthcare initiative providing free medical services, health screenings, and wellness education to underserved rural communities.',
          date: '2024-11-12',
          image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
          category: 'Health & Wellness'
        },
          {
          id: 'comm-news-2',
          title: 'Mobile Medical Outreach Program Reaches 15,000 Community Members',
          summary: 'Comprehensive healthcare initiative providing free medical services, health screenings, and wellness education to underserved rural communities.',
          date: '2024-11-12',
          image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg',
          category: 'Health & Wellness'
        }
      ],
      media: [
        {
          id: 'comm-media-1',
          title: 'Community Workshop and Training Series 2024',
          type: 'photo',
          url: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg',
          description: 'Comprehensive photo documentation of community training workshops, skill development programs, and capacity building initiatives',
          date: '2024-10-15'
        }
      ],
      statistics: [
        { label: 'Community Programs', value: '185', icon: 'pi pi-users' },
        { label: 'Environmental Projects', value: '45', icon: 'pi pi-globe' },
        { label: 'Beneficiaries Served', value: '15,600', icon: 'pi pi-heart' },
        { label: 'Partner Organizations', value: '78', icon: 'pi pi-handshake' },
        { label: 'Volunteers Engaged', value: '1,250', icon: 'pi pi-star' },
        { label: 'Training Hours Delivered', value: '8,400', icon: 'pi pi-clock' },
        { label: 'Sustainability Projects', value: '32', icon: 'pi pi-leaf' },
        { label: 'Community Impact Score', value: '94%', icon: 'pi pi-chart-line' }
      ],
      activities: [
        {
          id: 'comm-activity-1',
          title: 'City-Wide Environmental Conservation and Clean-Up Campaign',
          description: 'Large-scale environmental initiative involving 500+ volunteers in comprehensive city beautification and environmental restoration',
          date: '2024-08-20',
          type: 'Environmental Campaign',
          image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg'
        }
      ],
      achievements: [
        {
          id: 'comm-achievement-1',
          title: 'National Excellence in Community Impact Award 2024',
          description: 'Prestigious national recognition for transformative community service programs and exceptional environmental stewardship initiatives',
          date: '2024-08-10',
          image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg'
        }
      ]
    }
  ];

  getAllSectors(): Observable<SectorData[]> {
    return of(this.sectors);
  }

  getSectorById(id: string): Observable<SectorData | undefined> {
    const sector = this.sectors.find(s => s.id === id);
    return of(sector);
  }
}