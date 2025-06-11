/* eslint-disable @typescript-eslint/no-explicit-any */
import { BlocksContent } from "@strapi/blocks-react-renderer";
import { Media, PageHeader, RichTextWithMedia } from "./common";

export interface AboutUsData {
  id: number;
  documentId: string;
  title: string;
  about_title: string;
  about_summary: BlocksContent;
  about_image: Media | null;
  proceture_title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  reach_us: string;
  contact_support_title: string;
  process_title: string;
  process_headline: string;
  process_description: string;
  cover: Media | null;
  header: PageHeader;
  proceture: Process[];
  impact_highlights: ImpactHighlight[];
  contact_support_image: Media | null;
  process: Process[];
  vision: RichTextWithMedia;
  mission: RichTextWithMedia;
  strategy: RichTextWithMedia;
  core_value_title: string;
  core_values: RichTextWithMedia[];
  our_team_title: string;
  our_team_description: BlocksContent;
  our_team_image: Media | null;
  global_presence_image: Media | null;
  global_presence_title: string;
  global_presence_description: BlocksContent;
}

export interface Process {
  id: number;
  title: string;
  iconUrl: string;
  description: BlocksContent;
}

export interface ImpactHighlight {
  id: number;
  title: string;
  count: number;
  icon: Media | null;
}
