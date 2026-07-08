import { motion } from "framer-motion";
import {
  HardHat,
  IdentificationCard,
  Camera,
  ClipboardText,
  FileText,
  DoorOpen,
  HandCoins,
  ChartBar,
} from "@phosphor-icons/react";
import { MODULES } from "@/constants/testIds";

const MODULE_CARDS = [
  { title: "Contractor Readiness", Icon: HardHat },
  { title: "Worker Eligibility", Icon: IdentificationCard },
  { title: "Site Evidence Capture", Icon: Camera },
  { title: "Approval Workflows", Icon: ClipboardText },
  { title: "Audit Trail", Icon: FileText },
  { title: "Handover Readiness", Icon: DoorOpen },
  { title: "Billing Readiness", Icon: HandCoins },
  { title: "Reports and Exports", Icon: ChartBar },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const ModulesSection = () => {
  return (
    <section data-testid={MODULES.section} className="bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
            Modules
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Everything connected, module by module.
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {MODULE_CARDS.map(({ title, Icon }, i) => (
            <motion.div
              key={title}
              variants={item}
              data-testid={MODULES.card(i)}
              className="rounded-lg border border-slate-200 bg-white p-6 transition-colors hover:border-amber-300"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-amber-50 text-amber-600">
                <Icon size={22} weight="duotone" />
              </span>
              <h3 className="mt-4 font-heading text-sm font-bold text-slate-900">
                {title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModulesSection;
