import { motion } from "framer-motion";
import { Buildings, ClipboardText, ShieldCheck, FileText, HandCoins } from "@phosphor-icons/react";
import { PRODUCT_EXPLAIN } from "@/constants/testIds";

const NODES = [
  { label: "Field Evidence", Icon: Buildings },
  { label: "Approvals", Icon: ClipboardText },
  { label: "Audit Trail", Icon: FileText },
  { label: "Readiness Blockers", Icon: ShieldCheck },
  { label: "Billing Proof", Icon: HandCoins },
];

const ProductExplainSection = () => {
  return (
    <section data-testid={PRODUCT_EXPLAIN.section} className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
              What FieldAssure AI is
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              A single, connected proof platform for every construction site.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
              FieldAssure AI is a construction operational proof platform that
              helps project, HSE, QA/QC, compliance, contractor management,
              and finance teams maintain a clear trail of field evidence,
              approvals, and readiness blockers.
            </p>
            <p className="mt-4 rounded-md border border-slate-200 bg-zinc-50 px-4 py-3 text-sm leading-relaxed text-slate-700">
              It does not replace safety, project, or QA teams. It helps them
              work with better visibility, cleaner evidence, and fewer manual
              follow-ups.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-lg border border-slate-200 bg-zinc-50 p-6"
          >
            <div className="flex flex-col gap-3">
              {NODES.map(({ label, Icon }, i) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-md border border-slate-200 bg-white px-4 py-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-amber-50 text-amber-600">
                    <Icon size={20} weight="duotone" />
                  </span>
                  <span className="text-sm font-semibold text-slate-800">{label}</span>
                  {i < NODES.length - 1 && (
                    <span className="ml-auto h-px w-8 bg-slate-300" aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductExplainSection;
