// set current year
const year = document.querySelector(".year");
year.textContent = new Date().getFullYear();

// add functionality to mobile nav
const navBtn = document.querySelector(".mobile-nav");
const headerEl = document.querySelector(".header");

navBtn.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const navLinks = document.querySelectorAll(".main-nav-link");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (headerEl.classList.contains("nav-open"))
      headerEl.classList.remove("nav-open");
  });
});

// make header sticky
const heroSectionEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(heroSectionEl);
