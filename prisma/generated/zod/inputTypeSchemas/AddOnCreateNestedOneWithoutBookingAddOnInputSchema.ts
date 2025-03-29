import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddOnCreateWithoutBookingAddOnInputSchema } from './AddOnCreateWithoutBookingAddOnInputSchema';
import { AddOnUncheckedCreateWithoutBookingAddOnInputSchema } from './AddOnUncheckedCreateWithoutBookingAddOnInputSchema';
import { AddOnCreateOrConnectWithoutBookingAddOnInputSchema } from './AddOnCreateOrConnectWithoutBookingAddOnInputSchema';
import { AddOnWhereUniqueInputSchema } from './AddOnWhereUniqueInputSchema';

export const AddOnCreateNestedOneWithoutBookingAddOnInputSchema: z.ZodType<Prisma.AddOnCreateNestedOneWithoutBookingAddOnInput> = z.object({
  create: z.union([ z.lazy(() => AddOnCreateWithoutBookingAddOnInputSchema),z.lazy(() => AddOnUncheckedCreateWithoutBookingAddOnInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AddOnCreateOrConnectWithoutBookingAddOnInputSchema).optional(),
  connect: z.lazy(() => AddOnWhereUniqueInputSchema).optional()
}).strict();

export default AddOnCreateNestedOneWithoutBookingAddOnInputSchema;
