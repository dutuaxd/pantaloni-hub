export const SITE = 'https://pantalonicusnurlung.ro';
export const SHOP = 'https://atelieraxd.ro/collections/pantaloni-barbati-atelier-axd';
export const ATELIER_HOME = 'https://atelieraxd.ro/';
export const ATELIER_LINKS = {
  reduceri: 'https://atelieraxd.ro/collections/reduceri',
  hanorace: 'https://atelieraxd.ro/collections/hanorace-barbati-atelier-axd',
  tricouri: 'https://atelieraxd.ro/collections/tricouri-barbati-atelier-axd',
  pantaloni: SHOP,
  pantaloniScurti: 'https://atelieraxd.ro/collections/pantaloni-scurti-barbati-atelier-axd',
  seturi: 'https://atelieraxd.ro/collections/seturi-barbati-atelier-axd',
  seturiScurte: 'https://atelieraxd.ro/collections/seturi-scurte-barbati-atelier-axd',
  copii: 'https://atelieraxd.ro/collections/pantaloni-scur%C8%9Bi-comfort-stil-pentru-copii',
  despre: 'https://atelieraxd.ro/pages/despre-atelier-axd-povestea-noastra-viziunea-si-valorile-noastre',
  contact: 'https://atelieraxd.ro/pages/contact',
  partener: 'https://atelieraxd.ro/pages/devino-partener-atelieraxd',
  blog: 'https://atelieraxd.ro/blogs/news',
};
export const updated = '2026-05-09';

export const company = {
  name: 'SC ATELIER AXD SRL',
  cui: '50848938',
  reg: 'J2024039294009',
  address: 'Str. Mare a Unirii 4, Bl. 5, Sc. 2, Et. 1, Ap. 17, Focsani, Vrancea, Romania',
  email: 'atelieraxd@outlook.com',
  phone: 'Telefon disponibil la cerere prin email',
  author: 'Echipa editoriala Atelier AXD',
};

export const galleryImages = [
  ['pantaloni-barbati-largi-negri-snur-casual.jpg', 'Pantaloni cu snur lung negri barbati, croiala larga casual'],
  ['pantaloni-barbati-negri-snur-lung.jpg', 'Pantaloni cu snur lung barbati, model negru urban'],
  ['pantaloni-negri-oversized-barbati-snur-lung.jpg', 'Pantaloni negri oversized barbati cu snur lung'],
  ['pantaloni-negri-slim-snur-lung-atelieraxd.jpg', 'Pantaloni negri slim cu snur lung Atelier AXD'],
  ['pantaloni-scurti-negri-cu-snur-lung.jpg', 'Pantaloni scurti negri cu snur lung pentru vara'],
  ['pantaloni-negri-scurti-snur-lung.jpg', 'Pantaloni negri scurti snur lung stil urban'],
  ['pantaloni-femei-streetwear-snur-lung.png', 'Pantaloni cu snur lung femei in tinuta moda urbana'],
  ['tinuta-unisex-pantaloni-largi-snur-extra-lung.png', 'Tinuta unisex cu pantaloni largi si snur extra lung'],
  ['outfit-casual-tricou-pantaloni-negri-snur-lung.png', 'Tinuta casual cu tricou si pantaloni negri cu snur lung'],
  ['pantaloni-baggy-fete-snur-lung-atelieraxd.png', 'Pantaloni baggy pentru fete cu snur lung Atelier AXD'],
  ['detaliu-snur-lung-pantaloni-oversized-dama.png', 'Detaliu snur lung la pantaloni oversized de dama'],
  ['moda-urbana-pantaloni-unisex-cu-snur-lung.png', 'Moda urbana cu pantaloni unisex cu snur lung'],
  ['pantaloni-barbati-largi-negri-snur-casual.jpg', 'Pantaloni cu snur lung negri unisex, vedere laterala'],
  ['pantaloni-barbati-negri-snur-lung.jpg', 'Pantaloni cu snur lung negru, stilizare cu incaltaminte sport'],
  ['pantaloni-negri-oversized-barbati-snur-lung.jpg', 'Pantaloni cu snur lung baggy pentru stil urban'],
  ['pantaloni-negri-slim-snur-lung-atelieraxd.jpg', 'Pantaloni cu snur lung cu talie reglabila'],
  ['pantaloni-femei-streetwear-snur-lung.png', 'Pantaloni cu snur lung femei, look urban relaxat'],
  ['tinuta-unisex-pantaloni-largi-snur-extra-lung.png', 'Pantaloni largi cu snur extra lung unisex'],
  ['outfit-casual-tricou-pantaloni-negri-snur-lung.png', 'Pantaloni negri cu snur lung si tricou oversized'],
  ['moda-urbana-pantaloni-unisex-cu-snur-lung.png', 'Pantaloni cu snur lung pentru moda urbana romaneasca'],
];

