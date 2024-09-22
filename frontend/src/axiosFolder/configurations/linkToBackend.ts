interface Secrets {
  apiHost: string;
}

interface Config {
  secrets: Secrets;
}

let cache: Config | null = null;

const environment = import.meta.env.VITE_APP_ENVIRONMENT || 'development';

const config = (): Config => {
  if (!cache) {
    cache = Object.freeze({
      secrets: {
        apiHost:
          environment === 'development'
            ? 'http://localhost:5001'
            : 'http://localhost:5001',
      },
    });
  }
  return cache;
};

export default config;
