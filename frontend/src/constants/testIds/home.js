// Test IDs for the Home page sections.

export const HERO = {
  section: 'hero-section',
  headline: 'hero-headline',
  subheadline: 'hero-subheadline',
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

export const MODULES = {
  section: 'modules-section',
  card: (i) => `modules-card-${i}`,
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
};

export const FAQ = {
  section: 'faq-section',
  item: (i) => `faq-item-${i}`,
  trigger: (i) => `faq-trigger-${i}`,
};
