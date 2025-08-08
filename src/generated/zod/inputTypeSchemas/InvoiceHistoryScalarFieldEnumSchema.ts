import { z } from 'zod';

export const InvoiceHistoryScalarFieldEnumSchema = z.enum(['id','invoiceId','fromStatus','toStatus','reason','notes','metadata','isDeleted','deletedAt','createdAt','updatedAt']);

export default InvoiceHistoryScalarFieldEnumSchema;
