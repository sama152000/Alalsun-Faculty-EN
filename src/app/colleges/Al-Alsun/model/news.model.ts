export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  content: string;
  date: Date;
  category: NewsCategory;
  image: string;
  author?: string;
  tags?: string[];
  featured?: boolean;
}

export enum NewsCategory {
  STUDENTS = 'students',
  POSTGRADUATE = 'postgraduate',
  BOARD = 'board'
}

export interface NewsFilter {
  category?: NewsCategory;
  month?: number;
  year?: number;
  keyword?: string;
}