import { Link } from "react-router-dom";
import { ArrowLeft, Wrench } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { PLACEHOLDER } from "@/constants/testIds";

/**
 * Shared shell for W1 placeholder pages (Product, Use Cases, Pricing,
 * Request Demo, About / Contact). Intentionally minimal per scope.
 */
const PlaceholderPage = ({ slug, title, description, primaryCta = { label: "Request Demo", to: "/request-demo" }, secondaryCta = { label: "Back to Home", to: "/" } }) => {
  return (
    <div
      data-testid={PLACEHOLDER.page(slug)}
      className="mx-auto flex max-w-3xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-md bg-amber-50 text-amber-600">
        <Wrench size={28} weight="duotone" />
      </span>
      <h1
        data-testid={PLACEHOLDER.title(slug)}
        className="mt-6 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
      >
        {title}
      </h1>
      <p
        data-testid={PLACEHOLDER.description(slug)}
        className="mt-4 max-w-xl text-base leading-relaxed text-slate-600"
      >
        {description}
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button
          asChild
          data-testid={PLACEHOLDER.ctaPrimary(slug)}
          className="rounded-md bg-amber-600 font-semibold text-white hover:bg-amber-700"
        >
          <Link to={primaryCta.to}>{primaryCta.label}</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          data-testid={PLACEHOLDER.ctaSecondary(slug)}
          className="rounded-md border-slate-300 font-semibold text-slate-900 hover:bg-slate-50"
        >
          <Link to={secondaryCta.to}>
            <ArrowLeft size={16} className="mr-1" /> {secondaryCta.label}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PlaceholderPage;
