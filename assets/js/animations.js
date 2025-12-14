document.addEventListener('DOMContentLoaded', () => {
  /* --- 1. LIGHTBOX-LOGIK (GALERIE + SLIDER) --- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  
  // NodeList in ein echtes Array umwandeln, um mit Indizes arbeiten zu können
  const triggers = Array.from(document.querySelectorAll('.lightbox-trigger')); 
  const closeBtn = document.querySelector('.close-btn');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  let currentIndex = 0; // Speichert den Index des aktuellen Bildes

  // Funktion zum Anzeigen des Bildes anhand des Index
  const showImage = (index) => {
    // Endloses Scrollen (Loop):
    if (index >= triggers.length) {
      currentIndex = 0; // Wenn Ende erreicht, gehe zum Anfang
    } else if (index < 0) {
      currentIndex = triggers.length - 1; // Wenn Anfang erreicht, gehe zum Ende
    } else {
      currentIndex = index;
    }

    // Sanfter Übergangseffekt (Fade)
    lightboxImg.style.opacity = 0.5;
    
    setTimeout(() => {
      lightboxImg.src = triggers[currentIndex].src;
      lightboxImg.style.opacity = 1;
    }, 150);
  };

  // Überprüfung, ob Elemente existieren
  if (lightbox && lightboxImg && triggers.length > 0) {
    
    // 1. Öffnen beim Klick auf das Vorschaubild
    triggers.forEach((img, index) => {
      img.addEventListener('click', () => {
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // <--- HINTERGRUND-SCROLLEN SPERREN
        
        currentIndex = index; 
        
        // src sofort setzen, damit beim Öffnen kein altes Bild sichtbar ist
        lightboxImg.src = triggers[currentIndex].src; 
        lightboxImg.style.opacity = 1;
      });
    });

    // 2. Vor/Zurück-Buttons
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Verhindert, dass der Klick auf den Hintergrund geht und das Fenster schließt
        showImage(currentIndex + 1);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showImage(currentIndex - 1);
      });
    }

    // 3. Schließen
    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = ''; // <--- HINTERGRUND-SCROLLEN ERLAUBEN
      
      // src nach einer kurzen Pause leeren, um Flackern beim Schließen zu vermeiden
      setTimeout(() => {
        lightboxImg.src = ''; 
      }, 300);
    };

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

    // Schließen durch Klick auf den dunklen Hintergrund
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // 4. Tastatursteuerung (Esc, Links, Rechts)
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('active')) return;

      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showImage(currentIndex + 1);
      if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
    });
  }

  /* --- 2. GSAP ANIMATIONEN --- */
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);

    // Hintergrund-Parallax
    if (document.querySelector(".hero-parallax")) {
      gsap.to(".layer-back", {
        y: 60,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-parallax",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".layer-front", {
        y: 120,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-parallax",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Animation des Erscheinens von Inhalten (Fade-in)
    // Alle notwendigen Klassen hinzugefügt
    const fadeElements = gsap.utils.toArray("h1, h2, .section-text, .glass-card, .legal-content, .project-body");
    
    fadeElements.forEach((section) => {
      gsap.from(section, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 90%", // Wird ausgelöst, wenn das Element am unteren Bildschirmrand erscheint
        },
      });
    });

  } else {
    // Leise ignorieren, wenn GSAP fehlt (z. B. auf Fehlerseiten)
    // console.warn("GSAP ist nicht eingebunden"); 
  }
});