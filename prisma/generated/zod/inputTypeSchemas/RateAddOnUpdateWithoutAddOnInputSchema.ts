import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { RateUpdateOneRequiredWithoutRateAddOnNestedInputSchema } from './RateUpdateOneRequiredWithoutRateAddOnNestedInputSchema';

export const RateAddOnUpdateWithoutAddOnInputSchema: z.ZodType<Prisma.RateAddOnUpdateWithoutAddOnInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  rate: z.lazy(() => RateUpdateOneRequiredWithoutRateAddOnNestedInputSchema).optional()
}).strict();

export default RateAddOnUpdateWithoutAddOnInputSchema;
