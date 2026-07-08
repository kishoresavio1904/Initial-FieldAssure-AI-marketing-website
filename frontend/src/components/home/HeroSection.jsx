import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ClipboardText, UsersThree, Camera, CheckCircle } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { HERO } from "@/constants/testIds";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const gridIcons = [ClipboardText, UsersThree, Camera, CheckCircle];

const HeroSection = () => {
  return (
    <section
      data-testid={HERO.section}
      className="border-b border-slate-200 bg-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:gap-8 lg:px-8 lg:py-24">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="lg:col-span-3"
        >
          <p className="mb-4 inline-flex items-center rounded-md border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
            India-first construction proof platform
          </p>
          <h1
            data-testid={HERO.headline}
            className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            FieldAssure AI helps construction teams prove site readiness
            before handover, audit, or payment.
          </h1>
          <p
            data-testid={HERO.subheadline}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg"
          >
            Connect contractor readiness, worker eligibility, field evidence,
            approval workflows, audit trails, handover readiness, and billing
            readiness in one India-first construction operations proof
            platform.
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

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ delay: 0.15 }}
          className="lg:col-span-2"
        >
          <div className="grid h-full grid-cols-2 gap-4 rounded-lg border border-slate-200 bg-zinc-50 p-6">
            {[
              { label: "Contractor Readiness", Icon: gridIcons[0] },
              { label: "Worker Eligibility", Icon: gridIcons[1] },
              { label: "Site Evidence", Icon: gridIcons[2] },
              { label: "Approval Proof", Icon: gridIcons[3] },
            ].map(({ label, Icon }) => (
              <div
                key={label}
                className="flex flex-col justify-between rounded-md border border-slate-200 bg-white p-4"
              >
                <Icon size={26} className="text-amber-600" />
                <span className="mt-3 text-sm font-semibold text-slate-800">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
