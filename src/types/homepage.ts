import { Blog } from "./blog";
import { Achievements, ContactBanner, Marketing, Media } from "./common";
import { Partner } from "./paterner";
import { Project } from "./Project";
import { ServiceDetail } from "./service";
import { Testimonial } from "./testimonials";

interface HeroSection {
  headline: string;
  title: string;
  description: string;
  cover: Media;
  button_text: string;
  button_link: string;
  highlight_text: string;
  youtube_link?: string;
}

interface KeyFeature {
  id: number;
  title: string;
  description: string;
  icon: Media;
  url?: string;
}

export interface Homepage {
  hero: HeroSection;
  partners: Partner[];
  key_services: KeyFeature[];
  partners_title: string;
  projects_headline: string;
  projects_title: string;
  projects_description: string;
  projects: Project[];
  services: ServiceDetail[];
  marketing: Marketing;
  achievements: Achievements[];
  blogs_title: string;
  blogs_headline: string;
  blogs: Blog[];
  testimonials: Testimonial[];
  testimonials_title: string;
  testimonials_headline: string;
  testimonials_image: Media;
  contact: ContactBanner;
  services_cover: Media;
}
