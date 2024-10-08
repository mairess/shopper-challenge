interface IMeasure {
  measure_datetime: Date,
  measure_type: 'WATER' | 'GAS',
  measure_value: number,
  image_url: string,
  has_confirmed: boolean,
  customer_code?: string;
}

export default IMeasure;