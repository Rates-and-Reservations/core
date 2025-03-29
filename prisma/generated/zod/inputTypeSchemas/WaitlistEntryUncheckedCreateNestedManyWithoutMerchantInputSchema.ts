import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistEntryCreateWithoutMerchantInputSchema } from './WaitlistEntryCreateWithoutMerchantInputSchema';
import { WaitlistEntryUncheckedCreateWithoutMerchantInputSchema } from './WaitlistEntryUncheckedCreateWithoutMerchantInputSchema';
import { WaitlistEntryCreateOrConnectWithoutMerchantInputSchema } from './WaitlistEntryCreateOrConnectWithoutMerchantInputSchema';
import { WaitlistEntryCreateManyMerchantInputEnvelopeSchema } from './WaitlistEntryCreateManyMerchantInputEnvelopeSchema';
import { WaitlistEntryWhereUniqueInputSchema } from './WaitlistEntryWhereUniqueInputSchema';

export const WaitlistEntryUncheckedCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.WaitlistEntryUncheckedCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => WaitlistEntryCreateWithoutMerchantInputSchema),z.lazy(() => WaitlistEntryCreateWithoutMerchantInputSchema).array(),z.lazy(() => WaitlistEntryUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => WaitlistEntryUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WaitlistEntryCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => WaitlistEntryCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WaitlistEntryCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WaitlistEntryWhereUniqueInputSchema),z.lazy(() => WaitlistEntryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default WaitlistEntryUncheckedCreateNestedManyWithoutMerchantInputSchema;
