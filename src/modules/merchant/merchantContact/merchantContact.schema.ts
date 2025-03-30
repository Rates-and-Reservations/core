import MerchantContractSchema from "prisma/generated/zod/modelSchema/MerchantContactSchema";
import { z } from "zod";

export const CreateMerchantContactSchema = MerchantContractSchema.omit({
  id: true,
  isDefault: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateMerchantContactSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
});

export type CreateMerchantContactInput = z.infer<typeof CreateMerchantContactSchema>;
export type UpdateMerchantContactInput = z.infer<typeof UpdateMerchantContactSchema>;
