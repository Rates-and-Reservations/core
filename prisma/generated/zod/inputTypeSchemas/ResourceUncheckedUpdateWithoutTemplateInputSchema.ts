import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { ResourceUpdatetagsInputSchema } from './ResourceUpdatetagsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { RateUncheckedUpdateManyWithoutResourceNestedInputSchema } from './RateUncheckedUpdateManyWithoutResourceNestedInputSchema';
import { ResourceBookingConfigUncheckedUpdateManyWithoutResourceNestedInputSchema } from './ResourceBookingConfigUncheckedUpdateManyWithoutResourceNestedInputSchema';
import { WaitlistEntryUncheckedUpdateManyWithoutResourceNestedInputSchema } from './WaitlistEntryUncheckedUpdateManyWithoutResourceNestedInputSchema';
import { BookingRequestUncheckedUpdateManyWithoutResourceNestedInputSchema } from './BookingRequestUncheckedUpdateManyWithoutResourceNestedInputSchema';
import { ResourceAssetUncheckedUpdateManyWithoutResourceNestedInputSchema } from './ResourceAssetUncheckedUpdateManyWithoutResourceNestedInputSchema';

export const ResourceUncheckedUpdateWithoutTemplateInputSchema: z.ZodType<Prisma.ResourceUncheckedUpdateWithoutTemplateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  merchantId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  capacity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  tags: z.union([ z.lazy(() => ResourceUpdatetagsInputSchema),z.string().array() ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Rate: z.lazy(() => RateUncheckedUpdateManyWithoutResourceNestedInputSchema).optional(),
  ResourceBookingConfig: z.lazy(() => ResourceBookingConfigUncheckedUpdateManyWithoutResourceNestedInputSchema).optional(),
  WaitlistEntry: z.lazy(() => WaitlistEntryUncheckedUpdateManyWithoutResourceNestedInputSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestUncheckedUpdateManyWithoutResourceNestedInputSchema).optional(),
  ResourceAsset: z.lazy(() => ResourceAssetUncheckedUpdateManyWithoutResourceNestedInputSchema).optional()
}).strict();

export default ResourceUncheckedUpdateWithoutTemplateInputSchema;
