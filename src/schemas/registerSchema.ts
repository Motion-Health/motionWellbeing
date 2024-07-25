// src/schemas/registerSchema.ts
import { object, string } from "zod";

export const registerSchema = object({
  email: string().min(1, "Email is required").email("Email is invalid"),
  password: string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must be less than 32 characters")
    .regex(/\d/, "Password must contain a number")
    .regex(/^[^\s]*$/, "Password must not contain a space"),
});
