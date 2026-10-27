'use strict';

const CONTACT_EMAIL = 'axelguedj@hotmail.fr';
const packages = {
  audit: { price: 1490, fixed: true, fr: 'Diagnostic IA', en: 'AI assessment' },
  automation: { price: 2400, fr: 'Automatisation IA', en: 'AI automation' },
  assistant: { price: 6900, fr: 'Assistant IA sur mesure', en: 'Custom AI assistant' }
};

function formatPrice(amount, lang) {
  const value = new Intl.NumberFormat(lang, { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(amount);
  return `${value} ${lang === 'fr' ? 'HT' : 'excl. VAT'}`;
}
let language = 'fr';
let selectedPackage = null;
const form = document.getElementById('request-form');
const budget = document.getElementById('budget');
const selection = document.getElementById('selection-status');
const status = document.getElementById('request-status');

function renderSelection() {
  if (!selectedPackage) {
    selection.textContent = language === 'fr' ? 'DEMANDE SUR MESURE · BUDGET LIBRE' : 'CUSTOM REQUEST · YOUR BUDGET';
    return;
  }
  const item = packages[selectedPackage];
  const prefix = item.fixed ? '' : `${language === 'fr' ? 'à partir de' : 'from'} `;
  selection.textContent = `${item[language]} · ${prefix}${formatPrice(item.price, language)}`;
}

function setLanguage(lang) {
  language = lang === 'en' ? 'en' : 'fr';
  document.documentElement.lang = language;
  document.title = language === 'fr' ? 'HAXLR.IO — Services & tarifs' : 'HAXLR.IO — Services & pricing';
  document.querySelectorAll('[data-fr]').forEach(element => {
    element.textContent = element.dataset[language];
  });
  document.querySelectorAll('[data-language]').forEach(button => {
    const active = button.dataset.language === language;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  status.textContent = '';
  renderSelection();
  try { localStorage.setItem('haxlr-lang', language); } catch (_) {}
}

function buildRequest(values, lang = language, selectionKey = selectedPackage) {
  const item = packages[selectionKey];
  const type = item ? item[lang] : (lang === 'fr' ? 'Demande particulière' : 'Custom request');
  const price = formatPrice(Number(values.budget), lang);
  const subject = `HAXLR.IO — ${type} — ${price}`;
  const body = lang === 'fr'
    ? `Bonjour,\n\nJe souhaite vous confier un projet.\n\nFormat : ${type}\nBudget proposé : ${price}\nNom : ${values.name.trim()}\nE-mail : ${values.email.trim()}\n\nMon projet :\n${values.brief.trim()}\n\nMerci de me recontacter pour en discuter.`
    : `Hello,\n\nI would like to work with you on a project.\n\nSize: ${type}\nProposed budget: ${price}\nName: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\nMy project:\n${values.brief.trim()}\n\nPlease get back to me to discuss it.`;
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
document.querySelectorAll('[data-package]').forEach(button => button.addEventListener('click', () => {
  selectedPackage = button.dataset.package;
  budget.value = packages[selectedPackage].price;
  renderSelection();
  status.textContent = '';
  document.getElementById('demande').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
  document.getElementById('client-name').focus({ preventScroll: true });
}));
budget.addEventListener('input', () => {
  selectedPackage = null;
  renderSelection();
});
form.addEventListener('input', () => { status.textContent = ''; });
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const values = Object.fromEntries(new FormData(form));
  if (!values.name.trim() || !values.brief.trim()) {
    status.textContent = language === 'fr' ? 'Renseignez votre nom et décrivez votre projet.' : 'Please enter your name and describe your project.';
    return;
  }
  window.location.href = buildRequest(values);
  status.textContent = language === 'fr'
    ? 'Votre messagerie va s’ouvrir. La demande sera envoyée uniquement après votre clic sur Envoyer. Si rien ne s’ouvre, utilisez l’adresse ci-dessus.'
    : 'Your email app will open. Your request is sent only when you click Send. If nothing opens, use the email address above.';
});
const contact = document.getElementById('contact-email');
contact.textContent = CONTACT_EMAIL;
contact.href = `mailto:${CONTACT_EMAIL}`;
let initialLanguage = (navigator.language || 'fr').startsWith('fr') ? 'fr' : 'en';
try { initialLanguage = localStorage.getItem('haxlr-lang') || initialLanguage; } catch (_) {}
setLanguage(initialLanguage);
