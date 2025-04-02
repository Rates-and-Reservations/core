import { z } from 'zod';
import { Prisma } from '@prisma/client'
import { RefundTypeSchema } from '../inputTypeSchemas/RefundTypeSchema'
import { CancellationScopeSchema } from '../inputTypeSchemas/CancellationScopeSchema'

/////////////////////////////////////////
// CANCELLATION POLICY SCHEMA
/////////////////////////////////////////

export const CancellationPolicySchema = z.object({
  refundType: RefundTypeSchema,
  appliesTo: CancellationScopeSchema,
  id: z.string().cuid(),
  merchantId: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  refundAmount: z.instanceof(Prisma.Decimal, { message: "Field 'refundAmount' must be a Decimal. Location: ['Models', 'CancellationPolicy']"}).nullable(),
  timeLimitHours: z.number().int().nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type CancellationPolicy = z.infer<typeof CancellationPolicySchema>

export default CancellationPolicySchema;
