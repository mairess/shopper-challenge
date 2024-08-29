import Joi from 'joi';

const schemaUploadRequest = Joi.object({
  image: Joi.string().base64().required(),

  customer_code: Joi.string().required(),

  measure_datetime: Joi.date().required(),

  measure_type: Joi.string().valid('WATER', 'GAS').required(),

})
  .messages({ 
    'any.required': 'All fields must be filled.',
    'string.empty': 'All fields must be filled.',
  });

export default schemaUploadRequest;
