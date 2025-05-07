import { PrismaClient } from '@prisma/client';
import { withOptimize } from "@prisma/extension-optimize";

const db = new PrismaClient().$extends(
  withOptimize({ apiKey: process.env.OPTIMIZE_API_KEY as string })
);

export default db;