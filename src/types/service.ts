import { BlocksContent } from "@strapi/blocks-react-renderer";
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
  order: number;
}

export interface Topic {
  id: number;
  title: string;
  content: BlocksContent;
  icon: Media;
  image: Media[];
}

interface MainContent {
  id: number;
  title: string;
  youtube_link: string;
  content1: string;
  content2: string;
}

interface Point {
  title: string;
  description: string;
  id: number;
}
export interface MessageBlock {
  id: number;
  title: string;
  description: string;
  image: Media;
  points: Point[];
}

export interface ServiceDetail {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  feature1: string;
  feature2: string;
  feature3: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: Media;
  main_content: MainContent;
  topics: Topic[];
  messages: MessageBlock;
}
