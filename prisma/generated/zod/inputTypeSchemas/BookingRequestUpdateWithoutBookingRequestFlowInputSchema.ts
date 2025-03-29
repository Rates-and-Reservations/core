import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BookingRequestStatusSchema } from './BookingRequestStatusSchema';
import { EnumBookingRequestStatusFieldUpdateOperationsInputSchema } from './EnumBookingRequestStatusFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { MerchantUpdateOneRequiredWithoutBookingRequestNestedInputSchema } from './MerchantUpdateOneRequiredWithoutBookingRequestNestedInputSchema';
import { CustomerUpdateOneWithoutBookingRequestNestedInputSchema } from './CustomerUpdateOneWithoutBookingRequestNestedInputSchema';
import { ResourceUpdateOneWithoutBookingRequestNestedInputSchema } from './ResourceUpdateOneWithoutBookingRequestNestedInputSchema';
import { BookingTemplateUpdateOneRequiredWithoutBookingRequestNestedInputSchema } from './BookingTemplateUpdateOneRequiredWithoutBookingRequestNestedInputSchema';
import { BookingRequestActionValueUpdateManyWithoutBookingRequestNestedInputSchema } from './BookingRequestActionValueUpdateManyWithoutBookingRequestNestedInputSchema';
import { BookingUpdateManyWithoutBookingRequestNestedInputSchema } from './BookingUpdateManyWithoutBookingRequestNestedInputSchema';

export const BookingRequestUpdateWithoutBookingRequestFlowInputSchema: z.ZodType<Prisma.BookingRequestUpdateWithoutBookingRequestFlowInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  prefilledFields: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  expiresAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.lazy(() => BookingRequestStatusSchema),z.lazy(() => EnumBookingRequestStatusFieldUpdateOperationsInputSchema) ]).optional(),
  actionStatus: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  finalizedSnapshot: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  merchant: z.lazy(() => MerchantUpdateOneRequiredWithoutBookingRequestNestedInputSchema).optional(),
  customer: z.lazy(() => CustomerUpdateOneWithoutBookingRequestNestedInputSchema).optional(),
  resource: z.lazy(() => ResourceUpdateOneWithoutBookingRequestNestedInputSchema).optional(),
  template: z.lazy(() => BookingTemplateUpdateOneRequiredWithoutBookingRequestNestedInputSchema).optional(),
  BookingRequestActionValue: z.lazy(() => BookingRequestActionValueUpdateManyWithoutBookingRequestNestedInputSchema).optional(),
  Booking: z.lazy(() => BookingUpdateManyWithoutBookingRequestNestedInputSchema).optional()
}).strict();

export default BookingRequestUpdateWithoutBookingRequestFlowInputSchema;
