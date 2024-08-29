/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import IMeasure from '../interfaces/IMeasure';
import IMeasureModel from '../interfaces/IMeasureModel';
import IMeasureRequest from '../interfaces/IMeasureRequest';
import IMeasureResponse from '../interfaces/IMeasureResponse';
import { ServiceResponse, ServiceResponseErrorMessage } from '../types/ServiceResponse';
import GeminiService from './GeminiService';

class MeasureService {
  private measureModel: IMeasureModel;

  private geminiService: GeminiService;

  constructor(measureModel: IMeasureModel, geminiService: GeminiService) {
    this.measureModel = measureModel;
    this.geminiService = geminiService;
  }

  public async uploadMeasure(measureData: IMeasureRequest): Promise<ServiceResponse<IMeasureResponse | ServiceResponseErrorMessage>> {
    const { imageUrl, measureValue } = await this.geminiService.uploadAndGenerateContent(measureData.image);

    const measureDataToSend: IMeasure = {
      measure_datetime: measureData.measure_datetime,
      measure_type: measureData.measure_type,
      measure_value: Number(measureValue),
      image_url: imageUrl,
      has_confirmed: false,
    };

    const measure = await this.measureModel.uploadMeasure(measureDataToSend);

    const measureResponse: IMeasureResponse = {
      image_url: measure.image_url,
      measure_value: Number(measure.measure_value),
      measure_uuid: measure.measure_uuid,
    };

    return {
      status: 'SUCCESSFUL',
      data: measureResponse,
    };
  }
}

export default MeasureService;