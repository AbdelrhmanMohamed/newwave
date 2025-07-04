import { Media } from "./common";

export interface Testimonial {
  id: number;
  author: string;
  position: string;
  message: string;
  avatar: Media;
  rate?: number;
}
