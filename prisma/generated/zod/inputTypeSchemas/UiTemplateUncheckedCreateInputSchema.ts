import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { BookingRequestFlowUncheckedCreateNestedManyWithoutUiTemplateInputSchema } from './BookingRequestFlowUncheckedCreateNestedManyWithoutUiTemplateInputSchema';

export const UiTemplateUncheckedCreateInputSchema: z.ZodType<Prisma.UiTemplateUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  previewImageUrl: z.string().optional().nullable(),
  isSystem: z.boolean().optional(),
  merchantId: z.string().optional().nullable(),
  config: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  uiTheme: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  BookingRequestFlow: z.lazy(() => BookingRequestFlowUncheckedCreateNestedManyWithoutUiTemplateInputSchema).optional()
}).strict();

export default UiTemplateUncheckedCreateInputSchema;
