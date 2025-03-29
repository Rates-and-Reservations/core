import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';
import { CustomerUpdateWithoutBookingRequestInputSchema } from './CustomerUpdateWithoutBookingRequestInputSchema';
import { CustomerUncheckedUpdateWithoutBookingRequestInputSchema } from './CustomerUncheckedUpdateWithoutBookingRequestInputSchema';

export const CustomerUpdateToOneWithWhereWithoutBookingRequestInputSchema: z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutBookingRequestInput> = z.object({
  where: z.lazy(() => CustomerWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CustomerUpdateWithoutBookingRequestInputSchema),z.lazy(() => CustomerUncheckedUpdateWithoutBookingRequestInputSchema) ]),
}).strict();

export default CustomerUpdateToOneWithWhereWithoutBookingRequestInputSchema;
