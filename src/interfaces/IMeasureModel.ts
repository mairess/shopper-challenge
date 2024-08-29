import IMeasureRequest from './IMeasureRequest';
import IMeasureResponse from './IMeasureResponse';

interface IMeasureModel {
  uploadMeasure(measureData: IMeasureRequest): Promise<IMeasureResponse>
}

export default IMeasureModel;