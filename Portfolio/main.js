document.addEventListener('DOMContentLoaded', () => {
const subtitle = document.getElementById('typing-text');
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

const keepNavbarVisible = () => {
if (!navbar) {
return;
}

navbar.style.position = 'fixed';
navbar.style.top = '0';
navbar.style.left = '0';
navbar.style.right = '0';
navbar.style.width = '100%';
navbar.style.transform = 'none';
navbar.style.opacity = '1';
navbar.style.visibility = 'visible';
navbar.style.zIndex = '1000';
};

keepNavbarVisible();
window.addEventListener('scroll', keepNavbarVisible, { passive: true });
window.addEventListener('resize', keepNavbarVisible);

if (navToggle && navLinks) {
const closeMenu = () => {
navLinks.classList.remove('is-open');
navToggle.setAttribute('aria-expanded', 'false');
};

const isMenuOpen = () => navLinks.classList.contains('is-open');

navToggle.addEventListener('click', () => {
const isOpen = navLinks.classList.toggle('is-open');
navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
link.addEventListener('click', closeMenu);
});

window.addEventListener('resize', () => {
if (window.innerWidth > 900) {
closeMenu();
}
});

document.addEventListener('click', (event) => {
if (!isMenuOpen()) {
return;
}

const target = event.target;
if (target instanceof Node && !navLinks.contains(target) && !navToggle.contains(target)) {
closeMenu();
}
});

document.addEventListener('keydown', (event) => {
if (event.key === 'Escape') {
closeMenu();
}
});
}

if (!subtitle) {
return;
}

const text = 'Full Stack Developer';
let index = 0;
let deleting = false;

const type = () => {
if (!deleting) {
index += 1;
subtitle.textContent = text.slice(0, index);

if (index === text.length) {
deleting = true;
setTimeout(type, 1100);
return;
}

setTimeout(type, 85);
return;
}

index -= 1;
subtitle.textContent = text.slice(0, index);

if (index === 0) {
deleting = false;
setTimeout(type, 350);
return;
}

setTimeout(type, 55);
};

type();
});
