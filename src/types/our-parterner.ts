import { SEO_Response } from "@/lib/shared/metadata";
import { DataWithMedia, Media, PageHeader, RichTextWithMedia } from "./common";
import { BlocksContent } from "@strapi/blocks-react-renderer";

export interface PartnersPageData {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  cover: Media | null;
  header: PageHeader;
  gn_headline: string;
  gn_title: string;
  gn_description: BlocksContent;
  gn_image: Media | null;
  tp_description: string;
  tp_title: string;
  tp_benefits_title: string;
  tp_benefits_description: string;
  tp_technologies: DataWithMedia[];
  tp_benefits_points: {
    id: number;
    title: string;
  }[];
  tp_cover: Media | null;
  partners_title: string;
  partners_description: string;
  st_headline: string;
  collaboration: {
    id: number;
    title: string;
    description: string;
    image: Media;
    points: DataWithMedia[];
  };
  c_benefits_title: string;
  c_benefits_points: {
    id: number;
    title: string;
  }[];
  st_title: string;
  st_description: string;
  st_solutions: RichTextWithMedia[];

  final_message: string;
  call_action_text: string;
  call_action_url: string;
  seo: SEO_Response;
}
