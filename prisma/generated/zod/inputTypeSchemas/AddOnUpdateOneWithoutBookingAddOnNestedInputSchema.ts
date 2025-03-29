import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddOnCreateWithoutBookingAddOnInputSchema } from './AddOnCreateWithoutBookingAddOnInputSchema';
import { AddOnUncheckedCreateWithoutBookingAddOnInputSchema } from './AddOnUncheckedCreateWithoutBookingAddOnInputSchema';
import { AddOnCreateOrConnectWithoutBookingAddOnInputSchema } from './AddOnCreateOrConnectWithoutBookingAddOnInputSchema';
import { AddOnUpsertWithoutBookingAddOnInputSchema } from './AddOnUpsertWithoutBookingAddOnInputSchema';
import { AddOnWhereInputSchema } from './AddOnWhereInputSchema';
import { AddOnWhereUniqueInputSchema } from './AddOnWhereUniqueInputSchema';
import { AddOnUpdateToOneWithWhereWithoutBookingAddOnInputSchema } from './AddOnUpdateToOneWithWhereWithoutBookingAddOnInputSchema';
import { AddOnUpdateWithoutBookingAddOnInputSchema } from './AddOnUpdateWithoutBookingAddOnInputSchema';
import { AddOnUncheckedUpdateWithoutBookingAddOnInputSchema } from './AddOnUncheckedUpdateWithoutBookingAddOnInputSchema';

export const AddOnUpdateOneWithoutBookingAddOnNestedInputSchema: z.ZodType<Prisma.AddOnUpdateOneWithoutBookingAddOnNestedInput> = z.object({
  create: z.union([ z.lazy(() => AddOnCreateWithoutBookingAddOnInputSchema),z.lazy(() => AddOnUncheckedCreateWithoutBookingAddOnInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AddOnCreateOrConnectWithoutBookingAddOnInputSchema).optional(),
  upsert: z.lazy(() => AddOnUpsertWithoutBookingAddOnInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => AddOnWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => AddOnWhereInputSchema) ]).optional(),
  connect: z.lazy(() => AddOnWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AddOnUpdateToOneWithWhereWithoutBookingAddOnInputSchema),z.lazy(() => AddOnUpdateWithoutBookingAddOnInputSchema),z.lazy(() => AddOnUncheckedUpdateWithoutBookingAddOnInputSchema) ]).optional(),
}).strict();

export default AddOnUpdateOneWithoutBookingAddOnNestedInputSchema;
