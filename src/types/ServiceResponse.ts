export type ServiceResponseErrorMessage = { 
  error_code: string
  error_description: string
};

type ServiceResponseErrorType = 'INVALID_DATA'
| 'DOUBLE_REPORT'
| 'MEASURE_NOT_FOUND'
| 'CONFIRMATION_DUPLICATE'
| 'INVALID_TYPE'
| 'MEASURES_NOT_FOUND'
| 'INTERNAL_SERVER_ERROR';

export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: ServiceResponseErrorMessage
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL' | 'CREATED',
  data: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;
