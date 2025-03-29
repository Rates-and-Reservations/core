import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddOnUpdateWithoutBookingItemAddOnInputSchema } from './AddOnUpdateWithoutBookingItemAddOnInputSchema';
import { AddOnUncheckedUpdateWithoutBookingItemAddOnInputSchema } from './AddOnUncheckedUpdateWithoutBookingItemAddOnInputSchema';
import { AddOnCreateWithoutBookingItemAddOnInputSchema } from './AddOnCreateWithoutBookingItemAddOnInputSchema';
import { AddOnUncheckedCreateWithoutBookingItemAddOnInputSchema } from './AddOnUncheckedCreateWithoutBookingItemAddOnInputSchema';
import { AddOnWhereInputSchema } from './AddOnWhereInputSchema';

export const AddOnUpsertWithoutBookingItemAddOnInputSchema: z.ZodType<Prisma.AddOnUpsertWithoutBookingItemAddOnInput> = z.object({
  update: z.union([ z.lazy(() => AddOnUpdateWithoutBookingItemAddOnInputSchema),z.lazy(() => AddOnUncheckedUpdateWithoutBookingItemAddOnInputSchema) ]),
  create: z.union([ z.lazy(() => AddOnCreateWithoutBookingItemAddOnInputSchema),z.lazy(() => AddOnUncheckedCreateWithoutBookingItemAddOnInputSchema) ]),
  where: z.lazy(() => AddOnWhereInputSchema).optional()
}).strict();

export default AddOnUpsertWithoutBookingItemAddOnInputSchema;
