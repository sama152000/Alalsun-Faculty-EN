export interface DashboardStats {
  totalDepartments: number;
  totalStaff: number;
  totalNews: number;
  totalMedia: number;
  totalStudents: number;
  totalSectors: number;
  publishedPages: number;
  draftPages: number;
}

export interface RecentActivity {
  id: string;
  action: string;
  target: string;
  user: string;
  timestamp: string;
  details?: string;
  type: 'create' | 'update' | 'delete' | 'publish';
}

export interface QuickAction {
  title: string;
  description: string;
  icon: string;
  route: string;
  color: string;
}

export interface SystemHealth {
  status: 'healthy' | 'warning' | 'error';
  uptime: string;
  lastBackup: string;
  storageUsed: number;
  storageTotal: number;
}