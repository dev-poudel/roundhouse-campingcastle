import {z} from "zod"

export const RegisterSchema = z.object({
    name : z.string(),
    email : z.string(),
    password : z.string().min(5)
})


export const LoginSchema = z.object({
    email : z.string(),
    password : z.string().min(5)
})


export const RoomSchema = z.object({
     imageUrl : z.string().array(),
        description : z.string(),
        price : z.number(),
        booked : z.boolean().default(false),
        capacity : z.number(),
        rating : z.number(),
        numberOfReviews:z.number()
})