import IMeasure from './IMeasure';
import IMeasureResponse from './IMeasureResponse';

interface IMeasureModel {
  uploadMeasure(measureData: IMeasure): Promise<IMeasureResponse>
}

export default IMeasureModel;