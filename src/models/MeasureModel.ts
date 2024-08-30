/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import { Op } from 'sequelize';
import SequelizeMeasure from '../database/models/SequelizeMesure';
import IMeasure from '../interfaces/IMeasure';
import IMeasureModel from '../interfaces/IMeasureModel';
import IMeasureResponse from '../interfaces/IMeasureResponse';

class MeasureModel implements IMeasureModel {
  private model = SequelizeMeasure;

  public async uploadMeasure(measureData: IMeasure): Promise<IMeasureResponse> {
    const savedMeasure = await this.model.create(measureData);

    return {
      image_url: savedMeasure.dataValues.image_url,
      measure_value: savedMeasure.dataValues.measure_value,
      measure_uuid: savedMeasure.dataValues.measure_uuid,
    };
  }

  public async findByMonthAndType(measure_type: string, measure_datetime: Date): Promise<IMeasure | null> {
    const date = new Date(measure_datetime);

    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const measure = await this.model.findOne({
      where: { 
        measure_type,
        measure_datetime: {
          [Op.between]: [startOfMonth, endOfMonth],
        },
      }, 
    });
    return measure;
  }

  public async findByUuid(uuid: string): Promise<IMeasure | null> {
    return this.model.findByPk(uuid);
  }

  public async findByConfirmed(uuid: string): Promise<IMeasure | null> {
    const measure = await this.model.findOne({
      where: {
        measure_uuid: uuid,
        has_confirmed: true,
      },
    });

    return measure;
  }
}

export default MeasureModel;
