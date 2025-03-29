import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { WaitlistStatusSchema } from './WaitlistStatusSchema';
import { EnumWaitlistStatusFieldUpdateOperationsInputSchema } from './EnumWaitlistStatusFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { MerchantUpdateOneRequiredWithoutWaitlistEntryNestedInputSchema } from './MerchantUpdateOneRequiredWithoutWaitlistEntryNestedInputSchema';
import { ResourceUpdateOneRequiredWithoutWaitlistEntryNestedInputSchema } from './ResourceUpdateOneRequiredWithoutWaitlistEntryNestedInputSchema';

export const WaitlistEntryUpdateWithoutCustomerInputSchema: z.ZodType<Prisma.WaitlistEntryUpdateWithoutCustomerInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  desiredStartTime: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  desiredEndTime: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.lazy(() => WaitlistStatusSchema),z.lazy(() => EnumWaitlistStatusFieldUpdateOperationsInputSchema) ]).optional(),
  priority: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  notifiedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  promotedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  merchant: z.lazy(() => MerchantUpdateOneRequiredWithoutWaitlistEntryNestedInputSchema).optional(),
  resource: z.lazy(() => ResourceUpdateOneRequiredWithoutWaitlistEntryNestedInputSchema).optional()
}).strict();

export default WaitlistEntryUpdateWithoutCustomerInputSchema;
