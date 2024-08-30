import Joi from 'joi';

const schemaQueryParam = Joi.object({
  measure_type: Joi.string().valid('water', 'gas')
    .messages({ 'any.only': 'Tipo de medição não permitida' }),

});

export default schemaQueryParam;
