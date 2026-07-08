import RequestDemoSection from "@/components/home/RequestDemoSection";

const RequestDemo = () => {
  return (
    <div data-testid="request-demo-page">
      <div className="mx-auto max-w-3xl px-4 pt-16 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
          Get started
        </p>
        <h1 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Request a FieldAssure AI demo
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Tell us about your projects and team. We will get back to you shortly to schedule a walkthrough.
        </p>
      </div>
      <RequestDemoSection />
    </div>
  );
};

export default RequestDemo;
