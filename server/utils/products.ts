import { z } from "zod";

export const ZProduct = z.object({
    name: z.string(),
    price: z.number(),
    description: z.string(),
    image: z.string(),
    category: z.string(),
    rating: z.number(),
});

export type ProductWrite = z.infer<typeof ZProduct>;
export type ProductRead = ProductWrite & {
    id: string;
};
