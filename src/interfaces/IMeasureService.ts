/* eslint-disable max-len */
import { ServiceResponseErrorMessage, ServiceResponse } from '../types/ServiceResponse';
import IMeasureRequest from './IMeasureRequest';
import IMeasureResponse from './IMeasureResponse';

interface IMeasureService {
  uploadMeasure(measureData: IMeasureRequest): Promise<ServiceResponse<IMeasureResponse | ServiceResponseErrorMessage>>
}

export default IMeasureService;