export const faqs = [
  ['Ce sunt pantalonii cu snur lung?', 'Pantalonii cu snur lung sunt pantaloni cu snur decorativ sau functional la talie, lasat vizibil pentru un efect urban si o reglare usoara a taliei.'],
  ['Cum se poarta pantalonii cu snur lung?', 'Se poarta cu snurul lasat natural in fata, alaturi de tricouri oversized, hanorace, jachete simple si incaltaminte sport cu volum mediu.'],
  ['Sunt pantalonii cu snur lung unisex?', 'Da, majoritatea modelelor moda urbana cu snur lung pot fi purtate unisex, diferenta fiind data mai ales de croiala si marime.'],
  ['Ce material este potrivit?', 'Bumbacul gros sau mixurile cu bumbac sunt potrivite deoarece tin forma, respira bine si lasa snurul sa cada curat.'],
  ['Cat de lung trebuie sa fie snurul?', 'Snurul ar trebui sa ramana vizibil sub tivul superior, fara sa incurce mersul sau sa depaseasca exagerat zona genunchilor.'],
  ['Se pot purta vara?', 'Da, vara merg modelele din bumbac mai usor, variantele scurte si croielile relaxate care permit circulatia aerului.'],
  ['Unde pot cumpara pantaloni cu snur lung?', 'Colectia comerciala recomandata este pe atelieraxd.ro, magazinul Atelier AXD catre care trimite transparent acest site informativ.'],
  ['Cum se spala pantalonii cu snur lung?', 'Spala-i pe dos la temperatura joasa, evita uscatorul agresiv si strange snurul lejer ca sa nu se retraga in betelie.'],
];

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pantaloni cu Snur Lung',
    url: SITE,
    logo: `${SITE}/images/logo.png`,
    description: 'Site informativ dedicat pantalonilor cu snur lung. Ghiduri, comparatii, tinute si tendinte.',
    sameAs: ['https://www.instagram.com/atelieraxd.ro/', 'https://www.facebook.com/profile.php?id=100067635362487', 'https://atelieraxd.ro'],
    contactPoint: { '@type': 'ContactPoint', email: company.email, contactType: 'serviciu clienti', availableLanguage: 'Romanian' },
  };
}

export function faqSchema(list = faqs) {
  return { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: list.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) };
}

