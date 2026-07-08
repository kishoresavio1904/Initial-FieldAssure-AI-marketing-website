import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ShieldCheck, List } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { HEADER } from "@/constants/testIds";

const NAV_LINKS = [
  { label: "Home", to: "/", testId: HEADER.navHome, mobileTestId: HEADER.mobileNavHome },
  { label: "Product", to: "/product", testId: HEADER.navProduct, mobileTestId: HEADER.mobileNavProduct },
  { label: "Use Cases", to: "/use-cases", testId: HEADER.navUseCases, mobileTestId: HEADER.mobileNavUseCases },
  { label: "Pricing", to: "/pricing", testId: HEADER.navPricing, mobileTestId: HEADER.mobileNavPricing },
  { label: "Request Demo", to: "/request-demo", testId: HEADER.navRequestDemo, mobileTestId: HEADER.mobileNavRequestDemo },
];

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium transition-colors hover:text-amber-600 ${
    isActive ? "text-slate-900" : "text-slate-600"
  }`;

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      data-testid="site-header"
      className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          data-testid={HEADER.logoLink}
          className="flex items-center gap-2"
        >
          <ShieldCheck size={26} weight="fill" className="text-amber-600" />
          <span className="font-heading text-lg font-extrabold tracking-tight text-slate-900">
            FieldAssure <span className="text-amber-600">AI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.slice(0, 4).map((link) => (
            <NavLink key={link.to} to={link.to} data-testid={link.testId} className={navLinkClass} end>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            asChild
            data-testid={HEADER.ctaRequestDemo}
            className="rounded-md bg-amber-600 font-semibold text-white hover:bg-amber-700"
          >
            <Link to="/request-demo">Request Demo</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              data-testid={HEADER.mobileMenuToggle}
              aria-label="Toggle navigation menu"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-900 lg:hidden"
            >
              <List size={22} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 border-slate-200 bg-white p-0">
            <div className="flex h-16 items-center border-b border-slate-200 px-5">
              <span className="font-heading text-base font-bold text-slate-900">Menu</span>
            </div>
            <nav className="flex flex-col gap-1 p-5">
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.to}>
                  <NavLink
                    to={link.to}
                    data-testid={link.mobileTestId}
                    className={({ isActive }) =>
                      `rounded-md px-3 py-3 text-base font-medium ${
                        isActive ? "bg-amber-50 text-amber-700" : "text-slate-700 hover:bg-slate-50"
                      }`
                    }
                    end
                  >
                    {link.label}
                  </NavLink>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button
                  asChild
                  data-testid={HEADER.mobileCtaRequestDemo}
                  className="mt-3 w-full rounded-md bg-amber-600 font-semibold text-white hover:bg-amber-700"
                >
                  <Link to="/request-demo">Request Demo</Link>
                </Button>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
