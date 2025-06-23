import { Media, PageHeader } from "./common";

export type Contact = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  companyName: string;
  message: string;
};

export interface Contact_Page {
  branches_description: string;
  branches_title: string;
  contact_form_title: string | null;
  createdAt: string;
  documentId: string;
  enquiries_emails_1: string;
  enquiries_emails_2: string;
  enquiries_title: string;
  id: number;
  publishedAt: string;
  say_hello_title: string | null;
  say_hello_title_description: string | null;
  updatedAt: string;
  working_hours: string;
  header_cover: Media;
  say_hello_image: Media | null;
  header: PageHeader;
}

export interface BranchLocation {
  id: number;
  lat: number;
  lng: number;
}

export interface Branch {
  id: number;
  documentId: string;
  name: string;
  address: string;
  email: string;
  tel: string;
  is_main: boolean | null;
  location: BranchLocation;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cover: Media | null;
}

export interface SocialLink {
  id: number;
  documentId: string;
  name: string;
  url: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ContactPageWithBranchesAndSocialLinks extends Contact_Page {
  branches: Branch[];
  social_links: SocialLink[];
}
