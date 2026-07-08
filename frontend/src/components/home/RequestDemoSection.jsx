import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DEMO_FORM } from "@/constants/testIds";

const ROLE_OPTIONS = [
  "Owner / COO",
  "Project Director / Project Manager",
  "HSE Head",
  "QA/QC Head",
  "Compliance",
  "Finance Controller",
  "Contractor Management",
  "Other",
];

const PROJECT_SIZE_OPTIONS = [
  "1-2 active sites",
  "3-10 active sites",
  "11-30 active sites",
  "30+ active sites",
];

const initialForm = {
  fullName: "",
  companyName: "",
  workEmail: "",
  phone: "",
  role: "",
  projectSize: "",
  message: "",
};

const RequestDemoSection = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSelectChange = (field) => (value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="request-demo" data-testid={DEMO_FORM.section} className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 via-zinc-50 to-zinc-50">
      <div className="absolute left-1/2 top-0 h-72 w-[520px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-amber-300/20 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">
            Request a demo
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Talk to us about your sites.
          </h2>
        </div>

        <div className="rounded-xl border border-amber-100 bg-white p-6 shadow-[0_24px_60px_-20px_rgba(217,119,6,0.2)] sm:p-8">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                data-testid={DEMO_FORM.successMessage}
                className="flex flex-col items-center gap-3 py-8 text-center"
              >
                <CheckCircle size={44} weight="fill" className="text-amber-600" />
                <p className="text-lg font-semibold text-slate-900">
                  Thank you. Our team will contact you shortly.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                data-testid={DEMO_FORM.form}
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-5 sm:grid-cols-2"
              >
                <div className="flex flex-col gap-2">
                  <Label htmlFor="fullName">Full name</Label>
                  <Input
                    id="fullName"
                    required
                    value={form.fullName}
                    onChange={handleChange("fullName")}
                    data-testid={DEMO_FORM.fieldName}
                    className="focus-visible:ring-2 focus-visible:ring-amber-600"
                    placeholder="Your full name"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="companyName">Company name</Label>
                  <Input
                    id="companyName"
                    required
                    value={form.companyName}
                    onChange={handleChange("companyName")}
                    data-testid={DEMO_FORM.fieldCompany}
                    className="focus-visible:ring-2 focus-visible:ring-amber-600"
                    placeholder="Your company"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="workEmail">Work email</Label>
                  <Input
                    id="workEmail"
                    type="email"
                    required
                    value={form.workEmail}
                    onChange={handleChange("workEmail")}
                    data-testid={DEMO_FORM.fieldEmail}
                    className="focus-visible:ring-2 focus-visible:ring-amber-600"
                    placeholder="you@company.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange("phone")}
                    data-testid={DEMO_FORM.fieldPhone}
                    className="focus-visible:ring-2 focus-visible:ring-amber-600"
                    placeholder="Your phone number"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="role">Role</Label>
                  <Select value={form.role} onValueChange={handleSelectChange("role")} required>
                    <SelectTrigger
                      id="role"
                      data-testid={DEMO_FORM.fieldRole}
                      className="focus:ring-2 focus:ring-amber-600"
                    >
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      {ROLE_OPTIONS.map((r) => (
                        <SelectItem key={r} value={r}>
                          {r}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="projectSize">Project size</Label>
                  <Select
                    value={form.projectSize}
                    onValueChange={handleSelectChange("projectSize")}
                    required
                  >
                    <SelectTrigger
                      id="projectSize"
                      data-testid={DEMO_FORM.fieldProjectSize}
                      className="focus:ring-2 focus:ring-amber-600"
                    >
                      <SelectValue placeholder="Select project size" />
                    </SelectTrigger>
                    <SelectContent>
                      {PROJECT_SIZE_OPTIONS.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={handleChange("message")}
                    data-testid={DEMO_FORM.fieldMessage}
                    className="min-h-[100px] focus-visible:ring-2 focus-visible:ring-amber-600"
                    placeholder="Tell us about your project or requirements"
                  />
                </div>

                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    data-testid={DEMO_FORM.submitBtn}
                    className="w-full rounded-md bg-amber-600 font-semibold text-white hover:bg-amber-700 sm:w-auto"
                  >
                    Request Demo
                  </Button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default RequestDemoSection;
