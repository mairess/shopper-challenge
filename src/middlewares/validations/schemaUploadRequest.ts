import Joi from 'joi';

const schemaUploadRequest = Joi.object({
  image: Joi.string()
    .custom((value, helpers) => {
      const pattern = /^data:image\/(png|jpg|jpeg|webp|heic|heif|gif);base64,/;

      if (!pattern.test(value)) {
        return helpers.error('image.format');
      }
      
      const base64Data = value.split(',')[1];
      const base64Regex = /^[A-Za-z0-9+/=]+$/;
      
      if (!base64Regex.test(base64Data)) {
        return helpers.error('image.base64');
      }
      
      return value;
    })
    .required(),

  customer_code: Joi.string().required(),

  measure_datetime: Joi.date().required(),

  measure_type: Joi.string().valid('WATER', 'GAS').required(),

})
  .messages({ 
    'any.required': 'All fields must be filled',
    'string.empty': 'All fields must be filled',
    'image.format': 'Invalid base64 image source',
    'image.base64': 'Invalid base64 encoded string',
  });

export default schemaUploadRequest;
