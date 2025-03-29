import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OAuthTokenUpdateManyMutationInputSchema } from '../inputTypeSchemas/OAuthTokenUpdateManyMutationInputSchema'
import { OAuthTokenUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/OAuthTokenUncheckedUpdateManyInputSchema'
import { OAuthTokenWhereInputSchema } from '../inputTypeSchemas/OAuthTokenWhereInputSchema'

export const OAuthTokenUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.OAuthTokenUpdateManyAndReturnArgs> = z.object({
  data: z.union([ OAuthTokenUpdateManyMutationInputSchema,OAuthTokenUncheckedUpdateManyInputSchema ]),
  where: OAuthTokenWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default OAuthTokenUpdateManyAndReturnArgsSchema;
