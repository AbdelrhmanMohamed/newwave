/* eslint-disable @typescript-eslint/no-explicit-any */
// import { strapiImage } from "../strapi/strapiImage";

export interface SEO_Response {
  id: number;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  metaRobots: string;
  structuredData: {
    "@context": string;
    "@type": string;
    name: string;
    description: string;
    url: string;
    publisher: {
      "@type": string;
      name: string;
      logo: {
        "@type": string;
        url: string;
      };
    };
  };
  metaViewport: string;
  canonicalURL: string;
  metaImage: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail?: ImageFormat;
      small?: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
  metaSocial: MetaSocial[];
}

export interface MetaSocial {
  id: number;
  socialNetwork: string;
  url: string;
  title: string;
  description: string;
}

export interface ImageFormat {
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

export function generateMetadataObject(seo: SEO_Response) {
  // const socialOpenGraphNetworks = seo?.metaSocial?.reduce(
  //   (acc: any, social: MetaSocial) => {
  //     acc[social.socialNetwork] = {
  //       url: social?.url,
  //       title: social?.title,
  //       description: social?.description,
  //     };
  //     return acc;
  //   },
  //   {}
  // );

  return {
    title: seo?.metaTitle || "Default Title", // Fallback to 'Default Title' if title is not provided
    description: seo?.metaDescription || "Default Description", // Fallback to 'Default Description'
    keywords: seo?.keywords || "Default Keywords", // Fallback to 'Default Keywords'
    robots: seo?.metaRobots || "index, follow", // Fallback to 'index, follow'
    canonical: seo?.canonicalURL || "https://newwave.com", // Fallback to 'https://newwave.com'
    // openGraph: socialOpenGraphNetworks,
  };
}
