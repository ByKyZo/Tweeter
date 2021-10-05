"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("../database/database");
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.login = function (req, res) {
        database_1.db.query('INSERT INTO user VALUES (DEFAULT,"toto","toto","ezreezz")');
    };
    AuthController.register = function (req, res) {
        res.send({ success: 'yeah request success' });
    };
    return AuthController;
}());
exports.default = AuthController;
