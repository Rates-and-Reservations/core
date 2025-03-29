import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistEntryCreateWithoutMerchantInputSchema } from './WaitlistEntryCreateWithoutMerchantInputSchema';
import { WaitlistEntryUncheckedCreateWithoutMerchantInputSchema } from './WaitlistEntryUncheckedCreateWithoutMerchantInputSchema';
import { WaitlistEntryCreateOrConnectWithoutMerchantInputSchema } from './WaitlistEntryCreateOrConnectWithoutMerchantInputSchema';
import { WaitlistEntryUpsertWithWhereUniqueWithoutMerchantInputSchema } from './WaitlistEntryUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { WaitlistEntryCreateManyMerchantInputEnvelopeSchema } from './WaitlistEntryCreateManyMerchantInputEnvelopeSchema';
import { WaitlistEntryWhereUniqueInputSchema } from './WaitlistEntryWhereUniqueInputSchema';
import { WaitlistEntryUpdateWithWhereUniqueWithoutMerchantInputSchema } from './WaitlistEntryUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { WaitlistEntryUpdateManyWithWhereWithoutMerchantInputSchema } from './WaitlistEntryUpdateManyWithWhereWithoutMerchantInputSchema';
import { WaitlistEntryScalarWhereInputSchema } from './WaitlistEntryScalarWhereInputSchema';

export const WaitlistEntryUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.WaitlistEntryUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => WaitlistEntryCreateWithoutMerchantInputSchema),z.lazy(() => WaitlistEntryCreateWithoutMerchantInputSchema).array(),z.lazy(() => WaitlistEntryUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => WaitlistEntryUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WaitlistEntryCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => WaitlistEntryCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WaitlistEntryUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => WaitlistEntryUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WaitlistEntryCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WaitlistEntryWhereUniqueInputSchema),z.lazy(() => WaitlistEntryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WaitlistEntryWhereUniqueInputSchema),z.lazy(() => WaitlistEntryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WaitlistEntryWhereUniqueInputSchema),z.lazy(() => WaitlistEntryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WaitlistEntryWhereUniqueInputSchema),z.lazy(() => WaitlistEntryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WaitlistEntryUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => WaitlistEntryUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WaitlistEntryUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => WaitlistEntryUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WaitlistEntryScalarWhereInputSchema),z.lazy(() => WaitlistEntryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default WaitlistEntryUpdateManyWithoutMerchantNestedInputSchema;
