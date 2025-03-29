import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { DecimalFieldUpdateOperationsInputSchema } from './DecimalFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { MerchantUpdateOneRequiredWithoutAddOnNestedInputSchema } from './MerchantUpdateOneRequiredWithoutAddOnNestedInputSchema';
import { RateAddOnUpdateManyWithoutAddOnNestedInputSchema } from './RateAddOnUpdateManyWithoutAddOnNestedInputSchema';
import { BookingItemAddOnUpdateManyWithoutAddOnNestedInputSchema } from './BookingItemAddOnUpdateManyWithoutAddOnNestedInputSchema';

export const AddOnUpdateWithoutBookingAddOnInputSchema: z.ZodType<Prisma.AddOnUpdateWithoutBookingAddOnInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => DecimalFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  showInBooking: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  merchant: z.lazy(() => MerchantUpdateOneRequiredWithoutAddOnNestedInputSchema).optional(),
  RateAddOn: z.lazy(() => RateAddOnUpdateManyWithoutAddOnNestedInputSchema).optional(),
  BookingItemAddOn: z.lazy(() => BookingItemAddOnUpdateManyWithoutAddOnNestedInputSchema).optional()
}).strict();

export default AddOnUpdateWithoutBookingAddOnInputSchema;
