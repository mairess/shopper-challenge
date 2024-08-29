"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const schemaUploadRequest_1 = __importDefault(require("./schemaUploadRequest"));
const validateUploadMeasure = (keysObjectToValidate) => {
    const base64Data = keysObjectToValidate.image.split(',')[1];
    const pattern = /^data:image\/(png|jpg|jpeg|webp|heic|heif|gif);base64,/;
    if (!pattern.test(keysObjectToValidate.image)) {
        return { status: 'INVALID_DATA', data: { message: 'Invalid base64 image source' } };
    }
    const { error } = schemaUploadRequest_1.default.validate(Object.assign(Object.assign({}, keysObjectToValidate), { image: base64Data }));
    if (error)
        return { status: 'INVALID_DATA', data: { message: error.message } };
};
exports.default = validateUploadMeasure;
