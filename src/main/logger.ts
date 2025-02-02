import { env } from "@/shared/externals/env";

export const logger = (() => {
  const envToLogger = {
    development: {
      transport: {
        target: "pino-pretty",
        options: {
          translateTime: "HH:MM:ss Z",
          ignore: "pid,hostname",
        },
      },
    },
    production: true,
    test: false,
  };

  return envToLogger[env.NODE_ENV] ?? true;
})();
