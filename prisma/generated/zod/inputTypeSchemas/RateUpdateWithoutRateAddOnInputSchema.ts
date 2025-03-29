import { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { isValidDecimalInput } from './isValidDecimalInput';
import { DecimalJsLikeSchema } from './DecimalJsLikeSchema';
import { DecimalFieldUpdateOperationsInputSchema } from './DecimalFieldUpdateOperationsInputSchema';
import { RateDurationTypeSchema } from './RateDurationTypeSchema';
import { EnumRateDurationTypeFieldUpdateOperationsInputSchema } from './EnumRateDurationTypeFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { TaxTypeSchema } from './TaxTypeSchema';
import { EnumTaxTypeFieldUpdateOperationsInputSchema } from './EnumTaxTypeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { MerchantUpdateOneRequiredWithoutRateNestedInputSchema } from './MerchantUpdateOneRequiredWithoutRateNestedInputSchema';
import { ResourceUpdateOneRequiredWithoutRateNestedInputSchema } from './ResourceUpdateOneRequiredWithoutRateNestedInputSchema';
import { DiscountUpdateManyWithoutAppliesToRatesNestedInputSchema } from './DiscountUpdateManyWithoutAppliesToRatesNestedInputSchema';
import { BookingRateSnapshotUpdateManyWithoutRateNestedInputSchema } from './BookingRateSnapshotUpdateManyWithoutRateNestedInputSchema';

export const RateUpdateWithoutRateAddOnInputSchema: z.ZodType<Prisma.RateUpdateWithoutRateAddOnInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => DecimalFieldUpdateOperationsInputSchema) ]).optional(),
  currency: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  durationType: z.union([ z.lazy(() => RateDurationTypeSchema),z.lazy(() => EnumRateDurationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  isDefault: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  isPublished: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  isActive: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  orderIndex: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  bookingStartDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bookingEndDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  usageStartDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  usageEndDate: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  taxType: z.union([ z.lazy(() => TaxTypeSchema),z.lazy(() => EnumTaxTypeFieldUpdateOperationsInputSchema) ]).optional(),
  taxAmount: z.union([ z.union([z.number(),z.string(),z.instanceof(Prisma.Decimal),DecimalJsLikeSchema,]).refine((v) => isValidDecimalInput(v), { message: 'Must be a Decimal' }),z.lazy(() => DecimalFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  merchant: z.lazy(() => MerchantUpdateOneRequiredWithoutRateNestedInputSchema).optional(),
  resource: z.lazy(() => ResourceUpdateOneRequiredWithoutRateNestedInputSchema).optional(),
  Discount: z.lazy(() => DiscountUpdateManyWithoutAppliesToRatesNestedInputSchema).optional(),
  BookingRateSnapshot: z.lazy(() => BookingRateSnapshotUpdateManyWithoutRateNestedInputSchema).optional()
}).strict();

export default RateUpdateWithoutRateAddOnInputSchema;
