import { motion } from "framer-motion";
import {
  ShieldCheck,
  HardHat,
  IdentificationCard,
  Camera,
  ClockCountdown,
  Warning,
  HandCoins,
} from "@phosphor-icons/react";

// The six proof-points floating around the central FieldAssure AI card,
// arranged in a top row and a bottom row so they never sit in the same
// vertical band as the central card (which owns the middle of the stack).
// "ready" items lean amber (resolved/positive), "pending/blocker" items lean
// muted slate (still open) -- staying within the existing amber/navy palette.
const PROOF_POINTS = [
  { label: "Contractor Ready", Icon: HardHat, tone: "ready", pos: "left-[0%] top-[2%] rotate-[-3deg]", float: "animate-float" },
  { label: "Worker Eligible", Icon: IdentificationCard, tone: "ready", pos: "left-1/2 top-[-4%] -translate-x-1/2 rotate-[1deg]", float: "animate-float-delayed" },
  { label: "Evidence Captured", Icon: Camera, tone: "ready", pos: "right-[0%] top-[2%] rotate-[2deg]", float: "animate-float-slow" },
  { label: "Approval Pending", Icon: ClockCountdown, tone: "pending", pos: "left-[0%] bottom-[2%] rotate-[2deg]", float: "animate-float" },
  { label: "Handover Blocker", Icon: Warning, tone: "pending", pos: "left-1/2 bottom-[-4%] -translate-x-1/2 rotate-[-1deg]", float: "animate-float-delayed" },
  { label: "Billing Readiness", Icon: HandCoins, tone: "ready", pos: "right-[0%] bottom-[2%] rotate-[-2deg]", float: "animate-float-slow" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const cardIn = {
  hidden: { opacity: 0, y: 12, scale: 0.92 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const MiniCard = ({ label, Icon, tone, pos, float }) => (
  <motion.div
    variants={cardIn}
    className={`absolute z-10 w-[132px] rounded-xl border border-slate-200 bg-white/95 p-2.5 shadow-[0_8px_24px_-8px_rgba(15,23,42,0.18)] backdrop-blur-sm ${pos} ${float}`}
  >
    <span
      className={`flex h-7 w-7 items-center justify-center rounded-md ${
        tone === "ready" ? "bg-amber-50 text-amber-600" : "bg-slate-100 text-slate-400"
      }`}
    >
      <Icon size={16} weight="duotone" />
    </span>
    <p className="mt-2 text-[11px] font-semibold leading-snug text-slate-800">{label}</p>
  </motion.div>
);

/**
 * Premium, subtle 3D-style "Operational Proof Stack" hero visual.
 * Desktop/tablet: central elevated card + floating proof-point cards over a
 * faint perspective grid. Mobile: simplified static stacked grid (no
 * absolute positioning) to stay clean, readable, and fast.
 */
const HeroProofStack = () => {
  return (
    <div className="relative">
      {/* Desktop / tablet: layered 3D-style proof stack */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="relative hidden h-[400px] md:block lg:h-[460px]"
      >
        {/* soft amber glow accents */}
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400/25 blur-3xl animate-glow-pulse" />
        <div className="absolute right-2 top-4 h-24 w-24 rounded-full bg-amber-300/20 blur-2xl" />

        {/* subtle perspective grid */}
        <div
          className="absolute inset-0 overflow-hidden rounded-xl"
          style={{
            maskImage: "radial-gradient(ellipse 70% 60% at center, black 35%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 60% at center, black 35%, transparent 75%)",
          }}
        >
          <div
            className="absolute inset-0 bg-grid-faint"
            style={{
              transform: "perspective(600px) rotateX(58deg) scale(1.6)",
              transformOrigin: "center center",
            }}
          />
        </div>

        {/* floating proof-point cards */}
        {PROOF_POINTS.map((p) => (
          <MiniCard key={p.label} {...p} />
        ))}

        {/* central elevated card */}
        <motion.div
          variants={cardIn}
          className="absolute left-1/2 top-1/2 z-20 w-[176px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-amber-200/70 bg-white p-4 text-center shadow-[0_20px_45px_-12px_rgba(217,119,6,0.35)]"
        >
          <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-amber-600 text-white shadow-inner">
            <ShieldCheck size={24} weight="fill" />
          </span>
          <p className="mt-2.5 font-heading text-sm font-extrabold text-slate-900">FieldAssure AI</p>
          <p className="mt-1 text-[10px] font-medium uppercase tracking-wide text-amber-600">
            Operational Proof
          </p>
        </motion.div>
      </motion.div>

      {/* Mobile: simplified, static stacked visual */}
      <div className="md:hidden">
        <div className="rounded-2xl border border-amber-200/70 bg-white p-5 text-center shadow-[0_16px_32px_-12px_rgba(217,119,6,0.3)]">
          <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-amber-600 text-white">
            <ShieldCheck size={22} weight="fill" />
          </span>
          <p className="mt-2 font-heading text-sm font-extrabold text-slate-900">FieldAssure AI</p>
          <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-amber-600">
            Operational Proof
          </p>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {PROOF_POINTS.map(({ label, Icon, tone }) => (
            <div
              key={label}
              className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm"
            >
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-md ${
                  tone === "ready" ? "bg-amber-50 text-amber-600" : "bg-slate-100 text-slate-400"
                }`}
              >
                <Icon size={16} weight="duotone" />
              </span>
              <p className="mt-2 text-xs font-semibold leading-snug text-slate-800">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroProofStack;
