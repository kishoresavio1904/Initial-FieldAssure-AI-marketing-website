import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/constants/testIds";

const FAQS = [
  {
    q: "Is FieldAssure AI only for safety teams?",
    a: "No. Safety is one part of the workflow. FieldAssure AI connects contractor readiness, site evidence, approvals, audit readiness, handover readiness, and billing readiness.",
  },
  {
    q: "Does FieldAssure AI replace project, HSE, or QA teams?",
    a: "No. It supports teams by giving them better proof, cleaner workflows, and clearer visibility.",
  },
  {
    q: "Can FieldAssure AI work across different countries or project types?",
    a: "Yes. FieldAssure AI is designed for global construction teams and can adapt to local field, contractor, worker documentation, approval, handover, and billing-readiness requirements. It supports operational visibility and evidence tracking, but does not provide legal or compliance guarantees.",
  },
  {
    q: "Can we use it across multiple sites?",
    a: "Yes, the platform is intended for teams managing multiple projects, contractors, and approval workflows.",
  },
  {
    q: "Is pricing fixed?",
    a: "No. Pricing depends on project size, modules, users, and rollout scope.",
  },
];

const FAQSection = () => {
  return (
    <section data-testid={FAQ.section} className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">FAQ</p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="rounded-lg border border-slate-200 bg-white px-2">
          {FAQS.map((item, i) => (
            <AccordionItem key={item.q} value={`faq-${i}`} data-testid={FAQ.item(i)} className="border-slate-200">
              <AccordionTrigger
                data-testid={FAQ.trigger(i)}
                className="px-4 text-left text-base font-semibold text-slate-900 hover:no-underline"
              >
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="px-4 text-sm leading-relaxed text-slate-600">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
