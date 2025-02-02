/// <reference types="vite/client" />

type ImportMetaEnv = Readonly<{
  MONGO_URL: string;
  MONGO_URL_TEST: string;
}>;

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
