import { readFile } from 'fs/promises';

async function printFile(filename) {
  try {
    const data = await readFile(filename, 'utf8');
    //.trim ist nicht nötig sieht aber sauberer, es entfernt unnötige leerzeichen
    // z.b. " Hallo Welt " wird zu "Hallo Welt".
    console.log(data.trim());
  } catch (err) {
    console.error(`Fehler beim Lesen von ${filename}:`, err.message);
  }
}

await printFile('data1.txt');
await printFile('data3.txt');

