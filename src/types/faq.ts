import { BlocksContent } from "@strapi/blocks-react-renderer";
import { Media, PageHeader } from "./common";

export interface FAQ {
  id: number;
  question: string;
  answer: BlocksContent;
}

export interface FAQPageData {
  id: number;
  title: string;
  cover: Media;
  header?: PageHeader;
  contact_form_title?: string;
  contact_form_image?: Media;
}

export interface FAQGroup {
  id: number;
  title: string;
  image: Media;
  faqs: FAQ[];
  order: number;
}
