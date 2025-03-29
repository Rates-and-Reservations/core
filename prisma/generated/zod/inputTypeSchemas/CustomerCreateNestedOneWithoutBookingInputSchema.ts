import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerCreateWithoutBookingInputSchema } from './CustomerCreateWithoutBookingInputSchema';
import { CustomerUncheckedCreateWithoutBookingInputSchema } from './CustomerUncheckedCreateWithoutBookingInputSchema';
import { CustomerCreateOrConnectWithoutBookingInputSchema } from './CustomerCreateOrConnectWithoutBookingInputSchema';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';

export const CustomerCreateNestedOneWithoutBookingInputSchema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutBookingInput> = z.object({
  create: z.union([ z.lazy(() => CustomerCreateWithoutBookingInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutBookingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutBookingInputSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputSchema).optional()
}).strict();

export default CustomerCreateNestedOneWithoutBookingInputSchema;
