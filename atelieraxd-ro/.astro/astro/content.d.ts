declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"01-ce-sunt-pantalonii-cu-snur/index.md": {
	id: "01-ce-sunt-pantalonii-cu-snur/index.md";
  slug: "01-ce-sunt-pantalonii-cu-snur";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"02-cum-alegi-pantalonii-cu-snur/index.md": {
	id: "02-cum-alegi-pantalonii-cu-snur/index.md";
  slug: "02-cum-alegi-pantalonii-cu-snur";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"03-outfit-uri-pantaloni-cu-snur-vara/index.md": {
	id: "03-outfit-uri-pantaloni-cu-snur-vara/index.md";
  slug: "03-outfit-uri-pantaloni-cu-snur-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"04-pantaloni-cu-snur-vs-trening/index.md": {
	id: "04-pantaloni-cu-snur-vs-trening/index.md";
  slug: "04-pantaloni-cu-snur-vs-trening";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"05-ingrijire-pantaloni-cu-snur/index.md": {
	id: "05-ingrijire-pantaloni-cu-snur/index.md";
  slug: "05-ingrijire-pantaloni-cu-snur";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"051-ce-este-bumbacul/index.md": {
	id: "051-ce-este-bumbacul/index.md";
  slug: "051-ce-este-bumbacul";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"052-bumbac-haine/index.md": {
	id: "052-bumbac-haine/index.md";
  slug: "052-bumbac-haine";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"053-bumbac-spalare/index.md": {
	id: "053-bumbac-spalare/index.md";
  slug: "053-bumbac-spalare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"054-bumbac-vara/index.md": {
	id: "054-bumbac-vara/index.md";
  slug: "054-bumbac-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"055-bumbac-iarna/index.md": {
	id: "055-bumbac-iarna/index.md";
  slug: "055-bumbac-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"056-ce-este-bumbacul-organic/index.md": {
	id: "056-ce-este-bumbacul-organic/index.md";
  slug: "056-ce-este-bumbacul-organic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"057-bumbac-organic-haine/index.md": {
	id: "057-bumbac-organic-haine/index.md";
  slug: "057-bumbac-organic-haine";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"058-bumbac-organic-spalare/index.md": {
	id: "058-bumbac-organic-spalare/index.md";
  slug: "058-bumbac-organic-spalare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"059-bumbac-organic-vara/index.md": {
	id: "059-bumbac-organic-vara/index.md";
  slug: "059-bumbac-organic-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"06-seturi-cu-pantaloni-cu-snur/index.md": {
	id: "06-seturi-cu-pantaloni-cu-snur/index.md";
  slug: "06-seturi-cu-pantaloni-cu-snur";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"060-bumbac-organic-iarna/index.md": {
	id: "060-bumbac-organic-iarna/index.md";
  slug: "060-bumbac-organic-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"061-ce-este-poliesterul/index.md": {
	id: "061-ce-este-poliesterul/index.md";
  slug: "061-ce-este-poliesterul";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"062-poliester-haine/index.md": {
	id: "062-poliester-haine/index.md";
  slug: "062-poliester-haine";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"063-poliester-spalare/index.md": {
	id: "063-poliester-spalare/index.md";
  slug: "063-poliester-spalare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"064-poliester-vara/index.md": {
	id: "064-poliester-vara/index.md";
  slug: "064-poliester-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"065-poliester-iarna/index.md": {
	id: "065-poliester-iarna/index.md";
  slug: "065-poliester-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"066-ce-este-elastanul/index.md": {
	id: "066-ce-este-elastanul/index.md";
  slug: "066-ce-este-elastanul";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"067-elastan-haine/index.md": {
	id: "067-elastan-haine/index.md";
  slug: "067-elastan-haine";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"068-elastan-spalare/index.md": {
	id: "068-elastan-spalare/index.md";
  slug: "068-elastan-spalare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"069-elastan-vara/index.md": {
	id: "069-elastan-vara/index.md";
  slug: "069-elastan-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"07-tricouri-si-pantaloni-cu-snur/index.md": {
	id: "07-tricouri-si-pantaloni-cu-snur/index.md";
  slug: "07-tricouri-si-pantaloni-cu-snur";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"070-elastan-iarna/index.md": {
	id: "070-elastan-iarna/index.md";
  slug: "070-elastan-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"071-ce-este-inul/index.md": {
	id: "071-ce-este-inul/index.md";
  slug: "071-ce-este-inul";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"072-in-haine/index.md": {
	id: "072-in-haine/index.md";
  slug: "072-in-haine";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"073-in-spalare/index.md": {
	id: "073-in-spalare/index.md";
  slug: "073-in-spalare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"074-in-vara/index.md": {
	id: "074-in-vara/index.md";
  slug: "074-in-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"075-in-iarna/index.md": {
	id: "075-in-iarna/index.md";
  slug: "075-in-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"076-ce-este-vascoza/index.md": {
	id: "076-ce-este-vascoza/index.md";
  slug: "076-ce-este-vascoza";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"077-vascoza-haine/index.md": {
	id: "077-vascoza-haine/index.md";
  slug: "077-vascoza-haine";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"078-vascoza-spalare/index.md": {
	id: "078-vascoza-spalare/index.md";
  slug: "078-vascoza-spalare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"079-vascoza-vara/index.md": {
	id: "079-vascoza-vara/index.md";
  slug: "079-vascoza-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"08-pantaloni-cu-snur-scurti/index.md": {
	id: "08-pantaloni-cu-snur-scurti/index.md";
  slug: "08-pantaloni-cu-snur-scurti";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"080-vascoza-iarna/index.md": {
	id: "080-vascoza-iarna/index.md";
  slug: "080-vascoza-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"081-ce-este-modalul/index.md": {
	id: "081-ce-este-modalul/index.md";
  slug: "081-ce-este-modalul";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"082-modal-haine/index.md": {
	id: "082-modal-haine/index.md";
  slug: "082-modal-haine";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"083-modal-spalare/index.md": {
	id: "083-modal-spalare/index.md";
  slug: "083-modal-spalare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"084-modal-vara/index.md": {
	id: "084-modal-vara/index.md";
  slug: "084-modal-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"085-modal-iarna/index.md": {
	id: "085-modal-iarna/index.md";
  slug: "085-modal-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"086-ce-este-lyocellul/index.md": {
	id: "086-ce-este-lyocellul/index.md";
  slug: "086-ce-este-lyocellul";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"087-lyocell-haine/index.md": {
	id: "087-lyocell-haine/index.md";
  slug: "087-lyocell-haine";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"088-lyocell-spalare/index.md": {
	id: "088-lyocell-spalare/index.md";
  slug: "088-lyocell-spalare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"089-lyocell-vara/index.md": {
	id: "089-lyocell-vara/index.md";
  slug: "089-lyocell-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"09-unde-cumpar-pantaloni-cu-snur-romania/index.md": {
	id: "09-unde-cumpar-pantaloni-cu-snur-romania/index.md";
  slug: "09-unde-cumpar-pantaloni-cu-snur-romania";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"090-lyocell-iarna/index.md": {
	id: "090-lyocell-iarna/index.md";
  slug: "090-lyocell-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"091-ce-este-denimul/index.md": {
	id: "091-ce-este-denimul/index.md";
  slug: "091-ce-este-denimul";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"092-denim-haine/index.md": {
	id: "092-denim-haine/index.md";
  slug: "092-denim-haine";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"093-denim-spalare/index.md": {
	id: "093-denim-spalare/index.md";
  slug: "093-denim-spalare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"094-denim-vara/index.md": {
	id: "094-denim-vara/index.md";
  slug: "094-denim-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"095-denim-iarna/index.md": {
	id: "095-denim-iarna/index.md";
  slug: "095-denim-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"096-ce-este-jerseyul/index.md": {
	id: "096-ce-este-jerseyul/index.md";
  slug: "096-ce-este-jerseyul";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"097-jersey-haine/index.md": {
	id: "097-jersey-haine/index.md";
  slug: "097-jersey-haine";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"098-jersey-spalare/index.md": {
	id: "098-jersey-spalare/index.md";
  slug: "098-jersey-spalare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"099-jersey-vara/index.md": {
	id: "099-jersey-vara/index.md";
  slug: "099-jersey-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"10-tendinte-pantaloni-cu-snur-2025/index.md": {
	id: "10-tendinte-pantaloni-cu-snur-2025/index.md";
  slug: "10-tendinte-pantaloni-cu-snur-2025";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"100-jersey-iarna/index.md": {
	id: "100-jersey-iarna/index.md";
  slug: "100-jersey-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"101-ce-este-french-terry/index.md": {
	id: "101-ce-este-french-terry/index.md";
  slug: "101-ce-este-french-terry";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"102-french-terry-haine/index.md": {
	id: "102-french-terry-haine/index.md";
  slug: "102-french-terry-haine";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"103-french-terry-spalare/index.md": {
	id: "103-french-terry-spalare/index.md";
  slug: "103-french-terry-spalare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"104-french-terry-vara/index.md": {
	id: "104-french-terry-vara/index.md";
  slug: "104-french-terry-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"105-french-terry-iarna/index.md": {
	id: "105-french-terry-iarna/index.md";
  slug: "105-french-terry-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"106-ce-este-fleece-ul/index.md": {
	id: "106-ce-este-fleece-ul/index.md";
  slug: "106-ce-este-fleece-ul";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"107-fleece-haine/index.md": {
	id: "107-fleece-haine/index.md";
  slug: "107-fleece-haine";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"108-fleece-spalare/index.md": {
	id: "108-fleece-spalare/index.md";
  slug: "108-fleece-spalare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"109-fleece-vara/index.md": {
	id: "109-fleece-vara/index.md";
  slug: "109-fleece-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"110-fleece-iarna/index.md": {
	id: "110-fleece-iarna/index.md";
  slug: "110-fleece-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"111-ce-este-tricotul/index.md": {
	id: "111-ce-este-tricotul/index.md";
  slug: "111-ce-este-tricotul";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"112-tricot-haine/index.md": {
	id: "112-tricot-haine/index.md";
  slug: "112-tricot-haine";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"113-tricot-spalare/index.md": {
	id: "113-tricot-spalare/index.md";
  slug: "113-tricot-spalare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"114-tricot-vara/index.md": {
	id: "114-tricot-vara/index.md";
  slug: "114-tricot-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"115-tricot-iarna/index.md": {
	id: "115-tricot-iarna/index.md";
  slug: "115-tricot-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"116-ce-este-twillul/index.md": {
	id: "116-ce-este-twillul/index.md";
  slug: "116-ce-este-twillul";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"117-twill-haine/index.md": {
	id: "117-twill-haine/index.md";
  slug: "117-twill-haine";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"118-twill-spalare/index.md": {
	id: "118-twill-spalare/index.md";
  slug: "118-twill-spalare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"119-twill-vara/index.md": {
	id: "119-twill-vara/index.md";
  slug: "119-twill-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"120-twill-iarna/index.md": {
	id: "120-twill-iarna/index.md";
  slug: "120-twill-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"121-ce-este-poplinul/index.md": {
	id: "121-ce-este-poplinul/index.md";
  slug: "121-ce-este-poplinul";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"122-poplin-haine/index.md": {
	id: "122-poplin-haine/index.md";
  slug: "122-poplin-haine";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"123-poplin-spalare/index.md": {
	id: "123-poplin-spalare/index.md";
  slug: "123-poplin-spalare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"124-poplin-vara/index.md": {
	id: "124-poplin-vara/index.md";
  slug: "124-poplin-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"125-poplin-iarna/index.md": {
	id: "125-poplin-iarna/index.md";
  slug: "125-poplin-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"126-ce-este-pique-ul/index.md": {
	id: "126-ce-este-pique-ul/index.md";
  slug: "126-ce-este-pique-ul";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"127-pique-haine/index.md": {
	id: "127-pique-haine/index.md";
  slug: "127-pique-haine";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"128-pique-spalare/index.md": {
	id: "128-pique-spalare/index.md";
  slug: "128-pique-spalare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"129-pique-vara/index.md": {
	id: "129-pique-vara/index.md";
  slug: "129-pique-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"130-pique-iarna/index.md": {
	id: "130-pique-iarna/index.md";
  slug: "130-pique-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"131-ce-este-mesh-ul/index.md": {
	id: "131-ce-este-mesh-ul/index.md";
  slug: "131-ce-este-mesh-ul";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"132-mesh-haine/index.md": {
	id: "132-mesh-haine/index.md";
  slug: "132-mesh-haine";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"133-mesh-spalare/index.md": {
	id: "133-mesh-spalare/index.md";
  slug: "133-mesh-spalare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"134-mesh-vara/index.md": {
	id: "134-mesh-vara/index.md";
  slug: "134-mesh-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"135-mesh-iarna/index.md": {
	id: "135-mesh-iarna/index.md";
  slug: "135-mesh-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"136-ce-este-ripstopul/index.md": {
	id: "136-ce-este-ripstopul/index.md";
  slug: "136-ce-este-ripstopul";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"137-ripstop-haine/index.md": {
	id: "137-ripstop-haine/index.md";
  slug: "137-ripstop-haine";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"138-ripstop-spalare/index.md": {
	id: "138-ripstop-spalare/index.md";
  slug: "138-ripstop-spalare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"139-ripstop-vara/index.md": {
	id: "139-ripstop-vara/index.md";
  slug: "139-ripstop-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"140-ripstop-iarna/index.md": {
	id: "140-ripstop-iarna/index.md";
  slug: "140-ripstop-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"141-ce-este-nailonul/index.md": {
	id: "141-ce-este-nailonul/index.md";
  slug: "141-ce-este-nailonul";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"142-nailon-haine/index.md": {
	id: "142-nailon-haine/index.md";
  slug: "142-nailon-haine";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"143-nailon-spalare/index.md": {
	id: "143-nailon-spalare/index.md";
  slug: "143-nailon-spalare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"144-nailon-vara/index.md": {
	id: "144-nailon-vara/index.md";
  slug: "144-nailon-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"145-nailon-iarna/index.md": {
	id: "145-nailon-iarna/index.md";
  slug: "145-nailon-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"146-ce-este-poliamida/index.md": {
	id: "146-ce-este-poliamida/index.md";
  slug: "146-ce-este-poliamida";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"147-poliamida-haine/index.md": {
	id: "147-poliamida-haine/index.md";
  slug: "147-poliamida-haine";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"148-poliamida-spalare/index.md": {
	id: "148-poliamida-spalare/index.md";
  slug: "148-poliamida-spalare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"149-poliamida-vara/index.md": {
	id: "149-poliamida-vara/index.md";
  slug: "149-poliamida-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"150-poliamida-iarna/index.md": {
	id: "150-poliamida-iarna/index.md";
  slug: "150-poliamida-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"151-ce-este-lana/index.md": {
	id: "151-ce-este-lana/index.md";
  slug: "151-ce-este-lana";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"152-lana-haine/index.md": {
	id: "152-lana-haine/index.md";
  slug: "152-lana-haine";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"153-lana-spalare/index.md": {
	id: "153-lana-spalare/index.md";
  slug: "153-lana-spalare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"154-lana-vara/index.md": {
	id: "154-lana-vara/index.md";
  slug: "154-lana-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"155-lana-iarna/index.md": {
	id: "155-lana-iarna/index.md";
  slug: "155-lana-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"156-ce-este-acrilul/index.md": {
	id: "156-ce-este-acrilul/index.md";
  slug: "156-ce-este-acrilul";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"157-acril-haine/index.md": {
	id: "157-acril-haine/index.md";
  slug: "157-acril-haine";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"158-acril-spalare/index.md": {
	id: "158-acril-spalare/index.md";
  slug: "158-acril-spalare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"159-acril-vara/index.md": {
	id: "159-acril-vara/index.md";
  slug: "159-acril-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"160-acril-iarna/index.md": {
	id: "160-acril-iarna/index.md";
  slug: "160-acril-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"161-ce-este-bumbacul-reciclat/index.md": {
	id: "161-ce-este-bumbacul-reciclat/index.md";
  slug: "161-ce-este-bumbacul-reciclat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"162-bumbac-reciclat-haine/index.md": {
	id: "162-bumbac-reciclat-haine/index.md";
  slug: "162-bumbac-reciclat-haine";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"163-bumbac-reciclat-spalare/index.md": {
	id: "163-bumbac-reciclat-spalare/index.md";
  slug: "163-bumbac-reciclat-spalare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"164-bumbac-reciclat-vara/index.md": {
	id: "164-bumbac-reciclat-vara/index.md";
  slug: "164-bumbac-reciclat-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"165-bumbac-reciclat-iarna/index.md": {
	id: "165-bumbac-reciclat-iarna/index.md";
  slug: "165-bumbac-reciclat-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"166-ce-este-poliesterul-reciclat/index.md": {
	id: "166-ce-este-poliesterul-reciclat/index.md";
  slug: "166-ce-este-poliesterul-reciclat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"167-poliester-reciclat-haine/index.md": {
	id: "167-poliester-reciclat-haine/index.md";
  slug: "167-poliester-reciclat-haine";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"168-poliester-reciclat-spalare/index.md": {
	id: "168-poliester-reciclat-spalare/index.md";
  slug: "168-poliester-reciclat-spalare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"169-poliester-reciclat-vara/index.md": {
	id: "169-poliester-reciclat-vara/index.md";
  slug: "169-poliester-reciclat-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"170-poliester-reciclat-iarna/index.md": {
	id: "170-poliester-reciclat-iarna/index.md";
  slug: "170-poliester-reciclat-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"171-ce-este-canepa/index.md": {
	id: "171-ce-este-canepa/index.md";
  slug: "171-ce-este-canepa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"172-canepa-haine/index.md": {
	id: "172-canepa-haine/index.md";
  slug: "172-canepa-haine";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"173-canepa-spalare/index.md": {
	id: "173-canepa-spalare/index.md";
  slug: "173-canepa-spalare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"174-canepa-vara/index.md": {
	id: "174-canepa-vara/index.md";
  slug: "174-canepa-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"175-canepa-iarna/index.md": {
	id: "175-canepa-iarna/index.md";
  slug: "175-canepa-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"176-tricou-din-bumbac/index.md": {
	id: "176-tricou-din-bumbac/index.md";
  slug: "176-tricou-din-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"177-tricou-din-bumbac-organic/index.md": {
	id: "177-tricou-din-bumbac-organic/index.md";
  slug: "177-tricou-din-bumbac-organic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"178-tricou-din-poliester/index.md": {
	id: "178-tricou-din-poliester/index.md";
  slug: "178-tricou-din-poliester";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"179-tricou-din-elastan/index.md": {
	id: "179-tricou-din-elastan/index.md";
  slug: "179-tricou-din-elastan";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"180-tricou-din-in/index.md": {
	id: "180-tricou-din-in/index.md";
  slug: "180-tricou-din-in";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"181-tricou-din-vascoza/index.md": {
	id: "181-tricou-din-vascoza/index.md";
  slug: "181-tricou-din-vascoza";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"182-tricou-din-modal/index.md": {
	id: "182-tricou-din-modal/index.md";
  slug: "182-tricou-din-modal";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"183-tricou-din-lyocell/index.md": {
	id: "183-tricou-din-lyocell/index.md";
  slug: "183-tricou-din-lyocell";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"184-tricou-din-denim/index.md": {
	id: "184-tricou-din-denim/index.md";
  slug: "184-tricou-din-denim";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"185-tricou-din-jersey/index.md": {
	id: "185-tricou-din-jersey/index.md";
  slug: "185-tricou-din-jersey";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"186-tricou-din-french-terry/index.md": {
	id: "186-tricou-din-french-terry/index.md";
  slug: "186-tricou-din-french-terry";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"187-tricou-din-fleece/index.md": {
	id: "187-tricou-din-fleece/index.md";
  slug: "187-tricou-din-fleece";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"188-tricou-din-tricot/index.md": {
	id: "188-tricou-din-tricot/index.md";
  slug: "188-tricou-din-tricot";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"189-tricou-din-twill/index.md": {
	id: "189-tricou-din-twill/index.md";
  slug: "189-tricou-din-twill";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"190-tricou-din-poplin/index.md": {
	id: "190-tricou-din-poplin/index.md";
  slug: "190-tricou-din-poplin";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"191-tricou-din-pique/index.md": {
	id: "191-tricou-din-pique/index.md";
  slug: "191-tricou-din-pique";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"192-tricou-din-mesh/index.md": {
	id: "192-tricou-din-mesh/index.md";
  slug: "192-tricou-din-mesh";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"193-tricou-din-ripstop/index.md": {
	id: "193-tricou-din-ripstop/index.md";
  slug: "193-tricou-din-ripstop";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"194-tricou-din-nailon/index.md": {
	id: "194-tricou-din-nailon/index.md";
  slug: "194-tricou-din-nailon";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"195-tricou-din-poliamida/index.md": {
	id: "195-tricou-din-poliamida/index.md";
  slug: "195-tricou-din-poliamida";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"196-tricou-din-lana/index.md": {
	id: "196-tricou-din-lana/index.md";
  slug: "196-tricou-din-lana";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"197-tricou-din-acril/index.md": {
	id: "197-tricou-din-acril/index.md";
  slug: "197-tricou-din-acril";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"198-tricou-din-bumbac-reciclat/index.md": {
	id: "198-tricou-din-bumbac-reciclat/index.md";
  slug: "198-tricou-din-bumbac-reciclat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"199-tricou-din-poliester-reciclat/index.md": {
	id: "199-tricou-din-poliester-reciclat/index.md";
  slug: "199-tricou-din-poliester-reciclat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"200-tricou-din-canepa/index.md": {
	id: "200-tricou-din-canepa/index.md";
  slug: "200-tricou-din-canepa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"201-tricou-oversized-din-bumbac/index.md": {
	id: "201-tricou-oversized-din-bumbac/index.md";
  slug: "201-tricou-oversized-din-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"202-tricou-oversized-din-bumbac-organic/index.md": {
	id: "202-tricou-oversized-din-bumbac-organic/index.md";
  slug: "202-tricou-oversized-din-bumbac-organic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"203-tricou-oversized-din-poliester/index.md": {
	id: "203-tricou-oversized-din-poliester/index.md";
  slug: "203-tricou-oversized-din-poliester";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"204-tricou-oversized-din-elastan/index.md": {
	id: "204-tricou-oversized-din-elastan/index.md";
  slug: "204-tricou-oversized-din-elastan";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"205-tricou-oversized-din-in/index.md": {
	id: "205-tricou-oversized-din-in/index.md";
  slug: "205-tricou-oversized-din-in";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"206-tricou-oversized-din-vascoza/index.md": {
	id: "206-tricou-oversized-din-vascoza/index.md";
  slug: "206-tricou-oversized-din-vascoza";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"207-tricou-oversized-din-modal/index.md": {
	id: "207-tricou-oversized-din-modal/index.md";
  slug: "207-tricou-oversized-din-modal";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"208-tricou-oversized-din-lyocell/index.md": {
	id: "208-tricou-oversized-din-lyocell/index.md";
  slug: "208-tricou-oversized-din-lyocell";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"209-tricou-oversized-din-denim/index.md": {
	id: "209-tricou-oversized-din-denim/index.md";
  slug: "209-tricou-oversized-din-denim";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"210-tricou-oversized-din-jersey/index.md": {
	id: "210-tricou-oversized-din-jersey/index.md";
  slug: "210-tricou-oversized-din-jersey";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"211-tricou-oversized-din-french-terry/index.md": {
	id: "211-tricou-oversized-din-french-terry/index.md";
  slug: "211-tricou-oversized-din-french-terry";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"212-tricou-oversized-din-fleece/index.md": {
	id: "212-tricou-oversized-din-fleece/index.md";
  slug: "212-tricou-oversized-din-fleece";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"213-tricou-oversized-din-tricot/index.md": {
	id: "213-tricou-oversized-din-tricot/index.md";
  slug: "213-tricou-oversized-din-tricot";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"214-tricou-oversized-din-twill/index.md": {
	id: "214-tricou-oversized-din-twill/index.md";
  slug: "214-tricou-oversized-din-twill";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"215-tricou-oversized-din-poplin/index.md": {
	id: "215-tricou-oversized-din-poplin/index.md";
  slug: "215-tricou-oversized-din-poplin";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"216-tricou-oversized-din-pique/index.md": {
	id: "216-tricou-oversized-din-pique/index.md";
  slug: "216-tricou-oversized-din-pique";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"217-tricou-oversized-din-mesh/index.md": {
	id: "217-tricou-oversized-din-mesh/index.md";
  slug: "217-tricou-oversized-din-mesh";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"218-tricou-oversized-din-ripstop/index.md": {
	id: "218-tricou-oversized-din-ripstop/index.md";
  slug: "218-tricou-oversized-din-ripstop";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"219-tricou-oversized-din-nailon/index.md": {
	id: "219-tricou-oversized-din-nailon/index.md";
  slug: "219-tricou-oversized-din-nailon";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"220-tricou-oversized-din-poliamida/index.md": {
	id: "220-tricou-oversized-din-poliamida/index.md";
  slug: "220-tricou-oversized-din-poliamida";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"221-tricou-oversized-din-lana/index.md": {
	id: "221-tricou-oversized-din-lana/index.md";
  slug: "221-tricou-oversized-din-lana";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"222-tricou-oversized-din-acril/index.md": {
	id: "222-tricou-oversized-din-acril/index.md";
  slug: "222-tricou-oversized-din-acril";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"223-tricou-oversized-din-bumbac-reciclat/index.md": {
	id: "223-tricou-oversized-din-bumbac-reciclat/index.md";
  slug: "223-tricou-oversized-din-bumbac-reciclat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"224-tricou-oversized-din-poliester-reciclat/index.md": {
	id: "224-tricou-oversized-din-poliester-reciclat/index.md";
  slug: "224-tricou-oversized-din-poliester-reciclat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"225-tricou-oversized-din-canepa/index.md": {
	id: "225-tricou-oversized-din-canepa/index.md";
  slug: "225-tricou-oversized-din-canepa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"226-tricou-basic-din-bumbac/index.md": {
	id: "226-tricou-basic-din-bumbac/index.md";
  slug: "226-tricou-basic-din-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"227-tricou-basic-din-bumbac-organic/index.md": {
	id: "227-tricou-basic-din-bumbac-organic/index.md";
  slug: "227-tricou-basic-din-bumbac-organic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"228-tricou-basic-din-poliester/index.md": {
	id: "228-tricou-basic-din-poliester/index.md";
  slug: "228-tricou-basic-din-poliester";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"229-tricou-basic-din-elastan/index.md": {
	id: "229-tricou-basic-din-elastan/index.md";
  slug: "229-tricou-basic-din-elastan";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"230-tricou-basic-din-in/index.md": {
	id: "230-tricou-basic-din-in/index.md";
  slug: "230-tricou-basic-din-in";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"231-tricou-basic-din-vascoza/index.md": {
	id: "231-tricou-basic-din-vascoza/index.md";
  slug: "231-tricou-basic-din-vascoza";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"232-tricou-basic-din-modal/index.md": {
	id: "232-tricou-basic-din-modal/index.md";
  slug: "232-tricou-basic-din-modal";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"233-tricou-basic-din-lyocell/index.md": {
	id: "233-tricou-basic-din-lyocell/index.md";
  slug: "233-tricou-basic-din-lyocell";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"234-tricou-basic-din-denim/index.md": {
	id: "234-tricou-basic-din-denim/index.md";
  slug: "234-tricou-basic-din-denim";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"235-tricou-basic-din-jersey/index.md": {
	id: "235-tricou-basic-din-jersey/index.md";
  slug: "235-tricou-basic-din-jersey";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"236-tricou-basic-din-french-terry/index.md": {
	id: "236-tricou-basic-din-french-terry/index.md";
  slug: "236-tricou-basic-din-french-terry";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"237-tricou-basic-din-fleece/index.md": {
	id: "237-tricou-basic-din-fleece/index.md";
  slug: "237-tricou-basic-din-fleece";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"238-tricou-basic-din-tricot/index.md": {
	id: "238-tricou-basic-din-tricot/index.md";
  slug: "238-tricou-basic-din-tricot";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"239-tricou-basic-din-twill/index.md": {
	id: "239-tricou-basic-din-twill/index.md";
  slug: "239-tricou-basic-din-twill";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"240-tricou-basic-din-poplin/index.md": {
	id: "240-tricou-basic-din-poplin/index.md";
  slug: "240-tricou-basic-din-poplin";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"241-tricou-basic-din-pique/index.md": {
	id: "241-tricou-basic-din-pique/index.md";
  slug: "241-tricou-basic-din-pique";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"242-tricou-basic-din-mesh/index.md": {
	id: "242-tricou-basic-din-mesh/index.md";
  slug: "242-tricou-basic-din-mesh";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"243-tricou-basic-din-ripstop/index.md": {
	id: "243-tricou-basic-din-ripstop/index.md";
  slug: "243-tricou-basic-din-ripstop";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"244-tricou-basic-din-nailon/index.md": {
	id: "244-tricou-basic-din-nailon/index.md";
  slug: "244-tricou-basic-din-nailon";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"245-tricou-basic-din-poliamida/index.md": {
	id: "245-tricou-basic-din-poliamida/index.md";
  slug: "245-tricou-basic-din-poliamida";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"246-tricou-basic-din-lana/index.md": {
	id: "246-tricou-basic-din-lana/index.md";
  slug: "246-tricou-basic-din-lana";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"247-tricou-basic-din-acril/index.md": {
	id: "247-tricou-basic-din-acril/index.md";
  slug: "247-tricou-basic-din-acril";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"248-tricou-basic-din-bumbac-reciclat/index.md": {
	id: "248-tricou-basic-din-bumbac-reciclat/index.md";
  slug: "248-tricou-basic-din-bumbac-reciclat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"249-tricou-basic-din-poliester-reciclat/index.md": {
	id: "249-tricou-basic-din-poliester-reciclat/index.md";
  slug: "249-tricou-basic-din-poliester-reciclat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"250-tricou-basic-din-canepa/index.md": {
	id: "250-tricou-basic-din-canepa/index.md";
  slug: "250-tricou-basic-din-canepa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"251-tricou-polo-din-bumbac/index.md": {
	id: "251-tricou-polo-din-bumbac/index.md";
  slug: "251-tricou-polo-din-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"252-tricou-polo-din-bumbac-organic/index.md": {
	id: "252-tricou-polo-din-bumbac-organic/index.md";
  slug: "252-tricou-polo-din-bumbac-organic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"253-tricou-polo-din-poliester/index.md": {
	id: "253-tricou-polo-din-poliester/index.md";
  slug: "253-tricou-polo-din-poliester";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"254-tricou-polo-din-elastan/index.md": {
	id: "254-tricou-polo-din-elastan/index.md";
  slug: "254-tricou-polo-din-elastan";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"255-tricou-polo-din-in/index.md": {
	id: "255-tricou-polo-din-in/index.md";
  slug: "255-tricou-polo-din-in";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"256-tricou-polo-din-vascoza/index.md": {
	id: "256-tricou-polo-din-vascoza/index.md";
  slug: "256-tricou-polo-din-vascoza";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"257-tricou-polo-din-modal/index.md": {
	id: "257-tricou-polo-din-modal/index.md";
  slug: "257-tricou-polo-din-modal";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"258-tricou-polo-din-lyocell/index.md": {
	id: "258-tricou-polo-din-lyocell/index.md";
  slug: "258-tricou-polo-din-lyocell";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"259-tricou-polo-din-denim/index.md": {
	id: "259-tricou-polo-din-denim/index.md";
  slug: "259-tricou-polo-din-denim";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"260-tricou-polo-din-jersey/index.md": {
	id: "260-tricou-polo-din-jersey/index.md";
  slug: "260-tricou-polo-din-jersey";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"261-tricou-polo-din-french-terry/index.md": {
	id: "261-tricou-polo-din-french-terry/index.md";
  slug: "261-tricou-polo-din-french-terry";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"262-tricou-polo-din-fleece/index.md": {
	id: "262-tricou-polo-din-fleece/index.md";
  slug: "262-tricou-polo-din-fleece";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"263-tricou-polo-din-tricot/index.md": {
	id: "263-tricou-polo-din-tricot/index.md";
  slug: "263-tricou-polo-din-tricot";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"264-tricou-polo-din-twill/index.md": {
	id: "264-tricou-polo-din-twill/index.md";
  slug: "264-tricou-polo-din-twill";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"265-tricou-polo-din-poplin/index.md": {
	id: "265-tricou-polo-din-poplin/index.md";
  slug: "265-tricou-polo-din-poplin";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"266-tricou-polo-din-pique/index.md": {
	id: "266-tricou-polo-din-pique/index.md";
  slug: "266-tricou-polo-din-pique";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"267-tricou-polo-din-mesh/index.md": {
	id: "267-tricou-polo-din-mesh/index.md";
  slug: "267-tricou-polo-din-mesh";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"268-tricou-polo-din-ripstop/index.md": {
	id: "268-tricou-polo-din-ripstop/index.md";
  slug: "268-tricou-polo-din-ripstop";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"269-tricou-polo-din-nailon/index.md": {
	id: "269-tricou-polo-din-nailon/index.md";
  slug: "269-tricou-polo-din-nailon";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"270-tricou-polo-din-poliamida/index.md": {
	id: "270-tricou-polo-din-poliamida/index.md";
  slug: "270-tricou-polo-din-poliamida";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"271-tricou-polo-din-lana/index.md": {
	id: "271-tricou-polo-din-lana/index.md";
  slug: "271-tricou-polo-din-lana";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"272-tricou-polo-din-acril/index.md": {
	id: "272-tricou-polo-din-acril/index.md";
  slug: "272-tricou-polo-din-acril";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"273-tricou-polo-din-bumbac-reciclat/index.md": {
	id: "273-tricou-polo-din-bumbac-reciclat/index.md";
  slug: "273-tricou-polo-din-bumbac-reciclat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"274-tricou-polo-din-poliester-reciclat/index.md": {
	id: "274-tricou-polo-din-poliester-reciclat/index.md";
  slug: "274-tricou-polo-din-poliester-reciclat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"275-tricou-polo-din-canepa/index.md": {
	id: "275-tricou-polo-din-canepa/index.md";
  slug: "275-tricou-polo-din-canepa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"276-pantaloni-lungi-din-bumbac/index.md": {
	id: "276-pantaloni-lungi-din-bumbac/index.md";
  slug: "276-pantaloni-lungi-din-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"277-pantaloni-lungi-din-bumbac-organic/index.md": {
	id: "277-pantaloni-lungi-din-bumbac-organic/index.md";
  slug: "277-pantaloni-lungi-din-bumbac-organic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"278-pantaloni-lungi-din-poliester/index.md": {
	id: "278-pantaloni-lungi-din-poliester/index.md";
  slug: "278-pantaloni-lungi-din-poliester";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"279-pantaloni-lungi-din-elastan/index.md": {
	id: "279-pantaloni-lungi-din-elastan/index.md";
  slug: "279-pantaloni-lungi-din-elastan";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"280-pantaloni-lungi-din-in/index.md": {
	id: "280-pantaloni-lungi-din-in/index.md";
  slug: "280-pantaloni-lungi-din-in";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"281-pantaloni-lungi-din-vascoza/index.md": {
	id: "281-pantaloni-lungi-din-vascoza/index.md";
  slug: "281-pantaloni-lungi-din-vascoza";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"282-pantaloni-lungi-din-modal/index.md": {
	id: "282-pantaloni-lungi-din-modal/index.md";
  slug: "282-pantaloni-lungi-din-modal";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"283-pantaloni-lungi-din-lyocell/index.md": {
	id: "283-pantaloni-lungi-din-lyocell/index.md";
  slug: "283-pantaloni-lungi-din-lyocell";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"284-pantaloni-lungi-din-denim/index.md": {
	id: "284-pantaloni-lungi-din-denim/index.md";
  slug: "284-pantaloni-lungi-din-denim";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"285-pantaloni-lungi-din-jersey/index.md": {
	id: "285-pantaloni-lungi-din-jersey/index.md";
  slug: "285-pantaloni-lungi-din-jersey";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"286-pantaloni-lungi-din-french-terry/index.md": {
	id: "286-pantaloni-lungi-din-french-terry/index.md";
  slug: "286-pantaloni-lungi-din-french-terry";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"287-pantaloni-lungi-din-fleece/index.md": {
	id: "287-pantaloni-lungi-din-fleece/index.md";
  slug: "287-pantaloni-lungi-din-fleece";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"288-pantaloni-lungi-din-tricot/index.md": {
	id: "288-pantaloni-lungi-din-tricot/index.md";
  slug: "288-pantaloni-lungi-din-tricot";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"289-pantaloni-lungi-din-twill/index.md": {
	id: "289-pantaloni-lungi-din-twill/index.md";
  slug: "289-pantaloni-lungi-din-twill";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"290-pantaloni-lungi-din-poplin/index.md": {
	id: "290-pantaloni-lungi-din-poplin/index.md";
  slug: "290-pantaloni-lungi-din-poplin";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"291-pantaloni-lungi-din-pique/index.md": {
	id: "291-pantaloni-lungi-din-pique/index.md";
  slug: "291-pantaloni-lungi-din-pique";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"292-pantaloni-lungi-din-mesh/index.md": {
	id: "292-pantaloni-lungi-din-mesh/index.md";
  slug: "292-pantaloni-lungi-din-mesh";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"293-pantaloni-lungi-din-ripstop/index.md": {
	id: "293-pantaloni-lungi-din-ripstop/index.md";
  slug: "293-pantaloni-lungi-din-ripstop";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"294-pantaloni-lungi-din-nailon/index.md": {
	id: "294-pantaloni-lungi-din-nailon/index.md";
  slug: "294-pantaloni-lungi-din-nailon";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"295-pantaloni-lungi-din-poliamida/index.md": {
	id: "295-pantaloni-lungi-din-poliamida/index.md";
  slug: "295-pantaloni-lungi-din-poliamida";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"296-pantaloni-lungi-din-lana/index.md": {
	id: "296-pantaloni-lungi-din-lana/index.md";
  slug: "296-pantaloni-lungi-din-lana";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"297-pantaloni-lungi-din-acril/index.md": {
	id: "297-pantaloni-lungi-din-acril/index.md";
  slug: "297-pantaloni-lungi-din-acril";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"298-pantaloni-lungi-din-bumbac-reciclat/index.md": {
	id: "298-pantaloni-lungi-din-bumbac-reciclat/index.md";
  slug: "298-pantaloni-lungi-din-bumbac-reciclat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"299-pantaloni-lungi-din-poliester-reciclat/index.md": {
	id: "299-pantaloni-lungi-din-poliester-reciclat/index.md";
  slug: "299-pantaloni-lungi-din-poliester-reciclat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"300-pantaloni-lungi-din-canepa/index.md": {
	id: "300-pantaloni-lungi-din-canepa/index.md";
  slug: "300-pantaloni-lungi-din-canepa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"301-pantaloni-casual-din-bumbac/index.md": {
	id: "301-pantaloni-casual-din-bumbac/index.md";
  slug: "301-pantaloni-casual-din-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"302-pantaloni-casual-din-bumbac-organic/index.md": {
	id: "302-pantaloni-casual-din-bumbac-organic/index.md";
  slug: "302-pantaloni-casual-din-bumbac-organic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"303-pantaloni-casual-din-poliester/index.md": {
	id: "303-pantaloni-casual-din-poliester/index.md";
  slug: "303-pantaloni-casual-din-poliester";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"304-pantaloni-casual-din-elastan/index.md": {
	id: "304-pantaloni-casual-din-elastan/index.md";
  slug: "304-pantaloni-casual-din-elastan";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"305-pantaloni-casual-din-in/index.md": {
	id: "305-pantaloni-casual-din-in/index.md";
  slug: "305-pantaloni-casual-din-in";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"306-pantaloni-casual-din-vascoza/index.md": {
	id: "306-pantaloni-casual-din-vascoza/index.md";
  slug: "306-pantaloni-casual-din-vascoza";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"307-pantaloni-casual-din-modal/index.md": {
	id: "307-pantaloni-casual-din-modal/index.md";
  slug: "307-pantaloni-casual-din-modal";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"308-pantaloni-casual-din-lyocell/index.md": {
	id: "308-pantaloni-casual-din-lyocell/index.md";
  slug: "308-pantaloni-casual-din-lyocell";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"309-pantaloni-casual-din-denim/index.md": {
	id: "309-pantaloni-casual-din-denim/index.md";
  slug: "309-pantaloni-casual-din-denim";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"310-pantaloni-casual-din-jersey/index.md": {
	id: "310-pantaloni-casual-din-jersey/index.md";
  slug: "310-pantaloni-casual-din-jersey";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"311-pantaloni-casual-din-french-terry/index.md": {
	id: "311-pantaloni-casual-din-french-terry/index.md";
  slug: "311-pantaloni-casual-din-french-terry";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"312-pantaloni-casual-din-fleece/index.md": {
	id: "312-pantaloni-casual-din-fleece/index.md";
  slug: "312-pantaloni-casual-din-fleece";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"313-pantaloni-casual-din-tricot/index.md": {
	id: "313-pantaloni-casual-din-tricot/index.md";
  slug: "313-pantaloni-casual-din-tricot";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"314-pantaloni-casual-din-twill/index.md": {
	id: "314-pantaloni-casual-din-twill/index.md";
  slug: "314-pantaloni-casual-din-twill";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"315-pantaloni-casual-din-poplin/index.md": {
	id: "315-pantaloni-casual-din-poplin/index.md";
  slug: "315-pantaloni-casual-din-poplin";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"316-pantaloni-casual-din-pique/index.md": {
	id: "316-pantaloni-casual-din-pique/index.md";
  slug: "316-pantaloni-casual-din-pique";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"317-pantaloni-casual-din-mesh/index.md": {
	id: "317-pantaloni-casual-din-mesh/index.md";
  slug: "317-pantaloni-casual-din-mesh";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"318-pantaloni-casual-din-ripstop/index.md": {
	id: "318-pantaloni-casual-din-ripstop/index.md";
  slug: "318-pantaloni-casual-din-ripstop";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"319-pantaloni-casual-din-nailon/index.md": {
	id: "319-pantaloni-casual-din-nailon/index.md";
  slug: "319-pantaloni-casual-din-nailon";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"320-pantaloni-casual-din-poliamida/index.md": {
	id: "320-pantaloni-casual-din-poliamida/index.md";
  slug: "320-pantaloni-casual-din-poliamida";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"321-pantaloni-casual-din-lana/index.md": {
	id: "321-pantaloni-casual-din-lana/index.md";
  slug: "321-pantaloni-casual-din-lana";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"322-pantaloni-casual-din-acril/index.md": {
	id: "322-pantaloni-casual-din-acril/index.md";
  slug: "322-pantaloni-casual-din-acril";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"323-pantaloni-casual-din-bumbac-reciclat/index.md": {
	id: "323-pantaloni-casual-din-bumbac-reciclat/index.md";
  slug: "323-pantaloni-casual-din-bumbac-reciclat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"324-pantaloni-casual-din-poliester-reciclat/index.md": {
	id: "324-pantaloni-casual-din-poliester-reciclat/index.md";
  slug: "324-pantaloni-casual-din-poliester-reciclat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"325-pantaloni-casual-din-canepa/index.md": {
	id: "325-pantaloni-casual-din-canepa/index.md";
  slug: "325-pantaloni-casual-din-canepa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"326-pantaloni-scurti-din-bumbac/index.md": {
	id: "326-pantaloni-scurti-din-bumbac/index.md";
  slug: "326-pantaloni-scurti-din-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"327-pantaloni-scurti-din-bumbac-organic/index.md": {
	id: "327-pantaloni-scurti-din-bumbac-organic/index.md";
  slug: "327-pantaloni-scurti-din-bumbac-organic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"328-pantaloni-scurti-din-poliester/index.md": {
	id: "328-pantaloni-scurti-din-poliester/index.md";
  slug: "328-pantaloni-scurti-din-poliester";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"329-pantaloni-scurti-din-elastan/index.md": {
	id: "329-pantaloni-scurti-din-elastan/index.md";
  slug: "329-pantaloni-scurti-din-elastan";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"330-pantaloni-scurti-din-in/index.md": {
	id: "330-pantaloni-scurti-din-in/index.md";
  slug: "330-pantaloni-scurti-din-in";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"331-pantaloni-scurti-din-vascoza/index.md": {
	id: "331-pantaloni-scurti-din-vascoza/index.md";
  slug: "331-pantaloni-scurti-din-vascoza";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"332-pantaloni-scurti-din-modal/index.md": {
	id: "332-pantaloni-scurti-din-modal/index.md";
  slug: "332-pantaloni-scurti-din-modal";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"333-pantaloni-scurti-din-lyocell/index.md": {
	id: "333-pantaloni-scurti-din-lyocell/index.md";
  slug: "333-pantaloni-scurti-din-lyocell";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"334-pantaloni-scurti-din-denim/index.md": {
	id: "334-pantaloni-scurti-din-denim/index.md";
  slug: "334-pantaloni-scurti-din-denim";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"335-pantaloni-scurti-din-jersey/index.md": {
	id: "335-pantaloni-scurti-din-jersey/index.md";
  slug: "335-pantaloni-scurti-din-jersey";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"336-pantaloni-scurti-din-french-terry/index.md": {
	id: "336-pantaloni-scurti-din-french-terry/index.md";
  slug: "336-pantaloni-scurti-din-french-terry";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"337-pantaloni-scurti-din-fleece/index.md": {
	id: "337-pantaloni-scurti-din-fleece/index.md";
  slug: "337-pantaloni-scurti-din-fleece";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"338-pantaloni-scurti-din-tricot/index.md": {
	id: "338-pantaloni-scurti-din-tricot/index.md";
  slug: "338-pantaloni-scurti-din-tricot";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"339-pantaloni-scurti-din-twill/index.md": {
	id: "339-pantaloni-scurti-din-twill/index.md";
  slug: "339-pantaloni-scurti-din-twill";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"340-pantaloni-scurti-din-poplin/index.md": {
	id: "340-pantaloni-scurti-din-poplin/index.md";
  slug: "340-pantaloni-scurti-din-poplin";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"341-pantaloni-scurti-din-pique/index.md": {
	id: "341-pantaloni-scurti-din-pique/index.md";
  slug: "341-pantaloni-scurti-din-pique";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"342-pantaloni-scurti-din-mesh/index.md": {
	id: "342-pantaloni-scurti-din-mesh/index.md";
  slug: "342-pantaloni-scurti-din-mesh";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"343-pantaloni-scurti-din-ripstop/index.md": {
	id: "343-pantaloni-scurti-din-ripstop/index.md";
  slug: "343-pantaloni-scurti-din-ripstop";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"344-pantaloni-scurti-din-nailon/index.md": {
	id: "344-pantaloni-scurti-din-nailon/index.md";
  slug: "344-pantaloni-scurti-din-nailon";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"345-pantaloni-scurti-din-poliamida/index.md": {
	id: "345-pantaloni-scurti-din-poliamida/index.md";
  slug: "345-pantaloni-scurti-din-poliamida";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"346-pantaloni-scurti-din-lana/index.md": {
	id: "346-pantaloni-scurti-din-lana/index.md";
  slug: "346-pantaloni-scurti-din-lana";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"347-pantaloni-scurti-din-acril/index.md": {
	id: "347-pantaloni-scurti-din-acril/index.md";
  slug: "347-pantaloni-scurti-din-acril";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"348-pantaloni-scurti-din-bumbac-reciclat/index.md": {
	id: "348-pantaloni-scurti-din-bumbac-reciclat/index.md";
  slug: "348-pantaloni-scurti-din-bumbac-reciclat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"349-pantaloni-scurti-din-poliester-reciclat/index.md": {
	id: "349-pantaloni-scurti-din-poliester-reciclat/index.md";
  slug: "349-pantaloni-scurti-din-poliester-reciclat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"350-pantaloni-scurti-din-canepa/index.md": {
	id: "350-pantaloni-scurti-din-canepa/index.md";
  slug: "350-pantaloni-scurti-din-canepa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"351-pantaloni-cargo-din-bumbac/index.md": {
	id: "351-pantaloni-cargo-din-bumbac/index.md";
  slug: "351-pantaloni-cargo-din-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"352-pantaloni-cargo-din-bumbac-organic/index.md": {
	id: "352-pantaloni-cargo-din-bumbac-organic/index.md";
  slug: "352-pantaloni-cargo-din-bumbac-organic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"353-pantaloni-cargo-din-poliester/index.md": {
	id: "353-pantaloni-cargo-din-poliester/index.md";
  slug: "353-pantaloni-cargo-din-poliester";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"354-pantaloni-cargo-din-elastan/index.md": {
	id: "354-pantaloni-cargo-din-elastan/index.md";
  slug: "354-pantaloni-cargo-din-elastan";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"355-pantaloni-cargo-din-in/index.md": {
	id: "355-pantaloni-cargo-din-in/index.md";
  slug: "355-pantaloni-cargo-din-in";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"356-pantaloni-cargo-din-vascoza/index.md": {
	id: "356-pantaloni-cargo-din-vascoza/index.md";
  slug: "356-pantaloni-cargo-din-vascoza";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"357-pantaloni-cargo-din-modal/index.md": {
	id: "357-pantaloni-cargo-din-modal/index.md";
  slug: "357-pantaloni-cargo-din-modal";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"358-pantaloni-cargo-din-lyocell/index.md": {
	id: "358-pantaloni-cargo-din-lyocell/index.md";
  slug: "358-pantaloni-cargo-din-lyocell";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"359-pantaloni-cargo-din-denim/index.md": {
	id: "359-pantaloni-cargo-din-denim/index.md";
  slug: "359-pantaloni-cargo-din-denim";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"360-pantaloni-cargo-din-jersey/index.md": {
	id: "360-pantaloni-cargo-din-jersey/index.md";
  slug: "360-pantaloni-cargo-din-jersey";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"361-pantaloni-cargo-din-french-terry/index.md": {
	id: "361-pantaloni-cargo-din-french-terry/index.md";
  slug: "361-pantaloni-cargo-din-french-terry";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"362-pantaloni-cargo-din-fleece/index.md": {
	id: "362-pantaloni-cargo-din-fleece/index.md";
  slug: "362-pantaloni-cargo-din-fleece";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"363-pantaloni-cargo-din-tricot/index.md": {
	id: "363-pantaloni-cargo-din-tricot/index.md";
  slug: "363-pantaloni-cargo-din-tricot";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"364-pantaloni-cargo-din-twill/index.md": {
	id: "364-pantaloni-cargo-din-twill/index.md";
  slug: "364-pantaloni-cargo-din-twill";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"365-pantaloni-cargo-din-poplin/index.md": {
	id: "365-pantaloni-cargo-din-poplin/index.md";
  slug: "365-pantaloni-cargo-din-poplin";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"366-pantaloni-cargo-din-pique/index.md": {
	id: "366-pantaloni-cargo-din-pique/index.md";
  slug: "366-pantaloni-cargo-din-pique";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"367-pantaloni-cargo-din-mesh/index.md": {
	id: "367-pantaloni-cargo-din-mesh/index.md";
  slug: "367-pantaloni-cargo-din-mesh";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"368-pantaloni-cargo-din-ripstop/index.md": {
	id: "368-pantaloni-cargo-din-ripstop/index.md";
  slug: "368-pantaloni-cargo-din-ripstop";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"369-pantaloni-cargo-din-nailon/index.md": {
	id: "369-pantaloni-cargo-din-nailon/index.md";
  slug: "369-pantaloni-cargo-din-nailon";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"370-pantaloni-cargo-din-poliamida/index.md": {
	id: "370-pantaloni-cargo-din-poliamida/index.md";
  slug: "370-pantaloni-cargo-din-poliamida";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"371-pantaloni-cargo-din-lana/index.md": {
	id: "371-pantaloni-cargo-din-lana/index.md";
  slug: "371-pantaloni-cargo-din-lana";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"372-pantaloni-cargo-din-acril/index.md": {
	id: "372-pantaloni-cargo-din-acril/index.md";
  slug: "372-pantaloni-cargo-din-acril";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"373-pantaloni-cargo-din-bumbac-reciclat/index.md": {
	id: "373-pantaloni-cargo-din-bumbac-reciclat/index.md";
  slug: "373-pantaloni-cargo-din-bumbac-reciclat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"374-pantaloni-cargo-din-poliester-reciclat/index.md": {
	id: "374-pantaloni-cargo-din-poliester-reciclat/index.md";
  slug: "374-pantaloni-cargo-din-poliester-reciclat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"375-pantaloni-cargo-din-canepa/index.md": {
	id: "375-pantaloni-cargo-din-canepa/index.md";
  slug: "375-pantaloni-cargo-din-canepa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"376-pantaloni-jogger-din-bumbac/index.md": {
	id: "376-pantaloni-jogger-din-bumbac/index.md";
  slug: "376-pantaloni-jogger-din-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"377-pantaloni-jogger-din-bumbac-organic/index.md": {
	id: "377-pantaloni-jogger-din-bumbac-organic/index.md";
  slug: "377-pantaloni-jogger-din-bumbac-organic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"378-pantaloni-jogger-din-poliester/index.md": {
	id: "378-pantaloni-jogger-din-poliester/index.md";
  slug: "378-pantaloni-jogger-din-poliester";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"379-pantaloni-jogger-din-elastan/index.md": {
	id: "379-pantaloni-jogger-din-elastan/index.md";
  slug: "379-pantaloni-jogger-din-elastan";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"380-pantaloni-jogger-din-in/index.md": {
	id: "380-pantaloni-jogger-din-in/index.md";
  slug: "380-pantaloni-jogger-din-in";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"381-pantaloni-jogger-din-vascoza/index.md": {
	id: "381-pantaloni-jogger-din-vascoza/index.md";
  slug: "381-pantaloni-jogger-din-vascoza";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"382-pantaloni-jogger-din-modal/index.md": {
	id: "382-pantaloni-jogger-din-modal/index.md";
  slug: "382-pantaloni-jogger-din-modal";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"383-pantaloni-jogger-din-lyocell/index.md": {
	id: "383-pantaloni-jogger-din-lyocell/index.md";
  slug: "383-pantaloni-jogger-din-lyocell";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"384-pantaloni-jogger-din-denim/index.md": {
	id: "384-pantaloni-jogger-din-denim/index.md";
  slug: "384-pantaloni-jogger-din-denim";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"385-pantaloni-jogger-din-jersey/index.md": {
	id: "385-pantaloni-jogger-din-jersey/index.md";
  slug: "385-pantaloni-jogger-din-jersey";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"386-pantaloni-jogger-din-french-terry/index.md": {
	id: "386-pantaloni-jogger-din-french-terry/index.md";
  slug: "386-pantaloni-jogger-din-french-terry";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"387-pantaloni-jogger-din-fleece/index.md": {
	id: "387-pantaloni-jogger-din-fleece/index.md";
  slug: "387-pantaloni-jogger-din-fleece";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"388-pantaloni-jogger-din-tricot/index.md": {
	id: "388-pantaloni-jogger-din-tricot/index.md";
  slug: "388-pantaloni-jogger-din-tricot";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"389-pantaloni-jogger-din-twill/index.md": {
	id: "389-pantaloni-jogger-din-twill/index.md";
  slug: "389-pantaloni-jogger-din-twill";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"390-pantaloni-jogger-din-poplin/index.md": {
	id: "390-pantaloni-jogger-din-poplin/index.md";
  slug: "390-pantaloni-jogger-din-poplin";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"391-pantaloni-jogger-din-pique/index.md": {
	id: "391-pantaloni-jogger-din-pique/index.md";
  slug: "391-pantaloni-jogger-din-pique";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"392-pantaloni-jogger-din-mesh/index.md": {
	id: "392-pantaloni-jogger-din-mesh/index.md";
  slug: "392-pantaloni-jogger-din-mesh";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"393-pantaloni-jogger-din-ripstop/index.md": {
	id: "393-pantaloni-jogger-din-ripstop/index.md";
  slug: "393-pantaloni-jogger-din-ripstop";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"394-pantaloni-jogger-din-nailon/index.md": {
	id: "394-pantaloni-jogger-din-nailon/index.md";
  slug: "394-pantaloni-jogger-din-nailon";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"395-pantaloni-jogger-din-poliamida/index.md": {
	id: "395-pantaloni-jogger-din-poliamida/index.md";
  slug: "395-pantaloni-jogger-din-poliamida";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"396-pantaloni-jogger-din-lana/index.md": {
	id: "396-pantaloni-jogger-din-lana/index.md";
  slug: "396-pantaloni-jogger-din-lana";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"397-pantaloni-jogger-din-acril/index.md": {
	id: "397-pantaloni-jogger-din-acril/index.md";
  slug: "397-pantaloni-jogger-din-acril";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"398-pantaloni-jogger-din-bumbac-reciclat/index.md": {
	id: "398-pantaloni-jogger-din-bumbac-reciclat/index.md";
  slug: "398-pantaloni-jogger-din-bumbac-reciclat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"399-pantaloni-jogger-din-poliester-reciclat/index.md": {
	id: "399-pantaloni-jogger-din-poliester-reciclat/index.md";
  slug: "399-pantaloni-jogger-din-poliester-reciclat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"400-pantaloni-jogger-din-canepa/index.md": {
	id: "400-pantaloni-jogger-din-canepa/index.md";
  slug: "400-pantaloni-jogger-din-canepa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"401-hanorac-din-bumbac/index.md": {
	id: "401-hanorac-din-bumbac/index.md";
  slug: "401-hanorac-din-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"402-hanorac-din-bumbac-organic/index.md": {
	id: "402-hanorac-din-bumbac-organic/index.md";
  slug: "402-hanorac-din-bumbac-organic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"403-hanorac-din-poliester/index.md": {
	id: "403-hanorac-din-poliester/index.md";
  slug: "403-hanorac-din-poliester";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"404-hanorac-din-elastan/index.md": {
	id: "404-hanorac-din-elastan/index.md";
  slug: "404-hanorac-din-elastan";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"405-hanorac-din-in/index.md": {
	id: "405-hanorac-din-in/index.md";
  slug: "405-hanorac-din-in";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"406-hanorac-din-vascoza/index.md": {
	id: "406-hanorac-din-vascoza/index.md";
  slug: "406-hanorac-din-vascoza";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"407-hanorac-din-modal/index.md": {
	id: "407-hanorac-din-modal/index.md";
  slug: "407-hanorac-din-modal";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"408-hanorac-din-lyocell/index.md": {
	id: "408-hanorac-din-lyocell/index.md";
  slug: "408-hanorac-din-lyocell";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"409-hanorac-din-denim/index.md": {
	id: "409-hanorac-din-denim/index.md";
  slug: "409-hanorac-din-denim";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"410-hanorac-din-jersey/index.md": {
	id: "410-hanorac-din-jersey/index.md";
  slug: "410-hanorac-din-jersey";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"411-hanorac-din-french-terry/index.md": {
	id: "411-hanorac-din-french-terry/index.md";
  slug: "411-hanorac-din-french-terry";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"412-hanorac-din-fleece/index.md": {
	id: "412-hanorac-din-fleece/index.md";
  slug: "412-hanorac-din-fleece";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"413-hanorac-din-tricot/index.md": {
	id: "413-hanorac-din-tricot/index.md";
  slug: "413-hanorac-din-tricot";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"414-hanorac-din-twill/index.md": {
	id: "414-hanorac-din-twill/index.md";
  slug: "414-hanorac-din-twill";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"415-hanorac-din-poplin/index.md": {
	id: "415-hanorac-din-poplin/index.md";
  slug: "415-hanorac-din-poplin";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"416-hanorac-din-pique/index.md": {
	id: "416-hanorac-din-pique/index.md";
  slug: "416-hanorac-din-pique";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"417-hanorac-din-mesh/index.md": {
	id: "417-hanorac-din-mesh/index.md";
  slug: "417-hanorac-din-mesh";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"418-hanorac-din-ripstop/index.md": {
	id: "418-hanorac-din-ripstop/index.md";
  slug: "418-hanorac-din-ripstop";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"419-hanorac-din-nailon/index.md": {
	id: "419-hanorac-din-nailon/index.md";
  slug: "419-hanorac-din-nailon";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"420-hanorac-din-poliamida/index.md": {
	id: "420-hanorac-din-poliamida/index.md";
  slug: "420-hanorac-din-poliamida";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"421-hanorac-din-lana/index.md": {
	id: "421-hanorac-din-lana/index.md";
  slug: "421-hanorac-din-lana";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"422-hanorac-din-acril/index.md": {
	id: "422-hanorac-din-acril/index.md";
  slug: "422-hanorac-din-acril";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"423-hanorac-din-bumbac-reciclat/index.md": {
	id: "423-hanorac-din-bumbac-reciclat/index.md";
  slug: "423-hanorac-din-bumbac-reciclat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"424-hanorac-din-poliester-reciclat/index.md": {
	id: "424-hanorac-din-poliester-reciclat/index.md";
  slug: "424-hanorac-din-poliester-reciclat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"425-hanorac-din-canepa/index.md": {
	id: "425-hanorac-din-canepa/index.md";
  slug: "425-hanorac-din-canepa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"426-set-barbati-din-bumbac/index.md": {
	id: "426-set-barbati-din-bumbac/index.md";
  slug: "426-set-barbati-din-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"427-set-barbati-din-bumbac-organic/index.md": {
	id: "427-set-barbati-din-bumbac-organic/index.md";
  slug: "427-set-barbati-din-bumbac-organic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"428-set-barbati-din-poliester/index.md": {
	id: "428-set-barbati-din-poliester/index.md";
  slug: "428-set-barbati-din-poliester";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"429-set-barbati-din-elastan/index.md": {
	id: "429-set-barbati-din-elastan/index.md";
  slug: "429-set-barbati-din-elastan";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"430-set-barbati-din-in/index.md": {
	id: "430-set-barbati-din-in/index.md";
  slug: "430-set-barbati-din-in";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"431-set-barbati-din-vascoza/index.md": {
	id: "431-set-barbati-din-vascoza/index.md";
  slug: "431-set-barbati-din-vascoza";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"432-set-barbati-din-modal/index.md": {
	id: "432-set-barbati-din-modal/index.md";
  slug: "432-set-barbati-din-modal";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"433-set-barbati-din-lyocell/index.md": {
	id: "433-set-barbati-din-lyocell/index.md";
  slug: "433-set-barbati-din-lyocell";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"434-set-barbati-din-denim/index.md": {
	id: "434-set-barbati-din-denim/index.md";
  slug: "434-set-barbati-din-denim";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"435-set-barbati-din-jersey/index.md": {
	id: "435-set-barbati-din-jersey/index.md";
  slug: "435-set-barbati-din-jersey";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"436-set-barbati-din-french-terry/index.md": {
	id: "436-set-barbati-din-french-terry/index.md";
  slug: "436-set-barbati-din-french-terry";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"437-set-barbati-din-fleece/index.md": {
	id: "437-set-barbati-din-fleece/index.md";
  slug: "437-set-barbati-din-fleece";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"438-set-barbati-din-tricot/index.md": {
	id: "438-set-barbati-din-tricot/index.md";
  slug: "438-set-barbati-din-tricot";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"439-set-barbati-din-twill/index.md": {
	id: "439-set-barbati-din-twill/index.md";
  slug: "439-set-barbati-din-twill";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"440-set-barbati-din-poplin/index.md": {
	id: "440-set-barbati-din-poplin/index.md";
  slug: "440-set-barbati-din-poplin";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"441-set-barbati-din-pique/index.md": {
	id: "441-set-barbati-din-pique/index.md";
  slug: "441-set-barbati-din-pique";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"442-set-barbati-din-mesh/index.md": {
	id: "442-set-barbati-din-mesh/index.md";
  slug: "442-set-barbati-din-mesh";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"443-set-barbati-din-ripstop/index.md": {
	id: "443-set-barbati-din-ripstop/index.md";
  slug: "443-set-barbati-din-ripstop";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"444-set-barbati-din-nailon/index.md": {
	id: "444-set-barbati-din-nailon/index.md";
  slug: "444-set-barbati-din-nailon";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"445-set-barbati-din-poliamida/index.md": {
	id: "445-set-barbati-din-poliamida/index.md";
  slug: "445-set-barbati-din-poliamida";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"446-set-barbati-din-lana/index.md": {
	id: "446-set-barbati-din-lana/index.md";
  slug: "446-set-barbati-din-lana";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"447-set-barbati-din-acril/index.md": {
	id: "447-set-barbati-din-acril/index.md";
  slug: "447-set-barbati-din-acril";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"448-set-barbati-din-bumbac-reciclat/index.md": {
	id: "448-set-barbati-din-bumbac-reciclat/index.md";
  slug: "448-set-barbati-din-bumbac-reciclat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"449-set-barbati-din-poliester-reciclat/index.md": {
	id: "449-set-barbati-din-poliester-reciclat/index.md";
  slug: "449-set-barbati-din-poliester-reciclat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"450-set-barbati-din-canepa/index.md": {
	id: "450-set-barbati-din-canepa/index.md";
  slug: "450-set-barbati-din-canepa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"451-bumbac-vs-poliester/index.md": {
	id: "451-bumbac-vs-poliester/index.md";
  slug: "451-bumbac-vs-poliester";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"452-cand-alegi-bumbac-sau-poliester/index.md": {
	id: "452-cand-alegi-bumbac-sau-poliester/index.md";
  slug: "452-cand-alegi-bumbac-sau-poliester";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"453-bumbac-organic-vs-bumbac-clasic/index.md": {
	id: "453-bumbac-organic-vs-bumbac-clasic/index.md";
  slug: "453-bumbac-organic-vs-bumbac-clasic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"454-cand-alegi-bumbac-organic-sau-bumbac-clasic/index.md": {
	id: "454-cand-alegi-bumbac-organic-sau-bumbac-clasic/index.md";
  slug: "454-cand-alegi-bumbac-organic-sau-bumbac-clasic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"455-french-terry-vs-fleece/index.md": {
	id: "455-french-terry-vs-fleece/index.md";
  slug: "455-french-terry-vs-fleece";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"456-cand-alegi-french-terry-sau-fleece/index.md": {
	id: "456-cand-alegi-french-terry-sau-fleece/index.md";
  slug: "456-cand-alegi-french-terry-sau-fleece";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"457-jersey-vs-pique/index.md": {
	id: "457-jersey-vs-pique/index.md";
  slug: "457-jersey-vs-pique";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"458-cand-alegi-jersey-sau-pique/index.md": {
	id: "458-cand-alegi-jersey-sau-pique/index.md";
  slug: "458-cand-alegi-jersey-sau-pique";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"459-in-vs-bumbac/index.md": {
	id: "459-in-vs-bumbac/index.md";
  slug: "459-in-vs-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"460-cand-alegi-in-sau-bumbac/index.md": {
	id: "460-cand-alegi-in-sau-bumbac/index.md";
  slug: "460-cand-alegi-in-sau-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"461-denim-vs-twill/index.md": {
	id: "461-denim-vs-twill/index.md";
  slug: "461-denim-vs-twill";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"462-cand-alegi-denim-sau-twill/index.md": {
	id: "462-cand-alegi-denim-sau-twill/index.md";
  slug: "462-cand-alegi-denim-sau-twill";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"463-vascoza-vs-bumbac/index.md": {
	id: "463-vascoza-vs-bumbac/index.md";
  slug: "463-vascoza-vs-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"464-cand-alegi-vascoza-sau-bumbac/index.md": {
	id: "464-cand-alegi-vascoza-sau-bumbac/index.md";
  slug: "464-cand-alegi-vascoza-sau-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"465-modal-vs-bumbac/index.md": {
	id: "465-modal-vs-bumbac/index.md";
  slug: "465-modal-vs-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"466-cand-alegi-modal-sau-bumbac/index.md": {
	id: "466-cand-alegi-modal-sau-bumbac/index.md";
  slug: "466-cand-alegi-modal-sau-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"467-nailon-vs-poliester/index.md": {
	id: "467-nailon-vs-poliester/index.md";
  slug: "467-nailon-vs-poliester";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"468-cand-alegi-nailon-sau-poliester/index.md": {
	id: "468-cand-alegi-nailon-sau-poliester/index.md";
  slug: "468-cand-alegi-nailon-sau-poliester";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"469-poliester-reciclat-vs-poliester-clasic/index.md": {
	id: "469-poliester-reciclat-vs-poliester-clasic/index.md";
  slug: "469-poliester-reciclat-vs-poliester-clasic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"470-cand-alegi-poliester-reciclat-sau-poliester-clasic/index.md": {
	id: "470-cand-alegi-poliester-reciclat-sau-poliester-clasic/index.md";
  slug: "470-cand-alegi-poliester-reciclat-sau-poliester-clasic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"471-slim-fit-vs-regular-fit/index.md": {
	id: "471-slim-fit-vs-regular-fit/index.md";
  slug: "471-slim-fit-vs-regular-fit";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"472-cand-alegi-slim-fit-sau-regular-fit/index.md": {
	id: "472-cand-alegi-slim-fit-sau-regular-fit/index.md";
  slug: "472-cand-alegi-slim-fit-sau-regular-fit";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"473-regular-fit-vs-oversized/index.md": {
	id: "473-regular-fit-vs-oversized/index.md";
  slug: "473-regular-fit-vs-oversized";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"474-cand-alegi-regular-fit-sau-oversized/index.md": {
	id: "474-cand-alegi-regular-fit-sau-oversized/index.md";
  slug: "474-cand-alegi-regular-fit-sau-oversized";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"475-baggy-vs-straight-fit/index.md": {
	id: "475-baggy-vs-straight-fit/index.md";
  slug: "475-baggy-vs-straight-fit";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"476-cand-alegi-baggy-sau-straight-fit/index.md": {
	id: "476-cand-alegi-baggy-sau-straight-fit/index.md";
  slug: "476-cand-alegi-baggy-sau-straight-fit";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"477-jogger-vs-pantaloni-casual/index.md": {
	id: "477-jogger-vs-pantaloni-casual/index.md";
  slug: "477-jogger-vs-pantaloni-casual";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"478-cand-alegi-jogger-sau-pantaloni-casual/index.md": {
	id: "478-cand-alegi-jogger-sau-pantaloni-casual/index.md";
  slug: "478-cand-alegi-jogger-sau-pantaloni-casual";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"479-cargo-vs-pantaloni-simpli/index.md": {
	id: "479-cargo-vs-pantaloni-simpli/index.md";
  slug: "479-cargo-vs-pantaloni-simpli";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"480-cand-alegi-cargo-sau-pantaloni-simpli/index.md": {
	id: "480-cand-alegi-cargo-sau-pantaloni-simpli/index.md";
  slug: "480-cand-alegi-cargo-sau-pantaloni-simpli";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"481-bermude-vs-pantaloni-scurti-clasici/index.md": {
	id: "481-bermude-vs-pantaloni-scurti-clasici/index.md";
  slug: "481-bermude-vs-pantaloni-scurti-clasici";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"482-cand-alegi-bermude-sau-pantaloni-scurti-clasici/index.md": {
	id: "482-cand-alegi-bermude-sau-pantaloni-scurti-clasici/index.md";
  slug: "482-cand-alegi-bermude-sau-pantaloni-scurti-clasici";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"483-ce-inseamna-regular-fit/index.md": {
	id: "483-ce-inseamna-regular-fit/index.md";
  slug: "483-ce-inseamna-regular-fit";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"484-regular-fit-barbati/index.md": {
	id: "484-regular-fit-barbati/index.md";
  slug: "484-regular-fit-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"485-pantaloni-regular-fit/index.md": {
	id: "485-pantaloni-regular-fit/index.md";
  slug: "485-pantaloni-regular-fit";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"486-tricou-regular-fit/index.md": {
	id: "486-tricou-regular-fit/index.md";
  slug: "486-tricou-regular-fit";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"487-ce-inseamna-slim-fit/index.md": {
	id: "487-ce-inseamna-slim-fit/index.md";
  slug: "487-ce-inseamna-slim-fit";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"488-slim-fit-barbati/index.md": {
	id: "488-slim-fit-barbati/index.md";
  slug: "488-slim-fit-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"489-pantaloni-slim-fit/index.md": {
	id: "489-pantaloni-slim-fit/index.md";
  slug: "489-pantaloni-slim-fit";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"490-tricou-slim-fit/index.md": {
	id: "490-tricou-slim-fit/index.md";
  slug: "490-tricou-slim-fit";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"491-ce-inseamna-oversized/index.md": {
	id: "491-ce-inseamna-oversized/index.md";
  slug: "491-ce-inseamna-oversized";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"492-oversized-barbati/index.md": {
	id: "492-oversized-barbati/index.md";
  slug: "492-oversized-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"493-pantaloni-oversized/index.md": {
	id: "493-pantaloni-oversized/index.md";
  slug: "493-pantaloni-oversized";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"494-tricou-oversized/index.md": {
	id: "494-tricou-oversized/index.md";
  slug: "494-tricou-oversized";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"495-ce-inseamna-relaxed-fit/index.md": {
	id: "495-ce-inseamna-relaxed-fit/index.md";
  slug: "495-ce-inseamna-relaxed-fit";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"496-relaxed-fit-barbati/index.md": {
	id: "496-relaxed-fit-barbati/index.md";
  slug: "496-relaxed-fit-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"497-pantaloni-relaxed-fit/index.md": {
	id: "497-pantaloni-relaxed-fit/index.md";
  slug: "497-pantaloni-relaxed-fit";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"498-tricou-relaxed-fit/index.md": {
	id: "498-tricou-relaxed-fit/index.md";
  slug: "498-tricou-relaxed-fit";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"499-ce-inseamna-baggy/index.md": {
	id: "499-ce-inseamna-baggy/index.md";
  slug: "499-ce-inseamna-baggy";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"500-baggy-barbati/index.md": {
	id: "500-baggy-barbati/index.md";
  slug: "500-baggy-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"501-pantaloni-baggy/index.md": {
	id: "501-pantaloni-baggy/index.md";
  slug: "501-pantaloni-baggy";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"502-tricou-baggy/index.md": {
	id: "502-tricou-baggy/index.md";
  slug: "502-tricou-baggy";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"503-ce-inseamna-straight-fit/index.md": {
	id: "503-ce-inseamna-straight-fit/index.md";
  slug: "503-ce-inseamna-straight-fit";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"504-straight-fit-barbati/index.md": {
	id: "504-straight-fit-barbati/index.md";
  slug: "504-straight-fit-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"505-pantaloni-straight-fit/index.md": {
	id: "505-pantaloni-straight-fit/index.md";
  slug: "505-pantaloni-straight-fit";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"506-tricou-straight-fit/index.md": {
	id: "506-tricou-straight-fit/index.md";
  slug: "506-tricou-straight-fit";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"507-ce-inseamna-tapered-fit/index.md": {
	id: "507-ce-inseamna-tapered-fit/index.md";
  slug: "507-ce-inseamna-tapered-fit";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"508-tapered-fit-barbati/index.md": {
	id: "508-tapered-fit-barbati/index.md";
  slug: "508-tapered-fit-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"509-pantaloni-tapered-fit/index.md": {
	id: "509-pantaloni-tapered-fit/index.md";
  slug: "509-pantaloni-tapered-fit";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"510-tricou-tapered-fit/index.md": {
	id: "510-tricou-tapered-fit/index.md";
  slug: "510-tricou-tapered-fit";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"511-ce-inseamna-cargo/index.md": {
	id: "511-ce-inseamna-cargo/index.md";
  slug: "511-ce-inseamna-cargo";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"512-cargo-barbati/index.md": {
	id: "512-cargo-barbati/index.md";
  slug: "512-cargo-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"513-pantaloni-cargo/index.md": {
	id: "513-pantaloni-cargo/index.md";
  slug: "513-pantaloni-cargo";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"514-tricou-cargo/index.md": {
	id: "514-tricou-cargo/index.md";
  slug: "514-tricou-cargo";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"515-ce-inseamna-jogger/index.md": {
	id: "515-ce-inseamna-jogger/index.md";
  slug: "515-ce-inseamna-jogger";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"516-jogger-barbati/index.md": {
	id: "516-jogger-barbati/index.md";
  slug: "516-jogger-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"517-pantaloni-jogger/index.md": {
	id: "517-pantaloni-jogger/index.md";
  slug: "517-pantaloni-jogger";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"518-tricou-jogger/index.md": {
	id: "518-tricou-jogger/index.md";
  slug: "518-tricou-jogger";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"519-ce-inseamna-bermude/index.md": {
	id: "519-ce-inseamna-bermude/index.md";
  slug: "519-ce-inseamna-bermude";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"520-bermude-barbati/index.md": {
	id: "520-bermude-barbati/index.md";
  slug: "520-bermude-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"521-pantaloni-bermude/index.md": {
	id: "521-pantaloni-bermude/index.md";
  slug: "521-pantaloni-bermude";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"522-tricou-bermude/index.md": {
	id: "522-tricou-bermude/index.md";
  slug: "522-tricou-bermude";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"523-ce-inseamna-croiala-dreapta/index.md": {
	id: "523-ce-inseamna-croiala-dreapta/index.md";
  slug: "523-ce-inseamna-croiala-dreapta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"524-croiala-dreapta-barbati/index.md": {
	id: "524-croiala-dreapta-barbati/index.md";
  slug: "524-croiala-dreapta-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"525-pantaloni-croiala-dreapta/index.md": {
	id: "525-pantaloni-croiala-dreapta/index.md";
  slug: "525-pantaloni-croiala-dreapta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"526-tricou-croiala-dreapta/index.md": {
	id: "526-tricou-croiala-dreapta/index.md";
  slug: "526-tricou-croiala-dreapta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"527-ce-inseamna-croiala-lejera/index.md": {
	id: "527-ce-inseamna-croiala-lejera/index.md";
  slug: "527-ce-inseamna-croiala-lejera";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"528-croiala-lejera-barbati/index.md": {
	id: "528-croiala-lejera-barbati/index.md";
  slug: "528-croiala-lejera-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"529-pantaloni-croiala-lejera/index.md": {
	id: "529-pantaloni-croiala-lejera/index.md";
  slug: "529-pantaloni-croiala-lejera";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"530-tricou-croiala-lejera/index.md": {
	id: "530-tricou-croiala-lejera/index.md";
  slug: "530-tricou-croiala-lejera";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"531-tricou-negru-barbati/index.md": {
	id: "531-tricou-negru-barbati/index.md";
  slug: "531-tricou-negru-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"532-pantaloni-negru-barbati/index.md": {
	id: "532-pantaloni-negru-barbati/index.md";
  slug: "532-pantaloni-negru-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"533-hanorac-negru-barbati/index.md": {
	id: "533-hanorac-negru-barbati/index.md";
  slug: "533-hanorac-negru-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"534-set-negru-barbati/index.md": {
	id: "534-set-negru-barbati/index.md";
  slug: "534-set-negru-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"535-tricou-alb-barbati/index.md": {
	id: "535-tricou-alb-barbati/index.md";
  slug: "535-tricou-alb-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"536-pantaloni-alb-barbati/index.md": {
	id: "536-pantaloni-alb-barbati/index.md";
  slug: "536-pantaloni-alb-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"537-hanorac-alb-barbati/index.md": {
	id: "537-hanorac-alb-barbati/index.md";
  slug: "537-hanorac-alb-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"538-set-alb-barbati/index.md": {
	id: "538-set-alb-barbati/index.md";
  slug: "538-set-alb-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"539-tricou-gri-barbati/index.md": {
	id: "539-tricou-gri-barbati/index.md";
  slug: "539-tricou-gri-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"540-pantaloni-gri-barbati/index.md": {
	id: "540-pantaloni-gri-barbati/index.md";
  slug: "540-pantaloni-gri-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"541-hanorac-gri-barbati/index.md": {
	id: "541-hanorac-gri-barbati/index.md";
  slug: "541-hanorac-gri-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"542-set-gri-barbati/index.md": {
	id: "542-set-gri-barbati/index.md";
  slug: "542-set-gri-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"543-tricou-bej-barbati/index.md": {
	id: "543-tricou-bej-barbati/index.md";
  slug: "543-tricou-bej-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"544-pantaloni-bej-barbati/index.md": {
	id: "544-pantaloni-bej-barbati/index.md";
  slug: "544-pantaloni-bej-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"545-hanorac-bej-barbati/index.md": {
	id: "545-hanorac-bej-barbati/index.md";
  slug: "545-hanorac-bej-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"546-set-bej-barbati/index.md": {
	id: "546-set-bej-barbati/index.md";
  slug: "546-set-bej-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"547-tricou-bleumarin-barbati/index.md": {
	id: "547-tricou-bleumarin-barbati/index.md";
  slug: "547-tricou-bleumarin-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"548-pantaloni-bleumarin-barbati/index.md": {
	id: "548-pantaloni-bleumarin-barbati/index.md";
  slug: "548-pantaloni-bleumarin-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"549-hanorac-bleumarin-barbati/index.md": {
	id: "549-hanorac-bleumarin-barbati/index.md";
  slug: "549-hanorac-bleumarin-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"550-set-bleumarin-barbati/index.md": {
	id: "550-set-bleumarin-barbati/index.md";
  slug: "550-set-bleumarin-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cum-porti-tricoul-negru-oversized/index.md": {
	id: "cum-porti-tricoul-negru-oversized/index.md";
  slug: "cum-porti-tricoul-negru-oversized";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"ingrijire-tricou-negru-bumbac/index.md": {
	id: "ingrijire-tricou-negru-bumbac/index.md";
  slug: "ingrijire-tricou-negru-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tricou-alb-pantaloni-negri-snur-lung/index.md": {
	id: "tricou-alb-pantaloni-negri-snur-lung/index.md";
  slug: "tricou-alb-pantaloni-negri-snur-lung";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
