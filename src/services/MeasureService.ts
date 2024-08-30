import IMeasureConfirmRequest from '../interfaces/IMeasureConfirmRequest';
import IMeasureModel from '../interfaces/IMeasureModel';
import IMeasureRequest from '../interfaces/IMeasureRequest';
import IMeasureResponse from '../interfaces/IMeasureResponse';
import { ServiceResponse, ServiceResponseErrorMessage } from '../types/ServiceResponse';
import GeminiService from './GeminiService';

class MeasureService {
  private measureModel: IMeasureModel;

  private geminiService: GeminiService;

  private operationAlreadyPerformed = 'Leitura do mês já realizada';

  constructor(measureModel: IMeasureModel, geminiService: GeminiService) {
    this.measureModel = measureModel;
    this.geminiService = geminiService;
  }

  public async uploadMeasure(measureData: IMeasureRequest): Promise<ServiceResponse<IMeasureResponse | ServiceResponseErrorMessage>> {
    const existingMeasure = await this.measureModel.findByMonthAndType(measureData.measure_type, measureData.measure_datetime);

    if (existingMeasure) {
      return {
        status: 'DOUBLE_REPORT',
        data: { error_code: 'DOUBLE_REPORT', error_description: this.operationAlreadyPerformed },
      };
    }
    
    const { imageUrl, measureValue } = await this.geminiService.uploadAndGenerateContent(measureData.image);

    const measureDataToSend = await this.measureModel.uploadMeasure({
      measure_datetime: measureData.measure_datetime,
      measure_type: measureData.measure_type,
      measure_value: Number(measureValue),
      image_url: imageUrl,
      has_confirmed: false,
      customer_code: measureData.customer_code,
    });

    return { status: 'SUCCESSFUL', data: measureDataToSend };
  }

  public async confirmMeasure(measureData: IMeasureConfirmRequest): Promise<ServiceResponse<{ success: boolean } | ServiceResponseErrorMessage>> {
    const measure = await this.measureModel.findByUuid(measureData.measure_uuid);

    const statusCodeMessage = !measure ? 'MEASURE_NOT_FOUND' : 'CONFIRMATION_DUPLICATE';

    if (!measure || measure.has_confirmed) {
      return {
        status: statusCodeMessage,
        data: { error_code: statusCodeMessage, error_description: this.operationAlreadyPerformed } };
    }

    await this.measureModel.updateMeasure(measureData);

    return { status: 'SUCCESSFUL', data: { success: true } };
  }
}

export default MeasureService;