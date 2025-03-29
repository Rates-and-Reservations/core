import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundTypeSchema } from './RefundTypeSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { CancellationScopeSchema } from './CancellationScopeSchema';
import { ResourceBookingConfigUncheckedCreateNestedManyWithoutCancellationPolicyInputSchema } from './ResourceBookingConfigUncheckedCreateNestedManyWithoutCancellationPolicyInputSchema';

export const CancellationPolicyUncheckedCreateInputSchema: z.ZodType<Prisma.CancellationPolicyUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  merchantId: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  refundType: z.lazy(() => RefundTypeSchema),
  refundAmount: z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }).optional().nullable(),
  timeLimitHours: z.number().int().optional().nullable(),
  appliesTo: z.lazy(() => CancellationScopeSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ResourceBookingConfig: z.lazy(() => ResourceBookingConfigUncheckedCreateNestedManyWithoutCancellationPolicyInputSchema).optional()
}).strict();

export default CancellationPolicyUncheckedCreateInputSchema;
