import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistEntryCreateWithoutResourceInputSchema } from './WaitlistEntryCreateWithoutResourceInputSchema';
import { WaitlistEntryUncheckedCreateWithoutResourceInputSchema } from './WaitlistEntryUncheckedCreateWithoutResourceInputSchema';
import { WaitlistEntryCreateOrConnectWithoutResourceInputSchema } from './WaitlistEntryCreateOrConnectWithoutResourceInputSchema';
import { WaitlistEntryUpsertWithWhereUniqueWithoutResourceInputSchema } from './WaitlistEntryUpsertWithWhereUniqueWithoutResourceInputSchema';
import { WaitlistEntryCreateManyResourceInputEnvelopeSchema } from './WaitlistEntryCreateManyResourceInputEnvelopeSchema';
import { WaitlistEntryWhereUniqueInputSchema } from './WaitlistEntryWhereUniqueInputSchema';
import { WaitlistEntryUpdateWithWhereUniqueWithoutResourceInputSchema } from './WaitlistEntryUpdateWithWhereUniqueWithoutResourceInputSchema';
import { WaitlistEntryUpdateManyWithWhereWithoutResourceInputSchema } from './WaitlistEntryUpdateManyWithWhereWithoutResourceInputSchema';
import { WaitlistEntryScalarWhereInputSchema } from './WaitlistEntryScalarWhereInputSchema';

export const WaitlistEntryUncheckedUpdateManyWithoutResourceNestedInputSchema: z.ZodType<Prisma.WaitlistEntryUncheckedUpdateManyWithoutResourceNestedInput> = z.object({
  create: z.union([ z.lazy(() => WaitlistEntryCreateWithoutResourceInputSchema),z.lazy(() => WaitlistEntryCreateWithoutResourceInputSchema).array(),z.lazy(() => WaitlistEntryUncheckedCreateWithoutResourceInputSchema),z.lazy(() => WaitlistEntryUncheckedCreateWithoutResourceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WaitlistEntryCreateOrConnectWithoutResourceInputSchema),z.lazy(() => WaitlistEntryCreateOrConnectWithoutResourceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WaitlistEntryUpsertWithWhereUniqueWithoutResourceInputSchema),z.lazy(() => WaitlistEntryUpsertWithWhereUniqueWithoutResourceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WaitlistEntryCreateManyResourceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WaitlistEntryWhereUniqueInputSchema),z.lazy(() => WaitlistEntryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WaitlistEntryWhereUniqueInputSchema),z.lazy(() => WaitlistEntryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WaitlistEntryWhereUniqueInputSchema),z.lazy(() => WaitlistEntryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WaitlistEntryWhereUniqueInputSchema),z.lazy(() => WaitlistEntryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WaitlistEntryUpdateWithWhereUniqueWithoutResourceInputSchema),z.lazy(() => WaitlistEntryUpdateWithWhereUniqueWithoutResourceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WaitlistEntryUpdateManyWithWhereWithoutResourceInputSchema),z.lazy(() => WaitlistEntryUpdateManyWithWhereWithoutResourceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WaitlistEntryScalarWhereInputSchema),z.lazy(() => WaitlistEntryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default WaitlistEntryUncheckedUpdateManyWithoutResourceNestedInputSchema;
