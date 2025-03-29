import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CancellationPolicyIncludeSchema } from '../inputTypeSchemas/CancellationPolicyIncludeSchema'
import { CancellationPolicyWhereInputSchema } from '../inputTypeSchemas/CancellationPolicyWhereInputSchema'
import { CancellationPolicyOrderByWithRelationInputSchema } from '../inputTypeSchemas/CancellationPolicyOrderByWithRelationInputSchema'
import { CancellationPolicyWhereUniqueInputSchema } from '../inputTypeSchemas/CancellationPolicyWhereUniqueInputSchema'
import { CancellationPolicyScalarFieldEnumSchema } from '../inputTypeSchemas/CancellationPolicyScalarFieldEnumSchema'
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

export const CancellationPolicyFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CancellationPolicyFindFirstOrThrowArgs> = z.object({
  select: CancellationPolicySelectSchema.optional(),
  include: z.lazy(() => CancellationPolicyIncludeSchema).optional(),
  where: CancellationPolicyWhereInputSchema.optional(),
  orderBy: z.union([ CancellationPolicyOrderByWithRelationInputSchema.array(),CancellationPolicyOrderByWithRelationInputSchema ]).optional(),
  cursor: CancellationPolicyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CancellationPolicyScalarFieldEnumSchema,CancellationPolicyScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default CancellationPolicyFindFirstOrThrowArgsSchema;
