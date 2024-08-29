import { NextFunction, Request, Response } from 'express';
import validateUploadMeasure from './validations/validateUploadMeasure';
import mapStatusHTTP from '../utils/mapStatusHTTP';

class Validator {
  static validateUploadMeasure(req: Request, res: Response, next: NextFunction): Response | void {
    const error = validateUploadMeasure(req.body);
    if (error) {
      return res
        .status(mapStatusHTTP(error.status))
        .json({
          error_code: 'INVALID_DATA',
          error_description: error.data.message,
        });
    }
    next();
  }
}

export default Validator;