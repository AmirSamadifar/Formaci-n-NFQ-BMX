/**
 * Procesa contenido.md → presentation.json (estructura visual).
 * Núcleo: sección A troceada; enriquecimiento: B (ideas + nota); C (guion ponente).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { diagramsByTopic } from "./diagram-sources.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.join(__dirname, "..");
const contenidoPath = path.join(appRoot, "..", "contenido.md");
const outPath = path.join(appRoot, "src", "data", "presentation.json");

function stripCitations(s) {
  return s.replace(/(\s*\[[\dA-Za-z]+\])+/g, "");
}

/** Tipográficas → ASCII para parsear citas del ponente. */
function normalizeText(s) {
  return stripCitations(
    s
      .replace(/[\u201C\u201D\u00AB\u00BB]/g, '"')
      .replace(/[\u2018\u2019]/g, "'"),
  );
}

const HEADERS = [
  ["Objetivo del bloque", "objetivo"],
  ["Desarrollo del contenido", "desarrollo"],
  ["Contexto regulatorio", "regulatorio"],
  ["Implicación para Relaciones con Inversores", "ri"],
  ["Mensaje de cierre", "cierre"],
];

function extractQuotes(text) {
  const quotes = [];
  let i = 0;
  while (i < text.length) {
    const open = text.indexOf('"', i);
    if (open === -1) break;
    const close = text.indexOf('"', open + 1);
    if (close === -1) break;
    const inner = text
      .slice(open + 1, close)
      .replace(/\s+/g, " ")
      .trim();
    if (inner.length > 30) quotes.push(inner);
    i = close + 1;
  }
  return quotes;
}

function parseDesarrollo(content) {
  const trimmed = content.trim();
  const numbered = [];
  const re = /(?:^|\n)(\d+)\.\s+([^\n]+)\n([\s\S]*?)(?=\n\d+\.\s+[^\n]+\n|$)/g;
  let m;
  while ((m = re.exec(trimmed)) !== null) {
    numbered.push({
      title: m[2].trim(),
      body: m[3].trim(),
    });
  }
  if (numbered.length >= 2) {
    const out = [{ type: "cards", items: numbered }];
    const recapLabels = [
      "Dicho de forma simple:",
      "Dicho aún más simple:",
      "Dicho de forma muy simple:",
    ];
    for (const label of recapLabels) {
      const idx = trimmed.indexOf(label);
      if (idx === -1) continue;
      const after = trimmed.slice(idx + label.length).trim();
      const stop = after.search(/\n\n[^\n;]+[.!?]\s*\n\n/);
      const chunk =
        stop === -1
          ? after.split(/\n\n+/)[0]
          : after.slice(0, stop);
      const lines = chunk
        .split(/\n/)
        .map((l) => l.replace(/;\s*$/, "").trim())
        .filter((l) => l.length > 2 && !l.match(/^\d+\./));
      if (lines.length >= 2) {
        out.push({ type: "pillars", lines });
        break;
      }
    }
    return out;
  }

  const simpleIdx = trimmed.search(
    /Dicho de forma simple:|Dicho aún más simple:|Dicho de forma muy simple:/,
  );
  if (simpleIdx !== -1) {
    const head = trimmed.slice(0, simpleIdx).trim();
    const tail = trimmed.slice(simpleIdx).trim();
    const out = [];
    if (head) {
      const paras = head.split(/\n\n+/).filter(Boolean);
      out.push({ type: "narrative", paragraphs: paras });
    }
    const lines = tail
      .split(/\n/)
      .slice(1)
      .map((l) => l.replace(/;\s*$/, "").trim())
      .filter((l) => l.length > 2);
    if (lines.length >= 2) out.push({ type: "pillars", lines });
    return out.length ? out : [{ type: "narrative", paragraphs: [trimmed] }];
  }

  const paras = trimmed.split(/\n\n+/).filter(Boolean);
  return [{ type: "narrative", paragraphs: paras.length ? paras : [trimmed] }];
}

