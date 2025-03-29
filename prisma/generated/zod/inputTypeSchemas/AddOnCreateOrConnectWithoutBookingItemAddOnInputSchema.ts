import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddOnWhereUniqueInputSchema } from './AddOnWhereUniqueInputSchema';
import { AddOnCreateWithoutBookingItemAddOnInputSchema } from './AddOnCreateWithoutBookingItemAddOnInputSchema';
import { AddOnUncheckedCreateWithoutBookingItemAddOnInputSchema } from './AddOnUncheckedCreateWithoutBookingItemAddOnInputSchema';

export const AddOnCreateOrConnectWithoutBookingItemAddOnInputSchema: z.ZodType<Prisma.AddOnCreateOrConnectWithoutBookingItemAddOnInput> = z.object({
  where: z.lazy(() => AddOnWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AddOnCreateWithoutBookingItemAddOnInputSchema),z.lazy(() => AddOnUncheckedCreateWithoutBookingItemAddOnInputSchema) ]),
}).strict();

export default AddOnCreateOrConnectWithoutBookingItemAddOnInputSchema;
