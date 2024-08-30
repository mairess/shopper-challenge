import IMeasureConfirmRequest from '../../interfaces/IMeasureConfirmRequest';
import schemaConfirmRequest from './schemaConfirmRequest';

const validateConfirmMeasure = (keysObjectToValidate: IMeasureConfirmRequest) => {
  const { error } = schemaConfirmRequest.validate(keysObjectToValidate);
  
  if (error) return { status: 'INVALID_DATA', data: { message: error.message } };
};

export default validateConfirmMeasure;
