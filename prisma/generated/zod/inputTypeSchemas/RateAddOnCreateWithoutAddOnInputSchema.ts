import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RateCreateNestedOneWithoutRateAddOnInputSchema } from './RateCreateNestedOneWithoutRateAddOnInputSchema';

export const RateAddOnCreateWithoutAddOnInputSchema: z.ZodType<Prisma.RateAddOnCreateWithoutAddOnInput> = z.object({
  id: z.string().cuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  rate: z.lazy(() => RateCreateNestedOneWithoutRateAddOnInputSchema)
}).strict();

export default RateAddOnCreateWithoutAddOnInputSchema;
