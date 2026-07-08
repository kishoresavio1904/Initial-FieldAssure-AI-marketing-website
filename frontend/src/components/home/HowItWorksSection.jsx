import { motion } from "framer-motion";
import { HOW_IT_WORKS } from "@/constants/testIds";

const STEPS = [
  "Set up project and contractor requirements",
  "Capture worker, document, and site evidence",
  "Route submissions through approval workflows",
  "Track blockers for audit, handover, and billing",
  "Export clean evidence trails when needed",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const HowItWorksSection = () => {
  return (
    <section data-testid={HOW_IT_WORKS.section} className="bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
            How it works
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            From setup to exportable proof in five steps.
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5"
        >
          {STEPS.map((step, i) => (
            <motion.div
              key={step}
              variants={item}
              data-testid={HOW_IT_WORKS.step(i + 1)}
              className="relative rounded-lg border border-slate-200 bg-white p-5"
            >
              <span className="font-heading text-2xl font-extrabold text-amber-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-800">
                {step}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
