import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { BookingRequestFlowFindManyArgsSchema } from "../outputTypeSchemas/BookingRequestFlowFindManyArgsSchema"
import { UiTemplateCountOutputTypeArgsSchema } from "../outputTypeSchemas/UiTemplateCountOutputTypeArgsSchema"

export const UiTemplateIncludeSchema: z.ZodType<Prisma.UiTemplateInclude> = z.object({
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  BookingRequestFlow: z.union([z.boolean(),z.lazy(() => BookingRequestFlowFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UiTemplateCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default UiTemplateIncludeSchema;
