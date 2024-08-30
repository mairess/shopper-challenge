const statusHttpMap: { [key: string]: number } = {
  SUCCESSFUL: 200,
  INVALID_DATA: 400,
  DOUBLE_REPORT: 409,
  MEASURE_NOT_FOUND: 404,
  CONFIRMATION_DUPLICATE: 409,
  INVALID_TYPE: 400,
  MEASURES_NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

function mapStatusHTTP(status: string): number {
  return statusHttpMap[status] || 500;
}

export default mapStatusHTTP;
