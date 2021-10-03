"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var mysql_1 = __importDefault(require("mysql"));
exports.db = mysql_1.default.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
});
exports.db.connect(function (err) {
    if (err) {
        console.log(("SQL Connexion failed : " + err).red.bold);
    }
    else {
        console.log("Connected to MYSQL".green.bold);
    }
});
// export class Database {
//     protected static db: sql.Connection;
//     constructor() {
//         this.db = sql.createConnection({
//             host: process.env.HOST,
//             user: process.env.DB_USER,
//             password: process.env.DB_PASSWORD,
//             database: process.env.DATABASE,
//         });
//     }
//     public static testConnexion() {
//         this.db.connect((err) => {
//             if (err) {
//                 console.log(`SQL Connexion failed : ${err}`.red.bold);
//             } else {
//                 console.log(`Connected to MYSQL`.green.bold);
//             }
//         });
//     }
// }
// // new Database().testConnexion();
// Database.testConnexion();
