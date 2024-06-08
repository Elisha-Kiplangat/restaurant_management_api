
import { number, z } from 'zod'


export const userSchema = z.object({
    email: z.string(),
    password: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    phone: z.string(),
    createdAt: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: 'Invalid date format for createdAt',
    }).transform((val) => new Date(val)),
    updatedAt: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: 'Invalid date format for updatedAt',
    }).transform((val) => new Date(val))
})

export const stateSchema = z.object({
    name: z.string(),
    code: z.string()
})



export const commentSchema = z.object({
    orderId: z.number(),
    userId: z.number(),
    commentText: z.string(),
    isComplaint: z.boolean(),
    isPraise: z.boolean(),
    createdAt: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: 'Invalid date format for createdAt',
    }).transform((val) => new Date(val)),
    updatedAt: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: 'Invalid date format for updatedAt',
    }).transform((val) => new Date(val))
})

export const addressSchema = z.object({
    streetAddress1: z.string(),
    streetAddress2: z.string(),
    zipCode: z.number(),
    deliveryInstructions: z.string(),
    userId: z.number(),
    cityId: z.number(),
    createdAt: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: 'Invalid date format for createdAt',
    }).transform((val) => new Date(val)),
    updatedAt: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: 'Invalid date format for updatedAt',
    }).transform((val) => new Date(val))
})