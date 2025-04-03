import express from 'express';
import * as controller from './app.controller';

const router = express.Router();

router.get('/', controller.list);
router.post('/', controller.create);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);
router.delete('/:id', controller.deleteOne);

router.post('/:id/disable', controller.disable);
router.post('/:id/enable', controller.enable);
router.post('/:id/publish', controller.publish);
router.post('/:id/unpublish', controller.unpublish);

export default router;
