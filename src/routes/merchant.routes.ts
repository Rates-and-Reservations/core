import { Router } from 'express';
import { requireAuth } from '@clerk/express'

const router = Router();

router.get('/profile', requireAuth(), (req, res) => {
  const { userId, sessionId } = req.auth;
  res.json({
    message: 'Authenticated route hit!',
    userId,
    sessionId,
  });
});

export default router;
