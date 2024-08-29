export type Measure = {
  measure_uuid: string,
  measure_datetime: Date,
  measure_type: 'WATER' | 'GAS',
  measure_value: number,
  image_url: string,
  has_confirmed: boolean
};

export type MeasureNoId = Omit<Measure, 'measure_uuid'>;