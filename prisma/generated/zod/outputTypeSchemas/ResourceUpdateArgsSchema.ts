import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceIncludeSchema } from '../inputTypeSchemas/ResourceIncludeSchema'
import { ResourceUpdateInputSchema } from '../inputTypeSchemas/ResourceUpdateInputSchema'
import { ResourceUncheckedUpdateInputSchema } from '../inputTypeSchemas/ResourceUncheckedUpdateInputSchema'
import { ResourceWhereUniqueInputSchema } from '../inputTypeSchemas/ResourceWhereUniqueInputSchema'
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { ResourceTemplateArgsSchema } from "../outputTypeSchemas/ResourceTemplateArgsSchema"
import { RateFindManyArgsSchema } from "../outputTypeSchemas/RateFindManyArgsSchema"
import { ResourceBookingConfigFindManyArgsSchema } from "../outputTypeSchemas/ResourceBookingConfigFindManyArgsSchema"
import { WaitlistEntryFindManyArgsSchema } from "../outputTypeSchemas/WaitlistEntryFindManyArgsSchema"
import { BookingRequestFindManyArgsSchema } from "../outputTypeSchemas/BookingRequestFindManyArgsSchema"
import { ResourceAssetFindManyArgsSchema } from "../outputTypeSchemas/ResourceAssetFindManyArgsSchema"
import { ResourceCountOutputTypeArgsSchema } from "../outputTypeSchemas/ResourceCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ResourceSelectSchema: z.ZodType<Prisma.ResourceSelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  templateId: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  capacity: z.boolean().optional(),
  metadata: z.boolean().optional(),
  tags: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  template: z.union([z.boolean(),z.lazy(() => ResourceTemplateArgsSchema)]).optional(),
  Rate: z.union([z.boolean(),z.lazy(() => RateFindManyArgsSchema)]).optional(),
  ResourceBookingConfig: z.union([z.boolean(),z.lazy(() => ResourceBookingConfigFindManyArgsSchema)]).optional(),
  WaitlistEntry: z.union([z.boolean(),z.lazy(() => WaitlistEntryFindManyArgsSchema)]).optional(),
  BookingRequest: z.union([z.boolean(),z.lazy(() => BookingRequestFindManyArgsSchema)]).optional(),
  ResourceAsset: z.union([z.boolean(),z.lazy(() => ResourceAssetFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ResourceCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ResourceUpdateArgsSchema: z.ZodType<Prisma.ResourceUpdateArgs> = z.object({
  select: ResourceSelectSchema.optional(),
  include: z.lazy(() => ResourceIncludeSchema).optional(),
  data: z.union([ ResourceUpdateInputSchema,ResourceUncheckedUpdateInputSchema ]),
  where: ResourceWhereUniqueInputSchema,
}).strict() ;

export default ResourceUpdateArgsSchema;
