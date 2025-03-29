import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRequestArgsSchema } from "../outputTypeSchemas/BookingRequestArgsSchema"
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { UiTemplateArgsSchema } from "../outputTypeSchemas/UiTemplateArgsSchema"

export const BookingRequestFlowIncludeSchema: z.ZodType<Prisma.BookingRequestFlowInclude> = z.object({
  bookingRequest: z.union([z.boolean(),z.lazy(() => BookingRequestArgsSchema)]).optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  uiTemplate: z.union([z.boolean(),z.lazy(() => UiTemplateArgsSchema)]).optional(),
}).strict()

export default BookingRequestFlowIncludeSchema;
