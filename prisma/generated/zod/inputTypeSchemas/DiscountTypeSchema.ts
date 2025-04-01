import { z } from 'zod';

export const DiscountTypeSchema = z.enum(['PERCENTAGE','FIXED']);

export type DiscountTypeType = `${z.infer<typeof DiscountTypeSchema>}`

export default DiscountTypeSchema;
