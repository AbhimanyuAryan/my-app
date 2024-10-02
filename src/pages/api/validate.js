import { z } from 'zod';

const schema = z.object({
    name: z.string().min(1, 'Name is required'),
    age: z.number().int().min(18, 'Age must be at least 18'),
});

export default function handler(req, res) {
    try {
        const data = schema.parse(req.body);
        res.status(200).json({ message: 'Valid data', data });
    } catch(e) {
        res.status(400).json({ message: e.errors });
    }
}