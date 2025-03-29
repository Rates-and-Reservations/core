import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddOnWhereInputSchema } from './AddOnWhereInputSchema';
import { AddOnUpdateWithoutBookingAddOnInputSchema } from './AddOnUpdateWithoutBookingAddOnInputSchema';
import { AddOnUncheckedUpdateWithoutBookingAddOnInputSchema } from './AddOnUncheckedUpdateWithoutBookingAddOnInputSchema';

export const AddOnUpdateToOneWithWhereWithoutBookingAddOnInputSchema: z.ZodType<Prisma.AddOnUpdateToOneWithWhereWithoutBookingAddOnInput> = z.object({
  where: z.lazy(() => AddOnWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AddOnUpdateWithoutBookingAddOnInputSchema),z.lazy(() => AddOnUncheckedUpdateWithoutBookingAddOnInputSchema) ]),
}).strict();

export default AddOnUpdateToOneWithWhereWithoutBookingAddOnInputSchema;
