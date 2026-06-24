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
"bermude-blugi-clasici/index.md": {
	id: "bermude-blugi-clasici/index.md";
  slug: "bermude-blugi-clasici";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-blugi-rupti/index.md": {
	id: "bermude-blugi-rupti/index.md";
  slug: "bermude-blugi-rupti";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-blugi-scurti/index.md": {
	id: "bermude-blugi-scurti/index.md";
  slug: "bermude-blugi-scurti";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-bumbac-dungi/index.md": {
	id: "bermude-bumbac-dungi/index.md";
  slug: "bermude-bumbac-dungi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-bumbac-elastici/index.md": {
	id: "bermude-bumbac-elastici/index.md";
  slug: "bermude-bumbac-elastici";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-bumbac-lejeri/index.md": {
	id: "bermude-bumbac-lejeri/index.md";
  slug: "bermude-bumbac-lejeri";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-bumbac-plaja/index.md": {
	id: "bermude-bumbac-plaja/index.md";
  slug: "bermude-bumbac-plaja";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-bumbac-simpli/index.md": {
	id: "bermude-bumbac-simpli/index.md";
  slug: "bermude-bumbac-simpli";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-bumbac-subtire/index.md": {
	id: "bermude-bumbac-subtire/index.md";
  slug: "bermude-bumbac-subtire";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-bumbac-trening/index.md": {
	id: "bermude-bumbac-trening/index.md";
  slug: "bermude-bumbac-trening";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-camuflaj-armata/index.md": {
	id: "bermude-camuflaj-armata/index.md";
  slug: "bermude-camuflaj-armata";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-cargo-bumbac/index.md": {
	id: "bermude-cargo-bumbac/index.md";
  slug: "bermude-cargo-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-cargo-buzunare/index.md": {
	id: "bermude-cargo-buzunare/index.md";
  slug: "bermude-cargo-buzunare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-doc-buzunare/index.md": {
	id: "bermude-doc-buzunare/index.md";
  slug: "bermude-doc-buzunare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-doc-lejeri/index.md": {
	id: "bermude-doc-lejeri/index.md";
  slug: "bermude-doc-lejeri";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-doc-rezistent/index.md": {
	id: "bermude-doc-rezistent/index.md";
  slug: "bermude-doc-rezistent";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-doc-rezistenti/index.md": {
	id: "bermude-doc-rezistenti/index.md";
  slug: "bermude-doc-rezistenti";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-doc-vara/index.md": {
	id: "bermude-doc-vara/index.md";
  slug: "bermude-doc-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-in-lejeri/index.md": {
	id: "bermude-in-lejeri/index.md";
  slug: "bermude-in-lejeri";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-inot-lejeri/index.md": {
	id: "bermude-inot-lejeri/index.md";
  slug: "bermude-inot-lejeri";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-jeans-clasici/index.md": {
	id: "bermude-jeans-clasici/index.md";
  slug: "bermude-jeans-clasici";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-jeans-rupti/index.md": {
	id: "bermude-jeans-rupti/index.md";
  slug: "bermude-jeans-rupti";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-jeans-scurti/index.md": {
	id: "bermude-jeans-scurti/index.md";
  slug: "bermude-jeans-scurti";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-plaja-dungi/index.md": {
	id: "bermude-plaja-dungi/index.md";
  slug: "bermude-plaja-dungi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-plaja-imprimeu/index.md": {
	id: "bermude-plaja-imprimeu/index.md";
  slug: "bermude-plaja-imprimeu";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-plaja-rapida/index.md": {
	id: "bermude-plaja-rapida/index.md";
  slug: "bermude-plaja-rapida";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-sport-bumbac/index.md": {
	id: "bermude-sport-bumbac/index.md";
  slug: "bermude-sport-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-sport-buzunar/index.md": {
	id: "bermude-sport-buzunar/index.md";
  slug: "bermude-sport-buzunar";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-sport-fermoar/index.md": {
	id: "bermude-sport-fermoar/index.md";
  slug: "bermude-sport-fermoar";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bermude-tercot-oliv/index.md": {
	id: "bermude-tercot-oliv/index.md";
  slug: "bermude-tercot-oliv";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-boyfriend-rupti/index.md": {
	id: "blugi-boyfriend-rupti/index.md";
  slug: "blugi-boyfriend-rupti";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-conici-barbati/index.md": {
	id: "blugi-conici-barbati/index.md";
  slug: "blugi-conici-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-dama-conici/index.md": {
	id: "blugi-dama-conici/index.md";
  slug: "blugi-dama-conici";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-dama-skinny/index.md": {
	id: "blugi-dama-skinny/index.md";
  slug: "blugi-dama-skinny";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-drepti-clasici/index.md": {
	id: "blugi-drepti-clasici/index.md";
  slug: "blugi-drepti-clasici";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-elastici-conici/index.md": {
	id: "blugi-elastici-conici/index.md";
  slug: "blugi-elastici-conici";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-evazati-retro/index.md": {
	id: "blugi-evazati-retro/index.md";
  slug: "blugi-evazati-retro";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-gri-stersi/index.md": {
	id: "blugi-gri-stersi/index.md";
  slug: "blugi-gri-stersi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-lejeri-rupti/index.md": {
	id: "blugi-lejeri-rupti/index.md";
  slug: "blugi-lejeri-rupti";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-lejeri-spalati/index.md": {
	id: "blugi-lejeri-spalati/index.md";
  slug: "blugi-lejeri-spalati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-mom-fit/index.md": {
	id: "blugi-mom-fit/index.md";
  slug: "blugi-mom-fit";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-negri-simpli/index.md": {
	id: "blugi-negri-simpli/index.md";
  slug: "blugi-negri-simpli";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-prespalati-retro/index.md": {
	id: "blugi-prespalati-retro/index.md";
  slug: "blugi-prespalati-retro";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-regular-barbati/index.md": {
	id: "blugi-regular-barbati/index.md";
  slug: "blugi-regular-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-regular-fit/index.md": {
	id: "blugi-regular-fit/index.md";
  slug: "blugi-regular-fit";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-retro-evazati/index.md": {
	id: "blugi-retro-evazati/index.md";
  slug: "blugi-retro-evazati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-rupti-genunchi/index.md": {
	id: "blugi-rupti-genunchi/index.md";
  slug: "blugi-rupti-genunchi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-skinny-albastri/index.md": {
	id: "blugi-skinny-albastri/index.md";
  slug: "blugi-skinny-albastri";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-skinny-elastici/index.md": {
	id: "blugi-skinny-elastici/index.md";
  slug: "blugi-skinny-elastici";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-skinny-negri/index.md": {
	id: "blugi-skinny-negri/index.md";
  slug: "blugi-skinny-negri";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-slim-gri/index.md": {
	id: "blugi-slim-gri/index.md";
  slug: "blugi-slim-gri";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-spalare-medie/index.md": {
	id: "blugi-spalare-medie/index.md";
  slug: "blugi-spalare-medie";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-spalati-acid/index.md": {
	id: "blugi-spalati-acid/index.md";
  slug: "blugi-spalati-acid";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-spalati-des/index.md": {
	id: "blugi-spalati-des/index.md";
  slug: "blugi-spalati-des";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-spalati-deschis/index.md": {
	id: "blugi-spalati-deschis/index.md";
  slug: "blugi-spalati-deschis";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-spalati-mediu/index.md": {
	id: "blugi-spalati-mediu/index.md";
  slug: "blugi-spalati-mediu";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-talie-inalta/index.md": {
	id: "blugi-talie-inalta/index.md";
  slug: "blugi-talie-inalta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-talie-joasa/index.md": {
	id: "blugi-talie-joasa/index.md";
  slug: "blugi-talie-joasa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"blugi-talie-medie/index.md": {
	id: "blugi-talie-medie/index.md";
  slug: "blugi-talie-medie";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bluza-bumbac-brodat/index.md": {
	id: "bluza-bumbac-brodat/index.md";
  slug: "bluza-bumbac-brodat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bluza-crep-matase/index.md": {
	id: "bluza-crep-matase/index.md";
  slug: "bluza-crep-matase";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bluza-crep-viscoza/index.md": {
	id: "bluza-crep-viscoza/index.md";
  slug: "bluza-crep-viscoza";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bluza-dantela-alba/index.md": {
	id: "bluza-dantela-alba/index.md";
  slug: "bluza-dantela-alba";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bluza-dantela-eleganta/index.md": {
	id: "bluza-dantela-eleganta/index.md";
  slug: "bluza-dantela-eleganta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bluza-dantela-neagra/index.md": {
	id: "bluza-dantela-neagra/index.md";
  slug: "bluza-dantela-neagra";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bluza-guler-inalt/index.md": {
	id: "bluza-guler-inalt/index.md";
  slug: "bluza-guler-inalt";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bluza-imprimata-flori/index.md": {
	id: "bluza-imprimata-flori/index.md";
  slug: "bluza-imprimata-flori";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bluza-inodora-simpla/index.md": {
	id: "bluza-inodora-simpla/index.md";
  slug: "bluza-inodora-simpla";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bluza-inodora-subtire/index.md": {
	id: "bluza-inodora-subtire/index.md";
  slug: "bluza-inodora-subtire";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bluza-maneci-bufante/index.md": {
	id: "bluza-maneci-bufante/index.md";
  slug: "bluza-maneci-bufante";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bluza-matase-brodata/index.md": {
	id: "bluza-matase-brodata/index.md";
  slug: "bluza-matase-brodata";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bluza-matase-naturala/index.md": {
	id: "bluza-matase-naturala/index.md";
  slug: "bluza-matase-naturala";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bluza-poplin-alba/index.md": {
	id: "bluza-poplin-alba/index.md";
  slug: "bluza-poplin-alba";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bluza-poplin-dungi/index.md": {
	id: "bluza-poplin-dungi/index.md";
  slug: "bluza-poplin-dungi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bluza-satin-eleganta/index.md": {
	id: "bluza-satin-eleganta/index.md";
  slug: "bluza-satin-eleganta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bluza-satinata-eleganta/index.md": {
	id: "bluza-satinata-eleganta/index.md";
  slug: "bluza-satinata-eleganta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bluza-transparenta-matase/index.md": {
	id: "bluza-transparenta-matase/index.md";
  slug: "bluza-transparenta-matase";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bluza-transparenta-neagra/index.md": {
	id: "bluza-transparenta-neagra/index.md";
  slug: "bluza-transparenta-neagra";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bluza-transparenta-petrecere/index.md": {
	id: "bluza-transparenta-petrecere/index.md";
  slug: "bluza-transparenta-petrecere";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bluza-viscoza-flori/index.md": {
	id: "bluza-viscoza-flori/index.md";
  slug: "bluza-viscoza-flori";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bluza-viscoza-imprimata/index.md": {
	id: "bluza-viscoza-imprimata/index.md";
  slug: "bluza-viscoza-imprimata";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bluza-voal-elastica/index.md": {
	id: "bluza-voal-elastica/index.md";
  slug: "bluza-voal-elastica";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bluza-voal-imprimata/index.md": {
	id: "bluza-voal-imprimata/index.md";
  slug: "bluza-voal-imprimata";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bluza-voal-matase/index.md": {
	id: "bluza-voal-matase/index.md";
  slug: "bluza-voal-matase";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"bluza-voal-transparent/index.md": {
	id: "bluza-voal-transparent/index.md";
  slug: "bluza-voal-transparent";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"camasa-casual-carouri/index.md": {
	id: "camasa-casual-carouri/index.md";
  slug: "camasa-casual-carouri";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"camasa-denim-clasica/index.md": {
	id: "camasa-denim-clasica/index.md";
  slug: "camasa-denim-clasica";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"camasa-denim-prespalata/index.md": {
	id: "camasa-denim-prespalata/index.md";
  slug: "camasa-denim-prespalata";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"camasa-flanel-carouri/index.md": {
	id: "camasa-flanel-carouri/index.md";
  slug: "camasa-flanel-carouri";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"camasa-flanel-groasa/index.md": {
	id: "camasa-flanel-groasa/index.md";
  slug: "camasa-flanel-groasa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"camasa-guler-ascutit/index.md": {
	id: "camasa-guler-ascutit/index.md";
  slug: "camasa-guler-ascutit";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"camasa-guler-tunica/index.md": {
	id: "camasa-guler-tunica/index.md";
  slug: "camasa-guler-tunica";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"camasa-in-alba/index.md": {
	id: "camasa-in-alba/index.md";
  slug: "camasa-in-alba";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"camasa-in-albastra/index.md": {
	id: "camasa-in-albastra/index.md";
  slug: "camasa-in-albastra";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"camasa-in-dungi/index.md": {
	id: "camasa-in-dungi/index.md";
  slug: "camasa-in-dungi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"camasa-matase-eleganta/index.md": {
	id: "camasa-matase-eleganta/index.md";
  slug: "camasa-matase-eleganta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"camasa-matase-naturala/index.md": {
	id: "camasa-matase-naturala/index.md";
  slug: "camasa-matase-naturala";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"camasa-noapte-bumbac/index.md": {
	id: "camasa-noapte-bumbac/index.md";
  slug: "camasa-noapte-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"camasa-noapte-matase/index.md": {
	id: "camasa-noapte-matase/index.md";
  slug: "camasa-noapte-matase";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"camasa-oversize-dama/index.md": {
	id: "camasa-oversize-dama/index.md";
  slug: "camasa-oversize-dama";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"camasa-oxford-bumbac/index.md": {
	id: "camasa-oxford-bumbac/index.md";
  slug: "camasa-oxford-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"camasa-oxford-dungi/index.md": {
	id: "camasa-oxford-dungi/index.md";
  slug: "camasa-oxford-dungi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"camasa-poplin-alba/index.md": {
	id: "camasa-poplin-alba/index.md";
  slug: "camasa-poplin-alba";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"camasa-poplin-dungi/index.md": {
	id: "camasa-poplin-dungi/index.md";
  slug: "camasa-poplin-dungi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"camasa-satin-lux/index.md": {
	id: "camasa-satin-lux/index.md";
  slug: "camasa-satin-lux";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"camasa-slim-albastra/index.md": {
	id: "camasa-slim-albastra/index.md";
  slug: "camasa-slim-albastra";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"camasa-slim-fit/index.md": {
	id: "camasa-slim-fit/index.md";
  slug: "camasa-slim-fit";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cardigan-asimetric-lung/index.md": {
	id: "cardigan-asimetric-lung/index.md";
  slug: "cardigan-asimetric-lung";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cardigan-asimetric-nasturi/index.md": {
	id: "cardigan-asimetric-nasturi/index.md";
  slug: "cardigan-asimetric-nasturi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cardigan-fara-inchidere/index.md": {
	id: "cardigan-fara-inchidere/index.md";
  slug: "cardigan-fara-inchidere";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cardigan-lana-bucle/index.md": {
	id: "cardigan-lana-bucle/index.md";
  slug: "cardigan-lana-bucle";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cardigan-lana-fin/index.md": {
	id: "cardigan-lana-fin/index.md";
  slug: "cardigan-lana-fin";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cardigan-lana-gros/index.md": {
	id: "cardigan-lana-gros/index.md";
  slug: "cardigan-lana-gros";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cardigan-lejer-toamna/index.md": {
	id: "cardigan-lejer-toamna/index.md";
  slug: "cardigan-lejer-toamna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cardigan-lejer-vara/index.md": {
	id: "cardigan-lejer-vara/index.md";
  slug: "cardigan-lejer-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cardigan-lung-buzunare/index.md": {
	id: "cardigan-lung-buzunare/index.md";
  slug: "cardigan-lung-buzunare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cardigan-lung-fir/index.md": {
	id: "cardigan-lung-fir/index.md";
  slug: "cardigan-lung-fir";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cardigan-lung-nasturi/index.md": {
	id: "cardigan-lung-nasturi/index.md";
  slug: "cardigan-lung-nasturi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cardigan-lung-tricotat/index.md": {
	id: "cardigan-lung-tricotat/index.md";
  slug: "cardigan-lung-tricotat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cardigan-moale-mohair/index.md": {
	id: "cardigan-moale-mohair/index.md";
  slug: "cardigan-moale-mohair";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cardigan-mohair-lung/index.md": {
	id: "cardigan-mohair-lung/index.md";
  slug: "cardigan-mohair-lung";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cardigan-mohair-pufos/index.md": {
	id: "cardigan-mohair-pufos/index.md";
  slug: "cardigan-mohair-pufos";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cardigan-nasturi-lemn/index.md": {
	id: "cardigan-nasturi-lemn/index.md";
  slug: "cardigan-nasturi-lemn";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cardigan-nasturi-mari/index.md": {
	id: "cardigan-nasturi-mari/index.md";
  slug: "cardigan-nasturi-mari";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cardigan-nasturi-perle/index.md": {
	id: "cardigan-nasturi-perle/index.md";
  slug: "cardigan-nasturi-perle";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cardigan-oversize-nasturi/index.md": {
	id: "cardigan-oversize-nasturi/index.md";
  slug: "cardigan-oversize-nasturi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cardigan-perle-albastre/index.md": {
	id: "cardigan-perle-albastre/index.md";
  slug: "cardigan-perle-albastre";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cardigan-perle-nasturi/index.md": {
	id: "cardigan-perle-nasturi/index.md";
  slug: "cardigan-perle-nasturi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cardigan-pufos-iarna/index.md": {
	id: "cardigan-pufos-iarna/index.md";
  slug: "cardigan-pufos-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cardigan-subtire-vara/index.md": {
	id: "cardigan-subtire-vara/index.md";
  slug: "cardigan-subtire-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cardigan-tricotat-bej/index.md": {
	id: "cardigan-tricotat-bej/index.md";
  slug: "cardigan-tricotat-bej";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"cardigan-tricotat-lung/index.md": {
	id: "cardigan-tricotat-lung/index.md";
  slug: "cardigan-tricotat-lung";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"colanti-alergare-buzunar/index.md": {
	id: "colanti-alergare-buzunar/index.md";
  slug: "colanti-alergare-buzunar";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"colanti-anticelulitici-fitness/index.md": {
	id: "colanti-anticelulitici-fitness/index.md";
  slug: "colanti-anticelulitici-fitness";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"colanti-anticelulitici-sport/index.md": {
	id: "colanti-anticelulitici-sport/index.md";
  slug: "colanti-anticelulitici-sport";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"colanti-bumbac-gri/index.md": {
	id: "colanti-bumbac-gri/index.md";
  slug: "colanti-bumbac-gri";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"colanti-bumbac-negri/index.md": {
	id: "colanti-bumbac-negri/index.md";
  slug: "colanti-bumbac-negri";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"colanti-bumbac-simpli/index.md": {
	id: "colanti-bumbac-simpli/index.md";
  slug: "colanti-bumbac-simpli";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"colanti-captusiti-flausati/index.md": {
	id: "colanti-captusiti-flausati/index.md";
  slug: "colanti-captusiti-flausati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"colanti-captusiti-fleece/index.md": {
	id: "colanti-captusiti-fleece/index.md";
  slug: "colanti-captusiti-fleece";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"colanti-compresie-fitness/index.md": {
	id: "colanti-compresie-fitness/index.md";
  slug: "colanti-compresie-fitness";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"colanti-compresie-sport/index.md": {
	id: "colanti-compresie-sport/index.md";
  slug: "colanti-compresie-sport";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"colanti-elastan-visiniu/index.md": {
	id: "colanti-elastan-visiniu/index.md";
  slug: "colanti-elastan-visiniu";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"colanti-flausati-interior/index.md": {
	id: "colanti-flausati-interior/index.md";
  slug: "colanti-flausati-interior";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"colanti-gravide-bumbac/index.md": {
	id: "colanti-gravide-bumbac/index.md";
  slug: "colanti-gravide-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"colanti-gravide-elastici/index.md": {
	id: "colanti-gravide-elastici/index.md";
  slug: "colanti-gravide-elastici";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"colanti-iarna-caldurosi/index.md": {
	id: "colanti-iarna-caldurosi/index.md";
  slug: "colanti-iarna-caldurosi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"colanti-iarna-flausati/index.md": {
	id: "colanti-iarna-flausati/index.md";
  slug: "colanti-iarna-flausati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"colanti-luciosi-fitness/index.md": {
	id: "colanti-luciosi-fitness/index.md";
  slug: "colanti-luciosi-fitness";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"colanti-modelatori-fitness/index.md": {
	id: "colanti-modelatori-fitness/index.md";
  slug: "colanti-modelatori-fitness";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"colanti-piele-ecologica/index.md": {
	id: "colanti-piele-ecologica/index.md";
  slug: "colanti-piele-ecologica";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"colanti-push-up/index.md": {
	id: "colanti-push-up/index.md";
  slug: "colanti-push-up";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"colanti-scurti-ciclism/index.md": {
	id: "colanti-scurti-ciclism/index.md";
  slug: "colanti-scurti-ciclism";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"colanti-sport-buzunar/index.md": {
	id: "colanti-sport-buzunar/index.md";
  slug: "colanti-sport-buzunar";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"colanti-sport-buzunare/index.md": {
	id: "colanti-sport-buzunare/index.md";
  slug: "colanti-sport-buzunare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"colanti-sport-dungi/index.md": {
	id: "colanti-sport-dungi/index.md";
  slug: "colanti-sport-dungi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"colanti-termo-iarna/index.md": {
	id: "colanti-termo-iarna/index.md";
  slug: "colanti-termo-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"colanti-yoga-bumbac/index.md": {
	id: "colanti-yoga-bumbac/index.md";
  slug: "colanti-yoga-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"colanti-yoga-elastici/index.md": {
	id: "colanti-yoga-elastici/index.md";
  slug: "colanti-yoga-elastici";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"costum-business-clasic/index.md": {
	id: "costum-business-clasic/index.md";
  slug: "costum-business-clasic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"costum-business-elegant/index.md": {
	id: "costum-business-elegant/index.md";
  slug: "costum-business-elegant";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"costum-casual-bumbac/index.md": {
	id: "costum-casual-bumbac/index.md";
  slug: "costum-casual-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"costum-casual-in/index.md": {
	id: "costum-casual-in/index.md";
  slug: "costum-casual-in";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"costum-casual-lana/index.md": {
	id: "costum-casual-lana/index.md";
  slug: "costum-casual-lana";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"costum-casual-stofa/index.md": {
	id: "costum-casual-stofa/index.md";
  slug: "costum-casual-stofa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"costum-casual-vara/index.md": {
	id: "costum-casual-vara/index.md";
  slug: "costum-casual-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"costum-catifea-barbati/index.md": {
	id: "costum-catifea-barbati/index.md";
  slug: "costum-catifea-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"costum-catifea-eleganta/index.md": {
	id: "costum-catifea-eleganta/index.md";
  slug: "costum-catifea-eleganta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"costum-ceremonie-barbati/index.md": {
	id: "costum-ceremonie-barbati/index.md";
  slug: "costum-ceremonie-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"costum-ceremonie-eleganta/index.md": {
	id: "costum-ceremonie-eleganta/index.md";
  slug: "costum-ceremonie-eleganta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"costum-croiala-clasica/index.md": {
	id: "costum-croiala-clasica/index.md";
  slug: "costum-croiala-clasica";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"costum-elegant-dama/index.md": {
	id: "costum-elegant-dama/index.md";
  slug: "costum-elegant-dama";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"costum-haine-business/index.md": {
	id: "costum-haine-business/index.md";
  slug: "costum-haine-business";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"costum-lana-barbati/index.md": {
	id: "costum-lana-barbati/index.md";
  slug: "costum-lana-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"costum-mire-catifea/index.md": {
	id: "costum-mire-catifea/index.md";
  slug: "costum-mire-catifea";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"costum-mire-smoking/index.md": {
	id: "costum-mire-smoking/index.md";
  slug: "costum-mire-smoking";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"costum-nunta-barbati/index.md": {
	id: "costum-nunta-barbati/index.md";
  slug: "costum-nunta-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"costum-office-clasic/index.md": {
	id: "costum-office-clasic/index.md";
  slug: "costum-office-clasic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"costum-office-dama/index.md": {
	id: "costum-office-dama/index.md";
  slug: "costum-office-dama";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"costum-office-elegant/index.md": {
	id: "costum-office-elegant/index.md";
  slug: "costum-office-elegant";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"costum-slim-fit/index.md": {
	id: "costum-slim-fit/index.md";
  slug: "costum-slim-fit";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"costum-stofa-groasa/index.md": {
	id: "costum-stofa-groasa/index.md";
  slug: "costum-stofa-groasa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"costum-stofa-subtire/index.md": {
	id: "costum-stofa-subtire/index.md";
  slug: "costum-stofa-subtire";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"costum-trei-piese/index.md": {
	id: "costum-trei-piese/index.md";
  slug: "costum-trei-piese";
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
"fusta-blugi-lunga/index.md": {
	id: "fusta-blugi-lunga/index.md";
  slug: "fusta-blugi-lunga";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"fusta-blugi-midi/index.md": {
	id: "fusta-blugi-midi/index.md";
  slug: "fusta-blugi-midi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"fusta-clos-elastica/index.md": {
	id: "fusta-clos-elastica/index.md";
  slug: "fusta-clos-elastica";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"fusta-clos-matase/index.md": {
	id: "fusta-clos-matase/index.md";
  slug: "fusta-clos-matase";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"fusta-clos-midi/index.md": {
	id: "fusta-clos-midi/index.md";
  slug: "fusta-clos-midi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"fusta-clos-rosie/index.md": {
	id: "fusta-clos-rosie/index.md";
  slug: "fusta-clos-rosie";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"fusta-clos-scurta/index.md": {
	id: "fusta-clos-scurta/index.md";
  slug: "fusta-clos-scurta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"fusta-clos-volane/index.md": {
	id: "fusta-clos-volane/index.md";
  slug: "fusta-clos-volane";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"fusta-creion-elastica/index.md": {
	id: "fusta-creion-elastica/index.md";
  slug: "fusta-creion-elastica";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"fusta-creion-midi/index.md": {
	id: "fusta-creion-midi/index.md";
  slug: "fusta-creion-midi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"fusta-creion-office/index.md": {
	id: "fusta-creion-office/index.md";
  slug: "fusta-creion-office";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"fusta-creion-piele/index.md": {
	id: "fusta-creion-piele/index.md";
  slug: "fusta-creion-piele";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"fusta-creion-stofa/index.md": {
	id: "fusta-creion-stofa/index.md";
  slug: "fusta-creion-stofa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"fusta-denim-scurta/index.md": {
	id: "fusta-denim-scurta/index.md";
  slug: "fusta-denim-scurta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"fusta-lina-midi/index.md": {
	id: "fusta-lina-midi/index.md";
  slug: "fusta-lina-midi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"fusta-maxi-volane/index.md": {
	id: "fusta-maxi-volane/index.md";
  slug: "fusta-maxi-volane";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"fusta-mini-clos/index.md": {
	id: "fusta-mini-clos/index.md";
  slug: "fusta-mini-clos";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"fusta-mini-denim/index.md": {
	id: "fusta-mini-denim/index.md";
  slug: "fusta-mini-denim";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"fusta-mini-piele/index.md": {
	id: "fusta-mini-piele/index.md";
  slug: "fusta-mini-piele";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"fusta-petrecuta-asimetrica/index.md": {
	id: "fusta-petrecuta-asimetrica/index.md";
  slug: "fusta-petrecuta-asimetrica";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"fusta-piele-intoarsa/index.md": {
	id: "fusta-piele-intoarsa/index.md";
  slug: "fusta-piele-intoarsa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"fusta-piele-maro/index.md": {
	id: "fusta-piele-maro/index.md";
  slug: "fusta-piele-maro";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"fusta-piele-neagra/index.md": {
	id: "fusta-piele-neagra/index.md";
  slug: "fusta-piele-neagra";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"fusta-plisata-midi/index.md": {
	id: "fusta-plisata-midi/index.md";
  slug: "fusta-plisata-midi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"fusta-satin-midi/index.md": {
	id: "fusta-satin-midi/index.md";
  slug: "fusta-satin-midi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"fusta-satin-neagra/index.md": {
	id: "fusta-satin-neagra/index.md";
  slug: "fusta-satin-neagra";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"fusta-talie-inalta/index.md": {
	id: "fusta-talie-inalta/index.md";
  slug: "fusta-talie-inalta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-blugi-oversize/index.md": {
	id: "geaca-blugi-oversize/index.md";
  slug: "geaca-blugi-oversize";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-bomber-fas/index.md": {
	id: "geaca-bomber-fas/index.md";
  slug: "geaca-bomber-fas";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-bomber-piele/index.md": {
	id: "geaca-bomber-piele/index.md";
  slug: "geaca-bomber-piele";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-bomber-satin/index.md": {
	id: "geaca-bomber-satin/index.md";
  slug: "geaca-bomber-satin";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-fas-barbati/index.md": {
	id: "geaca-fas-barbati/index.md";
  slug: "geaca-fas-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-fas-gluga/index.md": {
	id: "geaca-fas-gluga/index.md";
  slug: "geaca-fas-gluga";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-fas-groasa/index.md": {
	id: "geaca-fas-groasa/index.md";
  slug: "geaca-fas-groasa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-fas-lunga/index.md": {
	id: "geaca-fas-lunga/index.md";
  slug: "geaca-fas-lunga";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-fas-scurta/index.md": {
	id: "geaca-fas-scurta/index.md";
  slug: "geaca-fas-scurta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-iarna-gluga/index.md": {
	id: "geaca-iarna-gluga/index.md";
  slug: "geaca-iarna-gluga";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-iarna-puf/index.md": {
	id: "geaca-iarna-puf/index.md";
  slug: "geaca-iarna-puf";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-parka-iarna/index.md": {
	id: "geaca-parka-iarna/index.md";
  slug: "geaca-parka-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-piele-maro/index.md": {
	id: "geaca-piele-maro/index.md";
  slug: "geaca-piele-maro";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-praf-decolotata/index.md": {
	id: "geaca-praf-decolotata/index.md";
  slug: "geaca-praf-decolotata";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-puf-argintie/index.md": {
	id: "geaca-puf-argintie/index.md";
  slug: "geaca-puf-argintie";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-puf-aurie/index.md": {
	id: "geaca-puf-aurie/index.md";
  slug: "geaca-puf-aurie";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-puf-barbati/index.md": {
	id: "geaca-puf-barbati/index.md";
  slug: "geaca-puf-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-puf-iarna/index.md": {
	id: "geaca-puf-iarna/index.md";
  slug: "geaca-puf-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-puf-lunga/index.md": {
	id: "geaca-puf-lunga/index.md";
  slug: "geaca-puf-lunga";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-puf-matlasata/index.md": {
	id: "geaca-puf-matlasata/index.md";
  slug: "geaca-puf-matlasata";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-puf-oversize/index.md": {
	id: "geaca-puf-oversize/index.md";
  slug: "geaca-puf-oversize";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-puf-oversized/index.md": {
	id: "geaca-puf-oversized/index.md";
  slug: "geaca-puf-oversized";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-puf-scurta/index.md": {
	id: "geaca-puf-scurta/index.md";
  slug: "geaca-puf-scurta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-puf-subtire/index.md": {
	id: "geaca-puf-subtire/index.md";
  slug: "geaca-puf-subtire";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-puf-usoara/index.md": {
	id: "geaca-puf-usoara/index.md";
  slug: "geaca-puf-usoara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-reflectorizanta-noapte/index.md": {
	id: "geaca-reflectorizanta-noapte/index.md";
  slug: "geaca-reflectorizanta-noapte";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-ski-barbati/index.md": {
	id: "geaca-ski-barbati/index.md";
  slug: "geaca-ski-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"geaca-ski-impermeabila/index.md": {
	id: "geaca-ski-impermeabila/index.md";
  slug: "geaca-ski-impermeabila";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-albastru-deschis/index.md": {
	id: "hanorac-albastru-deschis/index.md";
  slug: "hanorac-albastru-deschis";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-albastru-marin/index.md": {
	id: "hanorac-albastru-marin/index.md";
  slug: "hanorac-albastru-marin";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-asimetric-fermoar/index.md": {
	id: "hanorac-asimetric-fermoar/index.md";
  slug: "hanorac-asimetric-fermoar";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-asimetric-zip/index.md": {
	id: "hanorac-asimetric-zip/index.md";
  slug: "hanorac-asimetric-zip";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-brodat-logo/index.md": {
	id: "hanorac-brodat-logo/index.md";
  slug: "hanorac-brodat-logo";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-broderie-fina/index.md": {
	id: "hanorac-broderie-fina/index.md";
  slug: "hanorac-broderie-fina";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-broderie-spate/index.md": {
	id: "hanorac-broderie-spate/index.md";
  slug: "hanorac-broderie-spate";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-buzunar-cangur/index.md": {
	id: "hanorac-buzunar-cangur/index.md";
  slug: "hanorac-buzunar-cangur";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-captuseala-fleece/index.md": {
	id: "hanorac-captuseala-fleece/index.md";
  slug: "hanorac-captuseala-fleece";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-captusit-blana/index.md": {
	id: "hanorac-captusit-blana/index.md";
  slug: "hanorac-captusit-blana";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-crop-fete/index.md": {
	id: "hanorac-crop-fete/index.md";
  slug: "hanorac-crop-fete";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-fara-gluga/index.md": {
	id: "hanorac-fara-gluga/index.md";
  slug: "hanorac-fara-gluga";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-fermoar-asimetric/index.md": {
	id: "hanorac-fermoar-asimetric/index.md";
  slug: "hanorac-fermoar-asimetric";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-fete-roz/index.md": {
	id: "hanorac-fete-roz/index.md";
  slug: "hanorac-fete-roz";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-galben-mustar/index.md": {
	id: "hanorac-galben-mustar/index.md";
  slug: "hanorac-galben-mustar";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-gri-melanj/index.md": {
	id: "hanorac-gri-melanj/index.md";
  slug: "hanorac-gri-melanj";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-gri-sport/index.md": {
	id: "hanorac-gri-sport/index.md";
  slug: "hanorac-gri-sport";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-imprimeu-abstract/index.md": {
	id: "hanorac-imprimeu-abstract/index.md";
  slug: "hanorac-imprimeu-abstract";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-imprimeu-spate/index.md": {
	id: "hanorac-imprimeu-spate/index.md";
  slug: "hanorac-imprimeu-spate";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-imprimeu-text/index.md": {
	id: "hanorac-imprimeu-text/index.md";
  slug: "hanorac-imprimeu-text";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-neopren-modern/index.md": {
	id: "hanorac-neopren-modern/index.md";
  slug: "hanorac-neopren-modern";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-neopren-sport/index.md": {
	id: "hanorac-neopren-sport/index.md";
  slug: "hanorac-neopren-sport";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-oversized-negru/index.md": {
	id: "hanorac-oversized-negru/index.md";
  slug: "hanorac-oversized-negru";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-pufos-gluga/index.md": {
	id: "hanorac-pufos-gluga/index.md";
  slug: "hanorac-pufos-gluga";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-pufos-nasturi/index.md": {
	id: "hanorac-pufos-nasturi/index.md";
  slug: "hanorac-pufos-nasturi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-rosu-aprins/index.md": {
	id: "hanorac-rosu-aprins/index.md";
  slug: "hanorac-rosu-aprins";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-verde-olive/index.md": {
	id: "hanorac-verde-olive/index.md";
  slug: "hanorac-verde-olive";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-zip-buzunar/index.md": {
	id: "hanorac-zip-buzunar/index.md";
  slug: "hanorac-zip-buzunar";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"hanorac-zip-buzunare/index.md": {
	id: "hanorac-zip-buzunare/index.md";
  slug: "hanorac-zip-buzunare";
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
"jacheta-aviator-piele/index.md": {
	id: "jacheta-aviator-piele/index.md";
  slug: "jacheta-aviator-piele";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jacheta-biker-dama/index.md": {
	id: "jacheta-biker-dama/index.md";
  slug: "jacheta-biker-dama";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jacheta-biker-piele/index.md": {
	id: "jacheta-biker-piele/index.md";
  slug: "jacheta-biker-piele";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jacheta-blugi-barbati/index.md": {
	id: "jacheta-blugi-barbati/index.md";
  slug: "jacheta-blugi-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jacheta-blugi-dama/index.md": {
	id: "jacheta-blugi-dama/index.md";
  slug: "jacheta-blugi-dama";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jacheta-denim-clasica/index.md": {
	id: "jacheta-denim-clasica/index.md";
  slug: "jacheta-denim-clasica";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jacheta-denim-decolorata/index.md": {
	id: "jacheta-denim-decolorata/index.md";
  slug: "jacheta-denim-decolorata";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jacheta-denim-neagra/index.md": {
	id: "jacheta-denim-neagra/index.md";
  slug: "jacheta-denim-neagra";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jacheta-denim-prespalata/index.md": {
	id: "jacheta-denim-prespalata/index.md";
  slug: "jacheta-denim-prespalata";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jacheta-fas-subtire/index.md": {
	id: "jacheta-fas-subtire/index.md";
  slug: "jacheta-fas-subtire";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jacheta-fleece-calduroasa/index.md": {
	id: "jacheta-fleece-calduroasa/index.md";
  slug: "jacheta-fleece-calduroasa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jacheta-impermeabila-ploaie/index.md": {
	id: "jacheta-impermeabila-ploaie/index.md";
  slug: "jacheta-impermeabila-ploaie";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jacheta-jeans-neagra/index.md": {
	id: "jacheta-jeans-neagra/index.md";
  slug: "jacheta-jeans-neagra";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jacheta-lana-fiarta/index.md": {
	id: "jacheta-lana-fiarta/index.md";
  slug: "jacheta-lana-fiarta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jacheta-lana-groasa/index.md": {
	id: "jacheta-lana-groasa/index.md";
  slug: "jacheta-lana-groasa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jacheta-matlasata-iarna/index.md": {
	id: "jacheta-matlasata-iarna/index.md";
  slug: "jacheta-matlasata-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jacheta-matlasata-subtire/index.md": {
	id: "jacheta-matlasata-subtire/index.md";
  slug: "jacheta-matlasata-subtire";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jacheta-matlasata-toamna/index.md": {
	id: "jacheta-matlasata-toamna/index.md";
  slug: "jacheta-matlasata-toamna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jacheta-militara-buzunare/index.md": {
	id: "jacheta-militara-buzunare/index.md";
  slug: "jacheta-militara-buzunare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jacheta-militara-kaki/index.md": {
	id: "jacheta-militara-kaki/index.md";
  slug: "jacheta-militara-kaki";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jacheta-militara-verde/index.md": {
	id: "jacheta-militara-verde/index.md";
  slug: "jacheta-militara-verde";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jacheta-piele-eco/index.md": {
	id: "jacheta-piele-eco/index.md";
  slug: "jacheta-piele-eco";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jacheta-piele-intoarsa/index.md": {
	id: "jacheta-piele-intoarsa/index.md";
  slug: "jacheta-piele-intoarsa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jacheta-piele-maro/index.md": {
	id: "jacheta-piele-maro/index.md";
  slug: "jacheta-piele-maro";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jacheta-piele-neagra/index.md": {
	id: "jacheta-piele-neagra/index.md";
  slug: "jacheta-piele-neagra";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jacheta-ploaie-subtire/index.md": {
	id: "jacheta-ploaie-subtire/index.md";
  slug: "jacheta-ploaie-subtire";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jacheta-puf-scurta/index.md": {
	id: "jacheta-puf-scurta/index.md";
  slug: "jacheta-puf-scurta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"jacheta-vant-subtire/index.md": {
	id: "jacheta-vant-subtire/index.md";
  slug: "jacheta-vant-subtire";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"maiou-alergare-tehnic/index.md": {
	id: "maiou-alergare-tehnic/index.md";
  slug: "maiou-alergare-tehnic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"maiou-alergare-uscat/index.md": {
	id: "maiou-alergare-uscat/index.md";
  slug: "maiou-alergare-uscat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"maiou-alergare-usor/index.md": {
	id: "maiou-alergare-usor/index.md";
  slug: "maiou-alergare-usor";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"maiou-boxeri-spate/index.md": {
	id: "maiou-boxeri-spate/index.md";
  slug: "maiou-boxeri-spate";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"maiou-bumbac-barbatesc/index.md": {
	id: "maiou-bumbac-barbatesc/index.md";
  slug: "maiou-bumbac-barbatesc";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"maiou-bumbac-confortabil/index.md": {
	id: "maiou-bumbac-confortabil/index.md";
  slug: "maiou-bumbac-confortabil";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"maiou-bumbac-elastic/index.md": {
	id: "maiou-bumbac-elastic/index.md";
  slug: "maiou-bumbac-elastic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"maiou-bumbac-moale/index.md": {
	id: "maiou-bumbac-moale/index.md";
  slug: "maiou-bumbac-moale";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"maiou-bumbac-rip/index.md": {
	id: "maiou-bumbac-rip/index.md";
  slug: "maiou-bumbac-rip";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"maiou-bumbac-simplu/index.md": {
	id: "maiou-bumbac-simplu/index.md";
  slug: "maiou-bumbac-simplu";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"maiou-bumbac-striat/index.md": {
	id: "maiou-bumbac-striat/index.md";
  slug: "maiou-bumbac-striat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"maiou-bumbac-subtire/index.md": {
	id: "maiou-bumbac-subtire/index.md";
  slug: "maiou-bumbac-subtire";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"maiou-culturism-bumbac/index.md": {
	id: "maiou-culturism-bumbac/index.md";
  slug: "maiou-culturism-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"maiou-fin-bumbac/index.md": {
	id: "maiou-fin-bumbac/index.md";
  slug: "maiou-fin-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"maiou-fin-matase/index.md": {
	id: "maiou-fin-matase/index.md";
  slug: "maiou-fin-matase";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"maiou-fin-satin/index.md": {
	id: "maiou-fin-satin/index.md";
  slug: "maiou-fin-satin";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"maiou-fitness-barbati/index.md": {
	id: "maiou-fitness-barbati/index.md";
  slug: "maiou-fitness-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"maiou-fitness-mulat/index.md": {
	id: "maiou-fitness-mulat/index.md";
  slug: "maiou-fitness-mulat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"maiou-mulat-negru/index.md": {
	id: "maiou-mulat-negru/index.md";
  slug: "maiou-mulat-negru";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"maiou-plasa-negru/index.md": {
	id: "maiou-plasa-negru/index.md";
  slug: "maiou-plasa-negru";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"maiou-plasa-sport/index.md": {
	id: "maiou-plasa-sport/index.md";
  slug: "maiou-plasa-sport";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"maiou-spate-decupat/index.md": {
	id: "maiou-spate-decupat/index.md";
  slug: "maiou-spate-decupat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"maiou-sport-galben/index.md": {
	id: "maiou-sport-galben/index.md";
  slug: "maiou-sport-galben";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"maiou-sport-respirabil/index.md": {
	id: "maiou-sport-respirabil/index.md";
  slug: "maiou-sport-respirabil";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"palton-blana-artificiala/index.md": {
	id: "palton-blana-artificiala/index.md";
  slug: "palton-blana-artificiala";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"palton-cambrat-elegant/index.md": {
	id: "palton-cambrat-elegant/index.md";
  slug: "palton-cambrat-elegant";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"palton-clasic-negru/index.md": {
	id: "palton-clasic-negru/index.md";
  slug: "palton-clasic-negru";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"palton-drept-elegant/index.md": {
	id: "palton-drept-elegant/index.md";
  slug: "palton-drept-elegant";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"palton-drept-lana/index.md": {
	id: "palton-drept-lana/index.md";
  slug: "palton-drept-lana";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"palton-drept-stofa/index.md": {
	id: "palton-drept-stofa/index.md";
  slug: "palton-drept-stofa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"palton-gluga-blana/index.md": {
	id: "palton-gluga-blana/index.md";
  slug: "palton-gluga-blana";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"palton-gluga-blanita/index.md": {
	id: "palton-gluga-blanita/index.md";
  slug: "palton-gluga-blanita";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"palton-guler-blana/index.md": {
	id: "palton-guler-blana/index.md";
  slug: "palton-guler-blana";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"palton-lana-elegant/index.md": {
	id: "palton-lana-elegant/index.md";
  slug: "palton-lana-elegant";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"palton-lana-gri/index.md": {
	id: "palton-lana-gri/index.md";
  slug: "palton-lana-gri";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"palton-lana-gros/index.md": {
	id: "palton-lana-gros/index.md";
  slug: "palton-lana-gros";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"palton-lana-iarna/index.md": {
	id: "palton-lana-iarna/index.md";
  slug: "palton-lana-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"palton-lana-lung/index.md": {
	id: "palton-lana-lung/index.md";
  slug: "palton-lana-lung";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"palton-lana-toamna/index.md": {
	id: "palton-lana-toamna/index.md";
  slug: "palton-lana-toamna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"palton-lung-lana/index.md": {
	id: "palton-lung-lana/index.md";
  slug: "palton-lung-lana";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"palton-nasturi-ascunsi/index.md": {
	id: "palton-nasturi-ascunsi/index.md";
  slug: "palton-nasturi-ascunsi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"palton-nasturi-dubli/index.md": {
	id: "palton-nasturi-dubli/index.md";
  slug: "palton-nasturi-dubli";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"palton-nasturi-metalici/index.md": {
	id: "palton-nasturi-metalici/index.md";
  slug: "palton-nasturi-metalici";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"palton-stofa-gri/index.md": {
	id: "palton-stofa-gri/index.md";
  slug: "palton-stofa-gri";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"palton-stofa-neagra/index.md": {
	id: "palton-stofa-neagra/index.md";
  slug: "palton-stofa-neagra";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"palton-stofa-visinie/index.md": {
	id: "palton-stofa-visinie/index.md";
  slug: "palton-stofa-visinie";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-bumbac-lejeri/index.md": {
	id: "pantaloni-bumbac-lejeri/index.md";
  slug: "pantaloni-bumbac-lejeri";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-cargo-khaki/index.md": {
	id: "pantaloni-cargo-khaki/index.md";
  slug: "pantaloni-cargo-khaki";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-chino-proaspat/index.md": {
	id: "pantaloni-chino-proaspat/index.md";
  slug: "pantaloni-chino-proaspat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-conici-eleganti/index.md": {
	id: "pantaloni-conici-eleganti/index.md";
  slug: "pantaloni-conici-eleganti";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-culottes-bumbac/index.md": {
	id: "pantaloni-culottes-bumbac/index.md";
  slug: "pantaloni-culottes-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-culottes-in/index.md": {
	id: "pantaloni-culottes-in/index.md";
  slug: "pantaloni-culottes-in";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-drepti-stofa/index.md": {
	id: "pantaloni-drepti-stofa/index.md";
  slug: "pantaloni-drepti-stofa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-evazati-catifea/index.md": {
	id: "pantaloni-evazati-catifea/index.md";
  slug: "pantaloni-evazati-catifea";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-evazati-negri/index.md": {
	id: "pantaloni-evazati-negri/index.md";
  slug: "pantaloni-evazati-negri";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-evazati-stofa/index.md": {
	id: "pantaloni-evazati-stofa/index.md";
  slug: "pantaloni-evazati-stofa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-jogging-bumbac/index.md": {
	id: "pantaloni-jogging-bumbac/index.md";
  slug: "pantaloni-jogging-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-jogging-elastici/index.md": {
	id: "pantaloni-jogging-elastici/index.md";
  slug: "pantaloni-jogging-elastici";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-jogging-fleece/index.md": {
	id: "pantaloni-jogging-fleece/index.md";
  slug: "pantaloni-jogging-fleece";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-largi-catifea/index.md": {
	id: "pantaloni-largi-catifea/index.md";
  slug: "pantaloni-largi-catifea";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-largi-in/index.md": {
	id: "pantaloni-largi-in/index.md";
  slug: "pantaloni-largi-in";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-largi-satin/index.md": {
	id: "pantaloni-largi-satin/index.md";
  slug: "pantaloni-largi-satin";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-pijama-bumbac/index.md": {
	id: "pantaloni-pijama-bumbac/index.md";
  slug: "pantaloni-pijama-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-reiat-barbati/index.md": {
	id: "pantaloni-reiat-barbati/index.md";
  slug: "pantaloni-reiat-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-reiat-elastici/index.md": {
	id: "pantaloni-reiat-elastici/index.md";
  slug: "pantaloni-reiat-elastici";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-reiat-maro/index.md": {
	id: "pantaloni-reiat-maro/index.md";
  slug: "pantaloni-reiat-maro";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-stofa-barbati/index.md": {
	id: "pantaloni-stofa-barbati/index.md";
  slug: "pantaloni-stofa-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-stofa-eleganti/index.md": {
	id: "pantaloni-stofa-eleganti/index.md";
  slug: "pantaloni-stofa-eleganti";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-stofa-office/index.md": {
	id: "pantaloni-stofa-office/index.md";
  slug: "pantaloni-stofa-office";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-stofa-regular/index.md": {
	id: "pantaloni-stofa-regular/index.md";
  slug: "pantaloni-stofa-regular";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-stofa-slim/index.md": {
	id: "pantaloni-stofa-slim/index.md";
  slug: "pantaloni-stofa-slim";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-talie-inalta/index.md": {
	id: "pantaloni-talie-inalta/index.md";
  slug: "pantaloni-talie-inalta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-trening-bumbac/index.md": {
	id: "pantaloni-trening-bumbac/index.md";
  slug: "pantaloni-trening-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-trening-drepti/index.md": {
	id: "pantaloni-trening-drepti/index.md";
  slug: "pantaloni-trening-drepti";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pantaloni-trening-elastici/index.md": {
	id: "pantaloni-trening-elastici/index.md";
  slug: "pantaloni-trening-elastici";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pulover-casmir-decolteu/index.md": {
	id: "pulover-casmir-decolteu/index.md";
  slug: "pulover-casmir-decolteu";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pulover-casmir-fin/index.md": {
	id: "pulover-casmir-fin/index.md";
  slug: "pulover-casmir-fin";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pulover-casmir-guler/index.md": {
	id: "pulover-casmir-guler/index.md";
  slug: "pulover-casmir-guler";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pulover-decolteu-rotund/index.md": {
	id: "pulover-decolteu-rotund/index.md";
  slug: "pulover-decolteu-rotund";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pulover-decolteu-v/index.md": {
	id: "pulover-decolteu-v/index.md";
  slug: "pulover-decolteu-v";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pulover-guler-barca/index.md": {
	id: "pulover-guler-barca/index.md";
  slug: "pulover-guler-barca";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pulover-guler-inalt/index.md": {
	id: "pulover-guler-inalt/index.md";
  slug: "pulover-guler-inalt";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pulover-guler-tunica/index.md": {
	id: "pulover-guler-tunica/index.md";
  slug: "pulover-guler-tunica";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pulover-impletit-gros/index.md": {
	id: "pulover-impletit-gros/index.md";
  slug: "pulover-impletit-gros";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pulover-impletit-manual/index.md": {
	id: "pulover-impletit-manual/index.md";
  slug: "pulover-impletit-manual";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pulover-jacard-iarna/index.md": {
	id: "pulover-jacard-iarna/index.md";
  slug: "pulover-jacard-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pulover-lana-crem/index.md": {
	id: "pulover-lana-crem/index.md";
  slug: "pulover-lana-crem";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pulover-lana-merino/index.md": {
	id: "pulover-lana-merino/index.md";
  slug: "pulover-lana-merino";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pulover-moale-lana/index.md": {
	id: "pulover-moale-lana/index.md";
  slug: "pulover-moale-lana";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pulover-moale-oversize/index.md": {
	id: "pulover-moale-oversize/index.md";
  slug: "pulover-moale-oversize";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pulover-mohair-pufos/index.md": {
	id: "pulover-mohair-pufos/index.md";
  slug: "pulover-mohair-pufos";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pulover-nasturi-guler/index.md": {
	id: "pulover-nasturi-guler/index.md";
  slug: "pulover-nasturi-guler";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pulover-oversize-moale/index.md": {
	id: "pulover-oversize-moale/index.md";
  slug: "pulover-oversize-moale";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pulover-subtire-bumbac/index.md": {
	id: "pulover-subtire-bumbac/index.md";
  slug: "pulover-subtire-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pulover-torsade-clasic/index.md": {
	id: "pulover-torsade-clasic/index.md";
  slug: "pulover-torsade-clasic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pulover-torsade-gros/index.md": {
	id: "pulover-torsade-gros/index.md";
  slug: "pulover-torsade-gros";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"pulover-torsade-iarna/index.md": {
	id: "pulover-torsade-iarna/index.md";
  slug: "pulover-torsade-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-asimetrica-seara/index.md": {
	id: "rochie-asimetrica-seara/index.md";
  slug: "rochie-asimetrica-seara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-camasa-bumbac/index.md": {
	id: "rochie-camasa-bumbac/index.md";
  slug: "rochie-camasa-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-clos-casual/index.md": {
	id: "rochie-clos-casual/index.md";
  slug: "rochie-clos-casual";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-clos-flori/index.md": {
	id: "rochie-clos-flori/index.md";
  slug: "rochie-clos-flori";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-clos-imprimeu/index.md": {
	id: "rochie-clos-imprimeu/index.md";
  slug: "rochie-clos-imprimeu";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-dantela-alba/index.md": {
	id: "rochie-dantela-alba/index.md";
  slug: "rochie-dantela-alba";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-dreapta-office/index.md": {
	id: "rochie-dreapta-office/index.md";
  slug: "rochie-dreapta-office";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-empire-matase/index.md": {
	id: "rochie-empire-matase/index.md";
  slug: "rochie-empire-matase";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-inodora-simpla/index.md": {
	id: "rochie-inodora-simpla/index.md";
  slug: "rochie-inodora-simpla";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-lunga-eleganta/index.md": {
	id: "rochie-lunga-eleganta/index.md";
  slug: "rochie-lunga-eleganta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-lunga-satin/index.md": {
	id: "rochie-lunga-satin/index.md";
  slug: "rochie-lunga-satin";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-lunga-seara/index.md": {
	id: "rochie-lunga-seara/index.md";
  slug: "rochie-lunga-seara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-lunga-voal/index.md": {
	id: "rochie-lunga-voal/index.md";
  slug: "rochie-lunga-voal";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-matase-verde/index.md": {
	id: "rochie-matase-verde/index.md";
  slug: "rochie-matase-verde";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-midi-clos/index.md": {
	id: "rochie-midi-clos/index.md";
  slug: "rochie-midi-clos";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-midi-mulata/index.md": {
	id: "rochie-midi-mulata/index.md";
  slug: "rochie-midi-mulata";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-office-midi/index.md": {
	id: "rochie-office-midi/index.md";
  slug: "rochie-office-midi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-office-neagra/index.md": {
	id: "rochie-office-neagra/index.md";
  slug: "rochie-office-neagra";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-petrecuta-bumbac/index.md": {
	id: "rochie-petrecuta-bumbac/index.md";
  slug: "rochie-petrecuta-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-petrecuta-matase/index.md": {
	id: "rochie-petrecuta-matase/index.md";
  slug: "rochie-petrecuta-matase";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-plaja-bumbac/index.md": {
	id: "rochie-plaja-bumbac/index.md";
  slug: "rochie-plaja-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-plaja-in/index.md": {
	id: "rochie-plaja-in/index.md";
  slug: "rochie-plaja-in";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-seara-eleganta/index.md": {
	id: "rochie-seara-eleganta/index.md";
  slug: "rochie-seara-eleganta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-tricotata-iarna/index.md": {
	id: "rochie-tricotata-iarna/index.md";
  slug: "rochie-tricotata-iarna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-tricotata-lunga/index.md": {
	id: "rochie-tricotata-lunga/index.md";
  slug: "rochie-tricotata-lunga";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-tricotata-mulata/index.md": {
	id: "rochie-tricotata-mulata/index.md";
  slug: "rochie-tricotata-mulata";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-vaporoasa-vara/index.md": {
	id: "rochie-vaporoasa-vara/index.md";
  slug: "rochie-vaporoasa-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-vara-in/index.md": {
	id: "rochie-vara-in/index.md";
  slug: "rochie-vara-in";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"rochie-vara-vaporoasa/index.md": {
	id: "rochie-vara-vaporoasa/index.md";
  slug: "rochie-vara-vaporoasa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-cambrat-dama/index.md": {
	id: "sacou-cambrat-dama/index.md";
  slug: "sacou-cambrat-dama";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-carouri-gri/index.md": {
	id: "sacou-carouri-gri/index.md";
  slug: "sacou-carouri-gri";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-carouri-maro/index.md": {
	id: "sacou-carouri-maro/index.md";
  slug: "sacou-carouri-maro";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-carouri-vintage/index.md": {
	id: "sacou-carouri-vintage/index.md";
  slug: "sacou-carouri-vintage";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-casual-bumbac/index.md": {
	id: "sacou-casual-bumbac/index.md";
  slug: "sacou-casual-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-casual-in/index.md": {
	id: "sacou-casual-in/index.md";
  slug: "sacou-casual-in";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-casual-stofa/index.md": {
	id: "sacou-casual-stofa/index.md";
  slug: "sacou-casual-stofa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-catifea-barbatesc/index.md": {
	id: "sacou-catifea-barbatesc/index.md";
  slug: "sacou-catifea-barbatesc";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-catifea-eleganta/index.md": {
	id: "sacou-catifea-eleganta/index.md";
  slug: "sacou-catifea-eleganta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-catifea-visinie/index.md": {
	id: "sacou-catifea-visinie/index.md";
  slug: "sacou-catifea-visinie";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-elegant-bleumarin/index.md": {
	id: "sacou-elegant-bleumarin/index.md";
  slug: "sacou-elegant-bleumarin";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-in-carouri/index.md": {
	id: "sacou-in-carouri/index.md";
  slug: "sacou-in-carouri";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-in-crem/index.md": {
	id: "sacou-in-crem/index.md";
  slug: "sacou-in-crem";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-in-dungi/index.md": {
	id: "sacou-in-dungi/index.md";
  slug: "sacou-in-dungi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-in-negru/index.md": {
	id: "sacou-in-negru/index.md";
  slug: "sacou-in-negru";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-in-simplu/index.md": {
	id: "sacou-in-simplu/index.md";
  slug: "sacou-in-simplu";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-inot-carouri/index.md": {
	id: "sacou-inot-carouri/index.md";
  slug: "sacou-inot-carouri";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-inot-casual/index.md": {
	id: "sacou-inot-casual/index.md";
  slug: "sacou-inot-casual";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-inot-clasic/index.md": {
	id: "sacou-inot-clasic/index.md";
  slug: "sacou-inot-clasic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-lana-carouri/index.md": {
	id: "sacou-lana-carouri/index.md";
  slug: "sacou-lana-carouri";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-lana-subtire/index.md": {
	id: "sacou-lana-subtire/index.md";
  slug: "sacou-lana-subtire";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-lana-tweed/index.md": {
	id: "sacou-lana-tweed/index.md";
  slug: "sacou-lana-tweed";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-office-dama/index.md": {
	id: "sacou-office-dama/index.md";
  slug: "sacou-office-dama";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-office-elegant/index.md": {
	id: "sacou-office-elegant/index.md";
  slug: "sacou-office-elegant";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-smoking-clasic/index.md": {
	id: "sacou-smoking-clasic/index.md";
  slug: "sacou-smoking-clasic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-smoking-negru/index.md": {
	id: "sacou-smoking-negru/index.md";
  slug: "sacou-smoking-negru";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-supradimensionat-barbati/index.md": {
	id: "sacou-supradimensionat-barbati/index.md";
  slug: "sacou-supradimensionat-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"sacou-visiniu-catifea/index.md": {
	id: "sacou-visiniu-catifea/index.md";
  slug: "sacou-visiniu-catifea";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"salopeta-blugi-clasica/index.md": {
	id: "salopeta-blugi-clasica/index.md";
  slug: "salopeta-blugi-clasica";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"salopeta-bumbac-elastica/index.md": {
	id: "salopeta-bumbac-elastica/index.md";
  slug: "salopeta-bumbac-elastica";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"salopeta-bumbac-mecanici/index.md": {
	id: "salopeta-bumbac-mecanici/index.md";
  slug: "salopeta-bumbac-mecanici";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"salopeta-bumbac-utilitara/index.md": {
	id: "salopeta-bumbac-utilitara/index.md";
  slug: "salopeta-bumbac-utilitara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"salopeta-cargo-bumbac/index.md": {
	id: "salopeta-cargo-bumbac/index.md";
  slug: "salopeta-cargo-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"salopeta-catifea-neagra/index.md": {
	id: "salopeta-catifea-neagra/index.md";
  slug: "salopeta-catifea-neagra";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"salopeta-denim-albastra/index.md": {
	id: "salopeta-denim-albastra/index.md";
  slug: "salopeta-denim-albastra";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"salopeta-denim-lejera/index.md": {
	id: "salopeta-denim-lejera/index.md";
  slug: "salopeta-denim-lejera";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"salopeta-denim-neagra/index.md": {
	id: "salopeta-denim-neagra/index.md";
  slug: "salopeta-denim-neagra";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"salopeta-denim-scurta/index.md": {
	id: "salopeta-denim-scurta/index.md";
  slug: "salopeta-denim-scurta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"salopeta-denim-spalata/index.md": {
	id: "salopeta-denim-spalata/index.md";
  slug: "salopeta-denim-spalata";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"salopeta-eleganta-neagra/index.md": {
	id: "salopeta-eleganta-neagra/index.md";
  slug: "salopeta-eleganta-neagra";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"salopeta-eleganta-nunta/index.md": {
	id: "salopeta-eleganta-nunta/index.md";
  slug: "salopeta-eleganta-nunta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"salopeta-evazata-bumbac/index.md": {
	id: "salopeta-evazata-bumbac/index.md";
  slug: "salopeta-evazata-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"salopeta-evazata-eleganta/index.md": {
	id: "salopeta-evazata-eleganta/index.md";
  slug: "salopeta-evazata-eleganta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"salopeta-in-culori/index.md": {
	id: "salopeta-in-culori/index.md";
  slug: "salopeta-in-culori";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"salopeta-in-eleganta/index.md": {
	id: "salopeta-in-eleganta/index.md";
  slug: "salopeta-in-eleganta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"salopeta-in-nasturi/index.md": {
	id: "salopeta-in-nasturi/index.md";
  slug: "salopeta-in-nasturi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"salopeta-in-vara/index.md": {
	id: "salopeta-in-vara/index.md";
  slug: "salopeta-in-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"salopeta-scurta-bumbac/index.md": {
	id: "salopeta-scurta-bumbac/index.md";
  slug: "salopeta-scurta-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"salopeta-scurta-in/index.md": {
	id: "salopeta-scurta-in/index.md";
  slug: "salopeta-scurta-in";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"salopeta-scurta-vara/index.md": {
	id: "salopeta-scurta-vara/index.md";
  slug: "salopeta-scurta-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"salopeta-sport-fermoar/index.md": {
	id: "salopeta-sport-fermoar/index.md";
  slug: "salopeta-sport-fermoar";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"salopeta-utilitara-bumbac/index.md": {
	id: "salopeta-utilitara-bumbac/index.md";
  slug: "salopeta-utilitara-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"salopeta-utilitara-kaki/index.md": {
	id: "salopeta-utilitara-kaki/index.md";
  slug: "salopeta-utilitara-kaki";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"salopeta-utilitara-neagra/index.md": {
	id: "salopeta-utilitara-neagra/index.md";
  slug: "salopeta-utilitara-neagra";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"top-bretele-elastice/index.md": {
	id: "top-bretele-elastice/index.md";
  slug: "top-bretele-elastice";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"top-bretele-subtiri/index.md": {
	id: "top-bretele-subtiri/index.md";
  slug: "top-bretele-subtiri";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"top-bumbac-organic/index.md": {
	id: "top-bumbac-organic/index.md";
  slug: "top-bumbac-organic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"top-bumbac-simplu/index.md": {
	id: "top-bumbac-simplu/index.md";
  slug: "top-bumbac-simplu";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"top-corset-dantela/index.md": {
	id: "top-corset-dantela/index.md";
  slug: "top-corset-dantela";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"top-crop-bumbac/index.md": {
	id: "top-crop-bumbac/index.md";
  slug: "top-crop-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"top-crop-elastic/index.md": {
	id: "top-crop-elastic/index.md";
  slug: "top-crop-elastic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"top-crop-mulat/index.md": {
	id: "top-crop-mulat/index.md";
  slug: "top-crop-mulat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"top-crop-tricotat/index.md": {
	id: "top-crop-tricotat/index.md";
  slug: "top-crop-tricotat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"top-dantela-neagra/index.md": {
	id: "top-dantela-neagra/index.md";
  slug: "top-dantela-neagra";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"top-decupat-spate/index.md": {
	id: "top-decupat-spate/index.md";
  slug: "top-decupat-spate";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"top-decupat-talie/index.md": {
	id: "top-decupat-talie/index.md";
  slug: "top-decupat-talie";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"top-decupat-umeri/index.md": {
	id: "top-decupat-umeri/index.md";
  slug: "top-decupat-umeri";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"top-inecat-guler/index.md": {
	id: "top-inecat-guler/index.md";
  slug: "top-inecat-guler";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"top-mulat-gat/index.md": {
	id: "top-mulat-gat/index.md";
  slug: "top-mulat-gat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"top-paiete-argintii/index.md": {
	id: "top-paiete-argintii/index.md";
  slug: "top-paiete-argintii";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"top-paiete-aurii/index.md": {
	id: "top-paiete-aurii/index.md";
  slug: "top-paiete-aurii";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"top-paiete-festival/index.md": {
	id: "top-paiete-festival/index.md";
  slug: "top-paiete-festival";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"top-paiete-negre/index.md": {
	id: "top-paiete-negre/index.md";
  slug: "top-paiete-negre";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"top-paiete-petrecere/index.md": {
	id: "top-paiete-petrecere/index.md";
  slug: "top-paiete-petrecere";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"top-plasa-festival/index.md": {
	id: "top-plasa-festival/index.md";
  slug: "top-plasa-festival";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"top-satin-bretele/index.md": {
	id: "top-satin-bretele/index.md";
  slug: "top-satin-bretele";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"top-satin-fin/index.md": {
	id: "top-satin-fin/index.md";
  slug: "top-satin-fin";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"top-satin-fuchsia/index.md": {
	id: "top-satin-fuchsia/index.md";
  slug: "top-satin-fuchsia";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"top-satin-negru/index.md": {
	id: "top-satin-negru/index.md";
  slug: "top-satin-negru";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"top-satinat-bretele/index.md": {
	id: "top-satinat-bretele/index.md";
  slug: "top-satinat-bretele";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trenci-bej-clasic/index.md": {
	id: "trenci-bej-clasic/index.md";
  slug: "trenci-bej-clasic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trenci-bej-lung/index.md": {
	id: "trenci-bej-lung/index.md";
  slug: "trenci-bej-lung";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trenci-bej-nasturi/index.md": {
	id: "trenci-bej-nasturi/index.md";
  slug: "trenci-bej-nasturi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trenci-bumbac-fin/index.md": {
	id: "trenci-bumbac-fin/index.md";
  slug: "trenci-bumbac-fin";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trenci-bumbac-impermeabil/index.md": {
	id: "trenci-bumbac-impermeabil/index.md";
  slug: "trenci-bumbac-impermeabil";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trenci-captusit-toamna/index.md": {
	id: "trenci-captusit-toamna/index.md";
  slug: "trenci-captusit-toamna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trenci-clasic-bej/index.md": {
	id: "trenci-clasic-bej/index.md";
  slug: "trenci-clasic-bej";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trenci-clasic-camel/index.md": {
	id: "trenci-clasic-camel/index.md";
  slug: "trenci-clasic-camel";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trenci-clasic-nasturi/index.md": {
	id: "trenci-clasic-nasturi/index.md";
  slug: "trenci-clasic-nasturi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trenci-impermeabil-camel/index.md": {
	id: "trenci-impermeabil-camel/index.md";
  slug: "trenci-impermeabil-camel";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trenci-impermeabil-gluga/index.md": {
	id: "trenci-impermeabil-gluga/index.md";
  slug: "trenci-impermeabil-gluga";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trenci-lung-bumbac/index.md": {
	id: "trenci-lung-bumbac/index.md";
  slug: "trenci-lung-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trenci-lung-impermeabil/index.md": {
	id: "trenci-lung-impermeabil/index.md";
  slug: "trenci-lung-impermeabil";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trenci-lung-nasturi/index.md": {
	id: "trenci-lung-nasturi/index.md";
  slug: "trenci-lung-nasturi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trenci-lung-stofa/index.md": {
	id: "trenci-lung-stofa/index.md";
  slug: "trenci-lung-stofa";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trenci-midi-nasturi/index.md": {
	id: "trenci-midi-nasturi/index.md";
  slug: "trenci-midi-nasturi";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trenci-piele-ecologica/index.md": {
	id: "trenci-piele-ecologica/index.md";
  slug: "trenci-piele-ecologica";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trenci-stofa-carouri/index.md": {
	id: "trenci-stofa-carouri/index.md";
  slug: "trenci-stofa-carouri";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trenci-stofa-subtire/index.md": {
	id: "trenci-stofa-subtire/index.md";
  slug: "trenci-stofa-subtire";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trenci-stofa-toamna/index.md": {
	id: "trenci-stofa-toamna/index.md";
  slug: "trenci-stofa-toamna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trenci-subtire-primavara/index.md": {
	id: "trenci-subtire-primavara/index.md";
  slug: "trenci-subtire-primavara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trenci-subtire-toamna/index.md": {
	id: "trenci-subtire-toamna/index.md";
  slug: "trenci-subtire-toamna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trenci-subtire-vara/index.md": {
	id: "trenci-subtire-vara/index.md";
  slug: "trenci-subtire-vara";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trenci-verde-inchis/index.md": {
	id: "trenci-verde-inchis/index.md";
  slug: "trenci-verde-inchis";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trenci-verde-olive/index.md": {
	id: "trenci-verde-olive/index.md";
  slug: "trenci-verde-olive";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trening-bumbac-baieti/index.md": {
	id: "trening-bumbac-baieti/index.md";
  slug: "trening-bumbac-baieti";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trening-bumbac-barbati/index.md": {
	id: "trening-bumbac-barbati/index.md";
  slug: "trening-bumbac-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trening-bumbac-fete/index.md": {
	id: "trening-bumbac-fete/index.md";
  slug: "trening-bumbac-fete";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trening-bumbac-frotir/index.md": {
	id: "trening-bumbac-frotir/index.md";
  slug: "trening-bumbac-frotir";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trening-bumbac-gros/index.md": {
	id: "trening-bumbac-gros/index.md";
  slug: "trening-bumbac-gros";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trening-bumbac-negru/index.md": {
	id: "trening-bumbac-negru/index.md";
  slug: "trening-bumbac-negru";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trening-bumbac-pieptanat/index.md": {
	id: "trening-bumbac-pieptanat/index.md";
  slug: "trening-bumbac-pieptanat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trening-catifea-albastra/index.md": {
	id: "trening-catifea-albastra/index.md";
  slug: "trening-catifea-albastra";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trening-catifea-dama/index.md": {
	id: "trening-catifea-dama/index.md";
  slug: "trening-catifea-dama";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trening-catifea-neagra/index.md": {
	id: "trening-catifea-neagra/index.md";
  slug: "trening-catifea-neagra";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trening-catifea-rosie/index.md": {
	id: "trening-catifea-rosie/index.md";
  slug: "trening-catifea-rosie";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trening-catifea-verde/index.md": {
	id: "trening-catifea-verde/index.md";
  slug: "trening-catifea-verde";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trening-catifea-visinie/index.md": {
	id: "trening-catifea-visinie/index.md";
  slug: "trening-catifea-visinie";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trening-complet-bumbac/index.md": {
	id: "trening-complet-bumbac/index.md";
  slug: "trening-complet-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trening-complet-gri/index.md": {
	id: "trening-complet-gri/index.md";
  slug: "trening-complet-gri";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trening-complet-negru/index.md": {
	id: "trening-complet-negru/index.md";
  slug: "trening-complet-negru";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trening-dama-bumbac/index.md": {
	id: "trening-dama-bumbac/index.md";
  slug: "trening-dama-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trening-dama-catifea/index.md": {
	id: "trening-dama-catifea/index.md";
  slug: "trening-dama-catifea";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trening-fas-captusit/index.md": {
	id: "trening-fas-captusit/index.md";
  slug: "trening-fas-captusit";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trening-fas-fasait/index.md": {
	id: "trening-fas-fasait/index.md";
  slug: "trening-fas-fasait";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trening-fleece-barbati/index.md": {
	id: "trening-fleece-barbati/index.md";
  slug: "trening-fleece-barbati";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trening-fleece-calduros/index.md": {
	id: "trening-fleece-calduros/index.md";
  slug: "trening-fleece-calduros";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trening-fleece-pufos/index.md": {
	id: "trening-fleece-pufos/index.md";
  slug: "trening-fleece-pufos";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trening-oversize-bumbac/index.md": {
	id: "trening-oversize-bumbac/index.md";
  slug: "trening-oversize-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trening-poliester-lila/index.md": {
	id: "trening-poliester-lila/index.md";
  slug: "trening-poliester-lila";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trening-slim-bumbac/index.md": {
	id: "trening-slim-bumbac/index.md";
  slug: "trening-slim-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"trening-slim-fit/index.md": {
	id: "trening-slim-fit/index.md";
  slug: "trening-slim-fit";
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
"tricou-bumbac-alb/index.md": {
	id: "tricou-bumbac-alb/index.md";
  slug: "tricou-bumbac-alb";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tricou-bumbac-fin/index.md": {
	id: "tricou-bumbac-fin/index.md";
  slug: "tricou-bumbac-fin";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tricou-bumbac-greu/index.md": {
	id: "tricou-bumbac-greu/index.md";
  slug: "tricou-bumbac-greu";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tricou-bumbac-organic/index.md": {
	id: "tricou-bumbac-organic/index.md";
  slug: "tricou-bumbac-organic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tricou-bumbac-pieptanat/index.md": {
	id: "tricou-bumbac-pieptanat/index.md";
  slug: "tricou-bumbac-pieptanat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tricou-bumbac-premium/index.md": {
	id: "tricou-bumbac-premium/index.md";
  slug: "tricou-bumbac-premium";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tricou-bumbac-simplu/index.md": {
	id: "tricou-bumbac-simplu/index.md";
  slug: "tricou-bumbac-simplu";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tricou-croiala-patrata/index.md": {
	id: "tricou-croiala-patrata/index.md";
  slug: "tricou-croiala-patrata";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tricou-decolteu-adanc/index.md": {
	id: "tricou-decolteu-adanc/index.md";
  slug: "tricou-decolteu-adanc";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tricou-dungi-marinaresti/index.md": {
	id: "tricou-dungi-marinaresti/index.md";
  slug: "tricou-dungi-marinaresti";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tricou-guler-rotund/index.md": {
	id: "tricou-guler-rotund/index.md";
  slug: "tricou-guler-rotund";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tricou-guler-v/index.md": {
	id: "tricou-guler-v/index.md";
  slug: "tricou-guler-v";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tricou-imprimeu-grafic/index.md": {
	id: "tricou-imprimeu-grafic/index.md";
  slug: "tricou-imprimeu-grafic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tricou-logo-brodat/index.md": {
	id: "tricou-logo-brodat/index.md";
  slug: "tricou-logo-brodat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tricou-logo-imprimat/index.md": {
	id: "tricou-logo-imprimat/index.md";
  slug: "tricou-logo-imprimat";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tricou-logo-text/index.md": {
	id: "tricou-logo-text/index.md";
  slug: "tricou-logo-text";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tricou-maneca-curta/index.md": {
	id: "tricou-maneca-curta/index.md";
  slug: "tricou-maneca-curta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tricou-maneca-lunga/index.md": {
	id: "tricou-maneca-lunga/index.md";
  slug: "tricou-maneca-lunga";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tricou-maneca-scurta/index.md": {
	id: "tricou-maneca-scurta/index.md";
  slug: "tricou-maneca-scurta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tricou-oversized-alb/index.md": {
	id: "tricou-oversized-alb/index.md";
  slug: "tricou-oversized-alb";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tricou-oversized-grafic/index.md": {
	id: "tricou-oversized-grafic/index.md";
  slug: "tricou-oversized-grafic";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tricou-polo-bumbac/index.md": {
	id: "tricou-polo-bumbac/index.md";
  slug: "tricou-polo-bumbac";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tricou-relaxed-alb/index.md": {
	id: "tricou-relaxed-alb/index.md";
  slug: "tricou-relaxed-alb";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tricou-relaxed-fit/index.md": {
	id: "tricou-relaxed-fit/index.md";
  slug: "tricou-relaxed-fit";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tricou-relaxed-negru/index.md": {
	id: "tricou-relaxed-negru/index.md";
  slug: "tricou-relaxed-negru";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"tricou-simplu-buzunar/index.md": {
	id: "tricou-simplu-buzunar/index.md";
  slug: "tricou-simplu-buzunar";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"vesta-blana-artificiala/index.md": {
	id: "vesta-blana-artificiala/index.md";
  slug: "vesta-blana-artificiala";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"vesta-blana-ecologica/index.md": {
	id: "vesta-blana-ecologica/index.md";
  slug: "vesta-blana-ecologica";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"vesta-blana-iepure/index.md": {
	id: "vesta-blana-iepure/index.md";
  slug: "vesta-blana-iepure";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"vesta-blana-vulpe/index.md": {
	id: "vesta-blana-vulpe/index.md";
  slug: "vesta-blana-vulpe";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"vesta-fas-barbateasca/index.md": {
	id: "vesta-fas-barbateasca/index.md";
  slug: "vesta-fas-barbateasca";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"vesta-fas-buzunar/index.md": {
	id: "vesta-fas-buzunar/index.md";
  slug: "vesta-fas-buzunar";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"vesta-fas-buzunare/index.md": {
	id: "vesta-fas-buzunare/index.md";
  slug: "vesta-fas-buzunare";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"vesta-fas-gluga/index.md": {
	id: "vesta-fas-gluga/index.md";
  slug: "vesta-fas-gluga";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"vesta-fas-neagra/index.md": {
	id: "vesta-fas-neagra/index.md";
  slug: "vesta-fas-neagra";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"vesta-fas-reflectorizanta/index.md": {
	id: "vesta-fas-reflectorizanta/index.md";
  slug: "vesta-fas-reflectorizanta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"vesta-fas-rosie/index.md": {
	id: "vesta-fas-rosie/index.md";
  slug: "vesta-fas-rosie";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"vesta-fas-roz/index.md": {
	id: "vesta-fas-roz/index.md";
  slug: "vesta-fas-roz";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"vesta-lana-barbateasca/index.md": {
	id: "vesta-lana-barbateasca/index.md";
  slug: "vesta-lana-barbateasca";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"vesta-lana-traditionala/index.md": {
	id: "vesta-lana-traditionala/index.md";
  slug: "vesta-lana-traditionala";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"vesta-matlasata-neagra/index.md": {
	id: "vesta-matlasata-neagra/index.md";
  slug: "vesta-matlasata-neagra";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"vesta-matlasata-rosie/index.md": {
	id: "vesta-matlasata-rosie/index.md";
  slug: "vesta-matlasata-rosie";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"vesta-matlasata-subtire/index.md": {
	id: "vesta-matlasata-subtire/index.md";
  slug: "vesta-matlasata-subtire";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"vesta-matlasata-toamna/index.md": {
	id: "vesta-matlasata-toamna/index.md";
  slug: "vesta-matlasata-toamna";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"vesta-puf-albastra/index.md": {
	id: "vesta-puf-albastra/index.md";
  slug: "vesta-puf-albastra";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"vesta-puf-gluga/index.md": {
	id: "vesta-puf-gluga/index.md";
  slug: "vesta-puf-gluga";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"vesta-puf-guler/index.md": {
	id: "vesta-puf-guler/index.md";
  slug: "vesta-puf-guler";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"vesta-puf-neagra/index.md": {
	id: "vesta-puf-neagra/index.md";
  slug: "vesta-puf-neagra";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"vesta-puf-scurta/index.md": {
	id: "vesta-puf-scurta/index.md";
  slug: "vesta-puf-scurta";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"vesta-puf-sport/index.md": {
	id: "vesta-puf-sport/index.md";
  slug: "vesta-puf-sport";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"vesta-scurta-fas/index.md": {
	id: "vesta-scurta-fas/index.md";
  slug: "vesta-scurta-fas";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"vesta-tricotata-manual/index.md": {
	id: "vesta-tricotata-manual/index.md";
  slug: "vesta-tricotata-manual";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"vesta-tricotata-nasturi/index.md": {
	id: "vesta-tricotata-nasturi/index.md";
  slug: "vesta-tricotata-nasturi";
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
