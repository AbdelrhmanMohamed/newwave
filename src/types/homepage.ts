import { Media } from "./common";
import { Partner } from "./paterner";

interface HeroSection {
  headline: string;
  title: string;
  description: string;
  cover: Media;
  button_text: string;
  button_link: string;
  highlight_text: string;
}

export interface Homepage {
  hero: HeroSection;
  partners: Partner[];
  partners_title: string;
  portfolio_title: string;
}
