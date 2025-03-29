import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddOnCreateWithoutBookingItemAddOnInputSchema } from './AddOnCreateWithoutBookingItemAddOnInputSchema';
import { AddOnUncheckedCreateWithoutBookingItemAddOnInputSchema } from './AddOnUncheckedCreateWithoutBookingItemAddOnInputSchema';
import { AddOnCreateOrConnectWithoutBookingItemAddOnInputSchema } from './AddOnCreateOrConnectWithoutBookingItemAddOnInputSchema';
import { AddOnUpsertWithoutBookingItemAddOnInputSchema } from './AddOnUpsertWithoutBookingItemAddOnInputSchema';
import { AddOnWhereUniqueInputSchema } from './AddOnWhereUniqueInputSchema';
import { AddOnUpdateToOneWithWhereWithoutBookingItemAddOnInputSchema } from './AddOnUpdateToOneWithWhereWithoutBookingItemAddOnInputSchema';
import { AddOnUpdateWithoutBookingItemAddOnInputSchema } from './AddOnUpdateWithoutBookingItemAddOnInputSchema';
import { AddOnUncheckedUpdateWithoutBookingItemAddOnInputSchema } from './AddOnUncheckedUpdateWithoutBookingItemAddOnInputSchema';

export const AddOnUpdateOneRequiredWithoutBookingItemAddOnNestedInputSchema: z.ZodType<Prisma.AddOnUpdateOneRequiredWithoutBookingItemAddOnNestedInput> = z.object({
  create: z.union([ z.lazy(() => AddOnCreateWithoutBookingItemAddOnInputSchema),z.lazy(() => AddOnUncheckedCreateWithoutBookingItemAddOnInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AddOnCreateOrConnectWithoutBookingItemAddOnInputSchema).optional(),
  upsert: z.lazy(() => AddOnUpsertWithoutBookingItemAddOnInputSchema).optional(),
  connect: z.lazy(() => AddOnWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AddOnUpdateToOneWithWhereWithoutBookingItemAddOnInputSchema),z.lazy(() => AddOnUpdateWithoutBookingItemAddOnInputSchema),z.lazy(() => AddOnUncheckedUpdateWithoutBookingItemAddOnInputSchema) ]).optional(),
}).strict();

export default AddOnUpdateOneRequiredWithoutBookingItemAddOnNestedInputSchema;
