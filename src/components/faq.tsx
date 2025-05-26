import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowAccordingIcon } from "./icons"

export interface FAQItem {
    id: string
    question: string
    answer: string
}

export interface FAQAccordionProps {
    title?: string
    faqs: FAQItem[]
    defaultOpenItem?: string
}

export default function FAQAccordion({
    faqs,
    defaultOpenItem,
}: FAQAccordionProps) {
    return (

        <Accordion type="single" collapsible defaultValue={defaultOpenItem} className="space-y-4 w-full">
            {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border-b border-neutral-700">
                    <AccordionTrigger
                        className={`text-left text-2xl  cursor-pointer font-normal py-6 [&>svg]:hidden`}
                    >
                        <div className="flex items-center gap-4">
                            <ArrowAccordingIcon className="text-muted-foreground" />
                            {faq.question}
                        </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-neutral-400 text-base pt-0 pb-4 ml-8">
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
