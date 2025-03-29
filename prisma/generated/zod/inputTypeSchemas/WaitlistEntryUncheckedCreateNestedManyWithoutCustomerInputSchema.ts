import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistEntryCreateWithoutCustomerInputSchema } from './WaitlistEntryCreateWithoutCustomerInputSchema';
import { WaitlistEntryUncheckedCreateWithoutCustomerInputSchema } from './WaitlistEntryUncheckedCreateWithoutCustomerInputSchema';
import { WaitlistEntryCreateOrConnectWithoutCustomerInputSchema } from './WaitlistEntryCreateOrConnectWithoutCustomerInputSchema';
import { WaitlistEntryCreateManyCustomerInputEnvelopeSchema } from './WaitlistEntryCreateManyCustomerInputEnvelopeSchema';
import { WaitlistEntryWhereUniqueInputSchema } from './WaitlistEntryWhereUniqueInputSchema';

export const WaitlistEntryUncheckedCreateNestedManyWithoutCustomerInputSchema: z.ZodType<Prisma.WaitlistEntryUncheckedCreateNestedManyWithoutCustomerInput> = z.object({
  create: z.union([ z.lazy(() => WaitlistEntryCreateWithoutCustomerInputSchema),z.lazy(() => WaitlistEntryCreateWithoutCustomerInputSchema).array(),z.lazy(() => WaitlistEntryUncheckedCreateWithoutCustomerInputSchema),z.lazy(() => WaitlistEntryUncheckedCreateWithoutCustomerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WaitlistEntryCreateOrConnectWithoutCustomerInputSchema),z.lazy(() => WaitlistEntryCreateOrConnectWithoutCustomerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WaitlistEntryCreateManyCustomerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WaitlistEntryWhereUniqueInputSchema),z.lazy(() => WaitlistEntryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default WaitlistEntryUncheckedCreateNestedManyWithoutCustomerInputSchema;
