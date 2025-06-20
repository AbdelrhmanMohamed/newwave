import ButtonLine from "@/components/headings/button-line";
import Link from "next/link";

type Props = {
  message?: string;
  href?: string;
  buttonTitle?: string;
};

export function CTASection({ message, href, buttonTitle }: Props) {
  return (
    <div
      className={`mt-8 mb-20 border border-primary/50 text-center p-6 text-neutral-300 mx-4 md:mx-8 lg:mx-16`}
    >
      <q>
        {message ||
          "New Wave is always open to exploring new strategic partnerships with organizations that share our commitment to innovation, quality, and client success in the event technology and communications space. If your company offers pioneering solutions or capabilities that could benefit our clients and contribute to the dynamic growth of the event industry in Saudi Arabia and the MENA region, we invite you to connect with us."}
      </q>
      <div className="mt-6 flex justify-center">
        <Link href={href || "/contact-us"}>
          <ButtonLine
            title={buttonTitle || "Contact Us to Explore Opportunities"}
            className="text-primary hover:text-white"
          />
        </Link>
      </div>
    </div>
  );
}
