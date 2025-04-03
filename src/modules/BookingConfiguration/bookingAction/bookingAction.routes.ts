import express from 'express';
import * as controller from './bookingAction.controller';

const router = express.Router();

router.get('/', controller.list);
router.post('/', controller.create);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);
router.delete('/:id', controller.deleteOne);

router.post('/:id/order', controller.order);

export default router;
