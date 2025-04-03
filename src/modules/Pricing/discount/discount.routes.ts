import express from 'express';
import * as controller from './discount.controller';

const router = express.Router();

router.get('/', controller.list);
router.post('/', controller.create);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);
router.delete('/:id', controller.deleteOne);

router.post('/:id/disable', controller.disable);
router.post('/:id/enable', controller.enable);
router.get('/:code/lookup', controller.lookup);

export default router;
