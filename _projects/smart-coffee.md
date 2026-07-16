---
layout: project-detail
title: "Smart Coffee & Payment System"
description: "Eine softwarebasierte Steuerung für einen Kaffeeautomaten mit Münzwechsler-Simulation, Swing-GUI und SQLite-Datenbank."
technologies: ["Java", "Swing", "SQLite", "SQL"]
thumbnail: "/assets/img/projects/smart_coffee/thumb.jpg"
hero_image: "/assets/img/projects/smart_coffee/coffee-hero.png"
gallery_images:
  - /assets/img/projects/smart_coffee/Screenshot_1.jpg
  - /assets/img/projects/smart_coffee/Screenshot_2.jpg
  - /assets/img/projects/smart_coffee/Screenshot_3.jpg
  - /assets/img/projects/smart_coffee/Screenshot_4.jpg
---

## Über das Projekt
**Smart Coffee & Payment System** ist ein praxisnahes Softwareprojekt, das im Rahmen der Fachinformatiker-Ausbildung bei der GFN entwickelt wurde. Ziel des Projekts war es, eine vollständige Steuerung für einen modernen Kaffeevollautomaten zu entwickeln, der über ein integriertes Münzwechselsystem verfügt und alle Transaktionen dauerhaft speichert.

Die Anwendung trennt strikt zwischen der Benutzeroberfläche (GUI), der internen Steuerungslogik und der Datenhaltung (MVC-Ansatz).

---

## Hauptfunktionen

###  Getränkezubereitung & Ressourcen-Management
*  **Smarte Zubereitung:** Auswahl verschiedener Kaffeesorten mit oder ohne Milch.
*  **Bestandsprüfung:** Automatische Echtzeit-Überprüfung der Kaffeebohnen- (2000g Startwert) und Milchpulverbestände (200g Startwert) vor jeder Zubereitung.
*  **Verschleiß-Simulation:** Realistische Simulation eines Mahlwerkdefekts mit einer Wahrscheinlichkeit von 2% bei jedem Brühvorgang inklusive Fehlermeldung und Protokollierung.

### Münzwechsler & Wechselgeld-Algorithmus
*  **Präzise Münzannahme:** Akzeptiert verschiedene Euro-Münzen (von 1 Cent bis 2 Euro).
*  **Smarter Wechselgeld-Algorithmus:** Automatische Berechnung des Wechselgelds basierend auf dem aktuellen Münzbestand in den einzelnen Schächten des Automaten.
*  **Sicherheitsprüfungen:** Abbruch des Bezahlvorgangs und Geldrückgabe, falls nicht genügend Wechselgeld im System vorhanden ist.

### SQLite-Datenbank & Statistiken
*  **Relationales Datenmodell:** Speicherung aller Bestellungen und der exakten Münzzusammensetzung jeder Zahlung (1:n Beziehung).
*  **Analyse-Möglichkeit:** Erleichtert Wartungsarbeiten durch Protokollierung von Fehlermeldungen und Statistiken zum Münzbestand.

---

## Technologie-Stack
*  **Programmiersprache:** Java
*  **GUI-Bibliothek:** Java Swing (für eine intuitive, grafische Benutzeroberfläche)
*  **Datenbank:** SQLite (Lokale, performante SQL-Datenbank)
*  **Architektur:** Trennung von GUI, Logik und Datenhaltung (MVC / DAO Design-Pattern)

---

## Datenbank-Struktur (SQL)
 Das relationale Datenbankschema besteht aus den folgenden Kernkomponenten, um die referenzielle Integrität der Bestellungen und Münzzahlungen zu sichern:

<br>

```sql
-- Tabelle für die Bestellungen
CREATE TABLE Bestellungen (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Kaffeeart TEXT NOT NULL,
    Mit_Milch INTEGER NOT NULL, -- Boolean als 0 oder 1
    Preis REAL NOT NULL,
    Zeitstempel TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabelle für die genutzten Münzen pro Zahlung (1:n Beziehung)
CREATE TABLE Zahlungen (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Bestellung_ID INTEGER,
    Muenztyp TEXT NOT NULL,
    Anzahl INTEGER NOT NULL,
    FOREIGN KEY(Bestellung_ID) REFERENCES Bestellungen(ID)
);
```
