import IMeasureRequest from '../../interfaces/IMeasureRequest';
import schemaUploadRequest from './schemaUploadRequest';

const validateUploadMeasure = (keysObjectToValidate: IMeasureRequest) => {
  const base64Data = keysObjectToValidate.image.split(',')[1];
  const pattern = /^data:image\/(png|jpg|jpeg|webp|heic|heif|gif);base64,/;

  if (!pattern.test(keysObjectToValidate.image)) {
    return { status: 'INVALID_DATA', data: { message: 'Base64 inválida' } };
  }

  const { error } = schemaUploadRequest.validate({ ...keysObjectToValidate, image: base64Data });
  
  if (error) return { status: 'INVALID_DATA', data: { message: error.message } };
};

export default validateUploadMeasure;
