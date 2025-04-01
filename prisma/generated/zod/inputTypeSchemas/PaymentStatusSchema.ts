import { z } from 'zod';

export const PaymentStatusSchema = z.enum(['PENDING','PAID','FAILED','REFUNDED']);

export type PaymentStatusType = `${z.infer<typeof PaymentStatusSchema>}`

export default PaymentStatusSchema;
