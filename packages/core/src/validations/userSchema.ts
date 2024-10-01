// validations/userSchema.ts
import * as z from 'zod';

export const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
