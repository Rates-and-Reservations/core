import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WaitlistEntrySelectSchema } from '../inputTypeSchemas/WaitlistEntrySelectSchema';
import { WaitlistEntryIncludeSchema } from '../inputTypeSchemas/WaitlistEntryIncludeSchema';

export const WaitlistEntryArgsSchema: z.ZodType<Prisma.WaitlistEntryDefaultArgs> = z.object({
  select: z.lazy(() => WaitlistEntrySelectSchema).optional(),
  include: z.lazy(() => WaitlistEntryIncludeSchema).optional(),
}).strict();

export default WaitlistEntryArgsSchema;
