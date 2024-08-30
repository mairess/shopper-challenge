import Joi from 'joi';

const schemaUploadRequest = Joi.object({
  image: Joi.string().base64()
    .message('Base64 inválida'),

  customer_code: Joi.string().required()
    .messages({
      'any.required': 'customer_code é obrigatório',
      'string.empty': 'customer_code não poder ser vazio',
    }),

  measure_datetime: Joi.date().iso().required()
    .messages({
      'any.required': 'measure_datetime é obrigatório',
      'string.empty': 'measure_datetime não poder ser vazio',
      'date.format': 'data inválida',
    }),

  measure_type: Joi.string().valid('WATER', 'GAS').required()
    .messages({
      'any.required': 'measure_type é obrigatório',
      'string.empty': 'measure_type não poder ser vazio',
      'any.only': 'Tipo de medição não permitida',
    }),

});

export default schemaUploadRequest;