export function breadcrumbSchema(title: string, url: string) {
  return { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Acasa', item: `${SITE}/` }, { '@type': 'ListItem', position: 2, name: title, item: url }] };
}

export function articleSchema(page: PageLike) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.h1,
    description: page.description,
    image: `${SITE}/${page.image}`,
    author: { '@type': 'Person', name: company.author, url: `${SITE}/despre-noi/` },
    publisher: { '@type': 'Organization', name: 'Pantaloni cu Snur Lung', logo: { '@type': 'ImageObject', url: `${SITE}/images/logo.png` } },
    datePublished: page.date || '2026-01-01',
    dateModified: updated,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/${page.slug}/` },
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.direct-answer'] },
  };
}

type PageLike = { slug: string; title: string; description: string; h1: string; image: string; date?: string };
const baseSections = [
  ['Ce inseamna snur lung in moda urbana', 'Snurul lung este un detaliu vizibil care transforma o piesa simpla intr-un reper moda urbana. El poate regla talia, dar rolul sau principal este vizual: creeaza verticalitate, miscare si o nota relaxata. In Romania, cautarile sunt dominate de magazine mari, insa lipseste continutul editorial dedicat exclusiv acestui detaliu.'],
  ['Cum alegi modelul potrivit', 'Urmareste trei lucruri: croiala, materialul si lungimea snurului. Pentru tinute zilnice, croiala dreapta sau lejere este cea mai versatila. Pentru impact stil urban, oversized-ul functioneaza mai bine. Pentru un aspect curat, alege negru, bumbac dens si o betelie stabila.'],
  ['Materiale si confort', 'Bumbacul greu, fleece-ul subtire si amestecurile cu elastan discret sunt cele mai usor de purtat. Materialul trebuie sa cada natural, sa nu se sifoneze excesiv si sa permita snurului sa stea vizibil fara sa traga betelia.'],
  ['Stilizare si tinute', 'Pantalonii cu snur lung se combina bine cu tricouri simple, hanorace scurte, geci bomber si incaltaminte sport. Evita prea multe accesorii in zona taliei; snurul este deja punctul de interes.'],
  ['Unde cumperi', 'Acest site este informativ si apartine ecosistemului Atelier AXD. Pentru achizitie, vezi colectia completa pe atelieraxd.ro, unde sunt publicate produsele disponibile, preturile si conditiile comerciale actualizate.'],
];

function page(slug: string, title: string, description: string, h1: string, intro: string, sections = baseSections, image = 'pantaloni-barbati-largi-negri-snur-casual.jpg') {
  return { slug, title, description, h1, intro, sections, image, date: '2026-05-01' };
}

export const pages = [
  page('ce-sunt-pantalonii-cu-snur-lung', 'Pantaloni cu snur lung: ce sunt si cum se poarta', 'Afla ce sunt pantalonii cu snur lung, cum au devenit piesa moda urbana si unde gasesti modele potrivite in Romania.', 'Ce sunt pantalonii cu snur lung?', 'Pantalonii cu snur lung sunt pantaloni casual sau moda urbana cu snur vizibil la talie, lasat sa cada natural. Detaliul poate fi functional, decorativ sau ambele, iar efectul principal este un look urban relaxat.'),
  page('ghid-alegere-pantaloni-snur-lung', 'Ghid alegere pantaloni snur lung 2026', 'Ghid complet despre cum alegi pantalonii cu snur lung in 2026: croiala, material, marime, lungimea snurului si tinute.', 'Cum alegi pantalonii cu snur lung potriviti in 2026', 'Alege pantalonii cu snur lung dupa croiala, densitatea materialului si felul in care snurul cade peste talie. O pereche buna ramane comoda, arata curat si se potriveste cu incaltaminte urbana care ramane actuala pana in 2027.'),
  page('cum-se-poarta-pantaloni-snur-lung', 'Cum se poarta pantaloni snur lung | Tinute', 'Idei clare de tinuta pentru pantaloni cu snur lung: barbati, femei, unisex, negru, bumbac si stil urban.', 'Cum se poarta pantaloni cu snur lung', 'Pantalonii cu snur lung se poarta cel mai bine in tinute relaxate, unde snurul ramane vizibil si natural. Combina-i cu piese simple ca sa pastrezi accentul pe croiala.'),
  page('pantaloni-cu-snur-lung-barbati', 'Pantaloni cu snur lung barbati | Ghid complet', 'Ghid pentru pantaloni cu snur lung barbati: croieli largi, negre, bumbac, tinute si link spre colectia Atelier AXD.', 'Pantaloni cu snur lung barbati - tot ce trebuie sa stii', 'Pentru barbati, pantalonii cu snur lung functioneaza cel mai bine in croieli loose, drepte sau oversized, purtate cu tricouri compacte si incaltaminte sport.', baseSections, 'pantaloni-barbati-negri-snur-lung.jpg'),
  page('pantaloni-cu-snur-lung-femei', 'Pantaloni cu snur lung femei | Ghid stilizare', 'Cum alegi pantaloni cu snur lung femei pentru tinute moda urbana, oversized, casual si vara. Vezi recomandari Atelier AXD.', 'Pantaloni cu snur lung femei - ghid de stilizare', 'Pentru femei, snurul lung adauga contrast unei tinute relaxate si merge excelent cu topuri scurte, tricouri oversized si jachete curate.', baseSections, 'pantaloni-femei-streetwear-snur-lung.png'),
  page('pantaloni-cu-snur-lung-unisex', 'Pantaloni cu snur lung unisex | Modele versatile', 'Modele unisex de pantaloni cu snur lung, cum alegi marimea si cum ii porti in tinute urbane pentru orice garderoba.', 'Pantaloni cu snur lung unisex', 'Modelele unisex sunt alegerea naturala pentru snur lung deoarece se bazeaza pe talie reglabila, croiala relaxata si stilizare simplu.', baseSections, 'tinuta-unisex-pantaloni-largi-snur-extra-lung.png'),
  page('pantaloni-cu-snur-lung-negri', 'Pantaloni cu snur lung negri | Ghid urban', 'De ce pantalonii cu snur lung negri sunt cei mai versatili: materiale, combinatii, intretinere si cumparare online.', 'Pantaloni cu snur lung negri', 'Negrul este varianta cea mai cautata pentru pantaloni cu snur lung deoarece subtiaza vizual, se combina usor si pune in valoare snurul.', baseSections, 'pantaloni-negri-oversized-barbati-snur-lung.jpg'),
  page('pantaloni-cu-snur-lung-bumbac', 'Pantaloni cu snur lung bumbac | Materiale bune', 'Afla de ce bumbacul este recomandat pentru pantaloni cu snur lung, ce densitate alegi si cum pastrezi forma materialului.', 'Pantaloni cu snur lung bumbac', 'Bumbacul este materialul de baza pentru pantaloni cu snur lung comozi si structurati, mai ales cand are greutate suficienta pentru cadere buna.', baseSections, 'outfit-casual-tricou-pantaloni-negri-snur-lung.png'),
  page('pantaloni-cu-snur-lung-stil-urban', 'Pantaloni cu snur lung stil urban | Tinute', 'Tinute stil urban cu pantaloni cu snur lung: combinatii moderne, proportii, incaltaminte sport si inspiratie pentru oras.', 'Pantaloni cu snur lung stil urban', 'In stil urban, pantalonii cu snur lung sunt folositi ca piesa de accent: simpla, practica si vizibila in mers.', baseSections, 'moda-urbana-pantaloni-unisex-cu-snur-lung.png'),
  page('analiza-serp', 'Analiza SERP pantaloni cu snur lung Romania', 'Analiza SERP pentru pantaloni cu snur lung pe Google, Images, Bing, ChatGPT Search, Claude si AI Overviews.', 'Analiza SERP pentru pantaloni cu snur lung', 'SERP-ul pentru pantalonii cu snur lung este dominat de e-commerce generalist, nu de continut editorial specializat. Aceasta pagina documenteaza oportunitatea SEO a site-ului informativ.', [
    ['Google Romania', 'Rezultatele pentru pantaloni cu snur lung, pantaloni snur lung, barbati, femei si unisex sunt dominate de pagini de categorie si produs. Domenii precum eMAG.ro, Bonprix.ro, Shopika.ro si StarShinerS.ro acopera intentia comerciala, dar lasa un gol editorial clar.'],
    ['Google Images', 'Traficul vizual este esential in moda. Fiecare imagine din galerie foloseste nume descriptiv, alt text, titlu, caption si schema ImageObject pentru a creste sansele in Google Images.'],
    ['Bing Romania', 'Bing favorizeaza structura curata, robots.txt simplu, sitemap XML, heading-uri clare si continut factual. Site-ul foloseste meta msvalidate.01, sitemap si pagini lungi pe subiecte principale.'],
    ['ChatGPT Search si Claude', 'Modelele AI prefera surse cu autor vizibil, date de publicare, structura semantica, FAQ si transparenta despre entitatea din spatele site-ului. Paginile includ article, time, autor si date companie.'],
    ['Google AI Overviews', 'Ghidurile raspund direct in primele paragrafe si folosesc FAQPage, speakable schema, liste si tabele pentru extragere in raspunsuri sintetice.'],
  ], 'og-pantaloni-cu-snur-lung.jpg'),
  page('galerie-pantaloni-snur-lung', 'Galerie pantaloni snur lung | 20 imagini', 'Galerie foto optimizata SEO cu pantaloni cu snur lung: negri, unisex, barbati, femei, bumbac si stil urban.', 'Galerie pantaloni cu snur lung', 'Galeria aduna imagini optimizate pentru cautari vizuale: fiecare fotografie are caption, alt text si date structurate ImageObject.'),
  page('despre-noi', 'Despre noi | Pantaloni cu Snur Lung', 'Afla cine este Atelier AXD, de ce exista pantalonicusnurlung.ro si care este legatura transparenta cu atelieraxd.ro.', 'Despre noi', 'Pantalonicusnurlung.ro este site-ul informativ al brandului Atelier AXD, creat pentru ghiduri, explicatii si inspiratie despre moda urbana cu snur lung.', [
    ['Cine suntem', `${company.name} opereaza ecosistemul Atelier AXD si acest site informativ. Date firma: CUI ${company.cui}, Reg. Com. ${company.reg}, sediu ${company.address}.`],
    ['Misiunea noastra', 'Am creat site-ul pentru ca utilizatorii din Romania sa gaseasca raspunsuri clare despre pantaloni cu snur lung, nu doar liste de produse.'],
    ['Expertiza', 'Lucram cu moda urbana, croieli casual, materiale si selectie de produse pentru clienti care vor tinute relaxate si distinctive.'],
    ['Legatura cu atelieraxd.ro', 'Acesta este site-ul informativ al brandului Atelier AXD. Comenzile, preturile si stocurile sunt gestionate pe atelieraxd.ro.'],
    ['Contact', `Email: ${company.email}. Magazin: atelieraxd.ro.`],
  ], 'pantaloni-barbati-negri-snur-lung.jpg'),
  page('contact', 'Contact pantaloni cu snur lung | Atelier AXD', 'Contacteaza echipa Atelier AXD pentru intrebari despre site, ghiduri, colaborari si informatii despre pantaloni cu snur lung.', 'Contact', `Pentru intrebari despre acest site informativ sau despre legatura cu Atelier AXD, scrie la ${company.email}.`),
  page('politica-de-confidentialitate', 'Politica de confidentialitate GDPR | Pantaloni', 'Politica de confidentialitate GDPR pentru pantalonicusnurlung.ro: date colectate, scop, durata, drepturi si ANSPDCP.', 'Politica de confidentialitate', 'Aceasta politica explica modul in care prelucram date personale pe pantalonicusnurlung.ro, conform GDPR si legislatiei aplicabile in Romania.', [
    ['Operatorul de date', `${company.name}, CUI ${company.cui}, sediu ${company.address}, email GDPR ${company.email}, telefon: ${company.phone}.`],
    ['Ce date colectam', 'Date tehnice automate: IP, browser, sistem de operare, pagini vizitate si durata vizitei prin Cloudflare Analytics sau Google Analytics doar dupa consimtamant. Date voluntare: email si mesaj trimis prin contact.'],
    ['Scop si temei legal', 'Analiza traficului se bazeaza pe interes legitim sau consimtamant pentru analytics neesential. Raspunsul la solicitari se bazeaza pe Art. 6(1)(b) GDPR.'],
    ['Durata stocarii', 'Date analitice: pana la 26 luni. Date formular contact: pana la 3 ani de la ultima interactiune. Cookie-uri: conform politicii cookies.'],
    ['Drepturile utilizatorilor', 'Ai drept de acces, rectificare, stergere, restrictionare, portabilitate, opozitie si dreptul de a nu fi supus deciziilor automate. Scrie la emailul GDPR; raspundem in maximum 30 zile.'],
    ['Transferuri internationale', 'Google LLC si Cloudflare Inc. pot procesa date in SUA prin mecanisme de protectie recunoscute, inclusiv DPF si clauze contractuale standard.'],
    ['Autoritatea de supraveghere', 'ANSPDCP, B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, Bucuresti, dataprotection.ro.'],
    ['Data ultimei actualizari', updated],
  ]),
  page('politica-cookies', 'Politica cookies | Pantaloni cu Snur Lung', 'Politica de cookies pentru pantalonicusnurlung.ro: categorii, consimtamant, analytics si retragere preferinte.', 'Politica Cookies', 'Cookie-urile sunt fisiere mici salvate in browser pentru functionarea site-ului, statistici si preferinte, in functie de consimtamantul tau.', [
    ['Categorii folosite', 'Strict necesare: sesiune si securitate, fara consimtamant. Analitice: Google Analytics (_ga, _gid), pana la 26 luni, doar cu acord. Functionale: preferinte UI, pana la 1 an, cu acord. Marketing: doar daca va fi activat explicit.'],
    ['Banner de consimtamant', 'La primul acces poti accepta toate, refuza toate sau personaliza preferintele. Cookie-urile analitice si marketing nu trebuie activate inainte de consimtamant. Consimtamantul se pastreaza pana la 12 luni.'],
    ['Retragere consimtamant', 'Butonul Retrage consimtamantul este disponibil permanent in footer si redeschide bannerul de preferinte.'],
    ['Dezactivare in browser', 'In Chrome, Firefox, Safari si Edge poti sterge sau bloca fisierele cookie din setarile de confidentialitate si securitate.'],
    ['Data ultimei actualizari', updated],
  ]),
  page('termeni-si-conditii', 'Termeni si conditii | Pantaloni cu Snur Lung', 'Termeni de utilizare pentru pantalonicusnurlung.ro: scop informativ, proprietar, proprietate intelectuala si lege aplicabila.', 'Termeni si Conditii de Utilizare', 'Pantalonicusnurlung.ro este un site informativ, nu un magazin online direct. Achizitiile se realizeaza pe atelieraxd.ro.', [
    ['Scopul site-ului', 'Site informativ despre pantaloni cu snur lung, ghiduri, articole, galerie si link-uri catre magazinul Atelier AXD.'],
    ['Proprietarul', `${company.name}, CUI ${company.cui}, sediu ${company.address}.`],
    ['Utilizarea site-ului', 'Este permisa pentru uz personal si non-comercial. Utilizarea abuziva, scraping-ul si copierea masiva sunt interzise.'],
    ['Proprietate intelectuala', `Textele, imaginile si designul apartin ${company.name} sau sunt folosite cu permisiune. Copierea fara acord este interzisa.`],
    ['Link-uri externe', 'Site-ul contine link-uri spre atelieraxd.ro. Nu suntem responsabili pentru eventuale schimbari pe site-uri externe.'],
    ['Excluderea raspunderii', 'Informatia este oferita ca atare. Depunem eforturi pentru actualizare, dar nu garantam completitudinea permanenta.'],
    ['Legea aplicabila', 'Se aplica legislatia romana, iar litigiile se solutioneaza de instantele competente din Romania.'],
    ['Data ultimei actualizari', updated],
  ]),
];

export const blogPosts = [
  page('blog/pantaloni-snur-lung-outfit-idei', 'Tinute cu pantaloni cu snur lung in 2026', 'Idei de tinuta cu pantaloni cu snur lung pentru tinute casual, moda urbana, unisex si vara, fara intentie comerciala agresiva.', 'Tinute cu pantaloni cu snur lung in 2026', 'Cele mai bune tinute cu pantaloni cu snur lung pornesc de la proportii simple: pantaloni relaxati, top curat si incaltaminte urbana.', baseSections, 'outfit-casual-tricou-pantaloni-negri-snur-lung.png'),
  page('blog/cum-faci-nod-snur-pantaloni', 'Cum faci nod la snurul pantalonilor', 'Ghid practic: cum faci nod la snurul pantalonilor fara sa strangi excesiv si fara sa pierzi aspectul moda urbana.', 'Cum faci nod la snurul pantalonilor', 'Pentru pantalonii cu snur lung, nodul trebuie sa tina talia stabila, dar sa lase capetele vizibile. Cel mai simplu este nodul lejer dublu, centrat in fata.', baseSections, 'detaliu-snur-lung-pantaloni-oversized-dama.png'),
  page('blog/diferente-snur-scurt-lung', 'Diferente intre snur scurt si snur lung', 'Comparam snurul scurt cu snurul lung la pantaloni: functie, estetica, confort si potrivire in moda urbana.', 'Diferente intre snur scurt si snur lung', 'Snurul scurt este discret si functional; snurul lung este vizibil, editorial si mai asociat cu moda urbana contemporan.', baseSections, 'pantaloni-barbati-largi-negri-snur-casual.jpg'),
  page('blog/trenduri-urbane-pantaloni-2026', 'Trenduri urbane pentru pantaloni in 2026', 'Trenduri 2026 pentru pantaloni in moda urbana: croieli baggy, croiala oversized, snur vizibil, materiale dense si tinute care raman actuale in 2027.', 'Trenduri urbane pentru pantaloni in 2026', 'In 2026, pantalonii cu snur lung raman relevanti prin croieli largi, culori neutre, materiale dense si stilizare unisex. Directia are sanse bune sa ramana actuala si in 2027.', baseSections, 'moda-urbana-pantaloni-unisex-cu-snur-lung.png'),
  page('blog/pantaloni-snur-lung-vara', 'Pantaloni cu snur lung vara | Ghid confort', 'Cum porti pantaloni cu snur lung vara: materiale usoare, croieli lejere, variante scurte si combinatii respirabile.', 'Pantaloni cu snur lung vara', 'Vara, pantalonii cu snur lung se poarta in bumbac mai usor, cu tricouri simple si croieli care lasa aerul sa circule.', baseSections, 'pantaloni-scurti-negri-cu-snur-lung.jpg'),
];

export const allContentPages = [...pages, ...blogPosts];
