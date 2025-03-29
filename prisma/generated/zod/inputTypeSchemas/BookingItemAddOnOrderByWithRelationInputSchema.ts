import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { BookingItemOrderByWithRelationInputSchema } from './BookingItemOrderByWithRelationInputSchema';
import { AddOnOrderByWithRelationInputSchema } from './AddOnOrderByWithRelationInputSchema';

export const BookingItemAddOnOrderByWithRelationInputSchema: z.ZodType<Prisma.BookingItemAddOnOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bookingItemId: z.lazy(() => SortOrderSchema).optional(),
  addOnId: z.lazy(() => SortOrderSchema).optional(),
  addOnName: z.lazy(() => SortOrderSchema).optional(),
  unitPrice: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  totalPrice: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  bookingItem: z.lazy(() => BookingItemOrderByWithRelationInputSchema).optional(),
  addOn: z.lazy(() => AddOnOrderByWithRelationInputSchema).optional()
}).strict();

export default BookingItemAddOnOrderByWithRelationInputSchema;
