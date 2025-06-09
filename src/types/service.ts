import { Media, PageHeader } from "./common";

export interface ServicePageData {
  id: number;
  title: string;
  cover: Media;
  header: PageHeader;
}

export interface Service {
  createdAt: string | number | Date;
  id: number;
  title: string;
  slug: string;
  description: string;
  image: Media;
  icon: Media;
}
