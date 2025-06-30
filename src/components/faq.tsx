import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowAccordingIcon } from "./icons";
import { FAQ } from "@/types/faq";
import BlockRendererClient from "./block-render";

export interface FAQAccordionProps {
  faqs: FAQ[];
  defaultOpenItem?: string;
}

export default function FAQAccordion({
  faqs,
  defaultOpenItem,
}: FAQAccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultOpenItem}
      className="space-y-2 w-full"
    >
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.id}
          value={String(faq.id)}
          className="border-b border-neutral-700"
        >
          <AccordionTrigger
            className={`text-left text-2xl  cursor-pointer font-normal py-6 [&>svg]:hidden`}
          >
            <div className="flex items-center gap-4">
              <ArrowAccordingIcon className="text-muted-foreground" />
              {faq.question}
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-neutral-400 text-base pt-0 pb-4 ml-8">
            <div className="mb-1">
              <BlockRendererClient content={faq.answer} />
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
