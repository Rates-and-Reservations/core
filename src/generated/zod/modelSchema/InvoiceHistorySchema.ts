import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { InvoiceStatusSchema } from '../inputTypeSchemas/InvoiceStatusSchema'

/////////////////////////////////////////
// INVOICE HISTORY SCHEMA
/////////////////////////////////////////

/**
 * @group Payment
 */
export const InvoiceHistorySchema = z.object({
  fromStatus: InvoiceStatusSchema,
  toStatus: InvoiceStatusSchema,
  id: z.string().cuid(),
  invoiceId: z.string(),
  reason: z.string().nullable(),
  notes: z.string().nullable(),
  metadata: JsonValueSchema.nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type InvoiceHistory = z.infer<typeof InvoiceHistorySchema>

export default InvoiceHistorySchema;
