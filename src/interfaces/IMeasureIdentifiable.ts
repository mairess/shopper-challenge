import { Identifiable } from '.';

interface IMeasureIdentifiable extends Identifiable {
  measure_uuid: string
  measure_datetime: Date,
  measure_type: 'WATER' | 'GAS',
  measure_value: number,
  image_url: string,
  has_confirmed: boolean,
  customer_code?: string;
}

export default IMeasureIdentifiable;