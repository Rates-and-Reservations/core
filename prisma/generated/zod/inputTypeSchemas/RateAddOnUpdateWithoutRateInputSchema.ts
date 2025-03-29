import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { AddOnUpdateOneRequiredWithoutRateAddOnNestedInputSchema } from './AddOnUpdateOneRequiredWithoutRateAddOnNestedInputSchema';

export const RateAddOnUpdateWithoutRateInputSchema: z.ZodType<Prisma.RateAddOnUpdateWithoutRateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  addOn: z.lazy(() => AddOnUpdateOneRequiredWithoutRateAddOnNestedInputSchema).optional()
}).strict();

export default RateAddOnUpdateWithoutRateInputSchema;
