"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var server = (0, express_1.default)();
var PORT = 5000;
// server.use('/api/');
server.get('/test', function (req, res) {
    res.send('test');
});
server.listen(PORT, function () {
    console.log("SERVER LISTEN ON PORT : " + PORT);
});
