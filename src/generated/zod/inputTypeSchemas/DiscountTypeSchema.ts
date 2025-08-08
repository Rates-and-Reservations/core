import { z } from 'zod';

export const DiscountTypeSchema = z.enum(['PERCENTAGE','FIXED','BUY_X_GET_Y','BULK_DISCOUNT']);

export type DiscountTypeType = `${z.infer<typeof DiscountTypeSchema>}`

export default DiscountTypeSchema;
