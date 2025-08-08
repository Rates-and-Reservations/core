import { z } from 'zod';

export const CancellationRequestTransitionScalarFieldEnumSchema = z.enum(['id','cancellationRequestId','fromStatus','toStatus','reason','notes','metadata','isDeleted','deletedAt','createdAt','updatedAt']);

export default CancellationRequestTransitionScalarFieldEnumSchema;
