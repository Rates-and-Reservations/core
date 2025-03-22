import { Router, Request, Response } from 'express';
import prisma from '@/clients/prisma';
import { requireUser } from '@/middleware/requireUser';
import { upload } from '@/middleware/upload';
import cloudinary from '@/clients/cloudinary';

const router = Router();

router.get('/:merchantId/assets', requireUser, async (req: Request, res: Response) => {
  const { merchantId } = req.params;
  const { userId } = req.auth;

  const user = await prisma.merchantUser.findFirst({
    where: { merchantId, userId: userId! },
  });

  if (!user) { res.status(403).json({ message: 'Forbidden' }); return; }

  const assets = await prisma.merchantAsset.findMany({
    where: { merchantId },
  });

  res.json(assets);
});

router.put('/:merchantId/assets/:assetId', requireUser, async (req: Request, res: Response) => {
  const { merchantId, assetId } = req.params;
  const { userId } = req.auth;
  const { name, type, url } = req.body;

  const user = await prisma.merchantUser.findFirst({
    where: { merchantId, userId: userId! },
  });

  if (!user) { res.status(403).json({ message: 'Forbidden' }); return; }

  const updated = await prisma.merchantAsset.update({
    where: { id: assetId },
    data: { name, type, url },
  });

  res.json(updated);
});

router.delete('/:merchantId/assets/:assetId', requireUser, async (req: Request, res: Response) => {
  const { merchantId, assetId } = req.params;
  const { userId } = req.auth;

  const user = await prisma.merchantUser.findFirst({
    where: { merchantId, userId: userId! },
  });

  if (!user) { res.status(403).json({ message: 'Forbidden' }); return; }

  const asset = await prisma.merchantAsset.findUnique({
    where: { id: assetId },
  });

  if (!asset) { res.status(404).json({ message: 'Asset not found' }); return; }

  // Delete from Cloudinary
  await cloudinary.uploader.destroy(asset.publicId);

  // Delete from DB
  await prisma.merchantAsset.delete({
    where: { id: assetId },
  });

  res.json({ message: 'Asset deleted' });
});

router.post('/:merchantId/assets/upload', requireUser, upload.single('file'), async (req: Request, res: Response) => {
  const { merchantId } = req.params;
  const { userId } = req.auth;

  const user = await prisma.merchantUser.findFirst({
    where: { merchantId, userId: userId! },
  });

  if (!user) { { res.status(403).json({ message: 'Forbidden' }); return; } }

  const file = req.file;

  if (!file) { res.status(400).json({ message: 'No file uploaded' }); return; }

  try {
    const uploadResult = await cloudinary.uploader.upload_stream(
      { folder: `merchant-assets/${merchantId}` },
      async (error, result) => {
        if (error || !result) {
          return res.status(500).json({ message: 'Upload failed' });
        }

        const asset = await prisma.merchantAsset.create({
          data: {
            merchantId,
            name: result.original_filename,
            type: result.resource_type,
            url: result.secure_url,
            publicId: result.public_id,
          },
        });

        res.status(201).json(asset);
      }
    );

    uploadResult.end(file.buffer);
  } catch (err) {
    res.status(500).json({ message: 'Upload error', error: err });
  }
});

export default router;
