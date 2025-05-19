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
