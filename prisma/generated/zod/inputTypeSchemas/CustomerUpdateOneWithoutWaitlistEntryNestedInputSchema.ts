import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerCreateWithoutWaitlistEntryInputSchema } from './CustomerCreateWithoutWaitlistEntryInputSchema';
import { CustomerUncheckedCreateWithoutWaitlistEntryInputSchema } from './CustomerUncheckedCreateWithoutWaitlistEntryInputSchema';
import { CustomerCreateOrConnectWithoutWaitlistEntryInputSchema } from './CustomerCreateOrConnectWithoutWaitlistEntryInputSchema';
import { CustomerUpsertWithoutWaitlistEntryInputSchema } from './CustomerUpsertWithoutWaitlistEntryInputSchema';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';
import { CustomerUpdateToOneWithWhereWithoutWaitlistEntryInputSchema } from './CustomerUpdateToOneWithWhereWithoutWaitlistEntryInputSchema';
import { CustomerUpdateWithoutWaitlistEntryInputSchema } from './CustomerUpdateWithoutWaitlistEntryInputSchema';
import { CustomerUncheckedUpdateWithoutWaitlistEntryInputSchema } from './CustomerUncheckedUpdateWithoutWaitlistEntryInputSchema';

export const CustomerUpdateOneWithoutWaitlistEntryNestedInputSchema: z.ZodType<Prisma.CustomerUpdateOneWithoutWaitlistEntryNestedInput> = z.object({
  create: z.union([ z.lazy(() => CustomerCreateWithoutWaitlistEntryInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutWaitlistEntryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutWaitlistEntryInputSchema).optional(),
  upsert: z.lazy(() => CustomerUpsertWithoutWaitlistEntryInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => CustomerWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => CustomerWhereInputSchema) ]).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CustomerUpdateToOneWithWhereWithoutWaitlistEntryInputSchema),z.lazy(() => CustomerUpdateWithoutWaitlistEntryInputSchema),z.lazy(() => CustomerUncheckedUpdateWithoutWaitlistEntryInputSchema) ]).optional(),
}).strict();

export default CustomerUpdateOneWithoutWaitlistEntryNestedInputSchema;
