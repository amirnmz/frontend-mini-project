import { z } from "zod";

export const authSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password should be at least 8 characters long")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d).+$/,
      "Password must contain letters and numbers",
    ),
});

export type AuthFormValues = z.infer<typeof authSchema>;

