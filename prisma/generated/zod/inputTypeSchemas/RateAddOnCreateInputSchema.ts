import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateCreateNestedOneWithoutRateAddOnInputSchema } from './RateCreateNestedOneWithoutRateAddOnInputSchema';
import { AddOnCreateNestedOneWithoutRateAddOnInputSchema } from './AddOnCreateNestedOneWithoutRateAddOnInputSchema';

export const RateAddOnCreateInputSchema: z.ZodType<Prisma.RateAddOnCreateInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  rate: z.lazy(() => RateCreateNestedOneWithoutRateAddOnInputSchema),
  addOn: z.lazy(() => AddOnCreateNestedOneWithoutRateAddOnInputSchema)
}).strict();

export default RateAddOnCreateInputSchema;
