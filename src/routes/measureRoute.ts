import { Request, Response, Router } from 'express';
import Validator from '../middlewares/Validator';
import MeasureController from '../controllers/MeasureController';
import MeasureModel from '../models/MeasureModel';
import MeasureService from '../services/MeasureService';

const measureModel = new MeasureModel();
const measureService = new MeasureService(measureModel);
const measureController = new MeasureController(measureService);

const router = Router();

router.post(
  '/', 
  Validator.validateUploadMeasure,
  (req: Request, res: Response) => measureController.uploadMeasure(req, res),
);

export default router;