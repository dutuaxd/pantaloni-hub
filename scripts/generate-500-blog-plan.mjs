import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceCsv = path.join(
  "C:",
  "Users",
  "dutua",
  "Downloads",
  "plan_50_bloguri_atelier_axd (1).csv"
);
const outputCsv = path.join(root, "output", "plan_500_bloguri_noi_atelier_axd.csv");

const ctas = {
  tricouri: "Tricouri Barbati",
  hanorace: "Hanorace Barbati",
  pantaloni: "Pantaloni Barbati",
  scurti: "Pantaloni Scurti Barbati",
  seturi: "Seturi Barbati",
  toate: "Toate categoriile",
};

const materials = [
  ["bumbac", "bumbacul", "Bumbac", "Tricouri Barbati"],
  ["bumbac organic", "bumbacul organic", "Bumbac organic", "Tricouri Barbati"],
  ["poliester", "poliesterul", "Poliester", "Toate categoriile"],
  ["elastan", "elastanul", "Elastan", "Toate categoriile"],
  ["in", "inul", "In", "Pantaloni Barbati"],
  ["vascoza", "vascoza", "Vascoza", "Toate categoriile"],
  ["modal", "modalul", "Modal", "Tricouri Barbati"],
  ["lyocell", "lyocellul", "Lyocell", "Toate categoriile"],
  ["denim", "denimul", "Denim", "Pantaloni Barbati"],
  ["jersey", "jerseyul", "Jersey", "Tricouri Barbati"],
  ["french terry", "french terry", "French terry", "Hanorace Barbati"],
  ["fleece", "fleece-ul", "Fleece", "Hanorace Barbati"],
  ["tricot", "tricotul", "Tricot", "Toate categoriile"],
  ["twill", "twillul", "Twill", "Pantaloni Barbati"],
  ["poplin", "poplinul", "Poplin", "Toate categoriile"],
  ["pique", "pique-ul", "Pique", "Tricouri Barbati"],
  ["mesh", "mesh-ul", "Mesh", "Tricouri Barbati"],
  ["ripstop", "ripstopul", "Ripstop", "Pantaloni Barbati"],
  ["nailon", "nailonul", "Nailon", "Toate categoriile"],
  ["poliamida", "poliamida", "Poliamida", "Toate categoriile"],
  ["lana", "lana", "Lana", "Toate categoriile"],
  ["acril", "acrilul", "Acril", "Toate categoriile"],
  ["bumbac reciclat", "bumbacul reciclat", "Bumbac reciclat", "Toate categoriile"],
  ["poliester reciclat", "poliesterul reciclat", "Poliester reciclat", "Toate categoriile"],
  ["canepa", "canepa", "Canepa", "Toate categoriile"],
];

const garments = [
  ["tricou", "tricouri", "Tricouri Barbati"],
  ["tricou oversized", "tricouri oversized", "Tricouri Barbati"],
  ["tricou basic", "tricouri basic", "Tricouri Barbati"],
  ["tricou polo", "tricouri polo", "Tricouri Barbati"],
  ["pantaloni lungi", "pantaloni lungi", "Pantaloni Barbati"],
  ["pantaloni casual", "pantaloni casual", "Pantaloni Barbati"],
  ["pantaloni scurti", "pantaloni scurti", "Pantaloni Scurti Barbati"],
  ["pantaloni cargo", "pantaloni cargo", "Pantaloni Barbati"],
  ["pantaloni jogger", "pantaloni jogger", "Pantaloni Barbati"],
  ["hanorac", "hanorace", "Hanorace Barbati"],
  ["set barbati", "seturi barbati", "Seturi Barbati"],
];

const fits = [
  "regular fit",
  "slim fit",
  "oversized",
  "relaxed fit",
  "baggy",
  "straight fit",
  "tapered fit",
  "cargo",
  "jogger",
  "bermude",
  "croiala dreapta",
  "croiala lejera",
];

