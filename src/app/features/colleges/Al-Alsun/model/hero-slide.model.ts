export interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  description?: string;
  showButton: boolean;
  buttonLink?: string;
  buttonText?: string;
  order: number;
  isActive: boolean;
}

export interface HeroSettings {
  autoPlay: boolean;
  autoPlayInterval: number;
  showIndicators: boolean;
  showNavigation: boolean;
  transitionEffect: 'fade' | 'slide';
}