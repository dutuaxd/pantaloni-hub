/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLISH_DATE?: string;
  readonly SHOW_FUTURE_POSTS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
