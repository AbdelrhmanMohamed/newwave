import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/navbar";
import ScrollProgress from "@/components/ui/scroll-progress";
import Providers from "@/api/provider";
import { Toaster } from "@/components/ui/sonner";
import Footer from "@/components/layout/footer";
import FloatingActionButton from "@/components/floating-action-button";
import ScrollToTop from "@/components/scroll-to-top";
import { getGlobalData } from "@/lib/shared/globalData";

const promptFont = Prompt({
  variable: "--font-prompt",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "New Wave | Saudi PR & Event Management Agency",
  description:
    "New Wave is a dynamic Saudi Arabian PR and Event Management powerhouse, redefining engagement through innovative experiences and strategic storytelling. Aligned with Saudi Vision 2030, we operate globally with offices in Egypt, Qatar, and the U.S.",
  keywords: [
    "Saudi Arabia PR Agency",
    "Event Management",
    "Vision 2030",
    "Public Relations Saudi",
    "Event Planning Qatar",
    "PR Egypt",
    "Global PR Agency",
  ],
  openGraph: {
    title: "New Wave | Saudi PR & Event Management Agency",
    description:
      "Redefining engagement in the era of Saudi Vision 2030. Global reach, local roots.",
    url: "https://newwav.net",
    siteName: "New Wave",
    images: [
      {
        url: "https://newwav.net/og-image.webp",
        width: 1200,
        height: 630,
        alt: "New Wave PR Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Wave | Saudi PR & Event Management Agency",
    description:
      "Dynamic PR & Events agency driving innovation and experience across Saudi Arabia, Egypt, Qatar, and the U.S.",
    images: ["https://newwav.net/og-image.webp"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // You can fetch data here if needed, but for now, we are just returning the layout
  const data = await getGlobalData();
  return (
    <html lang="en">
      <body className={`${promptFont.variable} antialiased overflow-x-hidden`}>
        <Providers>
          <main className="min-h-screen bg-background text-white">
            <ScrollProgress />
            <NavBar />
            {children}
            <Toaster />
          </main>
          <FloatingActionButton data={data} />
          <ScrollToTop />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
