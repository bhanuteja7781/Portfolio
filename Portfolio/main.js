document.addEventListener('DOMContentLoaded', () => {
const subtitle = document.getElementById('typing-text');
const navbar = document.getElementById('navbar');

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
