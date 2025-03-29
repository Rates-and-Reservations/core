import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { RateUpdateOneRequiredWithoutRateAddOnNestedInputSchema } from './RateUpdateOneRequiredWithoutRateAddOnNestedInputSchema';
import { AddOnUpdateOneRequiredWithoutRateAddOnNestedInputSchema } from './AddOnUpdateOneRequiredWithoutRateAddOnNestedInputSchema';

export const RateAddOnUpdateInputSchema: z.ZodType<Prisma.RateAddOnUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  rate: z.lazy(() => RateUpdateOneRequiredWithoutRateAddOnNestedInputSchema).optional(),
  addOn: z.lazy(() => AddOnUpdateOneRequiredWithoutRateAddOnNestedInputSchema).optional()
}).strict();

export default RateAddOnUpdateInputSchema;
