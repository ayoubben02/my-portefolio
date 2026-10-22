// Smooth scroll navigation with nav offset
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Optimized Scroll Reveal Effect
const reveals = document.querySelectorAll('.reveal');

function showOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 80;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', showOnScroll, { passive: true });
window.addEventListener('load', showOnScroll);

// Typing Text Animation
const phrases = [
  "I'm a full-stack developer...",
  "I love building web apps...",
  "I turn ideas into code..."
];

const typingElement = document.querySelector(".typing-text");
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 90;
let pauseTime = 1600;

function typeLoop() {
  if (!typingElement) return;

  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typingElement.textContent = currentPhrase.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentPhrase.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentPhrase.length + 1) {
    isDeleting = true;
    setTimeout(typeLoop, pauseTime);
    return;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }

  setTimeout(typeLoop, isDeleting ? 40 : typingSpeed);
}

typeLoop();

// Mobile menu toggle & interactions
const mobileMenu = document.getElementById("mobile-menu-btn");
const mobileContent = document.getElementById("mobile-menu-content");

if (mobileMenu && mobileContent) {
  mobileMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileContent.style.display =
      mobileContent.style.display === "block" ? "none" : "block";
  });

  // Automatically close menu when clicking any link
  document.querySelectorAll('.mobile-menu-content a').forEach(link => {
    link.addEventListener('click', () => {
      mobileContent.style.display = 'none';
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', () => {
    mobileContent.style.display = 'none';
  });
}
