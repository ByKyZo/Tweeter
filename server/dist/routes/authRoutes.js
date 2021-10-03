"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var AuthController_1 = __importDefault(require("../controllers/AuthController"));
var router = express_1.default.Router();
router.get('/login', AuthController_1.default.login);
module.exports = router;
// AuthController.lo
// new AuthController().login();
// route.get('/toto', AuthController.lo);
