import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqItems = [
  {
    value: "item-1",
    question: "When are HOA meetings held?",
    answer:
      "HOA meetings are held on the second Thursday of every month at 5:30 P.M. at Park West Church.",
  },
  {
    value: "item-2",
    question: "Who is responsible for exterior maintenance?",
    answer:
      "The Deerfield Home Owners Association is responsible for a number of exterior maintenance items. See the Maintenance page for a complete list of Association responsibilities.",
  },
  {
    value: "item-3",
    question: "How do I contact the HOA?",
    answer:
      "Please use the contact information provided on the HOA website to reach the Association with questions, concerns, or requests.",
  },
  {
    value: "item-4",
    question: "What amenities are available to residents?",
    answer:
      "Deerfield residents have access to community amenities including the swimming pool and other maintained common areas.",
  },
];

export default function Faq() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <Card className="overflow-hidden">
        <CardHeader className="border-b bg-muted/40 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Frequently Asked Questions
          </p>

          <CardTitle className="mt-2 text-3xl">Have Questions?</CardTitle>
        </CardHeader>

        <CardContent className="p-6 sm:p-8">
          <Accordion.Root
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
          >
            {faqItems.map((item) => (
              <Accordion.Item
                key={item.value}
                value={item.value}
                className="border-b last:border-b-0"
              >
                <Accordion.Header>
                  <Accordion.Trigger
                    className="
                      group flex w-full items-center justify-between
                      py-5 text-left text-base font-medium
                      transition-colors hover:text-primary
                    "
                  >
                    <span>{item.question}</span>

                    <ChevronDown
                      className="
                        h-5 w-5 shrink-0 text-muted-foreground
                        transition-transform duration-200
                        group-data-[state=open]:rotate-180
                      "
                    />
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content
                  className="
                    overflow-hidden text-sm text-muted-foreground
                    data-[state=closed]:animate-accordion-up
                    data-[state=open]:animate-accordion-down
                  "
                >
                  <div className="pb-5 leading-7">{item.answer}</div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </CardContent>
      </Card>
    </section>
  );
}
