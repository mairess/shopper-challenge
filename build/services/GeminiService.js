"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
const generative_ai_1 = require("@google/generative-ai");
const server_1 = require("@google/generative-ai/server");
const fs = __importStar(require("fs"));
const base64ToBuffer_1 = __importDefault(require("../utils/base64ToBuffer"));
const extractMimeType_1 = __importDefault(require("../utils/extractMimeType"));
class GeminiService {
    constructor(apiKey) {
        this.genAI = new generative_ai_1.GoogleGenerativeAI(apiKey);
        this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        this.fileManager = new server_1.GoogleAIFileManager(apiKey);
    }
    uploadAndGenerateContent(base64Image) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const buffer = (0, base64ToBuffer_1.default)(base64Image);
                const mimeType = (0, extractMimeType_1.default)(base64Image);
                const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, '');
                const tempFilePath = '../../temp';
                fs.writeFileSync(tempFilePath, buffer);
                const uploadResponse = yield this.fileManager.uploadFile(tempFilePath, {
                    mimeType,
                    displayName: 'Uploaded image',
                });
                fs.unlinkSync(tempFilePath);
                const result = yield this.model.generateContent([
                    {
                        inlineData: {
                            data: base64Data,
                            mimeType,
                        },
                    },
                    { text: 'Extract and return the exact numeric consumption value from the water/gas meter shown in this image. Nothing but number.' },
                ]);
                return {
                    imageUrl: uploadResponse.file.uri,
                    measureValue: result.response.text(),
                };
            }
            catch (error) {
                console.error('Erro ao processar imagem na API do Google API:', error);
                throw new Error('Não foi possível processar a imagem no momento. Tente novamente mais tarde.');
            }
        });
    }
}
exports.default = GeminiService;
