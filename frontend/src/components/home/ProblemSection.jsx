import { motion } from "framer-motion";
import { Question } from "@phosphor-icons/react";
import { PROBLEM } from "@/constants/testIds";

const QUESTIONS = [
  "Who worked on site?",
  "Was the contractor ready?",
  "Were workers eligible?",
  "What proof was submitted?",
  "Who checked it?",
  "Who approved it?",
  "What is blocking handover, audit, or payment?",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const ProblemSection = () => {
  return (
    <section data-testid={PROBLEM.section} className="bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
              The problem
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Your field proof is everywhere. Your decisions shouldn't be.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
              Construction teams still chase field proof across WhatsApp,
              Excel, paper files, photos, contractor submissions, and verbal
              follow-ups. FieldAssure AI brings the evidence, checks,
              approvals, and blockers into one place so teams know what is
              ready, what is missing, and who needs to act.
            </p>
          </div>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={container}
            className="flex flex-col divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white"
          >
            {QUESTIONS.map((q, i) => (
              <motion.li
                key={q}
                variants={item}
                data-testid={PROBLEM.question(i)}
                className="flex items-start gap-3 px-5 py-4"
              >
                <Question size={20} weight="bold" className="mt-0.5 shrink-0 text-amber-600" />
                <span className="text-sm font-medium text-slate-800 md:text-base">{q}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
