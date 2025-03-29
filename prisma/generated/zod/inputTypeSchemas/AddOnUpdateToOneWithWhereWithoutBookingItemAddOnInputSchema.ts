import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddOnWhereInputSchema } from './AddOnWhereInputSchema';
import { AddOnUpdateWithoutBookingItemAddOnInputSchema } from './AddOnUpdateWithoutBookingItemAddOnInputSchema';
import { AddOnUncheckedUpdateWithoutBookingItemAddOnInputSchema } from './AddOnUncheckedUpdateWithoutBookingItemAddOnInputSchema';

export const AddOnUpdateToOneWithWhereWithoutBookingItemAddOnInputSchema: z.ZodType<Prisma.AddOnUpdateToOneWithWhereWithoutBookingItemAddOnInput> = z.object({
  where: z.lazy(() => AddOnWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AddOnUpdateWithoutBookingItemAddOnInputSchema),z.lazy(() => AddOnUncheckedUpdateWithoutBookingItemAddOnInputSchema) ]),
}).strict();

export default AddOnUpdateToOneWithWhereWithoutBookingItemAddOnInputSchema;
