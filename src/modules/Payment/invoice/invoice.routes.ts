import express from 'express';
import * as controller from './invoice.controller';

const router = express.Router();

router.get('/', controller.list);
router.post('/', controller.create);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);
router.delete('/:id', controller.deleteOne);

router.get('/:id/download', controller.download);
router.post('/:id/status', controller.updateStatus);

export default router;
