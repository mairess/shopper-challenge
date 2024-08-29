/* eslint-disable max-lines-per-function */
import SequelizeMeasure from '../database/models/SequelizeMesure';
import IMeasure from '../interfaces/IMeasure';
import IMeasureModel from '../interfaces/IMeasureModel';
import IMeasureResponse from '../interfaces/IMeasureResponse';

class MeasureModel implements IMeasureModel {
  private model = SequelizeMeasure;

  async uploadMeasure(measureData: IMeasure): Promise<IMeasureResponse> {
    const savedMeasure = await this.model.create(measureData);

    return {
      image_url: savedMeasure.dataValues.image_url,
      measure_value: savedMeasure.dataValues.measure_value,
      measure_uuid: savedMeasure.dataValues.measure_uuid,
    };
  }
}

export default MeasureModel;
