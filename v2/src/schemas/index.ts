import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3, {
    message: 'Password is required',
  }),
});

export const SignupSchema = z.object({
  firstName: z.string().min(4, { message: 'Name must be at least 4 characters long' }),
  lastName: z.string().min(4, { message: 'Name must be at least 4 characters long' }),
  email: z.string().email(),
  password: z.string().min(5, { message: 'Password must be at least 5 characters long' }),
});

export const ForgetPasswordSchema = z.object({
  email: z.string().email(),
});

