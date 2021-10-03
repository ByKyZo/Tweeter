"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
require("colors");
dotenv_1.default.config({ path: path_1.default.join(__dirname, '..', 'config', '.env.local') });
require("./database/database");
var authRoutes_1 = __importDefault(require("./routes/authRoutes"));
var server = (0, express_1.default)();
var PORT = 5000;
server.use('/api/auth', authRoutes_1.default);
server.listen(PORT, function () {
    console.log(("Listening on port : " + PORT).green.bold);
});
