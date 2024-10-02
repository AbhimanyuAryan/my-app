import { z } from 'zod';

export const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    age: z.number()
        .int({ message: 'Age must be an integer' })
        .min(18, { message: 'Age must be at least 18' }),
});