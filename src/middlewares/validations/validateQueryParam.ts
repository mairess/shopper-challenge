import schemaQueryParam from './schemaQueryParam';

const validateQueryParam = (keysObjectToValidate: unknown) => {
  console.log(`keysObjectToValidate: ${JSON.stringify(keysObjectToValidate, null, 2)}`);
  
  const { error } = schemaQueryParam.validate(keysObjectToValidate);

  console.log(`error${error}`);
  
  if (error) return { status: 'INVALID_TYPE', data: { message: error.message } };
};

export default validateQueryParam;
