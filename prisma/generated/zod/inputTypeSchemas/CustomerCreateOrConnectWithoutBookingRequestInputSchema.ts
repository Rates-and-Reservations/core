import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';
import { CustomerCreateWithoutBookingRequestInputSchema } from './CustomerCreateWithoutBookingRequestInputSchema';
import { CustomerUncheckedCreateWithoutBookingRequestInputSchema } from './CustomerUncheckedCreateWithoutBookingRequestInputSchema';

export const CustomerCreateOrConnectWithoutBookingRequestInputSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutBookingRequestInput> = z.object({
  where: z.lazy(() => CustomerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CustomerCreateWithoutBookingRequestInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutBookingRequestInputSchema) ]),
}).strict();

export default CustomerCreateOrConnectWithoutBookingRequestInputSchema;
