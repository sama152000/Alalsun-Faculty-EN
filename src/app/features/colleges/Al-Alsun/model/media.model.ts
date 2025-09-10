export interface MediaItem {
  id: string;
  name: string;
  type: 'image' | 'video' | 'pdf';
  url: string;
  size: number;
  uploadDate: string;
  folder?: string;
  tags?: string[];
  thumbnail?: string;
}

export interface MediaFolder {
  id: string;
  name: string;
  description?: string;
  createdDate: string;
  itemCount: number;
}

export interface MediaUploadResult {
  success: boolean;
  mediaItem?: MediaItem;
  error?: string;
}