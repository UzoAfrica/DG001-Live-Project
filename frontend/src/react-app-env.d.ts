declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';

interface ImportMetaEnv {
    readonly VITE_APP_ENVIRONMENT: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  