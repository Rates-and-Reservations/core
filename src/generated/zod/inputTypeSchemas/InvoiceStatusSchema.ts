import { z } from 'zod';

export const InvoiceStatusSchema = z.enum(['PENDING','PAID','OVERDUE','CANCELLED']);

export type InvoiceStatusType = `${z.infer<typeof InvoiceStatusSchema>}`

export default InvoiceStatusSchema;
