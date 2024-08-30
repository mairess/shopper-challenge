import { ServiceResponseErrorMessage, ServiceResponse } from '../types/ServiceResponse';
import IMeasureConfirmRequest from './IMeasureConfirmRequest';
import IMeasureRequest from './IMeasureRequest';
import IMeasureResponse from './IMeasureResponse';

interface IMeasureService {
  uploadMeasure(measureData: IMeasureRequest): Promise<ServiceResponse<IMeasureResponse | ServiceResponseErrorMessage>>
  confirmMeasure(measureData: IMeasureConfirmRequest): Promise<ServiceResponse<{ success: boolean } | ServiceResponseErrorMessage>>
}

export default IMeasureService;