import { BlocksContent } from "@strapi/blocks-react-renderer";
import { Media } from "./common";

export interface BlogPageData {
  id: number;
  title: string;
  cover: Media;
}

export interface Blog {
  id: number;
  title: string;
  slug: string;
  author: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: Media;
  subjects?: BlogSubject[];
  summary: string;
}

export type BlogSubject = {
  id: number;
  title: string;
  content: BlocksContent;
  images?: Media[];
};
