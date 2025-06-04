/* eslint-disable @typescript-eslint/no-explicit-any */
import { Media, PageHeader } from "./common";

export interface AboutUsData {
  id: number;
  documentId: string;
  title: string;
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
}

export interface Process {
  id: number;
  title: string;
  icon: any | Media | null | any;
  description: string | null | React.ReactNode;
}

export interface ImpactHighlight {
  id: number;
  title: string;
  count: number;
  icon: Media | null;
}
