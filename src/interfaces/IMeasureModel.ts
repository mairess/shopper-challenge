import IMeasure from './IMeasure';
import IMeasureResponse from './IMeasureResponse';

interface IMeasureModel {
  uploadMeasure(measureData: IMeasure): Promise<IMeasureResponse>
  findByMonthAndType(measure_type: string, measure_datetime: Date): Promise<IMeasure | null>;
  findByUuid(uuid: string): Promise<IMeasure | null>;
  findByConfirmed(uuid: string): Promise<IMeasure | null>;
}

export default IMeasureModel;