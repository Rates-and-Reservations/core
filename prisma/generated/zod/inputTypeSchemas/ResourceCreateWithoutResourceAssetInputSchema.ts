import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { ResourceCreatetagsInputSchema } from './ResourceCreatetagsInputSchema';
import { MerchantCreateNestedOneWithoutResourceInputSchema } from './MerchantCreateNestedOneWithoutResourceInputSchema';
import { ResourceTemplateCreateNestedOneWithoutResourceInputSchema } from './ResourceTemplateCreateNestedOneWithoutResourceInputSchema';
import { RateCreateNestedManyWithoutResourceInputSchema } from './RateCreateNestedManyWithoutResourceInputSchema';
import { ResourceBookingConfigCreateNestedManyWithoutResourceInputSchema } from './ResourceBookingConfigCreateNestedManyWithoutResourceInputSchema';
import { WaitlistEntryCreateNestedManyWithoutResourceInputSchema } from './WaitlistEntryCreateNestedManyWithoutResourceInputSchema';
import { BookingRequestCreateNestedManyWithoutResourceInputSchema } from './BookingRequestCreateNestedManyWithoutResourceInputSchema';

export const ResourceCreateWithoutResourceAssetInputSchema: z.ZodType<Prisma.ResourceCreateWithoutResourceAssetInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  capacity: z.number().int(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  tags: z.union([ z.lazy(() => ResourceCreatetagsInputSchema),z.string().array() ]).optional(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  merchant: z.lazy(() => MerchantCreateNestedOneWithoutResourceInputSchema),
  template: z.lazy(() => ResourceTemplateCreateNestedOneWithoutResourceInputSchema),
  Rate: z.lazy(() => RateCreateNestedManyWithoutResourceInputSchema).optional(),
  ResourceBookingConfig: z.lazy(() => ResourceBookingConfigCreateNestedManyWithoutResourceInputSchema).optional(),
  WaitlistEntry: z.lazy(() => WaitlistEntryCreateNestedManyWithoutResourceInputSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestCreateNestedManyWithoutResourceInputSchema).optional()
}).strict();

export default ResourceCreateWithoutResourceAssetInputSchema;
