import { z } from 'zod';

export const ActionTypeSchema = z.enum(['DATE_SELECT','RESOURCE_SELECT','CUSTOMER_DETAILS','ADD_ON_SELECT','INPUT_FIELD','PAYMENT_SELECT']);

export type ActionTypeType = `${z.infer<typeof ActionTypeSchema>}`

export default ActionTypeSchema;
