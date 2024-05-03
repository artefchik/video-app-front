import { z } from 'zod';

export const signInSchema = z.object({
    email: z.string().email('Некорректный email'),
    password: z.string().min(8, 'Пароль слишком короткий'),
});

export type SignInSchema = z.infer<typeof signInSchema>;
