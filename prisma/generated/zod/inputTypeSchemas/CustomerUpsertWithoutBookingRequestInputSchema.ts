import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerUpdateWithoutBookingRequestInputSchema } from './CustomerUpdateWithoutBookingRequestInputSchema';
import { CustomerUncheckedUpdateWithoutBookingRequestInputSchema } from './CustomerUncheckedUpdateWithoutBookingRequestInputSchema';
import { CustomerCreateWithoutBookingRequestInputSchema } from './CustomerCreateWithoutBookingRequestInputSchema';
import { CustomerUncheckedCreateWithoutBookingRequestInputSchema } from './CustomerUncheckedCreateWithoutBookingRequestInputSchema';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';

export const CustomerUpsertWithoutBookingRequestInputSchema: z.ZodType<Prisma.CustomerUpsertWithoutBookingRequestInput> = z.object({
  update: z.union([ z.lazy(() => CustomerUpdateWithoutBookingRequestInputSchema),z.lazy(() => CustomerUncheckedUpdateWithoutBookingRequestInputSchema) ]),
  create: z.union([ z.lazy(() => CustomerCreateWithoutBookingRequestInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutBookingRequestInputSchema) ]),
  where: z.lazy(() => CustomerWhereInputSchema).optional()
}).strict();

export default CustomerUpsertWithoutBookingRequestInputSchema;
