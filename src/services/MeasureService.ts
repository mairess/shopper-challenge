/* eslint-disable max-len */
import IMeasureModel from '../interfaces/IMeasureModel';
import IMeasureRequest from '../interfaces/IMeasureRequest';
import IMeasureResponse from '../interfaces/IMeasureResponse';
import { ServiceResponse, ServiceResponseErrorMessage } from '../types/ServiceResponse';

class MeasureService {
  private measureModel: IMeasureModel;

  constructor(measureModel: IMeasureModel) {
    this.measureModel = measureModel;
  }

  public async uploadMeasure(measureData: IMeasureRequest): Promise<ServiceResponse<IMeasureResponse | ServiceResponseErrorMessage>> {
    const measure = await this.measureModel.uploadMeasure(measureData);

    const measureResponse: IMeasureResponse = {
      image_url: measure.image_url,
      measure_value: measure.measure_value,
      measure_uuid: measure.measure_uuid,
    };

    return {
      status: 'SUCCESSFUL',
      data: measureResponse,
    };
  }
}

export default MeasureService;