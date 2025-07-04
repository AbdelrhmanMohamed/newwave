import { BlocksContent } from "@strapi/blocks-react-renderer";
import { Media, PageHeader } from "./common";

export interface ProjectPageData {
  title: string;
  cover: Media;
  header: PageHeader;
  projects_title: string;
  projects_description: string;
  final_message: string;
  call_action_url: string;
  call_action_text: string;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  main_image: Media;
  content: BlocksContent;
  gallery: Media[];
  client: string;
  sign_author: string;
  sign_image: Media;
  sign_role: string;
  video_title: string;
  video_description: string;
  youtube_link: string;
  createdAt: string;
  publishedAt: string;
}
