import { z } from "zod";

const envSchema = z.object({
  MONGO_URL: z.string(),
  MONGO_URL_TEST: z.string().optional(),
  JWT_SECRET: z.string(),
  JWT_EXPIRES_IN: z.string().transform(Number),
  NODE_ENV: z.enum(["development", "production", "test"]),
  EMAIL_TO: z.string(),
});

export const env = envSchema.parse(import.meta?.env || process.env);
