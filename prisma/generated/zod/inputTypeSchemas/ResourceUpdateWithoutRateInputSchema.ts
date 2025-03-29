import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { ResourceUpdatetagsInputSchema } from './ResourceUpdatetagsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { MerchantUpdateOneRequiredWithoutResourceNestedInputSchema } from './MerchantUpdateOneRequiredWithoutResourceNestedInputSchema';
import { ResourceTemplateUpdateOneRequiredWithoutResourceNestedInputSchema } from './ResourceTemplateUpdateOneRequiredWithoutResourceNestedInputSchema';
import { ResourceBookingConfigUpdateManyWithoutResourceNestedInputSchema } from './ResourceBookingConfigUpdateManyWithoutResourceNestedInputSchema';
import { WaitlistEntryUpdateManyWithoutResourceNestedInputSchema } from './WaitlistEntryUpdateManyWithoutResourceNestedInputSchema';
import { BookingRequestUpdateManyWithoutResourceNestedInputSchema } from './BookingRequestUpdateManyWithoutResourceNestedInputSchema';
import { ResourceAssetUpdateManyWithoutResourceNestedInputSchema } from './ResourceAssetUpdateManyWithoutResourceNestedInputSchema';

export const ResourceUpdateWithoutRateInputSchema: z.ZodType<Prisma.ResourceUpdateWithoutRateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  capacity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  tags: z.union([ z.lazy(() => ResourceUpdatetagsInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  merchant: z.lazy(() => MerchantUpdateOneRequiredWithoutResourceNestedInputSchema).optional(),
  template: z.lazy(() => ResourceTemplateUpdateOneRequiredWithoutResourceNestedInputSchema).optional(),
  ResourceBookingConfig: z.lazy(() => ResourceBookingConfigUpdateManyWithoutResourceNestedInputSchema).optional(),
  WaitlistEntry: z.lazy(() => WaitlistEntryUpdateManyWithoutResourceNestedInputSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestUpdateManyWithoutResourceNestedInputSchema).optional(),
  ResourceAsset: z.lazy(() => ResourceAssetUpdateManyWithoutResourceNestedInputSchema).optional()
}).strict();

export default ResourceUpdateWithoutRateInputSchema;
