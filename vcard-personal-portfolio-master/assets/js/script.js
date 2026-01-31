'use strict';

// sidebar toggle
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

// navigation
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navLinks.forEach(link => {
  link.addEventListener("click", () => {

    const target = link.dataset.page;

    pages.forEach(page => {
      page.classList.remove("active");
      if (page.dataset.page === target) {
        page.classList.add("active");
        window.scrollTo(0, 0);
      }
    });

    navLinks.forEach(btn => btn.classList.remove("active"));
    link.classList.add("active");

  });
});
