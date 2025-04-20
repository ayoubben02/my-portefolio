// Smooth scroll nav bar 
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  

  // fach katscrooli 

  const reveals = document.querySelectorAll('.reveal');

  function showOnScroll() {
    reveals.forEach((el) => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 100;
  
      if (elementTop < windowHeight - revealPoint) {
        el.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', showOnScroll);
  window.addEventListener('load', showOnScroll); // so things show on refresh too
  


  const phrases = [
    "I'm a full-stack developer...",
    "I love building web apps...",
    "I turn ideas into code..."
  ];
  
  const typingElement = document.querySelector(".typing-text");
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  let pauseTime = 1500;
  
  function typeLoop() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex--);
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex++);
    }
  
    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeLoop, pauseTime);
      return;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  
    setTimeout(typeLoop, isDeleting ? 50 : typingSpeed);
  }
  
  typeLoop();
  