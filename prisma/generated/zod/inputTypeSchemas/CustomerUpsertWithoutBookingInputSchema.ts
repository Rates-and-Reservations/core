import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerUpdateWithoutBookingInputSchema } from './CustomerUpdateWithoutBookingInputSchema';
import { CustomerUncheckedUpdateWithoutBookingInputSchema } from './CustomerUncheckedUpdateWithoutBookingInputSchema';
import { CustomerCreateWithoutBookingInputSchema } from './CustomerCreateWithoutBookingInputSchema';
import { CustomerUncheckedCreateWithoutBookingInputSchema } from './CustomerUncheckedCreateWithoutBookingInputSchema';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';

export const CustomerUpsertWithoutBookingInputSchema: z.ZodType<Prisma.CustomerUpsertWithoutBookingInput> = z.object({
  update: z.union([ z.lazy(() => CustomerUpdateWithoutBookingInputSchema),z.lazy(() => CustomerUncheckedUpdateWithoutBookingInputSchema) ]),
  create: z.union([ z.lazy(() => CustomerCreateWithoutBookingInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutBookingInputSchema) ]),
  where: z.lazy(() => CustomerWhereInputSchema).optional()
}).strict();

export default CustomerUpsertWithoutBookingInputSchema;
