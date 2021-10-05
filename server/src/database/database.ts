import sql from 'mysql';

export const db = sql.createConnection({
    host: process.env.HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
});

db.connect((err) => {
    if (err) {
        console.log(`SQL Connexion failed : ${err}`.red.bold);
    } else {
        console.log(`Connected to MYSQL`.green.bold);
    }
});
