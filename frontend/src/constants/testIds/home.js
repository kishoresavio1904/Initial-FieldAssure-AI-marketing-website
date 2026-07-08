// Test IDs for the Home page sections.

export const HERO = {
  section: 'hero-section',
  headline: 'hero-headline',
  subheadline: 'hero-subheadline',
  supportingLine: 'hero-supporting-line',
  ctaRequestDemo: 'hero-cta-request-demo-btn',
  ctaViewProduct: 'hero-cta-view-product-btn',
};

export const PROBLEM = {
  section: 'problem-section',
  question: (i) => `problem-question-${i}`,
};

export const PRODUCT_EXPLAIN = {
  section: 'product-explain-section',
};

export const HOW_IT_WORKS = {
  section: 'how-it-works-section',
  step: (i) => `how-it-works-step-${i}`,
};

export const ROLES = {
  section: 'roles-section',
  card: (i) => `roles-card-${i}`,
};

export const WHAT_BREAKS = {
  section: 'what-breaks-section',
  tab: (i) => `what-breaks-tab-${i}`,
  accordionItem: (i) => `what-breaks-accordion-item-${i}`,
  detailCard: 'what-breaks-detail-card',
  detailProblem: 'what-breaks-detail-problem',
  detailFix: 'what-breaks-detail-fix',
};

export const PRICING = {
  section: 'pricing-section',
  card: (tier) => `pricing-card-${tier}`,
  ctaRequestDemo: (tier) => `pricing-cta-${tier}-btn`,
};

export const DEMO_FORM = {
  section: 'request-demo-section',
  form: 'request-demo-form',
  fieldName: 'request-demo-input-name',
  fieldCompany: 'request-demo-input-company',
  fieldEmail: 'request-demo-input-email',
  fieldPhone: 'request-demo-input-phone',
  fieldRole: 'request-demo-select-role',
  fieldProjectSize: 'request-demo-select-project-size',
  fieldMessage: 'request-demo-textarea-message',
  submitBtn: 'request-demo-submit-btn',
  successMessage: 'request-demo-success-message',
  errorName: 'request-demo-error-name',
  errorCompany: 'request-demo-error-company',
  errorEmail: 'request-demo-error-email',
  errorPhone: 'request-demo-error-phone',
  errorRole: 'request-demo-error-role',
  errorProjectSize: 'request-demo-error-project-size',
};

export const FAQ = {
  section: 'faq-section',
  item: (i) => `faq-item-${i}`,
  trigger: (i) => `faq-trigger-${i}`,
};
