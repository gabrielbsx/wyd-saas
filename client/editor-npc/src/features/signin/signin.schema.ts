import { z } from "zod";

export const signinSchema = z.object({
  username: z.string().min(4).max(10),
  password: z.string().min(4).max(10),
});

export type SigninRequest = z.infer<typeof signinSchema>;
