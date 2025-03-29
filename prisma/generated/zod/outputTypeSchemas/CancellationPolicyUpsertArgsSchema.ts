import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CancellationPolicyIncludeSchema } from '../inputTypeSchemas/CancellationPolicyIncludeSchema'
import { CancellationPolicyWhereUniqueInputSchema } from '../inputTypeSchemas/CancellationPolicyWhereUniqueInputSchema'
import { CancellationPolicyCreateInputSchema } from '../inputTypeSchemas/CancellationPolicyCreateInputSchema'
import { CancellationPolicyUncheckedCreateInputSchema } from '../inputTypeSchemas/CancellationPolicyUncheckedCreateInputSchema'
import { CancellationPolicyUpdateInputSchema } from '../inputTypeSchemas/CancellationPolicyUpdateInputSchema'
import { CancellationPolicyUncheckedUpdateInputSchema } from '../inputTypeSchemas/CancellationPolicyUncheckedUpdateInputSchema'
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { ResourceBookingConfigFindManyArgsSchema } from "../outputTypeSchemas/ResourceBookingConfigFindManyArgsSchema"
import { CancellationPolicyCountOutputTypeArgsSchema } from "../outputTypeSchemas/CancellationPolicyCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CancellationPolicySelectSchema: z.ZodType<Prisma.CancellationPolicySelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  refundType: z.boolean().optional(),
  refundAmount: z.boolean().optional(),
  timeLimitHours: z.boolean().optional(),
  appliesTo: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  ResourceBookingConfig: z.union([z.boolean(),z.lazy(() => ResourceBookingConfigFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CancellationPolicyCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CancellationPolicyUpsertArgsSchema: z.ZodType<Prisma.CancellationPolicyUpsertArgs> = z.object({
  select: CancellationPolicySelectSchema.optional(),
  include: z.lazy(() => CancellationPolicyIncludeSchema).optional(),
  where: CancellationPolicyWhereUniqueInputSchema,
  create: z.union([ CancellationPolicyCreateInputSchema,CancellationPolicyUncheckedCreateInputSchema ]),
  update: z.union([ CancellationPolicyUpdateInputSchema,CancellationPolicyUncheckedUpdateInputSchema ]),
}).strict() ;

export default CancellationPolicyUpsertArgsSchema;
