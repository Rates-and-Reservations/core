import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { ResourceTemplateArgsSchema } from "../outputTypeSchemas/ResourceTemplateArgsSchema"
import { RateFindManyArgsSchema } from "../outputTypeSchemas/RateFindManyArgsSchema"
import { ResourceBookingConfigFindManyArgsSchema } from "../outputTypeSchemas/ResourceBookingConfigFindManyArgsSchema"
import { WaitlistEntryFindManyArgsSchema } from "../outputTypeSchemas/WaitlistEntryFindManyArgsSchema"
import { BookingRequestFindManyArgsSchema } from "../outputTypeSchemas/BookingRequestFindManyArgsSchema"
import { ResourceAssetFindManyArgsSchema } from "../outputTypeSchemas/ResourceAssetFindManyArgsSchema"
import { ResourceCountOutputTypeArgsSchema } from "../outputTypeSchemas/ResourceCountOutputTypeArgsSchema"

export const ResourceIncludeSchema: z.ZodType<Prisma.ResourceInclude> = z.object({
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  template: z.union([z.boolean(),z.lazy(() => ResourceTemplateArgsSchema)]).optional(),
  Rate: z.union([z.boolean(),z.lazy(() => RateFindManyArgsSchema)]).optional(),
  ResourceBookingConfig: z.union([z.boolean(),z.lazy(() => ResourceBookingConfigFindManyArgsSchema)]).optional(),
  WaitlistEntry: z.union([z.boolean(),z.lazy(() => WaitlistEntryFindManyArgsSchema)]).optional(),
  BookingRequest: z.union([z.boolean(),z.lazy(() => BookingRequestFindManyArgsSchema)]).optional(),
  ResourceAsset: z.union([z.boolean(),z.lazy(() => ResourceAssetFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ResourceCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ResourceIncludeSchema;
