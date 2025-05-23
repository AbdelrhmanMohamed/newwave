import { Media } from "./common";

export interface Hero {
  id: number;
  documentId: string;
  title: string;
  highlight_text?: string;
  description: string;
  button_text: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: Media;
}
