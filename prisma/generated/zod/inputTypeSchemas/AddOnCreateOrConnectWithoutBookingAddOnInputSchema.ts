import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddOnWhereUniqueInputSchema } from './AddOnWhereUniqueInputSchema';
import { AddOnCreateWithoutBookingAddOnInputSchema } from './AddOnCreateWithoutBookingAddOnInputSchema';
import { AddOnUncheckedCreateWithoutBookingAddOnInputSchema } from './AddOnUncheckedCreateWithoutBookingAddOnInputSchema';

export const AddOnCreateOrConnectWithoutBookingAddOnInputSchema: z.ZodType<Prisma.AddOnCreateOrConnectWithoutBookingAddOnInput> = z.object({
  where: z.lazy(() => AddOnWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AddOnCreateWithoutBookingAddOnInputSchema),z.lazy(() => AddOnUncheckedCreateWithoutBookingAddOnInputSchema) ]),
}).strict();

export default AddOnCreateOrConnectWithoutBookingAddOnInputSchema;
