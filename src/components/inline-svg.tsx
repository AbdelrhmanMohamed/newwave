"use client";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { FindIcon } from "@/components/icons";

export default function InlineSvg({
  url,
  className,
}: {
  url: string;
  className?: string;
}) {
  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!url) return;

    fetch(url)
      .then(async (res) => {
        const contentType = res.headers.get("Content-Type");

        if (!res.ok || !contentType?.includes("image/svg+xml")) {
          setError(true);
          return;
        }

        const rawSvg = await res.text();

        if (!rawSvg.includes("<svg")) {
          setError(true);
          return;
        }

        // استبدال fill/stroke بـ currentColor
        let replacedSvg = rawSvg
          .replace(/fill="(?!none)[^"]*"/gi, 'fill="currentColor"')
          .replace(/stroke="(?!none)[^"]*"/gi, 'stroke="currentColor"');

        replacedSvg = replacedSvg
          .replace(/width="[^"]*"/gi, "")
          .replace(/height="[^"]*"/gi, "");
        // تنظيف SVG باستخدام DOMPurify
        const sanitized = DOMPurify.sanitize(replacedSvg, {
          USE_PROFILES: { svg: true, svgFilters: true },
        });

        setSvgContent(sanitized);
      })
      .catch((err) => {
        console.error("Failed to fetch SVG:", err);
        setError(true);
      });
  }, [url]);

  if (error) {
    return <FindIcon />;
  }

  if (!svgContent) return null;

  return (
    <div
      className={`inline-svg ${className || ""}`}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
