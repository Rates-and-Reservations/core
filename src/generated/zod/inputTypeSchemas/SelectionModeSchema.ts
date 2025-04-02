import { z } from 'zod';

export const SelectionModeSchema = z.enum(['SINGLE','MULTI']);

export type SelectionModeType = `${z.infer<typeof SelectionModeSchema>}`

export default SelectionModeSchema;
