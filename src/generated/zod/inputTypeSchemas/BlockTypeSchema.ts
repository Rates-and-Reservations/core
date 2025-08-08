import { z } from 'zod';

export const BlockTypeSchema = z.enum(['MAINTENANCE','PRIVATE_EVENT','HOLIDAY','CUSTOM','SYSTEM_BLOCK']);

export type BlockTypeType = `${z.infer<typeof BlockTypeSchema>}`

export default BlockTypeSchema;
