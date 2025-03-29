import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerCreateWithoutBookingRequestInputSchema } from './CustomerCreateWithoutBookingRequestInputSchema';
import { CustomerUncheckedCreateWithoutBookingRequestInputSchema } from './CustomerUncheckedCreateWithoutBookingRequestInputSchema';
import { CustomerCreateOrConnectWithoutBookingRequestInputSchema } from './CustomerCreateOrConnectWithoutBookingRequestInputSchema';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';

export const CustomerCreateNestedOneWithoutBookingRequestInputSchema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutBookingRequestInput> = z.object({
  create: z.union([ z.lazy(() => CustomerCreateWithoutBookingRequestInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutBookingRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutBookingRequestInputSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputSchema).optional()
}).strict();

export default CustomerCreateNestedOneWithoutBookingRequestInputSchema;
