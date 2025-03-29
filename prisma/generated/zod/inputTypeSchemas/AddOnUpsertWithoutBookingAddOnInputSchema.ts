import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddOnUpdateWithoutBookingAddOnInputSchema } from './AddOnUpdateWithoutBookingAddOnInputSchema';
import { AddOnUncheckedUpdateWithoutBookingAddOnInputSchema } from './AddOnUncheckedUpdateWithoutBookingAddOnInputSchema';
import { AddOnCreateWithoutBookingAddOnInputSchema } from './AddOnCreateWithoutBookingAddOnInputSchema';
import { AddOnUncheckedCreateWithoutBookingAddOnInputSchema } from './AddOnUncheckedCreateWithoutBookingAddOnInputSchema';
import { AddOnWhereInputSchema } from './AddOnWhereInputSchema';

export const AddOnUpsertWithoutBookingAddOnInputSchema: z.ZodType<Prisma.AddOnUpsertWithoutBookingAddOnInput> = z.object({
  update: z.union([ z.lazy(() => AddOnUpdateWithoutBookingAddOnInputSchema),z.lazy(() => AddOnUncheckedUpdateWithoutBookingAddOnInputSchema) ]),
  create: z.union([ z.lazy(() => AddOnCreateWithoutBookingAddOnInputSchema),z.lazy(() => AddOnUncheckedCreateWithoutBookingAddOnInputSchema) ]),
  where: z.lazy(() => AddOnWhereInputSchema).optional()
}).strict();

export default AddOnUpsertWithoutBookingAddOnInputSchema;
