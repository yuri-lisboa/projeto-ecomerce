"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
require('dotenv').config();
const PORT = process.env.NODE_DOCKER_PORT || 8080;
const app = (0, express_1.default)();
const router = (0, express_2.Router)();
app.use(express_1.default.json());
router.get('/', (req, res) => {
    res.send('hello');
});
router.post('/buying', (req, res) => {
    res.send('hellob');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
