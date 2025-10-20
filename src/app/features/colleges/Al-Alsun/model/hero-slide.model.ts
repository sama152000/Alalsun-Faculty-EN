export interface HeroSlide {
  id: number;
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  description?: string;
  showButton: boolean;
  buttonLink?: string;
  buttonText?: string;
}