import express from 'express';
import * as controller from './resource.controller';

const router = express.Router();

router.get('/', controller.list);
router.post('/', controller.create);
router.get('/:id', controller.getById);
router.put('/:id', controller.update);
router.delete('/:id', controller.deleteOne);

router.post('/:id/disable', controller.disable);
router.post('/:id/enable', controller.enable);
router.post('/:id/clone', controller.clone);
router.post('/:id/availability', controller.checkAvailability);
router.get('/:id/rates', controller.getResourceRates);

export default router;
