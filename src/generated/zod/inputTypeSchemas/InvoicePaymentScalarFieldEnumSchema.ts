import { z } from 'zod';

export const InvoicePaymentScalarFieldEnumSchema = z.enum(['id','invoiceId','paymentId','amountPaid','paidAt','createdAt','updatedAt']);

export default InvoicePaymentScalarFieldEnumSchema;
