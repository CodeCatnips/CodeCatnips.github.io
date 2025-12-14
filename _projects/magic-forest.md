---
layout: project-detail
title: "Magic Forest — Trainingskarten"
description: "Ein atmosphärisches Web-Design + Lernkarten App für Naturliebhaber."
technologies: [HTML5, CSS3, JavaScript, Figma, Google Sheets]
thumbnail: "/assets/img/projects/magic-forest/thumb.jpg" # Start Seite (klein)
hero_image: "/assets/img/projects/magic-forest/forest-hero.jpg" # Bild fur Head
gallery_images:
  - /assets/img/projects/magic-forest/screen1.jpg
  - /assets/img/projects/magic-forest/screen2.jpg
  - /assets/img/projects/magic-forest/screen3.jpg
  - /assets/img/projects/magic-forest/screen4.gif
---

### Über das Projekt

Dieses Projekt ist eine **interaktive Trainingskarten-Applikation**, die darauf ausgelegt ist, komplexe Lerninhalte strukturiert, effizient und visuell ansprechend darzustellen.  
Das Interface verbindet klare Benutzerführung, moderne UI-Elemente und solide Sicherheitsmechanismen, um ein zuverlässiges und intuitives Lernerlebnis zu ermöglichen.



## 1. Aufgabe

Ziel war es, ein leicht bedienbares Lernkarten-Tool zu entwickeln, das:

- verschiedene Themenbereiche dynamisch lädt,
- das Lernen durch eine angenehme, ablenkungsfreie Oberfläche unterstützt,
- klare Interaktionen wie *Karte drehen*, *vorwärts*, *rückwärts* anbietet,
- sowohl auf Desktop als auch mobil stabil funktioniert,
- moderne Web-Standards sowie Sicherheitskonzepte berücksichtigt,
- übersichtlich, schnell verständlich und flexibel erweiterbar bleibt.



## 2. Lösungsansatz & Umsetzung

### **Frontend-Architektur**

- Strukturierter HTML-Aufbau mit klar getrennten Bereichen *(Sidebar, Main, Karte, Footer)*  
- Responsives Layout, optimiert für Desktop und später erweiterbar für mobile Geräte  
- Moderne visuelle Gestaltung (Glas-Effekt, ruhige Typografie)  
- Logische Nutzerführung durch sauber angeordnete Steuerungselemente  

### **Interaktive Funktionen**

- Dynamisches Laden von Themen über die Sidebar  
- Mehrfachauswahl per **CTRL + Klick**  
- Flüssige Kartenlogik mit:  
  - `flipCard()` – animiertes Drehen  
  - `nextCard()` / `previousCard()` – Navigation  
- Getrennte DOM-Elemente für Frage & Antwort für bessere Wartbarkeit  

### **Sicherheitsaspekte**

Besonders stark ist die implementierte **Content-Security-Policy (CSP)**:

- `default-src 'self'`
- präzise Definition von `script-src`, `connect-src`, `style-src`, `img-src`
- Schutz vor XSS und MIME-Sniffing

Dieses Sicherheitsniveau liegt **deutlich über typischen Ausbildungs- oder Studentenprojekten**.

### **JavaScript-Struktur**

- Logik ausgelagert in **script-public.js**  
- strikte Trennung von Darstellung und Funktionalität  
- klare Funktionsnamen und übersichtliche Struktur  



## 3. Was mir besonders gelungen ist

- Eine intuitive, minimalistische UI, die sofort verständlich ist  
- Robuste und flüssige Kartenlogik  
- Ein professionelles Sicherheitskonzept, das moderne Standards nutzt  
- Eine klare, skalierbare Code-Struktur  
- Ein ästhetisches, ruhiges Lernumfeld, das Nutzer:innen nicht überfordert  

Das Projekt zeigt, wie **Design, UX, saubere Frontend-Architektur und Sicherheit** erfolgreich miteinander verbunden werden können — eine starke Grundlage für professionelle Webentwicklung.
