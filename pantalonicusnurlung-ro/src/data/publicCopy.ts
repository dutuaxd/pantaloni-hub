type Section = [string, string];

const replacements: Array<[RegExp, string]> = [
  [/Google Images SEO/gi, 'Poze utile pentru inspiratie'],
  [/Google Images/gi, 'poze in cautari'],
  [/anti-?canibalizare/gi, 'diferentiere intre ghiduri'],
  [/canibalizare/gi, 'suprapunere intre articole'],
  [/canibaliza/gi, 'se suprapune cu alte ghiduri'],
  [/Intentie SEO separata/gi, 'De ce merita ghid separat'],
  [/Intentia cautarii/gi, 'Ce cauta cititorul'],
  [/Intentia paginii/gi, 'Ideea tinutei'],
  [/Cum optimizam imaginile/gi, 'Cum citesti imaginile'],
  [/Cum folosesti imaginile/gi, 'Cum citesti imaginile'],
  [/Matrice anti-?canibalizare/gi, 'Pentru cine functioneaza'],
  [/Tabel de decizie editorial/gi, 'Tabel de decizie'],
  [/FAQ long-tail/gi, 'Intrebari frecvente'],
  [/FAQ-uri/gi, 'intrebari frecvente'],
  [/FAQ/gi, 'intrebari frecvente'],
  [/SEO-ul long-tail/gi, 'intrebarile specifice'],
  [/long-tail/gi, 'specific'],
  [/keyword/gi, 'subiect'],
  [/funnel/gi, 'etapa de alegere'],
  [/\bCTA-ul\b/gi, 'recomandarea'],
  [/\bCTA\b/gi, 'recomandare'],
  [/alt text/gi, 'descrierea imaginii'],
  [/caption/gi, 'descrierea de sub imagine'],
  [/NLP/gi, 'limbaj natural'],
  [/SERP/gi, 'rezultatele de cautare'],
  [/Featured snippet/gi, 'raspuns rapid'],
  [/schema-ready/gi, 'usor de structurat'],
  [/schema/gi, 'structura'],
  [/SEO/gi, 'stil'],
  [/Acest articol tinteste cautarea/gi, 'Acest ghid raspunde cautarii'],
  [/Nu dubleaza/gi, 'Nu repeta'],
  [/micro-situatii/gi, 'situatii concrete'],
  [/micro-situatie/gi, 'situatie concreta'],
  [/awareness/gi, 'inspiratie'],
  [/consideration/gi, 'alegere'],
  [/decision/gi, 'decizie'],
  [/how-to/gi, 'ghid practic'],
];

export function publicCopy(value: unknown): string {
  let text = String(value ?? '');
  for (const [pattern, replacement] of replacements) {
    text = text.replace(pattern, replacement);
  }
  return text.replace(/\s{2,}/g, ' ').trim();
}

export function publicSections(sections: Section[] = []): Section[] {
  return sections.map(([heading, body]) => [publicCopy(heading), publicCopy(body)]);
}

export function publicPage<T extends { title?: string; description?: string; h1?: string; intro?: string; sections?: Section[]; images?: Array<{ alt?: string; title?: string; [key: string]: unknown }> }>(page: T): T {
  return {
    ...page,
    title: publicCopy(page.title),
    description: publicCopy(page.description),
    h1: publicCopy(page.h1),
    intro: publicCopy(page.intro),
    sections: publicSections(page.sections),
    images: Array.isArray(page.images)
      ? page.images.map((image) => ({
          ...image,
          alt: publicCopy(image.alt),
          title: publicCopy(image.title || image.alt),
        }))
      : page.images,
  };
}
