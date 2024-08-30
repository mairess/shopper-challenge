export type NewEntity<T> = Omit<T, 'measure_uuid'>;

export type MeasureUuid = string;

export type Identifiable = { measure_uuid: MeasureUuid };
