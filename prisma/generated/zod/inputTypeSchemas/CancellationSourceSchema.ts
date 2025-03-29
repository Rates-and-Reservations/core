import { z } from 'zod';

export const CancellationSourceSchema = z.enum(['CUSTOMER','SUPPORT','SYSTEM']);

export type CancellationSourceType = `${z.infer<typeof CancellationSourceSchema>}`

export default CancellationSourceSchema;
