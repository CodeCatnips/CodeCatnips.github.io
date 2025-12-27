---
layout: project-detail
title: "Agave Planer — Ressourcenvisualisierung "
description: "Eine professionelle Desktop-Anwendung zur Schichtplanung und Mitarbeiterverwaltung."
technologies: ["Python", "Tkinter", "JSON", "InnoSetup"]
thumbnail: "/assets/img/projects/agave_planer/thumb.jpg" # Start Seite (klein)
hero_image: "/assets/img/projects/agave_planer/agave-hero.png" # Bild fur Head
gallery_images:
  - /assets/img/projects/agave_planer/Screenshot_1.jpg
  - /assets/img/projects/agave_planer/Screenshot_2.jpg
  - /assets/img/projects/agave_planer/Screenshot_3.jpg
  - /assets/img/projects/agave_planer/Screenshot_4.jpg
---

## Über das Projekt
**Planer 2026** ist ein leistungsstarkes Tool für Manager, das die manuelle Ressoureplanung (oft in Excel) durch eine intuitive, visuelle Oberfläche ersetzt.

Der Fokus der Entwicklung lag auf einer **"UI/UX" User Experience (UX), (UI) User Interface** , einem modernen "Agave Lux"-Design und höchster **Datensicherheit**. Die Anwendung wird als vollständig kompilierter Installer ausgeliefert und erfordert keine vorinstallierte Python-Umgebung beim Endanwender.

## Hauptfunktionen

###  UI & UX Design
* **Custom Design System:** Eigens entwickelte Farbpalette ("Agave Lux") und UI-Komponenten für eine professionelle und augenschonende Arbeitsumgebung.
* **Flicker-Minima Rendering:** Optimierte Aktualisierungslogik verhindert das Flackern des Interfaces bei Datenänderungen.
* **Scroll Memory:** Intelligente Beibehaltung der Scroll-Position bei Listenaktualisierungen für einen unterbrechungsfreien Workflow.

### Funktionalität
* **Drag & Drop Workflow:** Intuitive Zuweisung von Mitarbeitern zu Abteilungen per Maus.
* **Smart Cards:**
  * Ein-Klick-Wechsel zwischen Tag- und Nachtschicht (☀/☾).
  * Integrierte Validierung für Mengeneingaben.
* **Automatisierung:**
  * Echtzeit-Speicherung aller Änderungen.
  * Automatische Datenbereinigung und Strukturierung.

### Architektur & Sicherheit
* **Windows-Konformität:** Speicherung der Anwendungsdaten im geschützten Benutzerverzeichnis (`AppData/Roaming`). Dies gewährleistet volle Kompatibilität auch ohne Administratorrechte.
* **Crash Protection:** Automatische Erstellung von Backup-Dateien (`.bak`) im Falle von Dateikorruption.
* **Standalone Deployment:** Kompilierung als einzelne `.exe` (PyInstaller) und professionelle Installation via InnoSetup-Wizard.

---

##  Technologie-Stack
* **Sprache:** Python 3.x
* **GUI Framework:** Tkinter (mit Custom Styling & Canvas-Zeichnungen)
* **Datenhaltung:** JSON (Lokales Dateisystem)
* **Packaging:** PyInstaller (Onefile mode)
* **Distribution:** Inno Setup Compiler 6 (Erstellung von Setup.exe, Verknüpfungen, Lizenzierung)

---

## Installation
1. Laden die Datei `Planer_Setup.exe` herunter.
2. Führen den Installer aus.
3. Die Anwendung erstellt automatisch Desktop-Verknüpfungen und initialisiert die Datenbank.

