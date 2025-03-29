import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { ResourceCreatetagsInputSchema } from './ResourceCreatetagsInputSchema';
import { MerchantCreateNestedOneWithoutResourceInputSchema } from './MerchantCreateNestedOneWithoutResourceInputSchema';
import { RateCreateNestedManyWithoutResourceInputSchema } from './RateCreateNestedManyWithoutResourceInputSchema';
import { ResourceBookingConfigCreateNestedManyWithoutResourceInputSchema } from './ResourceBookingConfigCreateNestedManyWithoutResourceInputSchema';
import { WaitlistEntryCreateNestedManyWithoutResourceInputSchema } from './WaitlistEntryCreateNestedManyWithoutResourceInputSchema';
import { BookingRequestCreateNestedManyWithoutResourceInputSchema } from './BookingRequestCreateNestedManyWithoutResourceInputSchema';
import { ResourceAssetCreateNestedManyWithoutResourceInputSchema } from './ResourceAssetCreateNestedManyWithoutResourceInputSchema';

export const ResourceCreateWithoutTemplateInputSchema: z.ZodType<Prisma.ResourceCreateWithoutTemplateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  capacity: z.number().int(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  tags: z.union([ z.lazy(() => ResourceCreatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  merchant: z.lazy(() => MerchantCreateNestedOneWithoutResourceInputSchema),
  Rate: z.lazy(() => RateCreateNestedManyWithoutResourceInputSchema).optional(),
  ResourceBookingConfig: z.lazy(() => ResourceBookingConfigCreateNestedManyWithoutResourceInputSchema).optional(),
  WaitlistEntry: z.lazy(() => WaitlistEntryCreateNestedManyWithoutResourceInputSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestCreateNestedManyWithoutResourceInputSchema).optional(),
  ResourceAsset: z.lazy(() => ResourceAssetCreateNestedManyWithoutResourceInputSchema).optional()
}).strict();

export default ResourceCreateWithoutTemplateInputSchema;
