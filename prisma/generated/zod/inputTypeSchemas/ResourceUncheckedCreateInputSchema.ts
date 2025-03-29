import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { ResourceCreatetagsInputSchema } from './ResourceCreatetagsInputSchema';
import { RateUncheckedCreateNestedManyWithoutResourceInputSchema } from './RateUncheckedCreateNestedManyWithoutResourceInputSchema';
import { ResourceBookingConfigUncheckedCreateNestedManyWithoutResourceInputSchema } from './ResourceBookingConfigUncheckedCreateNestedManyWithoutResourceInputSchema';
import { WaitlistEntryUncheckedCreateNestedManyWithoutResourceInputSchema } from './WaitlistEntryUncheckedCreateNestedManyWithoutResourceInputSchema';
import { BookingRequestUncheckedCreateNestedManyWithoutResourceInputSchema } from './BookingRequestUncheckedCreateNestedManyWithoutResourceInputSchema';
import { ResourceAssetUncheckedCreateNestedManyWithoutResourceInputSchema } from './ResourceAssetUncheckedCreateNestedManyWithoutResourceInputSchema';

export const ResourceUncheckedCreateInputSchema: z.ZodType<Prisma.ResourceUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  merchantId: z.string(),
  templateId: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  capacity: z.number().int(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  tags: z.union([ z.lazy(() => ResourceCreatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Rate: z.lazy(() => RateUncheckedCreateNestedManyWithoutResourceInputSchema).optional(),
  ResourceBookingConfig: z.lazy(() => ResourceBookingConfigUncheckedCreateNestedManyWithoutResourceInputSchema).optional(),
  WaitlistEntry: z.lazy(() => WaitlistEntryUncheckedCreateNestedManyWithoutResourceInputSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestUncheckedCreateNestedManyWithoutResourceInputSchema).optional(),
  ResourceAsset: z.lazy(() => ResourceAssetUncheckedCreateNestedManyWithoutResourceInputSchema).optional()
}).strict();

export default ResourceUncheckedCreateInputSchema;
