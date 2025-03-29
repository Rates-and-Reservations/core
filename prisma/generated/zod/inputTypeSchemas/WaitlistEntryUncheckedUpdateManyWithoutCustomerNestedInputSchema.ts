import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistEntryCreateWithoutCustomerInputSchema } from './WaitlistEntryCreateWithoutCustomerInputSchema';
import { WaitlistEntryUncheckedCreateWithoutCustomerInputSchema } from './WaitlistEntryUncheckedCreateWithoutCustomerInputSchema';
import { WaitlistEntryCreateOrConnectWithoutCustomerInputSchema } from './WaitlistEntryCreateOrConnectWithoutCustomerInputSchema';
import { WaitlistEntryUpsertWithWhereUniqueWithoutCustomerInputSchema } from './WaitlistEntryUpsertWithWhereUniqueWithoutCustomerInputSchema';
import { WaitlistEntryCreateManyCustomerInputEnvelopeSchema } from './WaitlistEntryCreateManyCustomerInputEnvelopeSchema';
import { WaitlistEntryWhereUniqueInputSchema } from './WaitlistEntryWhereUniqueInputSchema';
import { WaitlistEntryUpdateWithWhereUniqueWithoutCustomerInputSchema } from './WaitlistEntryUpdateWithWhereUniqueWithoutCustomerInputSchema';
import { WaitlistEntryUpdateManyWithWhereWithoutCustomerInputSchema } from './WaitlistEntryUpdateManyWithWhereWithoutCustomerInputSchema';
import { WaitlistEntryScalarWhereInputSchema } from './WaitlistEntryScalarWhereInputSchema';

export const WaitlistEntryUncheckedUpdateManyWithoutCustomerNestedInputSchema: z.ZodType<Prisma.WaitlistEntryUncheckedUpdateManyWithoutCustomerNestedInput> = z.object({
  create: z.union([ z.lazy(() => WaitlistEntryCreateWithoutCustomerInputSchema),z.lazy(() => WaitlistEntryCreateWithoutCustomerInputSchema).array(),z.lazy(() => WaitlistEntryUncheckedCreateWithoutCustomerInputSchema),z.lazy(() => WaitlistEntryUncheckedCreateWithoutCustomerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WaitlistEntryCreateOrConnectWithoutCustomerInputSchema),z.lazy(() => WaitlistEntryCreateOrConnectWithoutCustomerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WaitlistEntryUpsertWithWhereUniqueWithoutCustomerInputSchema),z.lazy(() => WaitlistEntryUpsertWithWhereUniqueWithoutCustomerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WaitlistEntryCreateManyCustomerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WaitlistEntryWhereUniqueInputSchema),z.lazy(() => WaitlistEntryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WaitlistEntryWhereUniqueInputSchema),z.lazy(() => WaitlistEntryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WaitlistEntryWhereUniqueInputSchema),z.lazy(() => WaitlistEntryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WaitlistEntryWhereUniqueInputSchema),z.lazy(() => WaitlistEntryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WaitlistEntryUpdateWithWhereUniqueWithoutCustomerInputSchema),z.lazy(() => WaitlistEntryUpdateWithWhereUniqueWithoutCustomerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WaitlistEntryUpdateManyWithWhereWithoutCustomerInputSchema),z.lazy(() => WaitlistEntryUpdateManyWithWhereWithoutCustomerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WaitlistEntryScalarWhereInputSchema),z.lazy(() => WaitlistEntryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default WaitlistEntryUncheckedUpdateManyWithoutCustomerNestedInputSchema;
