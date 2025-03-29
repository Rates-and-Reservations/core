import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';
import { CustomerUpdateWithoutBookingInputSchema } from './CustomerUpdateWithoutBookingInputSchema';
import { CustomerUncheckedUpdateWithoutBookingInputSchema } from './CustomerUncheckedUpdateWithoutBookingInputSchema';

export const CustomerUpdateToOneWithWhereWithoutBookingInputSchema: z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutBookingInput> = z.object({
  where: z.lazy(() => CustomerWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CustomerUpdateWithoutBookingInputSchema),z.lazy(() => CustomerUncheckedUpdateWithoutBookingInputSchema) ]),
}).strict();

export default CustomerUpdateToOneWithWhereWithoutBookingInputSchema;
