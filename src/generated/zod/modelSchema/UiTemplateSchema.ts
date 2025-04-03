import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// UI TEMPLATE SCHEMA
/////////////////////////////////////////

/**
 * @group BookingConfiguration
 */
export const UiTemplateSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  description: z.string().nullable(),
  previewImageUrl: z.string().nullable(),
  isSystem: z.boolean(),
  merchantId: z.string().nullable(),
  config: JsonValueSchema,
  uiTheme: z.string().nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type UiTemplate = z.infer<typeof UiTemplateSchema>

export default UiTemplateSchema;
