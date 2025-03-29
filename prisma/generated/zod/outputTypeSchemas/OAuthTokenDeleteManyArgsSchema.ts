import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { OAuthTokenWhereInputSchema } from '../inputTypeSchemas/OAuthTokenWhereInputSchema'

export const OAuthTokenDeleteManyArgsSchema: z.ZodType<Prisma.OAuthTokenDeleteManyArgs> = z.object({
  where: OAuthTokenWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default OAuthTokenDeleteManyArgsSchema;
