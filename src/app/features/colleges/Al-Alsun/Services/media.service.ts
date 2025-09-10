import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { MediaItem, MediaFolder, MediaUploadResult } from '../model/media.model';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private mediaItems$ = new BehaviorSubject<MediaItem[]>([]);
  private folders$ = new BehaviorSubject<MediaFolder[]>([]);

  constructor() {
    this.initializeMockData();
  }

  private initializeMockData() {
    const mockMedia: MediaItem[] = [
      {
        id: '1',
        name: 'faculty-building.jpg',
        type: 'image',
        url: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=600',
        size: 245760,
        uploadDate: '2025-01-15T10:30:00Z',
        folder: 'buildings',
        tags: ['faculty', 'building', 'campus']
      },
      {
        id: '2',
        name: 'graduation-ceremony.jpg',
        type: 'image',
        url: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=600',
        size: 312450,
        uploadDate: '2025-01-14T14:20:00Z',
        folder: 'events',
        tags: ['graduation', 'ceremony', 'students']
      },
      {
        id: '3',
        name: 'library-interior.jpg',
        type: 'image',
        url: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
        size: 189320,
        uploadDate: '2025-01-13T09:15:00Z',
        folder: 'facilities',
        tags: ['library', 'books', 'study']
      },
      {
        id: '4',
        name: 'conference-presentation.mp4',
        type: 'video',
        url: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        size: 1048576,
        uploadDate: '2025-01-12T16:45:00Z',
        folder: 'events',
        tags: ['conference', 'presentation', 'academic'],
        thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300'
      },
      {
        id: '5',
        name: 'student-handbook.pdf',
        type: 'pdf',
        url: '#',
        size: 2097152,
        uploadDate: '2025-01-11T11:30:00Z',
        folder: 'documents',
        tags: ['handbook', 'students', 'guide']
      },
      {
        id: '6',
        name: 'language-lab.jpg',
        type: 'image',
        url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
        size: 278540,
        uploadDate: '2025-01-10T13:20:00Z',
        folder: 'facilities',
        tags: ['laboratory', 'language', 'technology']
      }
    ];

    const mockFolders: MediaFolder[] = [
      {
        id: '1',
        name: 'Buildings',
        description: 'Faculty buildings and infrastructure',
        createdDate: '2025-01-01T00:00:00Z',
        itemCount: 1
      },
      {
        id: '2',
        name: 'Events',
        description: 'Academic events and ceremonies',
        createdDate: '2025-01-01T00:00:00Z',
        itemCount: 2
      },
      {
        id: '3',
        name: 'Facilities',
        description: 'Campus facilities and equipment',
        createdDate: '2025-01-01T00:00:00Z',
        itemCount: 2
      },
      {
        id: '4',
        name: 'Documents',
        description: 'Official documents and publications',
        createdDate: '2025-01-01T00:00:00Z',
        itemCount: 1
      }
    ];

    this.mediaItems$.next(mockMedia);
    this.folders$.next(mockFolders);
  }

  getMediaItems(): Observable<MediaItem[]> {
    return this.mediaItems$.asObservable();
  }

  getFolders(): Observable<MediaFolder[]> {
    return this.folders$.asObservable();
  }

  getMediaByFolder(folderId: string): Observable<MediaItem[]> {
    const folderName = this.folders$.value.find(f => f.id === folderId)?.name.toLowerCase();
    const filteredMedia = this.mediaItems$.value.filter(item => 
      item.folder?.toLowerCase() === folderName
    );
    return of(filteredMedia);
  }

  uploadMedia(file: File, folder?: string): Observable<MediaUploadResult> {
    // Simulate file upload
    const mediaItem: MediaItem = {
      id: Date.now().toString(),
      name: file.name,
      type: this.getFileType(file.name),
      url: URL.createObjectURL(file),
      size: file.size,
      uploadDate: new Date().toISOString(),
      folder: folder || 'general',
      tags: []
    };

    const current = this.mediaItems$.value;
    this.mediaItems$.next([...current, mediaItem]);

    return of({
      success: true,
      mediaItem: mediaItem
    });
  }

  deleteMedia(id: string): Observable<boolean> {
    const current = this.mediaItems$.value;
    this.mediaItems$.next(current.filter(item => item.id !== id));
    return of(true);
  }

  updateMedia(mediaItem: MediaItem): Observable<boolean> {
    const current = this.mediaItems$.value;
    const index = current.findIndex(item => item.id === mediaItem.id);
    if (index !== -1) {
      current[index] = mediaItem;
      this.mediaItems$.next([...current]);
    }
    return of(true);
  }

  private getFileType(filename: string): 'image' | 'video' | 'pdf' {
    const ext = filename.split('.').pop()?.toLowerCase();
    if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(ext || '')) return 'image';
    if (['mp4', 'avi', 'mov', 'wmv', 'webm'].includes(ext || '')) return 'video';
    return 'pdf';
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
}