import express from 'express';
import {
    createPlanController,
    getAllPlansController,
    getPlanByIdController,
    updatePlanController,
    deletePlanController
} from '../Controller/PlansController.js';

const router = express.Router();

router.post('/createplan',  createPlanController);
router.get('/getallplans', getAllPlansController);
router.get('/plan/:id', getPlanByIdController);
router.put('/updateplan/:id', updatePlanController);
router.delete('/deleteplan/:id', deletePlanController);

export default router;
