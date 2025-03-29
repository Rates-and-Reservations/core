import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OAuthTokenCreateManyInputSchema } from '../inputTypeSchemas/OAuthTokenCreateManyInputSchema'

export const OAuthTokenCreateManyAndReturnArgsSchema: z.ZodType<Prisma.OAuthTokenCreateManyAndReturnArgs> = z.object({
  data: z.union([ OAuthTokenCreateManyInputSchema,OAuthTokenCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default OAuthTokenCreateManyAndReturnArgsSchema;
