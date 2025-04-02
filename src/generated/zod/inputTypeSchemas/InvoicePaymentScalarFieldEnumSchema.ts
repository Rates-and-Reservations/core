import { z } from 'zod';

export const InvoicePaymentScalarFieldEnumSchema = z.enum(['id','invoiceId','paymentId','amountPaid','paidAt','isDeleted','deletedAt','createdAt','updatedAt']);

export default InvoicePaymentScalarFieldEnumSchema;
