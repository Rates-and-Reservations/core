import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddOnCreateNestedOneWithoutRateAddOnInputSchema } from './AddOnCreateNestedOneWithoutRateAddOnInputSchema';

export const RateAddOnCreateWithoutRateInputSchema: z.ZodType<Prisma.RateAddOnCreateWithoutRateInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  addOn: z.lazy(() => AddOnCreateNestedOneWithoutRateAddOnInputSchema)
}).strict();

export default RateAddOnCreateWithoutRateInputSchema;
