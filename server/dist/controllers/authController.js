"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("../database/database");
var validator_1 = __importDefault(require("validator"));
// TODO Utiliser PostgresSQL
// TODO Installer un ORM ?
// TODO Verifier si l'email est deja en db et lancer une erreur si c'est le cas
// poser question s'il faut envoyer le details des erreurs du back vers le front , ou juste bloquer si erreur
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.login = function (req, res) {
        database_1.db.query('INSERT INTO user VALUES (DEFAULT,"toto","toto","ezreezz")');
    };
    AuthController.register = function (req, res) {
        var _a = req.body, firstName = _a.firstName, lastName = _a.lastName, email = _a.email, password = _a.password;
        // try {
        // } catch {
        // }
        // try {
        // } catch {
        // }
        try {
            if (!validator_1.default.isLength(firstName, { min: 2, max: 30 }) ||
                !validator_1.default.isLength(lastName, { min: 2, max: 30 }) ||
                !validator_1.default.isEmail(email) ||
                !validator_1.default.isLength(password, { min: 4, max: 50 })) {
                res.status(400).send({ error: 'sign up error' });
                return;
            }
            database_1.db.query('INSERT INTO user VALUES (DEFAULT,?,?,?,?)', [firstName, lastName, email, password], function (error) {
                if (error) {
                    res.sendStatus(500);
                    console.log('query error : ', error);
                }
                else {
                    console.log('query success !');
                }
            });
        }
        catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
        res.status(201).send({ firstName: firstName, lastName: lastName, email: email, password: password });
    };
    return AuthController;
}());
exports.default = AuthController;
