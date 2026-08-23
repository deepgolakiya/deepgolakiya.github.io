// force the mobile nav closed on load and on resize back to desktop width
// (some browsers restore stale open state on navigation, don't want that)
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navLinks.classList.remove('open');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 700) navLinks.classList.remove('open');
});

// Navbar background on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// Reveal-on-scroll animation
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));
