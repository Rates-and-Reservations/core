import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const UiTemplateCountOutputTypeSelectSchema: z.ZodType<Prisma.UiTemplateCountOutputTypeSelect> = z.object({
  BookingRequestFlow: z.boolean().optional(),
}).strict();

export default UiTemplateCountOutputTypeSelectSchema;
