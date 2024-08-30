/* eslint-disable @typescript-eslint/naming-convention */
export type NewEntity<T> = Omit<T, 'measure_uuid'>;

export type measure_uuid = string;

export type Identifiable = { measure_uuid: measure_uuid };
