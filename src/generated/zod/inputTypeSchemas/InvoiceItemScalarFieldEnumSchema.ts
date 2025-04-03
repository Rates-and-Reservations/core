import { z } from 'zod';

export const InvoiceItemScalarFieldEnumSchema = z.enum(['id','invoiceId','description','amount','isDeleted','deletedAt','createdAt','updatedAt']);

export default InvoiceItemScalarFieldEnumSchema;
