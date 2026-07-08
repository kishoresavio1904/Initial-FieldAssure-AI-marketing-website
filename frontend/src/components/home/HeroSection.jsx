import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import HeroProofStack from "@/components/home/HeroProofStack";
import { HERO } from "@/constants/testIds";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const HeroSection = () => {
  return (
    <section
      data-testid={HERO.section}
      className="relative overflow-hidden border-b border-slate-200 bg-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:gap-8 lg:px-8 lg:py-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="lg:col-span-3"
        >
          <p className="mb-4 inline-flex items-center rounded-md border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
            Field proof, approvals, and readiness — connected.
          </p>
          <h1
            data-testid={HERO.headline}
            className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Field proof. Approval trails. Readiness you can trust.
          </h1>
          <p
            data-testid={HERO.subheadline}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg"
          >
            FieldAssure AI helps construction teams connect contractor
            readiness, worker eligibility, field evidence, approvals, audit
            trails, handover blockers, and billing readiness in one clear
            operational proof trail.
          </p>
          <p
            data-testid={HERO.supportingLine}
            className="mt-3 max-w-xl text-sm font-medium text-slate-500"
          >
            Built for global construction teams. Adaptable to local field,
            contractor, and documentation requirements.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              data-testid={HERO.ctaRequestDemo}
              className="rounded-md bg-amber-600 font-semibold text-white hover:bg-amber-700"
            >
              <Link to="/request-demo">
                Request Demo <ArrowRight size={18} className="ml-1" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              data-testid={HERO.ctaViewProduct}
              className="rounded-md border-slate-300 font-semibold text-slate-900 hover:bg-slate-50"
            >
              <Link to="/product">View Product</Link>
            </Button>
          </div>
        </motion.div>

        <div className="lg:col-span-2">
          <HeroProofStack />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
