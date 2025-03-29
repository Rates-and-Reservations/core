import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { RefundTypeSchema } from './RefundTypeSchema';
import { EnumRefundTypeFieldUpdateOperationsInputSchema } from './EnumRefundTypeFieldUpdateOperationsInputSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { NullableDecimalFieldUpdateOperationsInputSchema } from './NullableDecimalFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { CancellationScopeSchema } from './CancellationScopeSchema';
import { EnumCancellationScopeFieldUpdateOperationsInputSchema } from './EnumCancellationScopeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { MerchantUpdateOneRequiredWithoutCancellationPolicyNestedInputSchema } from './MerchantUpdateOneRequiredWithoutCancellationPolicyNestedInputSchema';

export const CancellationPolicyUpdateWithoutResourceBookingConfigInputSchema: z.ZodType<Prisma.CancellationPolicyUpdateWithoutResourceBookingConfigInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  refundType: z.union([ z.lazy(() => RefundTypeSchema),z.lazy(() => EnumRefundTypeFieldUpdateOperationsInputSchema) ]).optional(),
  refundAmount: z.union([ z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => NullableDecimalFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  timeLimitHours: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  appliesTo: z.union([ z.lazy(() => CancellationScopeSchema),z.lazy(() => EnumCancellationScopeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  merchant: z.lazy(() => MerchantUpdateOneRequiredWithoutCancellationPolicyNestedInputSchema).optional()
}).strict();

export default CancellationPolicyUpdateWithoutResourceBookingConfigInputSchema;
