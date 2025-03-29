import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountTypeSchema } from './DiscountTypeSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';

export const DiscountCreateManyMerchantInputSchema: z.ZodType<Prisma.DiscountCreateManyMerchantInput> = z.object({
  id: z.string().cuid().optional(),
  code: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  discountType: z.lazy(() => DiscountTypeSchema),
  amount: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),
  usageLimit: z.number().int().optional().nullable(),
  usedCount: z.number().int().optional(),
  startDate: z.coerce.date().optional().nullable(),
  endDate: z.coerce.date().optional().nullable(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default DiscountCreateManyMerchantInputSchema;
