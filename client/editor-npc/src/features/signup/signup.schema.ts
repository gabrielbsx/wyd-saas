import { z } from "zod";

export const signupSchema = z
  .object({
    username: z.string().min(4).max(10),
    password: z.string().min(4).max(10),
    passwordConfirmation: z.string().min(4).max(10),
    email: z.string().email(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    path: ["passwordConfirmation"],
    message: "Passwords do not match",
  });

export type SignupRequest = z.infer<typeof signupSchema>;

