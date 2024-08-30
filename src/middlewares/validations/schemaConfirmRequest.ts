import Joi from 'joi';

const schemaConfirmRequest = Joi.object({
  measure_uuid: Joi.string().guid().required()
    .messages({
      'string.guid': 'uuid inválido',
      'any.required': 'measure_uuid é obrigatório',
      'string.empty': 'measure_uuid não poder ser vazio',
    }),

  confirmed_value: Joi.number().positive().required()
    .messages({
      'number.positive': 'confirmed_value deve ser um número positivo',
      'any.empty': 'confirmed_value não poder ser vazio',
      'any.required': 'confirmed_value é obrigatório',
    }),

});

export default schemaConfirmRequest;
