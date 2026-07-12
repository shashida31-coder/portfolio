"use strict";

const siteHeader = document.querySelector(".site-header");
const menuButton = document.getElementById("menuButton");
const mobileNav = document.getElementById("mobileNav");
const themeButton = document.getElementById("themeButton");
const currentYear = document.getElementById("currentYear");

function updateHeader() {
    if (!siteHeader) {
        return;
    }

    siteHeader.classList.toggle("scrolled", window.scrollY > 12);
}

function closeMobileMenu() {
    if (!menuButton || !mobileNav) {
        return;
    }

    menuButton.classList.remove("active");
    mobileNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
}

function toggleMobileMenu() {
    if (!menuButton || !mobileNav) {
        return;
    }

    const isOpen = mobileNav.classList.toggle("open");

    menuButton.classList.toggle("active", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
}

function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;

    if (themeButton) {
        themeButton.setAttribute(
            "aria-label",
            theme === "dark"
                ? "ライトモードに切り替える"
                : "ダークモードに切り替える"
        );
    }
}

function toggleTheme() {
    const currentTheme =
        document.documentElement.dataset.theme === "dark"
            ? "dark"
            : "light";

    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    localStorage.setItem("theme", nextTheme);
    applyTheme(nextTheme);
}

applyTheme(getInitialTheme());
updateHeader();

window.addEventListener("scroll", updateHeader, { passive: true });

if (menuButton) {
    menuButton.addEventListener("click", toggleMobileMenu);
}

if (themeButton) {
    themeButton.addEventListener("click", toggleTheme);
}

document.querySelectorAll(".mobile-nav a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
        closeMobileMenu();
    }
});

if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
}