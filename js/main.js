import { LINKS } from "./config.js";

function setExternalLinks() {
  const formLinks = document.querySelectorAll(".js-form-link");
  const checklistLinks = document.querySelectorAll(".js-checklist-link");
  const telegramLinks = document.querySelectorAll(".js-telegram-link");
  const supportLinks = document.querySelectorAll(".js-support-link");

  formLinks.forEach((link) => {
    link.href = LINKS.form;
    link.target = "_blank";
    link.rel = "noopener";
  });

  checklistLinks.forEach((link) => {
    link.href = LINKS.checklist;
    link.target = "_blank";
    link.rel = "noopener";
  });

  telegramLinks.forEach((link) => {
    link.href = LINKS.telegram;
    link.target = "_blank";
    link.rel = "noopener";
  });

  supportLinks.forEach((link) => {
    link.href = LINKS.support;
    link.target = "_blank";
    link.rel = "noopener";
  });
}

function initMobileMenu() {
  const button = document.querySelector("[data-menu-button]");
  const nav = document.querySelector("[data-mobile-nav]");

  if (!button || !nav) {
    return;
  }

  button.addEventListener("click", () => {
    nav.classList.toggle("is-open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
    });
  });
}

function initFaqBehavior() {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) {
        return;
      }

      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.open = false;
        }
      });
    });
  });
}

function init() {
  setExternalLinks();
  initMobileMenu();
  initFaqBehavior();
}

init();