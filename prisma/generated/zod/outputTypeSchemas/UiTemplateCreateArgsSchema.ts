import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UiTemplateIncludeSchema } from '../inputTypeSchemas/UiTemplateIncludeSchema'
import { UiTemplateCreateInputSchema } from '../inputTypeSchemas/UiTemplateCreateInputSchema'
import { UiTemplateUncheckedCreateInputSchema } from '../inputTypeSchemas/UiTemplateUncheckedCreateInputSchema'
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { BookingRequestFlowFindManyArgsSchema } from "../outputTypeSchemas/BookingRequestFlowFindManyArgsSchema"
import { UiTemplateCountOutputTypeArgsSchema } from "../outputTypeSchemas/UiTemplateCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UiTemplateSelectSchema: z.ZodType<Prisma.UiTemplateSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  previewImageUrl: z.boolean().optional(),
  isSystem: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  config: z.boolean().optional(),
  uiTheme: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  BookingRequestFlow: z.union([z.boolean(),z.lazy(() => BookingRequestFlowFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UiTemplateCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UiTemplateCreateArgsSchema: z.ZodType<Prisma.UiTemplateCreateArgs> = z.object({
  select: UiTemplateSelectSchema.optional(),
  include: z.lazy(() => UiTemplateIncludeSchema).optional(),
  data: z.union([ UiTemplateCreateInputSchema,UiTemplateUncheckedCreateInputSchema ]),
}).strict() ;

export default UiTemplateCreateArgsSchema;
