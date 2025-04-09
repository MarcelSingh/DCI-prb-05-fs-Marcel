import fs from 'fs'
console.clear()
const num = 31337





try {
    const result = num();
  } catch (err) {
    console.error(' Fehler: Du hast versucht, eine Zahl wie eine Funktion aufzurufen.', err.message);
  }









  try {
    const lowered = num.toLowerCase();
  } catch (err) {
    console.error('Fehler: Du hast versucht, eine Methode zu benutzen, die es bei Zahlen nicht gibt.', err.message);
  }







  try {
    fs.readFileSync("file.txt", "utf8");
  } catch (err) {
    console.error('Fehler beim Lesen der Datei "file.txt". Existiert sie wirklich?', err.message);
  }









  try {
    tamagotchi.eat();
  } catch (err) {
    console.error('Fehler: Das Objekt "tamagotchi" gibt es nicht oder ist nicht definiert.', err.message);
  }









