import { BlocksContent } from "@strapi/blocks-react-renderer";
import { Media, PageHeader } from "./common";

export interface CareerPageData {
  title: string;
  cover: Media;
  header: PageHeader;
  reach_us: string;
  reach_us_description: string;
  mail_us: string;
  contact_form_title: string;
  contact_support_title: string;
  reach_us_image: Media;
  contact_support_image: Media;
}

export interface Career {
  id: string;
  title: string;
  location: string;
  date: Date; // أو Date إذا كنت ستحوله لاحقًا
  job_type: "Full-Time" | "Part-Time" | "Freelance" | string;
  experience: number;
  role: BlocksContent;
  skillsets: BlocksContent | null;
  image: Media | null;
  slug: string;
}

export interface ApplyCareer {
  fullName: string;
  email: string;
  phone_number: string;
  message: string;
  cv: File | null;
  career: number;
}
