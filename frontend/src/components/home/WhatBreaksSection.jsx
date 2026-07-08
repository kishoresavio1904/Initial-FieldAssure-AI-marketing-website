import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  HardHat,
  ClipboardText,
  FileText,
  Warning,
  HandCoins,
  ArrowRight,
} from "@phosphor-icons/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WHAT_BREAKS } from "@/constants/testIds";

const ITEMS = [
  {
    title: "Field Evidence",
    Icon: Camera,
    problem: "Field photos, documents, and updates sit across chats, folders, and phones.",
    fix: "Capture evidence against the right site, contractor, worker, checklist, and approval flow.",
  },
  {
    title: "Contractor Readiness",
    Icon: HardHat,
    problem: "Contractor gaps are often discovered after work has already started.",
    fix: "Track required documents, worker eligibility, and readiness before field execution.",
  },
  {
    title: "Approvals",
    Icon: ClipboardText,
    problem: "Teams struggle to prove who checked, commented, rejected, or approved.",
    fix: "Keep every submission, review, comment, and approval in one visible trail.",
  },
  {
    title: "Audit Trail",
    Icon: FileText,
    problem: "Audit preparation becomes a manual chase across emails, files, and people.",
    fix: "Maintain a structured evidence trail for documents, actions, timestamps, and decisions.",
  },
  {
    title: "Readiness Blockers",
    Icon: Warning,
    problem: "Handover gets delayed because open safety, quality, document, or contractor issues are hidden.",
    fix: "Surface blockers clearly so project, HSE, QA/QC, and contractor teams know what needs action.",
  },
  {
    title: "Billing Proof",
    Icon: HandCoins,
    problem: "Invoices get stuck when work completion and approval evidence is unclear.",
    fix: "Connect approved field evidence and readiness status to billing review.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const WhatBreaksSection = () => {
  const [active, setActive] = useState(0);
  const activeItem = ITEMS[active];

  return (
    <section data-testid={WHAT_BREAKS.section} className="relative overflow-hidden bg-zinc-50">
      <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-amber-300/15 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
            The gap between chaos and proof
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            What breaks today — and how FieldAssure fixes it.
          </h2>
        </div>

        {/* Desktop / tablet: clickable list + elevated detail card */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
          className="hidden gap-6 md:grid md:grid-cols-[1fr_1.15fr] md:items-start"
        >
          <div className="flex flex-col gap-2">
            {ITEMS.map(({ title, Icon }, i) => {
              const isActive = i === active;
              return (
                <motion.button
                  key={title}
                  type="button"
                  variants={item}
                  onClick={() => setActive(i)}
                  data-testid={WHAT_BREAKS.tab(i)}
                  aria-pressed={isActive}
                  className={`flex items-center gap-3 rounded-lg border p-4 text-left transition-all duration-300 ${
                    isActive
                      ? "border-amber-400 bg-amber-50/70 shadow-md shadow-amber-900/5"
                      : "border-slate-200 bg-white hover:border-amber-200 hover:bg-amber-50/30"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 ${
                      isActive ? "bg-amber-600 text-white" : "bg-amber-50 text-amber-600"
                    }`}
                  >
                    <Icon size={20} weight="duotone" />
                  </span>
                  <span
                    className={`font-heading text-sm font-bold ${
                      isActive ? "text-amber-800" : "text-slate-900"
                    }`}
                  >
                    {title}
                  </span>
                  <ArrowRight
                    size={16}
                    className={`ml-auto shrink-0 transition-transform duration-300 ${
                      isActive ? "translate-x-0.5 text-amber-600" : "text-slate-300"
                    }`}
                  />
                </motion.button>
              );
            })}
          </div>

          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-2xl bg-gradient-to-br from-amber-100/60 via-transparent to-transparent blur-xl" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.title}
                data-testid={WHAT_BREAKS.detailCard}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="rounded-2xl border border-amber-200/70 bg-white p-7 shadow-[0_24px_55px_-20px_rgba(217,119,6,0.28)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-600 text-white shadow-inner">
                  <activeItem.Icon size={24} weight="duotone" />
                </span>
                <h3 className="mt-4 font-heading text-xl font-extrabold text-slate-900">
                  {activeItem.title}
                </h3>

                <div className="mt-5 rounded-lg border border-slate-200 bg-zinc-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Problem today
                  </p>
                  <p data-testid={WHAT_BREAKS.detailProblem} className="mt-1.5 text-sm leading-relaxed text-slate-700">
                    {activeItem.problem}
                  </p>
                </div>

                <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                    FieldAssure fix
                  </p>
                  <p data-testid={WHAT_BREAKS.detailFix} className="mt-1.5 text-sm leading-relaxed text-slate-800">
                    {activeItem.fix}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Mobile: stacked accordion */}
        <Accordion type="single" collapsible className="flex flex-col gap-3 md:hidden">
          {ITEMS.map(({ title, Icon, problem, fix }, i) => (
            <AccordionItem
              key={title}
              value={`what-breaks-${i}`}
              data-testid={WHAT_BREAKS.accordionItem(i)}
              className="rounded-lg border border-slate-200 bg-white px-4"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
                    <Icon size={18} weight="duotone" />
                  </span>
                  <span className="font-heading text-sm font-bold text-slate-900">{title}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="rounded-lg border border-slate-200 bg-zinc-50 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Problem today
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-700">{problem}</p>
                </div>
                <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50/60 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                    FieldAssure fix
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-800">{fix}</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default WhatBreaksSection;
