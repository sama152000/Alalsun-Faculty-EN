export interface StudentGuideSection {
  id: string;
  title: string;
  icon: string;
  content: StudentGuideContent;
}

export interface StudentGuideContent {
  title: string;
  description: string;
  sections: ContentSection[];
}

export interface ContentSection {
  subtitle: string;
  points: string[];
  additionalInfo?: string;
}

export interface DepartmentInfo {
  name: string;
  criteria: string[];
}

export interface ExamRule {
  category: string;
  rules: string[];
}