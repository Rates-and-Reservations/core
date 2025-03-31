import MerchantSchema from "prisma/generated/zod/modelSchema/MerchantSchema";
import { z } from "zod";

export const CreateMerchantSchema = MerchantSchema.omit({
  id: true,
  ownerId: true,
  createdAt: true,
  updatedAt: true,
});

export const UpdateMerchantSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
});

export type CreateMerchantInput = z.infer<typeof CreateMerchantSchema>;
export type UpdateMerchantInput = z.infer<typeof UpdateMerchantSchema>;
