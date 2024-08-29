"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable complexity */
function mapStatusHTTP(status) {
    switch (status) {
        case 'SUCCESSFUL': return 200;
        case 'CREATED': return 201;
        case 'INVALID_DATA': return 400;
        case 'DOUBLE_REPORT': return 409;
        case 'MEASURE_NOT_FOUND': return 404;
        case 'CONFIRMATION_DUPLICATE': return 409;
        case 'INVALID_TYPE': return 422;
        case 'MEASURES_NOT_FOUND': return 404;
        case 'INTERNAL_SERVER_ERROR': return 500;
        default: return 500;
    }
}
exports.default = mapStatusHTTP;
