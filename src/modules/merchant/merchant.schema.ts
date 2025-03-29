import { z } from "zod";

export const CreateMerchantSchema = z.object({
  name: z.string().min(1),
});

export const UpdateMerchantSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
});

export type CreateMerchantInput = z.infer<typeof CreateMerchantSchema>;
export type UpdateMerchantInput = z.infer<typeof UpdateMerchantSchema>;
