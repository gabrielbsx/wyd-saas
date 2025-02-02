import { z } from "zod";

const envSchema = z.object({
  MONGO_URL: z.string(),
  MONGO_URL_TEST: z.string().optional(),
  JWT_SECRET: z.string(),
  NODE_ENV: z.enum(["development", "production", "test"]),
});

export const env = envSchema.parse(import.meta?.env || process.env);
