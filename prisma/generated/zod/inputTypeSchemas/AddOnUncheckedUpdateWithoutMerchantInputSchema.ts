import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { DecimalFieldUpdateOperationsInputSchema } from './DecimalFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { RateAddOnUncheckedUpdateManyWithoutAddOnNestedInputSchema } from './RateAddOnUncheckedUpdateManyWithoutAddOnNestedInputSchema';
import { BookingItemAddOnUncheckedUpdateManyWithoutAddOnNestedInputSchema } from './BookingItemAddOnUncheckedUpdateManyWithoutAddOnNestedInputSchema';
import { BookingAddOnUncheckedUpdateManyWithoutAddOnNestedInputSchema } from './BookingAddOnUncheckedUpdateManyWithoutAddOnNestedInputSchema';

export const AddOnUncheckedUpdateWithoutMerchantInputSchema: z.ZodType<Prisma.AddOnUncheckedUpdateWithoutMerchantInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => DecimalFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  showInBooking: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  RateAddOn: z.lazy(() => RateAddOnUncheckedUpdateManyWithoutAddOnNestedInputSchema).optional(),
  BookingItemAddOn: z.lazy(() => BookingItemAddOnUncheckedUpdateManyWithoutAddOnNestedInputSchema).optional(),
  BookingAddOn: z.lazy(() => BookingAddOnUncheckedUpdateManyWithoutAddOnNestedInputSchema).optional()
}).strict();

export default AddOnUncheckedUpdateWithoutMerchantInputSchema;
