import { Request, Response } from 'express';
import IMeasureService from '../interfaces/IMeasureService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

class MeasureController {
  private measureService: IMeasureService;

  constructor(measureService: IMeasureService) {
    this.measureService = measureService;
  }

  async uploadMeasure(req: Request, res: Response) {
    const measureData = req.body;
    const serviceResponse = await this.measureService.uploadMeasure(measureData);
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }

  async confirmMeasure(req: Request, res: Response) {
    const measureData = req.body;
    const serviceResponse = await this.measureService.confirmMeasure(measureData);
    return res.status(mapStatusHTTP(serviceResponse.status)).json(serviceResponse.data);
  }
}

export default MeasureController;