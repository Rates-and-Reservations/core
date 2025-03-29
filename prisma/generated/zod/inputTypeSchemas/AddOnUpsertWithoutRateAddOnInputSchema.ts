import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddOnUpdateWithoutRateAddOnInputSchema } from './AddOnUpdateWithoutRateAddOnInputSchema';
import { AddOnUncheckedUpdateWithoutRateAddOnInputSchema } from './AddOnUncheckedUpdateWithoutRateAddOnInputSchema';
import { AddOnCreateWithoutRateAddOnInputSchema } from './AddOnCreateWithoutRateAddOnInputSchema';
import { AddOnUncheckedCreateWithoutRateAddOnInputSchema } from './AddOnUncheckedCreateWithoutRateAddOnInputSchema';
import { AddOnWhereInputSchema } from './AddOnWhereInputSchema';

export const AddOnUpsertWithoutRateAddOnInputSchema: z.ZodType<Prisma.AddOnUpsertWithoutRateAddOnInput> = z.object({
  update: z.union([ z.lazy(() => AddOnUpdateWithoutRateAddOnInputSchema),z.lazy(() => AddOnUncheckedUpdateWithoutRateAddOnInputSchema) ]),
  create: z.union([ z.lazy(() => AddOnCreateWithoutRateAddOnInputSchema),z.lazy(() => AddOnUncheckedCreateWithoutRateAddOnInputSchema) ]),
  where: z.lazy(() => AddOnWhereInputSchema).optional()
}).strict();

export default AddOnUpsertWithoutRateAddOnInputSchema;
