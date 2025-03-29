import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerCreateWithoutBookingRequestInputSchema } from './CustomerCreateWithoutBookingRequestInputSchema';
import { CustomerUncheckedCreateWithoutBookingRequestInputSchema } from './CustomerUncheckedCreateWithoutBookingRequestInputSchema';
import { CustomerCreateOrConnectWithoutBookingRequestInputSchema } from './CustomerCreateOrConnectWithoutBookingRequestInputSchema';
import { CustomerUpsertWithoutBookingRequestInputSchema } from './CustomerUpsertWithoutBookingRequestInputSchema';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';
import { CustomerUpdateToOneWithWhereWithoutBookingRequestInputSchema } from './CustomerUpdateToOneWithWhereWithoutBookingRequestInputSchema';
import { CustomerUpdateWithoutBookingRequestInputSchema } from './CustomerUpdateWithoutBookingRequestInputSchema';
import { CustomerUncheckedUpdateWithoutBookingRequestInputSchema } from './CustomerUncheckedUpdateWithoutBookingRequestInputSchema';

export const CustomerUpdateOneWithoutBookingRequestNestedInputSchema: z.ZodType<Prisma.CustomerUpdateOneWithoutBookingRequestNestedInput> = z.object({
  create: z.union([ z.lazy(() => CustomerCreateWithoutBookingRequestInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutBookingRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutBookingRequestInputSchema).optional(),
  upsert: z.lazy(() => CustomerUpsertWithoutBookingRequestInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => CustomerWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => CustomerWhereInputSchema) ]).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CustomerUpdateToOneWithWhereWithoutBookingRequestInputSchema),z.lazy(() => CustomerUpdateWithoutBookingRequestInputSchema),z.lazy(() => CustomerUncheckedUpdateWithoutBookingRequestInputSchema) ]).optional(),
}).strict();

export default CustomerUpdateOneWithoutBookingRequestNestedInputSchema;
