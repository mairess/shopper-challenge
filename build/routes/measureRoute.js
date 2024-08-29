"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Validator_1 = __importDefault(require("../middlewares/Validator"));
const MeasureController_1 = __importDefault(require("../controllers/MeasureController"));
const MeasureModel_1 = __importDefault(require("../models/MeasureModel"));
const MeasureService_1 = __importDefault(require("../services/MeasureService"));
const GeminiService_1 = __importDefault(require("../services/GeminiService"));
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const geminiService = new GeminiService_1.default(GEMINI_API_KEY);
const measureModel = new MeasureModel_1.default();
const measureService = new MeasureService_1.default(measureModel, geminiService);
const measureController = new MeasureController_1.default(measureService);
const router = (0, express_1.Router)();
router.post('/', Validator_1.default.validateUploadMeasure, (req, res) => measureController.uploadMeasure(req, res));
exports.default = router;