const colors = [
  "negru",
  "alb",
  "gri",
  "bej",
  "bleumarin",
  "kaki",
  "maro",
  "crem",
  "verde",
  "albastru",
  "taupe",
  "gri deschis",
];

const occasions = [
  "vara",
  "primavara",
  "toamna",
  "iarna",
  "vacanta",
  "city break",
  "birou casual",
  "scoala",
  "facultate",
  "iesire in oras",
  "weekend",
  "festival",
  "drum lung",
  "zbor cu avionul",
  "sala",
  "plimbare",
  "date casual",
  "poze de produs",
];

const audiences = [
  "barbati scunzi",
  "barbati inalti",
  "barbati slabi",
  "barbati cu umeri lati",
  "barbati plus size",
  "adolescenti",
  "studenti",
  "barbati 30 plus",
  "barbati care vor garderoba minimalista",
  "barbati care prefera haine lejere",
];

const comparisonPairs = [
  ["bumbac", "poliester"],
  ["bumbac organic", "bumbac clasic"],
  ["french terry", "fleece"],
  ["jersey", "pique"],
  ["in", "bumbac"],
  ["denim", "twill"],
  ["vascoza", "bumbac"],
  ["modal", "bumbac"],
  ["nailon", "poliester"],
  ["poliester reciclat", "poliester clasic"],
  ["slim fit", "regular fit"],
  ["regular fit", "oversized"],
  ["baggy", "straight fit"],
  ["jogger", "pantaloni casual"],
  ["cargo", "pantaloni simpli"],
  ["bermude", "pantaloni scurti clasici"],
];

