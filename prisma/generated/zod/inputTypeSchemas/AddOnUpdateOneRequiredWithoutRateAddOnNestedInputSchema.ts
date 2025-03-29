import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddOnCreateWithoutRateAddOnInputSchema } from './AddOnCreateWithoutRateAddOnInputSchema';
import { AddOnUncheckedCreateWithoutRateAddOnInputSchema } from './AddOnUncheckedCreateWithoutRateAddOnInputSchema';
import { AddOnCreateOrConnectWithoutRateAddOnInputSchema } from './AddOnCreateOrConnectWithoutRateAddOnInputSchema';
import { AddOnUpsertWithoutRateAddOnInputSchema } from './AddOnUpsertWithoutRateAddOnInputSchema';
import { AddOnWhereUniqueInputSchema } from './AddOnWhereUniqueInputSchema';
import { AddOnUpdateToOneWithWhereWithoutRateAddOnInputSchema } from './AddOnUpdateToOneWithWhereWithoutRateAddOnInputSchema';
import { AddOnUpdateWithoutRateAddOnInputSchema } from './AddOnUpdateWithoutRateAddOnInputSchema';
import { AddOnUncheckedUpdateWithoutRateAddOnInputSchema } from './AddOnUncheckedUpdateWithoutRateAddOnInputSchema';

export const AddOnUpdateOneRequiredWithoutRateAddOnNestedInputSchema: z.ZodType<Prisma.AddOnUpdateOneRequiredWithoutRateAddOnNestedInput> = z.object({
  create: z.union([ z.lazy(() => AddOnCreateWithoutRateAddOnInputSchema),z.lazy(() => AddOnUncheckedCreateWithoutRateAddOnInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AddOnCreateOrConnectWithoutRateAddOnInputSchema).optional(),
  upsert: z.lazy(() => AddOnUpsertWithoutRateAddOnInputSchema).optional(),
  connect: z.lazy(() => AddOnWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AddOnUpdateToOneWithWhereWithoutRateAddOnInputSchema),z.lazy(() => AddOnUpdateWithoutRateAddOnInputSchema),z.lazy(() => AddOnUncheckedUpdateWithoutRateAddOnInputSchema) ]).optional(),
}).strict();

export default AddOnUpdateOneRequiredWithoutRateAddOnNestedInputSchema;
