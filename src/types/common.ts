import { BlocksContent } from "@strapi/blocks-react-renderer";

export type SearchParams = Promise<{
  [key: string]: string | string[] | undefined;
}>;

export interface Media {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: Format;
    small?: Format;
    medium?: Format;
    large?: Format;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  //   provider_metadata: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Format {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface PageHeader {
  title: string;
  icon?: Media;
  description: string;
}

export interface RichTextWithMedia {
  id: number;
  title: string;
  description: BlocksContent;
  icon?: Media;
}