function parseSectionA(rawA) {
  let text = normalizeText(rawA.replace(/^###\s*A\.[^\n]*\n/im, "").trim());
  const lines = text.split("\n");
  let subtitle = "";
  if (lines[0]?.match(/^Bloque \d+\./)) {
    subtitle = lines.shift().trim();
  }
  while (lines.length && lines[0].trim() === "") lines.shift();

  const blocks = [];
  let mode = null;
  const buf = [];

  function flush() {
    if (!mode) return;
    const content = buf.join("\n").trim();
    buf.length = 0;
    if (!content) {
      mode = null;
      return;
    }
    if (mode === "objetivo") {
      blocks.push({ type: "objective", text: content });
    } else if (mode === "desarrollo") {
      blocks.push(...parseDesarrollo(content));
    } else if (mode === "regulatorio") {
      blocks.push({
        type: "callout",
        variant: "regulatory",
        title: "Contexto regulatorio",
        text: content,
      });
    } else if (mode === "ri") {
      blocks.push({
        type: "callout",
        variant: "ri",
        title: "Relaciones con Inversores",
        text: content,
      });
    } else if (mode === "cierre") {
      blocks.push({ type: "closing", text: content });
    }
    mode = null;
  }

  for (const line of lines) {
    const t = line.trimEnd();
    const hit = HEADERS.find(([h]) => t === h);
    if (hit) {
      flush();
      mode = hit[1];
      continue;
    }
    buf.push(line);
  }
  flush();

  return { subtitle, blocks };
}

function splitKeyIdeaLines(blob) {
  return blob
    .split(/\n/)
    .map((l) => l.trim())
    .filter(Boolean)
    .flatMap((line) => {
      const parts = line.split(/\.(?=\s*(?:La |El |Los |Las |Un |Una |En |Por |Y |No ))/);
      return parts.map((p) => p.trim()).filter(Boolean);
    })
    .map((s) => (s.endsWith(".") ? s : `${s}.`));
}

function parseB(rawB) {
  const t = normalizeText(rawB.replace(/^###\s*B\.[^\n]*\n/im, "").trim());
  let keyIdeas = [];
  const im = t.match(
    /Ideas clave que sostienen el bloque\s*\n([\s\S]*?)(?=Contexto conceptual adicional\s*\n|Desarrollo completo del bloque\s*\n|$)/i,
  );
  if (im) keyIdeas = splitKeyIdeaLines(im[1]);
  const cm = t.match(/Contexto conceptual adicional\s*\n([\s\S]*)/i);
  const extraNote = cm ? cm[1].trim() : "";
  return { keyIdeas, extraNote };
}

function parseC(rawC) {
  let t = normalizeText(rawC.replace(/^###\s*C\.[^\n]*\n/im, "").trim());
  t = t.replace(/^Bloque \d+\.[^\n]+\n/m, "");
  const durM = t.match(/Duración orientativa:\s*([^\n*]+)/i);
  const duration = durM ? durM[1].trim() : "";
  t = t.replace(/\*?Duración orientativa:\s*[^\n]+\*?\s*\n?/i, "");

  const sections = [];
  const re = /(?:^|\n)(\d+)\.\s+([^\n]+)\n([\s\S]*?)(?=\n\d+\.\s+[^\n]+\n|$)/g;
  let m;
  while ((m = re.exec(t)) !== null) {
    sections.push({
      order: parseInt(m[1], 10),
      title: m[2].trim(),
      quotes: extractQuotes(m[3]),
    });
  }
  return { duration, sections };
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

const presentation = [];

for (const part of chapterParts) {
  const hm = part.match(/^## (\d+)\.\s+(.+?)$/m);
  if (!hm) continue;
  const num = parseInt(hm[1], 10);
  if (num < 1 || num > 9) continue;
  const title = hm[2].trim();

  const aMatch = part.match(/### A\.[^\n]*\n([\s\S]*?)(?=### B\.)/);
  const bMatch = part.match(/### B\.[^\n]*\n([\s\S]*?)(?=### C\.)/);
  // `part` termina antes del siguiente ## de capítulo. Cortar C antes de "Referencias" si existe en el part.
  const cMatch = part.match(
    /### C\.[^\n]*\n([\s\S]*?)(?=\nReferencias\s*\n|$)/,
  );

  const a = parseSectionA(aMatch?.[1] ?? "");
  const b = parseB(bMatch?.[1] ?? "");
  const c = parseC(cMatch?.[1] ?? "");
  const diagram = diagramsByTopic[num] ?? null;

  presentation.push({
    id: slugify(title) || `bloque-${num}`,
    number: num,
    title,
    subtitle: a.subtitle,
    diagram,
    main: a.blocks,
    enrich: {
      keyIdeas: b.keyIdeas,
      extraNote: b.extraNote,
    },
    speaker: c,
  });
}

presentation.sort((a, b) => a.number - b.number);

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(presentation, null, 0), "utf8");
console.log("OK:", presentation.length, "bloques →", outPath);
