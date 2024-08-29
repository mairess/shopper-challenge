import SequelizeMeasure from '../database/models/SequelizeMesure';
import IMeasureModel from '../interfaces/IMeasureModel';
import IMeasureRequest from '../interfaces/IMeasureRequest';
import IMeasureResponse from '../interfaces/IMeasureResponse';

class MeasureModel implements IMeasureModel {
  private model = SequelizeMeasure;

  async uploadMeasure(measureData: IMeasureRequest): Promise<IMeasureResponse> {
    return this.model.create({
      measure_datetime: measureData.measure_datetime,
      measure_type: measureData.measure_type,
      measure_value: 0,
      image_url: 'image uri goes here',
      has_confirmed: false,
    });
  }
}

export default MeasureModel;
