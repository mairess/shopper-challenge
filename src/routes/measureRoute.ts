import { Request, Response, Router } from 'express';
import Validator from '../middlewares/Validator';
import MeasureController from '../controllers/MeasureController';
import MeasureModel from '../models/MeasureModel';
import MeasureService from '../services/MeasureService';
import GeminiService from '../services/GeminiService';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';

const geminiService = new GeminiService(GEMINI_API_KEY);
const measureModel = new MeasureModel();
const measureService = new MeasureService(measureModel, geminiService);
const measureController = new MeasureController(measureService);

const router = Router();

router.post(
  '/', 
  Validator.validateUploadMeasure,
  (req: Request, res: Response) => measureController.uploadMeasure(req, res),
);

export default router;