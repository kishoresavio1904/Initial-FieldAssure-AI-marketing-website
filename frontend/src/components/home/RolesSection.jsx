import { motion } from "framer-motion";
import {
  Buildings,
  UserSquare,
  HardHat,
  MagnifyingGlass,
  FileText,
  Coins,
  UsersFour,
} from "@phosphor-icons/react";
import { ROLES } from "@/constants/testIds";

const ROLE_CARDS = [
  {
    title: "Construction Owners and COOs",
    desc: "Get visibility into site readiness, contractor gaps, and approval bottlenecks.",
    Icon: Buildings,
    span: "lg:col-span-2",
  },
  {
    title: "Project Directors and Project Managers",
    desc: "Track what is pending, approved, blocked, or ready across sites.",
    Icon: UserSquare,
    span: "lg:col-span-1",
  },
  {
    title: "HSE Heads",
    desc: "Track safety evidence, worker eligibility, and unresolved site issues.",
    Icon: HardHat,
    span: "lg:col-span-1",
  },
  {
    title: "QA/QC Heads",
    desc: "Connect quality submissions, checks, approvals, and handover readiness.",
    Icon: MagnifyingGlass,
    span: "lg:col-span-1",
  },
  {
    title: "Compliance Teams",
    desc: "Maintain a clear audit trail of documents, evidence, and actions.",
    Icon: FileText,
    span: "lg:col-span-1",
  },
  {
    title: "Finance Controllers",
    desc: "Understand what is blocking billing readiness before invoices get stuck.",
    Icon: Coins,
    span: "lg:col-span-1",
  },
  {
    title: "Contractor Management Teams",
    desc: "Standardize contractor onboarding, document readiness, and site-level checks.",
    Icon: UsersFour,
    span: "lg:col-span-2",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const RolesSection = () => {
  return (
    <section data-testid={ROLES.section} className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
            Built for every role on site
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            One platform, the right view for every team.
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
          className="grid grid-cols-1 gap-5 md:grid-cols-3 md:items-stretch"
        >
          {ROLE_CARDS.map(({ title, desc, Icon, span }, i) => (
            <motion.div
              key={title}
              variants={item}
              data-testid={ROLES.card(i)}
              className={`group flex flex-col rounded-lg border border-slate-200 bg-zinc-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-900/5 ${span}`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 text-amber-600 ring-1 ring-amber-200/60 transition-transform duration-300 group-hover:scale-105">
                <Icon size={22} weight="duotone" />
              </span>
              <h3 className="mt-4 font-heading text-base font-bold text-slate-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RolesSection;
