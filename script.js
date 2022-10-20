"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelector(".btn-show-modal");
const btnCloseModal = document.querySelector(".btn-close-modal");
const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav_links");
const header = document.querySelector(".header");
const toggleBtn = document.querySelector(".nav_toggle");
const close = document.querySelector(".cki");
const btnScrollTo = document.querySelector(".btn-scroll-to");
const allSections = document.querySelectorAll(".section");

//Scroll behavior
navLinks.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav_link")) {
    const attr = e.target.getAttribute("href");
    document.querySelector(attr).scrollIntoView({ behavior: "smooth" });
  }
});

// Modal window

function openModal(e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal(e) {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Toggle navbar
toggleBtn.addEventListener("click", function () {
  if (navLinks.classList.contains("nav_open")) {
    navLinks.classList.remove("nav_open");
    document.querySelector("html").style.overflow = "visible";
  } else {
    navLinks.classList.add("nav_open");
    document.querySelector("html").style.overflow = "hidden";
  }
});
