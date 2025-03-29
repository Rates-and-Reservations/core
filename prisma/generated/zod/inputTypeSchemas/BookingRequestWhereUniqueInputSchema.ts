import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestWhereInputSchema } from './BookingRequestWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { EnumBookingRequestStatusFilterSchema } from './EnumBookingRequestStatusFilterSchema';
import { BookingRequestStatusSchema } from './BookingRequestStatusSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { MerchantScalarRelationFilterSchema } from './MerchantScalarRelationFilterSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { CustomerNullableScalarRelationFilterSchema } from './CustomerNullableScalarRelationFilterSchema';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';
import { ResourceNullableScalarRelationFilterSchema } from './ResourceNullableScalarRelationFilterSchema';
import { ResourceWhereInputSchema } from './ResourceWhereInputSchema';
import { BookingTemplateScalarRelationFilterSchema } from './BookingTemplateScalarRelationFilterSchema';
import { BookingTemplateWhereInputSchema } from './BookingTemplateWhereInputSchema';
import { BookingRequestFlowListRelationFilterSchema } from './BookingRequestFlowListRelationFilterSchema';
import { BookingRequestActionValueListRelationFilterSchema } from './BookingRequestActionValueListRelationFilterSchema';
import { BookingListRelationFilterSchema } from './BookingListRelationFilterSchema';

export const BookingRequestWhereUniqueInputSchema: z.ZodType<Prisma.BookingRequestWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => BookingRequestWhereInputSchema),z.lazy(() => BookingRequestWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingRequestWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingRequestWhereInputSchema),z.lazy(() => BookingRequestWhereInputSchema).array() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  prefilledFields: z.lazy(() => JsonNullableFilterSchema).optional(),
  customerId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  resourceId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  templateId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumBookingRequestStatusFilterSchema),z.lazy(() => BookingRequestStatusSchema) ]).optional(),
  actionStatus: z.lazy(() => JsonFilterSchema).optional(),
  finalizedSnapshot: z.lazy(() => JsonNullableFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  merchant: z.union([ z.lazy(() => MerchantScalarRelationFilterSchema),z.lazy(() => MerchantWhereInputSchema) ]).optional(),
  customer: z.union([ z.lazy(() => CustomerNullableScalarRelationFilterSchema),z.lazy(() => CustomerWhereInputSchema) ]).optional().nullable(),
  resource: z.union([ z.lazy(() => ResourceNullableScalarRelationFilterSchema),z.lazy(() => ResourceWhereInputSchema) ]).optional().nullable(),
  template: z.union([ z.lazy(() => BookingTemplateScalarRelationFilterSchema),z.lazy(() => BookingTemplateWhereInputSchema) ]).optional(),
  BookingRequestFlow: z.lazy(() => BookingRequestFlowListRelationFilterSchema).optional(),
  BookingRequestActionValue: z.lazy(() => BookingRequestActionValueListRelationFilterSchema).optional(),
  Booking: z.lazy(() => BookingListRelationFilterSchema).optional()
}).strict());

export default BookingRequestWhereUniqueInputSchema;
