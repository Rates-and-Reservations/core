import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';
import { CustomerCreateWithoutBookingInputSchema } from './CustomerCreateWithoutBookingInputSchema';
import { CustomerUncheckedCreateWithoutBookingInputSchema } from './CustomerUncheckedCreateWithoutBookingInputSchema';

export const CustomerCreateOrConnectWithoutBookingInputSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutBookingInput> = z.object({
  where: z.lazy(() => CustomerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CustomerCreateWithoutBookingInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutBookingInputSchema) ]),
}).strict();

export default CustomerCreateOrConnectWithoutBookingInputSchema;
