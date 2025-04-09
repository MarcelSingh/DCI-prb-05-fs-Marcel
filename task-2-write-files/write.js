import { readFile, writeFile } from 'fs/promises';

async function updateFile(filename) {
  try {
    // Schritt 1: Lese die Datei und speichere den Inhalt
    const data = await readFile(filename, 'utf8');
    
    // Schritt 2: Füge ein '*' zum Inhalt hinzu
    const updatedData = data + '*';
    
    // Schritt 3: Schreibe den neuen Inhalt zurück in die Datei
    await writeFile(filename, updatedData, 'utf8');
    console.log(`Die Datei ${filename} wurde erfolgreich aktualisiert.`);
    
  } catch (err) {
    console.error(`Fehler beim Bearbeiten von ${filename}:`, err.message);
  }
}

// Update die Datei review.txt 4 Mal
await updateFile('review.txt');
await updateFile('review.txt');
await updateFile('review.txt');
await updateFile('review.txt');

// Versuche, die Datei star.txt zu aktualisieren (was einen Fehler auslösen sollte)
await updateFile('star.txt');  
// Diese Datei existiert nicht und wird einen Fehler auslösen
