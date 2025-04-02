import { z } from 'zod';

export const CancellationScopeSchema = z.enum(['BOOKING','ITEM']);

export type CancellationScopeType = `${z.infer<typeof CancellationScopeSchema>}`

export default CancellationScopeSchema;
