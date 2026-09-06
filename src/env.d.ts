/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly AMAZON_ASSOCIATE_TAG?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface LaviSearchItem {
  id: string;
  hay: string;
}

interface Window {
  LAVI_SEARCH?: LaviSearchItem[];
}

declare var LAVI_SEARCH: LaviSearchItem[] | undefined;
