/**
 * Lee contenido.md (carpeta padre de formacion-bme) y genera src/data/topics.json
 * con los bloques 1–9 (secciones A, B y C).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.join(__dirname, "..");
const contenidoPath = path.join(appRoot, "..", "contenido.md");
const outPath = path.join(appRoot, "src", "data", "topics.json");

function stripCitations(s) {
  return s.replace(/(\s*\[[\dA-Za-z]+\])+/g, "");
}

function stripSectionHeader(s) {
  return s
    .replace(/^###\s+A\.\s*[^\n]*\n*/im, "")
    .replace(/^###\s+B\.\s*[^\n]*\n*/im, "")
    .replace(/^###\s+C\.\s*[^\n]*\n*/im, "")
    .trim();
}

const LABELS = [
  "Objetivo del bloque",
  "Desarrollo del contenido",
  "Contexto regulatorio",
  "Implicación para Relaciones con Inversores",
  "Mensaje de cierre",
  "Desarrollo completo del bloque",
  "Ideas clave que sostienen el bloque",
  "Contexto conceptual adicional",
];

function enhanceLabels(s) {
  let t = s;
  for (const label of LABELS) {
    const esc = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    t = t.replace(new RegExp(`^${esc}\\s*$`, "gim"), `**${label}**`);
  }
  t = t.replace(/^Duración orientativa:.+$/gim, (line) => `*${line.trim()}*`);
  return t;
}

function cleanBlock(raw) {
  if (!raw) return "";
  return enhanceLabels(stripCitations(stripSectionHeader(raw.trim())));
}

function slugify(title) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
}

const raw = fs.readFileSync(contenidoPath, "utf8");
const marker = "# CONTENIDOS DE LA FORMACIÓN:";
const idx = raw.indexOf(marker);
if (idx === -1) {
  console.error("No se encontró:", marker);
  process.exit(1);
}
const body = raw.slice(idx + marker.length).trim();

const chapterParts = body
  .split(/(?=^## \d+\.\s)/m)
  .filter((p) => /^## \d+\./m.test(p));

const topics = [];

for (const part of chapterParts) {
  const hm = part.match(/^## (\d+)\.\s+(.+?)$/m);
  if (!hm) continue;
  const num = parseInt(hm[1], 10);
  if (num < 1 || num > 9) continue;
  const title = hm[2].trim();

  const aMatch = part.match(/### A\.[^\n]*\n([\s\S]*?)(?=### B\.)/);
  const bMatch = part.match(/### B\.[^\n]*\n([\s\S]*?)(?=### C\.)/);
  const cMatch = part.match(
    /### C\.[^\n]*\n([\s\S]*?)(?=\nReferencias\s*\n|$)/,
  );

  topics.push({
    id: slugify(title) || `bloque-${num}`,
    number: num,
    title,
    sectionA: cleanBlock(aMatch?.[1] ?? ""),
    sectionB: cleanBlock(bMatch?.[1] ?? ""),
    sectionC: cleanBlock(cMatch?.[1] ?? ""),
  });
}

topics.sort((a, b) => a.number - b.number);

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(topics, null, 0), "utf8");
console.log("OK:", topics.length, "bloques →", outPath);
