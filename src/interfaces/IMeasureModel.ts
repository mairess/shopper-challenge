import IMeasure from './IMeasure';
import IMeasureConfirmRequest from './IMeasureConfirmRequest';
import IMeasureIdentifiable from './IMeasureIdentifiable';
import IMeasureResponse from './IMeasureResponse';

interface IMeasureModel {
  uploadMeasure(measureData: IMeasure): Promise<IMeasureResponse>
  findByMonthAndType(measure_type: string, measure_datetime: Date): Promise<IMeasure | null>;
  findByUuid(uuid: string): Promise<IMeasure | null>;
  findByConfirmed(uuid: string): Promise<IMeasure | null>;
  updateMeasure(measureData: IMeasureConfirmRequest): Promise<IMeasureIdentifiable | null>;
}

export default IMeasureModel;