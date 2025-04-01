import { z } from 'zod';

export const InvoiceScalarFieldEnumSchema = z.enum(['id','merchantId','bookingId','customerId','invoiceNumber','currency','subtotal','taxAmount','discountAmount','totalAmount','status','issueDate','dueDate','paidAt','notes','pdfUrl','createdAt','updatedAt']);

export default InvoiceScalarFieldEnumSchema;
