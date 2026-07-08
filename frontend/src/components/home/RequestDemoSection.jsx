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

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validateForm = (form) => {
  const errors = {};
  if (!form.fullName.trim()) errors.fullName = "Full name is required.";
  if (!form.companyName.trim()) errors.companyName = "Company name is required.";
  if (!form.workEmail.trim()) {
    errors.workEmail = "Work email is required.";
  } else if (!EMAIL_REGEX.test(form.workEmail.trim())) {
    errors.workEmail = "Enter a valid email address.";
  }
  if (!form.phone.trim()) errors.phone = "Phone number is required.";
  if (!form.role) errors.role = "Please select a role.";
  if (!form.projectSize) errors.projectSize = "Please select a project size.";
  return errors;
};

const RequestDemoSection = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  const handleSelectChange = (field) => (value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validateForm(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
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
                noValidate
                className="grid grid-cols-1 gap-5 sm:grid-cols-2"
              >
                <div className="flex flex-col gap-2">
                  <Label htmlFor="fullName">
                    Full name <span className="text-amber-600">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    value={form.fullName}
                    onChange={handleChange("fullName")}
                    data-testid={DEMO_FORM.fieldName}
                    aria-invalid={Boolean(errors.fullName)}
                    className={`focus-visible:ring-2 focus-visible:ring-amber-600 ${
                      errors.fullName ? "border-red-400" : ""
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.fullName && (
                    <p data-testid={DEMO_FORM.errorName} className="text-xs font-medium text-red-600">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="companyName">
                    Company name <span className="text-amber-600">*</span>
                  </Label>
                  <Input
                    id="companyName"
                    value={form.companyName}
                    onChange={handleChange("companyName")}
                    data-testid={DEMO_FORM.fieldCompany}
                    aria-invalid={Boolean(errors.companyName)}
                    className={`focus-visible:ring-2 focus-visible:ring-amber-600 ${
                      errors.companyName ? "border-red-400" : ""
                    }`}
                    placeholder="Your company"
                  />
                  {errors.companyName && (
                    <p data-testid={DEMO_FORM.errorCompany} className="text-xs font-medium text-red-600">
                      {errors.companyName}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="workEmail">
                    Work email <span className="text-amber-600">*</span>
                  </Label>
                  <Input
                    id="workEmail"
                    type="email"
                    value={form.workEmail}
                    onChange={handleChange("workEmail")}
                    data-testid={DEMO_FORM.fieldEmail}
                    aria-invalid={Boolean(errors.workEmail)}
                    className={`focus-visible:ring-2 focus-visible:ring-amber-600 ${
                      errors.workEmail ? "border-red-400" : ""
                    }`}
                    placeholder="you@company.com"
                  />
                  {errors.workEmail && (
                    <p data-testid={DEMO_FORM.errorEmail} className="text-xs font-medium text-red-600">
                      {errors.workEmail}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">
                    Phone number <span className="text-amber-600">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    data-testid={DEMO_FORM.fieldPhone}
                    aria-invalid={Boolean(errors.phone)}
                    className={`focus-visible:ring-2 focus-visible:ring-amber-600 ${
                      errors.phone ? "border-red-400" : ""
                    }`}
                    placeholder="Your phone number"
                  />
                  {errors.phone && (
                    <p data-testid={DEMO_FORM.errorPhone} className="text-xs font-medium text-red-600">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="role">
                    Role <span className="text-amber-600">*</span>
                  </Label>
                  <Select value={form.role} onValueChange={handleSelectChange("role")}>
                    <SelectTrigger
                      id="role"
                      data-testid={DEMO_FORM.fieldRole}
                      aria-invalid={Boolean(errors.role)}
                      className={`focus:ring-2 focus:ring-amber-600 ${errors.role ? "border-red-400" : ""}`}
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
                  {errors.role && (
                    <p data-testid={DEMO_FORM.errorRole} className="text-xs font-medium text-red-600">
                      {errors.role}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="projectSize">
                    Project size <span className="text-amber-600">*</span>
                  </Label>
                  <Select value={form.projectSize} onValueChange={handleSelectChange("projectSize")}>
                    <SelectTrigger
                      id="projectSize"
                      data-testid={DEMO_FORM.fieldProjectSize}
                      aria-invalid={Boolean(errors.projectSize)}
                      className={`focus:ring-2 focus:ring-amber-600 ${
                        errors.projectSize ? "border-red-400" : ""
                      }`}
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
                  {errors.projectSize && (
                    <p data-testid={DEMO_FORM.errorProjectSize} className="text-xs font-medium text-red-600">
                      {errors.projectSize}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                  <Label htmlFor="message">Message (optional)</Label>
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
