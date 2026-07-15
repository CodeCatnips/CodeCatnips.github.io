---
layout: project-detail
title: Forest of Secrets — Das Katzen-Abenteuer
description: Ein interaktives 2D-Abenteuerspiel in Java, das die klassische OOP-Struktur mit spielerischer Kreativität verbindet.
technologies: [Java, Maven, JavaFX, OOP]
thumbnail: /assets/img/projects/forest_of_secrets/thumb.png
hero_image: /assets/img/projects/forest_of_secrets/fos-hero.png
gallery_images:
  - /assets/img/projects/forest_of_secrets/Screenshot_1.jpg
  - /assets/img/projects/forest_of_secrets/Screenshot_2.jpg
  - /assets/img/projects/forest_of_secrets/Screenshot_3.jpg
  - /assets/img/projects/forest_of_secrets/Screenshot_4.jpg
  - /assets/img/projects/forest_of_secrets/Screenshot_5.jpg
  - /assets/img/projects/forest_of_secrets/Screenshot_6.jpg
---

## Über das Projekt
**Forest of Secrets (FoS)** ist ein interaktives Desktop-Spiel, das im Rahmen der Java-Ausbildung entstanden ist. Die ursprüngliche Aufgabe verlangte die Simulation eines Autos auf einem Raster. Mit viel Kreativität und Liebe zum Detail wurde das Konzept jedoch komplett neu interpretiert: Der Spieler steuert eine mutige Katze, die sich durch einen dichten, von Hunden und Steinlabyrinthen bewachten Zauberwald kämpfen muss, um das verwunschene Schloss zu finden.

Der Fokus des Projekts lag auf der praktischen Anwendung von **objektorientierter Programmierung (OOP)**, Algorithmen zur Hindernisvermeidung und einer ansprechenden, modernen Benutzeroberfläche mit JavaFX.

---

## Hauptfunktionen

### Gameplay & Logik (Das "Katzen-Gehirn")
* **Interaktive Fortbewegung:** Die Katze bewegt sich schrittweise durch das 15x15 Raster. Jeder Schritt verbraucht Energie (30 Einheiten).
* **Dynamisches Ressourcen-System:**
  * **Mäuse (+500 Energie):** Schmackhafte Beute für maximale Regeneration.
  * **Bälle (+300 Energie) & Federn (+150 Energie):** Spielzeuge, die der Katze neue Kraft schenken.
  * **Hunde (-400 Energie):** Gefährliche Gegner, denen man ausweichen muss.
* **Das Ziel:** Das geheimnisvolle Schloss finden, um das Spiel erfolgreich zu beenden.

### Intelligente Labyrinth-Generierung (Smart Randomizer)
* **Kollisionsschutz:** Die Katze kann keine Hindernisse (Steine) durchqueren.
* **Smarte Pfad-Validierung:** Ein speziell entwickelter Algorithmus sorgt dafür, dass Hindernisse (Steine) so generiert werden, dass im Radius von einer Zelle kein anderer Stein platziert wird. Dadurch wird garantiert, dass das Labyrinth immer lösbar bleibt und keine engen Gänge blockiert werden.
* **Sicherer Spawn:** Weder Hindernisse noch Gefahren können direkt auf dem Startfeld der Katze (0,0) oder den direkt angrenzenden Feldern erscheinen.

### Architektur & Clean Code
* **Strikte Trennung nach MVC:** Trennung der Datenlogik (Katze, Hindernisse, Positionen) von visuelle Darstellung (BoardUI/JavaFX).
* **Robuste Fehlerbehandlung:** Integration von Custom Exceptions (`UnknownElementException`), um fehlerhafte Render-Vorgänge sicher abzufangen.
* **Modernes Build-Management:** Vollständige Verwaltung und Strukturierung der Abhängigkeiten über Maven.

---

## Technologie-Stack
* **Programmiersprache:** Java (SE)
* **GUI-Bibliothek:** JavaFX (für ein flüssiges Rendering des Grid-Spielfelds)
* **Build-Tool:** Maven (zur Verwaltung von JavaFX-Modulen)
* **Designmuster:** Objektorientiertes Design (Vererbung für Spielelemente wie `Stone`, `Cat`, `Dog` von der Basisklasse `Element`)

---

## Wie es funktioniert (Code-Einblick)
Im Herzen des Spiels steuert die Klasse `FoS` die gesamte Logik. Hier ist ein Auszug aus Bewegungs- und Kollisionsprüfungen:

```java
// Überprüfung auf Kollision mit den generierten Stein-Labyrinthen
for (Element el : elements) {
    if (el instanceof Stone) {
        Stone stone = (Stone) el;
        for (Position stonePos : stone.getBodyPositions()) {
            if (neuePosition.equals(stonePos)) {
                return "Mau! Katze kommt da nicht durch!"; // Katze stößt sanft gegen das Hindernis
            }
        }
    }
}
