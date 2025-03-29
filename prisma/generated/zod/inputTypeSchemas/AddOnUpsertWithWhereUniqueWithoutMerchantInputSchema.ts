import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddOnWhereUniqueInputSchema } from './AddOnWhereUniqueInputSchema';
import { AddOnUpdateWithoutMerchantInputSchema } from './AddOnUpdateWithoutMerchantInputSchema';
import { AddOnUncheckedUpdateWithoutMerchantInputSchema } from './AddOnUncheckedUpdateWithoutMerchantInputSchema';
import { AddOnCreateWithoutMerchantInputSchema } from './AddOnCreateWithoutMerchantInputSchema';
import { AddOnUncheckedCreateWithoutMerchantInputSchema } from './AddOnUncheckedCreateWithoutMerchantInputSchema';

export const AddOnUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.AddOnUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => AddOnWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AddOnUpdateWithoutMerchantInputSchema),z.lazy(() => AddOnUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => AddOnCreateWithoutMerchantInputSchema),z.lazy(() => AddOnUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default AddOnUpsertWithWhereUniqueWithoutMerchantInputSchema;
