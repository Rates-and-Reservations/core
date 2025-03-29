import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WaitlistEntryWhereInputSchema } from './WaitlistEntryWhereInputSchema';

export const WaitlistEntryListRelationFilterSchema: z.ZodType<Prisma.WaitlistEntryListRelationFilter> = z.object({
  every: z.lazy(() => WaitlistEntryWhereInputSchema).optional(),
  some: z.lazy(() => WaitlistEntryWhereInputSchema).optional(),
  none: z.lazy(() => WaitlistEntryWhereInputSchema).optional()
}).strict();

export default WaitlistEntryListRelationFilterSchema;
