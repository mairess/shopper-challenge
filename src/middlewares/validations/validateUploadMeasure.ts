import IMeasureRequest from '../../interfaces/IMeasureRequest';
import schemaUploadRequest from './schemaUploadRequest';

const validateUploadMeasure = (keysObjectToValidate: IMeasureRequest) => {
  const { error } = schemaUploadRequest.validate(keysObjectToValidate);

  if (error) return { status: 'INVALID_DATA', data: { message: error.message } };
};

export default validateUploadMeasure;
