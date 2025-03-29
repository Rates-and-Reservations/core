import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerCreateWithoutBookingInputSchema } from './CustomerCreateWithoutBookingInputSchema';
import { CustomerUncheckedCreateWithoutBookingInputSchema } from './CustomerUncheckedCreateWithoutBookingInputSchema';
import { CustomerCreateOrConnectWithoutBookingInputSchema } from './CustomerCreateOrConnectWithoutBookingInputSchema';
import { CustomerUpsertWithoutBookingInputSchema } from './CustomerUpsertWithoutBookingInputSchema';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';
import { CustomerUpdateToOneWithWhereWithoutBookingInputSchema } from './CustomerUpdateToOneWithWhereWithoutBookingInputSchema';
import { CustomerUpdateWithoutBookingInputSchema } from './CustomerUpdateWithoutBookingInputSchema';
import { CustomerUncheckedUpdateWithoutBookingInputSchema } from './CustomerUncheckedUpdateWithoutBookingInputSchema';

export const CustomerUpdateOneWithoutBookingNestedInputSchema: z.ZodType<Prisma.CustomerUpdateOneWithoutBookingNestedInput> = z.object({
  create: z.union([ z.lazy(() => CustomerCreateWithoutBookingInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutBookingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutBookingInputSchema).optional(),
  upsert: z.lazy(() => CustomerUpsertWithoutBookingInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => CustomerWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => CustomerWhereInputSchema) ]).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CustomerUpdateToOneWithWhereWithoutBookingInputSchema),z.lazy(() => CustomerUpdateWithoutBookingInputSchema),z.lazy(() => CustomerUncheckedUpdateWithoutBookingInputSchema) ]).optional(),
}).strict();

export default CustomerUpdateOneWithoutBookingNestedInputSchema;
