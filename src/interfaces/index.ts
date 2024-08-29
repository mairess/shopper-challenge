export type NewEntity<T> = Omit<T, 'measure_uuid'>;

export type ID = string;

export type Identifiable = { measure_uuid: ID };
