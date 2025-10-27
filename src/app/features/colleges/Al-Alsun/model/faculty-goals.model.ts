export interface FacultyGoal {
  id: number;
  icon: string;
  title: string;
  description: string;
  order: number;
}

export interface FacultyGoalsSection {
  title: string;
  subtitle: string;
  goals: FacultyGoal[];
}