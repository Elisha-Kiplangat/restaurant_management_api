
import { number, z } from 'zod'


export const userSchema = z.object({
    email: z.string(),
    password: z.string(),
    firstname: z.string(),
    lastname: z.string(),
    phone: z.string(),
    createdAt: z.date(),
    updatedAt: z.date()
})

export const stateSchema = z.object({
    name: z.string(),
    code: z.string()
})