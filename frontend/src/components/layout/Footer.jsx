import { Link } from "react-router-dom";
import { ShieldCheck } from "@phosphor-icons/react";
import { FOOTER } from "@/constants/testIds";

const FOOTER_LINKS = [
  { label: "Product", to: "/product", testId: FOOTER.linkProduct },
  { label: "Use Cases", to: "/use-cases", testId: FOOTER.linkUseCases },
  { label: "Pricing", to: "/pricing", testId: FOOTER.linkPricing },
  { label: "Request Demo", to: "/request-demo", testId: FOOTER.linkRequestDemo },
  { label: "About / Contact", to: "/about", testId: FOOTER.linkAboutContact },
];

const Footer = () => {
  return (
    <footer data-testid="site-footer" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <div data-testid={FOOTER.logo} className="flex items-center gap-2">
              <ShieldCheck size={22} weight="fill" className="text-amber-600" />
              <span className="font-heading text-base font-extrabold text-slate-900">
                FieldAssure AI
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-slate-600">
              Geography-aware construction operational proof platform for global construction teams.
            </p>
          </div>

          <div className="md:col-span-1">
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-slate-400">
              Site
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    data-testid={link.testId}
                    className="text-sm text-slate-600 transition-colors hover:text-amber-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-slate-400">
              Disclaimer
            </p>
            <p data-testid={FOOTER.disclaimer} className="mt-4 text-sm leading-relaxed text-slate-600">
              FieldAssure AI supports operational visibility and evidence tracking. It does not
              provide legal or compliance guarantees.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
          <p data-testid={FOOTER.copyright} className="text-xs text-slate-500">
            © {new Date().getFullYear()} FieldAssure AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
