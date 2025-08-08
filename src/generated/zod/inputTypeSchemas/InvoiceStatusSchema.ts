import { z } from 'zod';

export const InvoiceStatusSchema = z.enum(['PENDING','SENT','PAID','OVERDUE','CANCELLED','REFUNDED']);

export type InvoiceStatusType = `${z.infer<typeof InvoiceStatusSchema>}`

export default InvoiceStatusSchema;
