"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var http_1 = __importDefault(require("http"));
var cors_1 = __importDefault(require("cors"));
require("colors");
dotenv_1.default.config({ path: path_1.default.join(__dirname, '..', 'config', '.env.local') });
require("./database/database");
var authRoutes_1 = __importDefault(require("./routes/authRoutes"));
var server = (0, express_1.default)();
var httpServer = http_1.default.createServer(server);
server.use((0, cors_1.default)({ origin: 'http://localhost:3000', credentials: true }));
server.use(express_1.default.json());
server.use('/api/auth', authRoutes_1.default);
httpServer.listen(process.env.PORT, function () {
    console.log(("Listening on port : " + process.env.PORT).green.bold);
});