function slugify(input) {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function csvEscape(value) {
  const text = String(value ?? "");
  return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function priority(index, kind = "") {
  if (index < 80 || /bumbac|poliester|tricou|pantaloni scurti/.test(kind)) return "RIDICATA";
  if (index < 230) return "MEDIE";
  return "LONG-TAIL";
}

function volume(kind = "") {
  if (/tricouri barbati|pantaloni barbati|pantaloni scurti barbati|hanorace barbati|haine barbati/.test(kind)) return "1K-10K";
  if (/bumbac|poliester|organic|oversized|slim fit|regular fit/.test(kind)) return "100-1K";
  return "10-100";
}

const existingTitles = new Set();
try {
  const source = fs.readFileSync(sourceCsv, "utf8");
  for (const line of source.split(/\r?\n/).slice(1)) {
    const title = line.split(",")[1];
    if (title) existingTitles.add(slugify(title));
  }
} catch {
  // The generator can still run without the downloaded reference CSV.
}

const rows = [];
const seenTitles = new Set(existingTitles);
const seenKeywords = new Set();

function add(title, keyword, type, cta, cannibalization = "NU - unghi editorial distinct") {
  const titleKey = slugify(title);
  const keywordKey = slugify(keyword);
  if (seenTitles.has(titleKey) || seenKeywords.has(keywordKey) || rows.length >= 500) return;
  seenTitles.add(titleKey);
  seenKeywords.add(keywordKey);
  rows.push({
    Nr: rows.length + 51,
    "Titlu Blog": title,
    "Keyword Principal": keyword,
    "Volum Estimat": volume(keywordKey),
    Prioritate: priority(rows.length, keywordKey),
    "Tip Articol": type,
    "Canibalizare existenta": cannibalization,
    "Buton CTA principal": cta,
  });
}

for (const [key, definite, label, cta] of materials) {
  add(`Ce este ${definite}: ghid simplu pentru haine de zi cu zi`, `ce este ${definite}`, "Definitie + ghid materiale", cta, "NU - intent informational");
  add(`${label} in haine: avantaje, limite si cand il alegi`, `${key} haine`, "Ghid materiale", cta);
  add(`Cum se comporta ${definite} la purtare, spalare si uscare`, `${key} spalare`, "Ghid ingrijire", cta);
  add(`${label} vara: cand este potrivit materialul si cand alegi altceva`, `${key} vara`, "Ghid sezonier", cta);
  add(`${label} iarna: confort, stratificare si limite reale`, `${key} iarna`, "Ghid sezonier", cta);
}

for (const [single, plural, cta] of garments) {
  for (const [material] of materials) {
    add(`${single[0].toUpperCase()}${single.slice(1)} din ${material}: cand merita ales`, `${single} din ${material}`, "Ghid material + produs", cta);
  }
}

for (const [a, b] of comparisonPairs) {
  add(`${a} vs ${b}: diferente reale pentru haine casual`, `${a} vs ${b}`, "Comparativ", ctas.toate, "NU - comparativ dedicat");
  add(`Cand alegi ${a} si cand alegi ${b} in garderoba`, `cand alegi ${a} sau ${b}`, "Ghid decizie", ctas.toate);
}

for (const fit of fits) {
  add(`Ce inseamna ${fit} la haine si cum alegi marimea`, `ce inseamna ${fit}`, "Definitie + marimi", ctas.toate, "NU - intent definitie");
  add(`${fit} pentru barbati: cum il porti fara sa dezechilibrezi tinuta`, `${fit} barbati`, "Ghid styling", ctas.toate);
  add(`Pantaloni ${fit}: cui se potrivesc si cum ii asortezi`, `pantaloni ${fit}`, "Ghid produs", ctas.pantaloni);
  add(`Tricou ${fit}: reguli simple de proportie si confort`, `tricou ${fit}`, "Ghid produs", ctas.tricouri);
}

for (const color of colors) {
  add(`Tricou ${color} barbati: cu ce pantaloni il combini`, `tricou ${color} barbati`, "Ghid styling", ctas.tricouri);
  add(`Pantaloni ${color} barbati: idei de tinute casual`, `pantaloni ${color} barbati`, "Ghid styling", ctas.pantaloni);
  add(`Hanorac ${color} barbati: cum il porti in tinute simple`, `hanorac ${color} barbati`, "Ghid styling", ctas.hanorace);
  add(`Set ${color} barbati: cum il faci sa arate curat si echilibrat`, `set ${color} barbati`, "Inspiratie outfit", ctas.seturi);
}

for (const occasion of occasions) {
  add(`Ce porti in ${occasion}: ghid casual pentru barbati`, `tinuta barbati ${occasion}`, "Ghid ocazie", ctas.toate);
  add(`Pantaloni potriviti pentru ${occasion}: confort, material si croiala`, `pantaloni barbati ${occasion}`, "Ghid alegere", ctas.pantaloni);
  add(`Tricouri potrivite pentru ${occasion}: materiale si culori usor de purtat`, `tricouri barbati ${occasion}`, "Ghid alegere", ctas.tricouri);
  add(`Seturi barbati pentru ${occasion}: cand alegi o tinuta coordonata`, `seturi barbati ${occasion}`, "Inspiratie outfit", ctas.seturi);
}

for (const audience of audiences) {
  add(`Pantaloni pentru ${audience}: croieli care ajuta proportiile`, `pantaloni ${audience}`, "Ghid tipologie", ctas.pantaloni);
  add(`Tricouri pentru ${audience}: cum alegi lungimea si croiala`, `tricouri ${audience}`, "Ghid tipologie", ctas.tricouri);
  add(`Tinute casual pentru ${audience}: reguli simple de asortare`, `tinute casual ${audience}`, "Ghid styling", ctas.toate);
}

const careTopics = [
  ["cum speli tricourile din bumbac", "Cum speli tricourile din bumbac ca sa isi pastreze forma", ctas.tricouri],
  ["cum speli pantalonii din bumbac", "Cum speli pantalonii din bumbac fara sa ii deformezi", ctas.pantaloni],
  ["cum eviti scamosarea hainelor", "Cum eviti scamosarea hainelor casual", ctas.toate],
  ["de ce intra hainele la apa", "De ce intra hainele la apa si cum reduci riscul", ctas.toate],
  ["cum usuci tricourile corect", "Cum usuci tricourile corect fara sa le largesti", ctas.tricouri],
  ["cum calci tricourile basic", "Cum calci tricourile basic fara urme lucioase", ctas.tricouri],
  ["cum pastrezi negrul hainelor", "Cum pastrezi culoarea neagra la tricouri si pantaloni", ctas.toate],
  ["cum citesti eticheta hainelor", "Cum citesti eticheta hainelor: simboluri si materiale", ctas.toate],
  ["gramaj tricou bumbac", "Gramaj tricou bumbac: ce inseamna GSM si cum alegi", ctas.tricouri],
  ["densitate material pantaloni", "Densitatea materialului la pantaloni: ce simti la purtare", ctas.pantaloni],
];

for (const [keyword, title, cta] of careTopics) {
  add(title, keyword, "Ghid ingrijire", cta, "NU - intent practic");
}

const questions = [
  ["de ce sa alegi un tricou din bumbac", "De ce sa alegi un tricou din bumbac pentru garderoba de baza", ctas.tricouri],
  ["de ce sa alegi pantaloni din bumbac", "De ce sa alegi o pereche de pantaloni din bumbac", ctas.pantaloni],
  ["este poliesterul bun pentru vara", "Este poliesterul bun pentru vara sau alegi alt material?", ctas.toate],
  ["bumbacul organic merita", "Bumbacul organic merita ales? Diferente pe intelesul tuturor", ctas.tricouri],
  ["ce material este bun pentru tricouri", "Ce material este bun pentru tricouri casual", ctas.tricouri],
  ["ce material este bun pentru pantaloni", "Ce material este bun pentru pantaloni casual", ctas.pantaloni],
  ["ce inseamna tricou prespalat", "Ce inseamna tricou prespalat si de ce conteaza la purtare", ctas.tricouri],
  ["ce inseamna haine respirabile", "Ce inseamna haine respirabile si cum recunosti materialele", ctas.toate],
  ["ce inseamna haine easy care", "Ce inseamna haine easy care si cand sunt utile", ctas.toate],
  ["ce inseamna pre-shrunk", "Ce inseamna pre-shrunk la tricouri si pantaloni", ctas.toate],
];

for (const [keyword, title, cta] of questions) {
  add(title, keyword, "Intrebare + raspuns extins", cta, "NU - intent Q&A");
}

let variant = 1;
while (rows.length < 500) {
  const [single, , cta] = garments[rows.length % garments.length];
  const color = colors[(rows.length + variant) % colors.length];
  const occasion = occasions[(rows.length + variant * 2) % occasions.length];
  const fit = fits[(rows.length + variant * 3) % fits.length];
  add(
    `${single[0].toUpperCase()}${single.slice(1)} ${color} pentru ${occasion}: idei de purtare ${variant}`,
    `${single} ${color} ${occasion} ${fit}`,
    "Long-tail styling",
    cta,
    "NU - combinatie long-tail unica"
  );
  variant += 1;
}

const headers = [
  "Nr",
  "Titlu Blog",
  "Keyword Principal",
  "Volum Estimat",
  "Prioritate",
  "Tip Articol",
  "Canibalizare existenta",
  "Buton CTA principal",
];

fs.mkdirSync(path.dirname(outputCsv), { recursive: true });
const body = rows.map((row) => headers.map((header) => csvEscape(row[header])).join(","));
fs.writeFileSync(outputCsv, `\uFEFF${headers.join(",")}\n${body.join("\n")}\n`, "utf8");

console.log(JSON.stringify({
  outputCsv,
  rows: rows.length,
  first: rows[0],
  last: rows.at(-1),
}, null, 2));
