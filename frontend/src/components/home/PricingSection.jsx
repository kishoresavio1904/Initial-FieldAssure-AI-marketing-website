import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { PRICING } from "@/constants/testIds";

const TIERS = [
  {
    key: "starter",
    name: "Starter",
    desc: "For smaller project teams starting with contractor and site evidence tracking.",
    features: ["Contractor readiness tracking", "Site evidence capture", "Basic approval workflow"],
    highlighted: false,
  },
  {
    key: "project",
    name: "Project",
    desc: "For growing construction teams managing multiple contractors, approvals, and readiness workflows.",
    features: ["Everything in Starter", "Multi-contractor management", "Audit trail & handover readiness"],
    highlighted: true,
  },
  {
    key: "enterprise",
    name: "Enterprise",
    desc: "For large construction organizations needing custom roles, multi-project controls, and governance.",
    features: ["Everything in Project", "Custom roles & governance", "Multi-project controls"],
    highlighted: false,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const PricingSection = () => {
  return (
    <section data-testid={PRICING.section} className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
            Pricing
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Plans that scale with your sites.
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {TIERS.map((tier) => (
            <motion.div
              key={tier.key}
              variants={item}
              data-testid={PRICING.card(tier.key)}
              className={`relative flex flex-col rounded-lg border p-6 ${
                tier.highlighted
                  ? "border-amber-500 bg-amber-50/40 shadow-sm"
                  : "border-slate-200 bg-zinc-50"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-6 rounded-md bg-amber-600 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading text-xl font-extrabold text-slate-900">{tier.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{tier.desc}</p>
              <ul className="mt-5 flex flex-1 flex-col gap-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle size={18} weight="fill" className="mt-0.5 shrink-0 text-amber-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                data-testid={PRICING.ctaRequestDemo(tier.key)}
                className={`mt-6 w-full rounded-md font-semibold ${
                  tier.highlighted
                    ? "bg-amber-600 text-white hover:bg-amber-700"
                    : "bg-slate-900 text-white hover:bg-slate-800"
                }`}
              >
                <Link to="/request-demo">Request Demo</Link>
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Pricing is indicative and depends on project size, modules, users, and rollout scope.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
